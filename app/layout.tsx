import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { site } from "@/lib/data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Summit Valley Medical Center | Hospital in Austin, Texas", template: "%s | Summit Valley Medical Center" },
  description: "Summit Valley Medical Center is a newly opened Austin hospital providing emergency, primary, specialty, imaging, and laboratory services.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", siteName: site.name, title: "Summit Valley Medical Center | Austin, Texas", description: "A new Austin hospital providing coordinated, evidence-based healthcare.", images: ["/images/care-team-hero.png"] },
  twitter: { card: "summary_large_image", title: "Summit Valley Medical Center | Austin, Texas", description: "A new Austin hospital providing coordinated, evidence-based healthcare.", images: ["/images/care-team-hero.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    "@context": "https://schema.org", "@type": ["MedicalOrganization", "Hospital", "LocalBusiness"], name: site.legalName, url: site.url,
    description: "A newly opened hospital providing medical services in Austin, Texas.",
    email: site.email,
    address: { "@type": "PostalAddress", streetAddress: "1250 Medical Plaza Drive", addressLocality: "Austin", addressRegion: "TX", postalCode: "78701", addressCountry: "US" },
    contactPoint: { "@type": "ContactPoint", contactType: "general information", email: site.email, availableLanguage: "English" },
  };
  return <html lang="en"><body>
    <Header />
    <main id="main">{children}</main>
    <Footer />
    <CookieBanner />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  </body></html>;
}
