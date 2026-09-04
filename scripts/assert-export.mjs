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
  "images/rene-glitza.webp",
];

for (const file of required) {
  if (!existsSync(join(out, file)))
    throw new Error(`Missing export artifact: ${file}`);
}

const html = readFileSync(join(out, "index.html"), "utf8");
const robots = readFileSync(join(out, "robots.txt"), "utf8");
const sitemap = readFileSync(join(out, "sitemap.xml"), "utf8");
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

const metadata = [
  "<title>René Glitza – AI Researcher, NexuFed AI Co-Founder &amp; MLOps</title>",
  '<meta name="description" content="Personal site of René Glitza. AI researcher at Ruhr University Bochum and Co-Founder at NexuFed AI specializing in Federated Learning, MLOps, and distributed systems."',
  '<link rel="canonical" href="https://jearde.github.io/"',
  '<meta property="og:title" content="René Glitza – AI Researcher &amp; Engineer"',
  '<meta property="og:description" content="Adaptive &amp; Personalized Federated Learning, MLOps, and Industrial AI systems."',
  '<meta property="og:url" content="https://jearde.github.io/"',
  '<meta property="og:type" content="profile"',
  '<meta property="profile:first_name" content="René"',
  '<meta property="profile:last_name" content="Glitza"',
];
for (const value of metadata) {
  if (!html.includes(value)) throw new Error(`Missing metadata: ${value}`);
}

if (
  !/<h1>[\s\S]*René Glitza[\s\S]*Nerd with a[\s\S]*shirt\.[\s\S]*<\/h1>/.test(
    html,
  )
) {
  throw new Error("H1 does not connect René Glitza with the personal hook");
}

if (!robots.includes("User-Agent: *") || !robots.includes("Allow: /")) {
  throw new Error("robots.txt does not allow all crawlers");
}
if (!robots.includes("Sitemap: https://jearde.github.io/sitemap.xml")) {
  throw new Error("robots.txt does not reference the canonical sitemap");
}
if (!sitemap.includes("<loc>https://jearde.github.io/</loc>")) {
  throw new Error("sitemap.xml does not contain the canonical root URL");
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
if (jsonLdMatch.index > html.indexOf("</head>")) {
  throw new Error("JSON-LD graph is not in the document head");
}
const jsonLd = JSON.parse(jsonLdMatch[1]);
if (jsonLd["@graph"]?.[0]?.["@type"] !== "ProfilePage") {
  throw new Error("JSON-LD does not begin with ProfilePage");
}
const person = jsonLd["@graph"]?.[1];
if (person?.["@type"] !== "Person") {
  throw new Error("JSON-LD does not contain a Person");
}
if (
  jsonLd["@graph"][0].mainEntity?.["@id"] !== person["@id"] ||
  person["@id"] !== "https://jearde.github.io/#person"
) {
  throw new Error("ProfilePage does not link to the stable Person ID");
}
for (const [key, value] of Object.entries({
  alternateName: ["Jearde", "Rene Glitza"],
  jobTitle: "Researcher & Co-Founder",
  sameAs: [
    "https://github.com/Jearde",
    "https://www.linkedin.com/in/rene-glitza/",
    "https://orcid.org/0009-0002-6437-5912",
    "https://www.ika.ruhr-uni-bochum.de/ika/team/glitza.html.en",
    "https://scholar.google.com/citations?user=tHPrZugAAAAJ&hl=de",
    "https://www.researchgate.net/profile/Rene-Glitza",
    "https://huggingface.co/jearde",
    "https://hub.docker.com/repositories/jearde",
    "https://x.com/GlitzaRene",
    "https://www.facebook.com/rene.glitza/",
  ],
  knowsAbout: [
    "Federated Learning",
    "Machine Learning",
    "MLOps",
    "Reinforcement Learning",
    "Acoustic Condition Monitoring",
    "Kubernetes",
  ],
})) {
  if (JSON.stringify(person[key]) !== JSON.stringify(value)) {
    throw new Error(`JSON-LD Person has invalid ${key}`);
  }
}
const expectedSubjectOf = [
  [
    "Ruhr University Bochum bibliography",
    "https://bibliographie.ub.rub.de/person/25599",
  ],
  [
    "Data Science Ruhr speaker profile",
    "https://data-science.ruhr/speaker/rene-glitza/",
  ],
  [
    "solutions: Hamburg speaker profile",
    "https://solutions.hamburg/speaker/rene-glitza/",
  ],
];
if (
  JSON.stringify(person.subjectOf.map(({ name, url }) => [name, url])) !==
  JSON.stringify(expectedSubjectOf)
) {
  throw new Error("JSON-LD Person has invalid subjectOf references");
}
if (
  JSON.stringify(person.worksFor.map(({ name }) => name)) !==
    JSON.stringify(["Ruhr University Bochum", "NexuFed AI", "AI-Gruppe"]) ||
  JSON.stringify(person.memberOf.map(({ name }) => name)) !==
    JSON.stringify(["open Skunkforce e.V.", "VDE Rhein-Ruhr e.V."]) ||
  person.address?.addressLocality !== "Bochum" ||
  person.address?.addressCountry !== "DE"
) {
  throw new Error("JSON-LD Person relationships are invalid");
}

const assetLimit = (file, bytes) => {
  const size = statSync(join(out, file)).size;
  if (size > bytes)
    throw new Error(`${file} is ${size} bytes; limit is ${bytes}`);
};

assetLimit("opengraph-image.jpg", 250_000);
assetLimit("images/rene-glitza.webp", 300_000);
if (!html.includes('alt="Portrait of René Glitza"')) {
  throw new Error("Portrait is missing its approved alt text");
}
if (person.image !== "https://jearde.github.io/images/rene-glitza.webp") {
  throw new Error("JSON-LD Person is missing the approved portrait");
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
