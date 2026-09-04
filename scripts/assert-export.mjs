import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { extname, join } from "node:path";
import { gzipSync } from "node:zlib";

const out = join(process.cwd(), "out");
const required = [
  "index.html",
  "robots.txt",
  "sitemap.xml",
  "llms.txt",
  "favicon.ico",
  "icon.svg",
  "apple-icon.png",
  "opengraph-image.jpg",
];

for (const file of required) {
  if (!existsSync(join(out, file)))
    throw new Error(`Missing export artifact: ${file}`);
}

const html = readFileSync(join(out, "index.html"), "utf8");
const requiredCopy = [
  "René Glitza",
  "Nerd with a",
  "Researcher. Builder. Founder.",
  "Ruhr University Bochum",
  "NexuFed AI",
  "AI-Gruppe",
  "Kubernetes",
  "MLOps",
  "NexuML",
  "NexuFL",
  "pFedMARL",
  "ASN Database",
  "Practical Data Science Congress",
  "open Skunkforce",
  "VDE Rhein-Ruhr",
  "Espresso",
  "Sailing",
  "Open-source smart home",
  "Imprint",
  "Privacy",
  "rene.glitza@nexufed.ai",
  "+49 234 32 18591",
  "c/o Auto-Intern GmbH",
  "Building B29",
  "Herner Str. 299",
  "44809 Bochum",
  "GitHub Pages",
  "Article 6(1)(f) GDPR",
];

for (const text of requiredCopy) {
  if (!html.includes(text)) throw new Error(`Missing static copy: ${text}`);
}

for (const forbidden of ["google-analytics.com", "googletagmanager.com"]) {
  if (html.includes(forbidden))
    throw new Error(`Forbidden content in export: ${forbidden}`);
}

if (!html.includes('href="mailto:rene.glitza@nexufed.ai"')) {
  throw new Error("Missing approved legal email link");
}
if (!html.includes('href="tel:+492343218591"')) {
  throw new Error("Missing approved legal phone link");
}

const localReferences = [
  ...html.matchAll(/(?:href|src)="(\/(?!\/)[^"#?]+)["?#]/g),
  ...html.matchAll(/(?:href|src)="(\/(?!\/)[^"#?]+)"/g),
]
  .map((match) => match[1])
  .filter((value, index, values) => values.indexOf(value) === index);

for (const reference of localReferences) {
  const path = join(out, reference.slice(1));
  if (!existsSync(path))
    throw new Error(`Broken local export reference: ${reference}`);
}

const jsonLdMatch = html.match(
  /<script type="application\/ld\+json">([^<]+)<\/script>/,
);
if (!jsonLdMatch) throw new Error("Missing JSON-LD graph");
const jsonLd = JSON.parse(jsonLdMatch[1]);
if (jsonLd["@graph"]?.[0]?.["@type"] !== "ProfilePage") {
  throw new Error("JSON-LD does not begin with ProfilePage");
}
if (
  jsonLd["@graph"]?.[1]?.["@type"] !== "Person" ||
  jsonLd["@graph"][1].image
) {
  throw new Error("JSON-LD Person is invalid for the pending portrait state");
}

const assetLimit = (file, bytes) => {
  const size = statSync(join(out, file)).size;
  if (size > bytes)
    throw new Error(`${file} is ${size} bytes; limit is ${bytes}`);
};

assetLimit("opengraph-image.jpg", 250_000);
if (existsSync(join(out, "images/rene-glitza.webp"))) {
  assetLimit("images/rene-glitza.webp", 300_000);
} else if (!html.includes("Portrait asset required")) {
  throw new Error(
    "Export has neither an approved portrait nor its placeholder",
  );
}

const mediaDir = join(out, "_next/static/media");
const fontBytes = existsSync(mediaDir)
  ? readdirSync(mediaDir)
      .filter((file) => extname(file) === ".woff2")
      .reduce((total, file) => total + statSync(join(mediaDir, file)).size, 0)
  : 0;
if (fontBytes > 100_000)
  throw new Error(`Fonts total ${fontBytes} bytes; limit is 100000`);

const scriptTags = [
  ...html.matchAll(
    /<script[^>]+src="(\/_next\/static\/chunks\/[^"]+\.js)"[^>]*>/g,
  ),
];
const modernScripts = scriptTags.filter(
  (match) => !match[0].includes("noModule"),
);
const gzipBytes = (reference) =>
  gzipSync(readFileSync(join(out, reference.slice(1)))).length;
const routeJavaScript = modernScripts.reduce(
  (total, match) => total + gzipBytes(match[1]),
  0,
);
if (routeJavaScript > 150_000) {
  throw new Error(
    `Modern route JavaScript is ${routeJavaScript} bytes gzip; limit is 150000`,
  );
}

const authoredJavaScript = modernScripts
  .filter((match) => {
    const source = readFileSync(join(out, match[1].slice(1)), "utf8");
    return source.includes("260904") || source.includes("data-active-project");
  })
  .reduce((total, match) => total + gzipBytes(match[1]), 0);
if (authoredJavaScript > 35_000) {
  throw new Error(
    `Site-authored JavaScript is ${authoredJavaScript} bytes gzip; limit is 35000`,
  );
}

console.log(
  `Export verified: ${required.length} artifacts, ${localReferences.length} local references, ${routeJavaScript} bytes route JS gzip, ${authoredJavaScript} bytes authored JS gzip`,
);
