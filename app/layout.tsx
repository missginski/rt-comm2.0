import type { Metadata } from "next";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://real-timecommunications.com"),
  title: {
    default: "Real-Time Communications",
    template: "%s | Real-Time Communications",
  },
  description: "Reliable installation, splicing, and testing for critical infrastructure.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    siteName: "Real-Time Communications",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Real-Time Communications",
              url: "https://real-timecommunications.com",
              telephone: "+1-908-670-4934",
              address: {
                "@type": "PostalAddress",
                streetAddress: "175 Stanhope Sparta Rd, Blg 3 Unit 3",
                addressLocality: "Andover",
                addressRegion: "NJ",
                postalCode: "07821",
                addressCountry: "US"
              }
            }),
          }}
        />
      </body>
    </html>
  );
}

