import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Real-Time Communications",
  description: "",
  robots:
    process.env.NEXT_PUBLIC_ENV === "staging"
      ? { index: false, follow: false }
      : undefined,
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

