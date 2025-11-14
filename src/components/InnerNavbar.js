"use client";

import Link from "next/link";
import { Stethoscope } from "lucide-react";



export default function InnerNavbar() {
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
    
        <Link
          href="#contact"
          className="rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-md transition hover:bg-blue-500"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
