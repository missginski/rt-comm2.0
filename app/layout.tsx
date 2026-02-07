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
      </body>
    </html>
  );
}

