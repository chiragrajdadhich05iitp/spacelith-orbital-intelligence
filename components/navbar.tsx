"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import AccessModal from "./access-modal";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#F5F5F2]/80 backdrop-blur-md border-b border-[#E2E2DF] py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between font-mono text-xs uppercase tracking-wider">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="font-display font-bold text-sm tracking-tight text-[#0A0A0A] flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-[#0A0A0A] inline-block animate-pulse" />
              SPACELITH
            </Link>
            <span className="text-[#737373] hidden sm:inline">/ ORBITAL INTEL</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-[#0A0A0A]/70">
            <Link href="/" className="hover:text-[#0A0A0A] transition-colors">
              Platform
            </Link>
            <Link href="/explorer" className="hover:text-[#0A0A0A] transition-colors">
              Data Explorer
            </Link>
            <Link href="/research" className="hover:text-[#0A0A0A] transition-colors">
              Research
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setModalOpen(true)}
              className="border border-[#0A0A0A] px-4 py-2 text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#F5F5F2] transition-all duration-150"
            >
              [ REQUEST ACCESS ]
            </button>
          </div>
        </div>
      </header>

      <AccessModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}