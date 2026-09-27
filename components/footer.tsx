"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-[#F5F5F2] pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Mission Statement */}
        <div className="border-b border-[#1F1F1F] pb-20">
          <span className="font-mono text-xs text-[#00E5FF] tracking-widest uppercase block mb-4">
            MISSION STATEMENT
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight leading-tight max-w-4xl">
            Space is no longer just about getting there. It is about understanding what is there.
          </h2>
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-[#F5F5F2] text-[#0A0A0A] px-6 py-3 font-mono text-xs tracking-wider uppercase hover:bg-white transition-colors">
              [ REQUEST ACCESS ]
            </button>
            <button className="border border-[#F5F5F2]/40 text-[#F5F5F2] px-6 py-3 font-mono text-xs tracking-wider uppercase hover:border-[#F5F5F2] transition-colors">
              [ READ TECHNICAL BENCHMARKS ]
            </button>
          </div>
        </div>

        {/* Footer Links & Credits */}
        <div className="pt-16 grid grid-cols-2 md:grid-cols-12 gap-8 font-mono text-xs">
          <div className="col-span-2 md:col-span-6">
            <div className="font-display font-bold text-base tracking-tight mb-2">
              SPACELITH AERONAUTS
            </div>
            <p className="text-neutral-500 max-w-sm font-sans text-xs">
              Orbital Intelligence & Edge Pattern Recognition architecture engineered for contested space environments.
            </p>
          </div>

          <div className="col-span-1 md:col-span-2">
            <span className="text-neutral-500 block mb-3 uppercase">PLATFORM</span>
            <ul className="space-y-2 text-neutral-300">
              <li><Link href="#engine" className="hover:text-white">Pattern Core</Link></li>
              <li><Link href="#platform" className="hover:text-white">Telemetry Console</Link></li>
              <li><Link href="#map" className="hover:text-white">Live Orbital Pass</Link></li>
              <li><Link href="#" className="hover:text-white">SGP4 Propagation</Link></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2">
            <span className="text-neutral-500 block mb-3 uppercase">COMPANY</span>
            <ul className="space-y-2 text-neutral-300">
              <li><Link href="#" className="hover:text-white">Research Lab</Link></li>
              <li><Link href="#" className="hover:text-white">Edge Deployment</Link></li>
              <li><Link href="#" className="hover:text-white">Security</Link></li>
              <li><Link href="#" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-2">
            <span className="text-neutral-500 block mb-3 uppercase">SYSTEM SPEC</span>
            <p className="text-neutral-400 text-[11px] leading-relaxed">
              HOST: EDGE RUNTIME<br />
              FRAME: TEME/J2000<br />
              UTC STAMP: SYNCHRONIZED
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#1F1F1F] flex flex-col sm:flex-row items-center justify-between font-mono text-[11px] text-neutral-600 gap-4">
          <div>© 2026 SPACELITH AERONAUTS. ALL RIGHTS RESERVED.</div>
          <div>MISSION CONTROL INFRASTRUCTURE // HIGH CONFIDENCE</div>
        </div>
      </div>
    </footer>
  );
}