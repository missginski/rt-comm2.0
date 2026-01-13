"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);

  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      setScrolled(current > 10);

      if (open) {
        setShowNav(true);
        lastScrollY.current = current;
        return;
      }

      if (current < 10) {
        setShowNav(true);
        lastScrollY.current = current;
        return;
      }

      if (current > lastScrollY.current) {
        setShowNav(false);
      } else if (current < lastScrollY.current) {
        setShowNav(true);
      }

      lastScrollY.current = current;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [open]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navBg =
    scrolled || open
      ? "bg-black/80 backdrop-blur-md border-b border-white/10"
      : "bg-black/40 backdrop-blur-md border-b border-white/10";

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300
          ${navBg}
          ${showNav ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        <div className="mx-auto max-w-[1360px] px-10 h-[80px] flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-sm md:text-base font-semibold tracking-[0.2em] uppercase text-white"
          >
            <Image
              src="/images/logo.png"
              alt="RTC logo"
              width={150}
              height={58}
            />
          </Link>

          <div className="hidden [@media(min-width:940px)]:flex items-center gap-8 text-sm text-white/70">
            {/* <Link 
              href="/"
              className="px-2.5 py-1.5 text-base font-medium text-grey-100 hover:text-primary-soft transition duration-500">
              Home
            </Link> */}
            <Link 
              href="/About"
              className="px-2.5 py-1.5 text-base font-medium text-grey-100 hover:text-primary-soft transition duration-500">
              About
            </Link>
            <Link 
              href="/Services"
              className="px-2.5 py-1.5 text-base font-medium text-grey-100 hover:text-primary-soft transition duration-500">
              Services
            </Link>
            <Link 
              href="/projects"
              className="px-2.5 py-1.5 text-base font-medium text-grey-100 w-[150px] hover:text-primary-soft transition duration-500">
              Project Spotlight
            </Link>
            <Link 
              href="/Contact"
              className="px-2.5 py-1.5 text-base font-medium text-grey-100 hover:text-primary-soft transition duration-500">
              Contact
            </Link>
          </div>

          <button
            type="button"
            className="[@media(min-width:940px)]:hidden inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/25 text-white/80 hover:text-white hover:border-white transition-colors"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            <span className="relative block w-4 h-3">
              <span
                className={`absolute left-0 top-0 h-[2px] w-full bg-current transition-transform duration-200 ${
                  open ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[6px] h-[2px] w-full bg-current transition-opacity duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-[12px] h-[2px] w-full bg-current transition-transform duration-200 ${
                  open ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      <div
        className={`
          fixed inset-0 z-40 bg-black/95 text-white
          transform transition-transform duration-300 [@media(min-width:940px)]:hidden
          ${open ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        <div className="mx-auto max-w-[1360px] px-10 pt-[96px] pb-10 flex flex-col">
          <div className="flex flex-col gap-6 text-lg">
            {/* <Link 
              href="/"
              className="px-2.5 py-1.5 text-base font-medium text-grey-100 hover:text-primary-soft transition duration-500">
              Home
            </Link> */}
            <Link 
              href="/About"
              className="px-2.5 py-1.5 text-base font-medium text-grey-100 hover:text-primary-soft transition duration-500">
              About
            </Link>
            <Link 
              href="/Services"
              className="px-2.5 py-1.5 text-base font-medium text-grey-100 hover:text-primary-soft transition duration-500">
              Services
            </Link>
            <Link 
              href="/Project-Spotlight"
              className="px-2.5 py-1.5 text-base font-medium text-grey-100 w-[150px] hover:text-primary-soft transition duration-500">
              Project Spotlight
            </Link>
            <Link 
              href="/Contact"
              className="px-2.5 py-1.5 text-base font-medium text-grey-100 hover:text-primary-soft transition duration-500">
              Contact
            </Link>
          </div>

          <div className="mt-auto pt-10 text-xs text-white/40">
            © {new Date().getFullYear()} Real Time Communications
          </div>
        </div>
      </div>
    </>
  );
}