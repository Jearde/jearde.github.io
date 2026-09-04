import { existsSync } from "node:fs";
import { join } from "node:path";

import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";

import { site } from "@/content/site";

import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "optional",
});

const hasPortrait =
  Boolean(site.portrait.alt) &&
  existsSync(join(process.cwd(), "public", site.portrait.path));

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": `${site.url}/#profile`,
      url: site.url,
      name: site.title,
      mainEntity: { "@id": `${site.url}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: site.name,
      alternateName: site.structuredData.alternateName,
      url: site.url,
      description: site.description,
      jobTitle: site.structuredData.jobTitle,
      worksFor: site.structuredData.worksFor.map((organization) => ({
        "@type": "Organization",
        ...organization,
      })),
      memberOf: site.structuredData.memberOf.map((organization) => ({
        "@type": "Organization",
        ...organization,
      })),
      sameAs: site.structuredData.sameAs,
      subjectOf: site.structuredData.subjectOf.map((page) => ({
        "@type": "WebPage",
        ...page,
      })),
      knowsAbout: site.structuredData.knowsAbout,
      address: {
        "@type": "PostalAddress",
        ...site.structuredData.address,
      },
      ...(hasPortrait ? { image: `${site.url}${site.portrait.path}` } : {}),
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    title: site.openGraph.title,
    description: site.openGraph.description,
    firstName: site.openGraph.firstName,
    lastName: site.openGraph.lastName,
    siteName: site.name,
    locale: site.locale,
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: site.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/opengraph-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#101010",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={geist.variable}>
      <head>
        <script type="application/ld+json">
          {JSON.stringify(jsonLd).replace(/</g, "\\u003c")}
        </script>
      </head>
      <body>{children}</body>
    </html>
  );
}
