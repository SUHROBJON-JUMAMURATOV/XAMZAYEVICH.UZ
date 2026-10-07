import type { Metadata, Viewport } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import Providers from "@/components/Providers";
import { site } from "@/data/site";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.seoTitle, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  keywords: ["Senior Developer", "Software Engineer", "Next.js", "React", "Node.js", "SaaS", "Web Development", "Uzbekistan"],
  alternates: { canonical: "/" },
  openGraph: { type: "website", url: site.url, siteName: site.name, title: site.seoTitle, description: site.description, locale: "en_US" },
  twitter: { card: "summary_large_image", title: site.seoTitle, description: site.description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#05060a", width: "device-width", initialScale: 1 };

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.title,
  url: site.url,
  description: site.description,
  sameAs: Object.entries(site.socials).filter(([k, v]) => v && k !== "email").map(([, v]) => v),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema).replace(/</g, "\\u003c") }} />
        <a href="#home" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-black">Skip to content</a>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
