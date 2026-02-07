import Header from "./components/Header";
import Footer from "./components/Footer";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Montserrat } from "next/font/google";
import "../globals.css";

const inter = Inter({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: '--font-inter',
});

const montserrat = Montserrat({
  weight: ["700", "800", "900"],
  subsets: ["latin"],
  variable: '--font-montserrat',
});

export const metadata = {
  title: "Enterprise Fiber Optic Installation",
  description: "Certified fiber technicians providing 24/7 emergency response, advanced testing, and enterprise fiber installation services.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${inter.variable} ${montserrat.variable} antialiased`}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
