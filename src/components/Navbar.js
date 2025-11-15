"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Stethoscope } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Staff", href: "#staff" },
  { label: "Services", href: "#services" },
  { label: "Facilities", href: "#facilities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => setIsMobileNavOpen((prev) => !prev);
  const closeMobileNav = () => setIsMobileNavOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
      <div className="container-fixed flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3 text-left">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100">
            <Stethoscope className="h-6 w-6 text-sky-600" />
          </span>
          <span>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-600">
              CHC <span className="tracking-normal"><br></br>Omanur</span>
            </p>
            
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-600 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-1 transition hover:bg-slate-100 hover:text-blue-700"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="#contact"
            className="hidden rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-md transition hover:bg-blue-500 md:inline-flex"
          >
            Contact
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-blue-200 hover:text-blue-600 md:hidden"
            onClick={toggleMobileNav}
            aria-label="Toggle navigation menu"
          >
            {isMobileNavOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      <div
        className={`${
          isMobileNavOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } md:hidden overflow-hidden border-t border-slate-100 bg-white/95 backdrop-blur transition-[max-height,opacity] duration-300`}
      >
        <div className="container-fixed flex flex-col gap-3 py-4 text-sm font-semibold text-slate-700">
          {navLinks.map((link) => (
            <Link
              key={`mobile-${link.href}`}
              href={link.href}
              className="rounded-full px-4 py-2 transition hover:bg-blue-50 hover:text-blue-700"
              onClick={closeMobileNav}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="rounded-full bg-blue-600 px-4 py-2 text-center text-xs font-semibold uppercase tracking-wide text-white shadow-md transition hover:bg-blue-500"
            onClick={closeMobileNav}
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
