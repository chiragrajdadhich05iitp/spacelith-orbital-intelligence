"use client";

import React from "react";

export default function Hero() {
  const scrollToGlobe = () => {
    const el = document.getElementById("globe");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto border-b border-[#E2E2DF]">
      <div className="font-mono text-xs text-[#737373] tracking-widest uppercase mb-6 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        AUTONOMOUS ORBITAL EDGE COMPUTING // TEME COORD SYSTEM
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
        <div className="lg:col-span-8">
          <h1 className="font-display font-bold text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-[#0A0A0A] leading-[0.95]">
            Understand
            <br />
            What Is Moving
            <br />
            In Orbit.
          </h1>
        </div>

        <div className="lg:col-span-4 flex flex-col justify-between space-y-8">
          <p className="font-sans text-base text-[#0A0A0A]/70 leading-relaxed">
            Spacelith autonomously isolates orbital maneuvers, attitude tumble, and sensor anomalies at the edge—before downlink latency compromises mission safety.
          </p>

          <div className="flex flex-wrap items-center gap-4 font-mono text-xs">
            <button
              onClick={scrollToGlobe}
              className="bg-[#0A0A0A] text-[#F5F5F2] px-6 py-3 uppercase tracking-wider hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              [ VIEW LIVE ORBIT ]
            </button>
            <a
              href="/explorer"
              className="border border-[#0A0A0A] px-6 py-3 uppercase tracking-wider text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#F5F5F2] transition-colors"
            >
              [ EXPLORE DATA ]
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}