"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[var(--color-charcoal-dark)]">
      <div className="mx-auto max-w-[1360px] px-10 py-8 md:py-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        {/* Left: brand + blurb */}
        <div>
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[var(--color-grey-400)]">
            <Image
              src="/images/logo.png"
              alt="RTC logo"
              width={200}
              height={78}
            />
          </p>
          <p className="mt-2 text-xs text-[var(--color-grey-400)]/80 max-w-md">
            Fiber installation, splicing, and testing for critical
            infrastructure across the region.
          </p>
        </div>

        {/* Right: nav + copyright */}
        <div className="flex flex-col items-start gap-3 md:items-end">
          <nav className="flex flex-wrap gap-4 text-xs md:text-sm text-[var(--color-grey-400)]">
            <Link href="#home" className="hover:text-[var(--color-grey-100)] transition-colors">
              About
            </Link>
            <Link href="#services" className="hover:text-[var(--color-grey-100)] transition-colors">
              Services
            </Link>
            <Link href="#projects" className="hover:text-[var(--color-grey-100)] transition-colors">
              Project Spotlight
            </Link>
            <Link href="#contact" className="hover:text-[var(--color-grey-100)] transition-colors">
              Contact
            </Link>
          </nav>

          <p className="text-[11px] text-[var(--color-grey-400)]/70">
            © {new Date().getFullYear()} Real Time Communications. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}