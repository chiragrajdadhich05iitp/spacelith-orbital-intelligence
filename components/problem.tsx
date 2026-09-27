"use client";

import React from "react";

export default function Problem() {
  return (
    <section className="py-28 px-6 max-w-7xl mx-auto border-b border-[#E2E2DF]">
      <div className="font-mono text-xs text-[#737373] tracking-widest uppercase mb-4">
        01 / THE BOTTLENECK
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Heading */}
        <div className="lg:col-span-6">
          <h2 className="font-display font-bold text-4xl sm:text-6xl uppercase tracking-tight text-[#0A0A0A] leading-tight">
            Space is
            <br />
            becoming
            <br />
            dense.
          </h2>
          <div className="mt-8 font-sans text-lg text-[#0A0A0A]/70 space-y-4 max-w-xl">
            <p>
              More satellites. More orbital traffic. More optical observations. More telemetry streams. 
              The problem in modern space operations is no longer collecting data.
            </p>
            <p className="font-semibold text-[#0A0A0A]">
              The challenge is understanding it in real-time before downlink limits stall operations.
            </p>
          </div>
        </div>

        {/* Right Comparison Matrix */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
          {/* Legacy Card */}
          <div className="border border-[#E2E2DF] p-6 bg-white/50">
            <span className="text-[#737373] block mb-2">// CONVENTIONAL MODEL</span>
            <h3 className="font-display font-bold text-lg text-[#0A0A0A] mb-4">RAW STREAM</h3>
            <ul className="space-y-3 text-[#737373]">
              <li className="flex items-center gap-2">✕ 10 GB raw imagery downlink</li>
              <li className="flex items-center gap-2">✕ High ground-station latency</li>
              <li className="flex items-center gap-2">✕ Post-facto conjunction detection</li>
              <li className="flex items-center gap-2">✕ Bandwidth exhaustion</li>
            </ul>
          </div>

          {/* Spacelith Edge Model */}
          <div className="border border-[#0A0A0A] p-6 bg-[#0A0A0A] text-[#F5F5F2]">
            <span className="text-[#00E5FF] block mb-2">// SPACELITH INTELLIGENCE</span>
            <h3 className="font-display font-bold text-lg mb-4">EDGE EXTRACTION</h3>
            <ul className="space-y-3 text-neutral-300">
              <li className="flex items-center gap-2 text-[#00E5FF]">✓ 200 MB decision payload</li>
              <li className="flex items-center gap-2 text-[#00E5FF]">✓ Real-time pattern recognition</li>
              <li className="flex items-center gap-2 text-[#00E5FF]">✓ Autonomous anomaly triage</li>
              <li className="flex items-center gap-2 text-[#00E5FF]">✓ 95%+ downlink bandwidth saved</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}