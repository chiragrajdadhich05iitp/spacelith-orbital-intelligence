"use client";

import React, { useState } from "react";

export default function DataVisualization() {
  const [activeTab, setActiveTab] = useState<"density" | "spectral">("density");

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto border-b border-[#E2E2DF]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <span className="font-mono text-xs text-[#737373] tracking-widest uppercase block mb-3">
            05 / ORBITAL DATA ARCHITECTURE
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-6xl uppercase tracking-tight text-[#0A0A0A]">
            Orbital Density &amp;
            <br />
            Spectral Metrics.
          </h2>
        </div>
        <div className="flex items-center gap-2 border border-[#0A0A0A] p-1 font-mono text-xs">
          <button
            onClick={() => setActiveTab("density")}
            className={`px-4 py-1.5 transition-colors ${
              activeTab === "density"
                ? "bg-[#0A0A0A] text-[#F5F5F2]"
                : "text-[#0A0A0A] hover:bg-neutral-200"
            }`}
          >
            ALTITUDE DENSITY
          </button>
          <button
            onClick={() => setActiveTab("spectral")}
            className={`px-4 py-1.5 transition-colors ${
              activeTab === "spectral"
                ? "bg-[#0A0A0A] text-[#F5F5F2]"
                : "text-[#0A0A0A] hover:bg-neutral-200"
            }`}
          >
            BANDWIDTH COMPRESSION
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 font-mono text-xs">
        {/* Left Visualization Panel */}
        <div className="lg:col-span-8 border border-[#0A0A0A] p-8 bg-white flex flex-col justify-between min-h-[400px]">
          {activeTab === "density" ? (
            <div>
              <div className="flex justify-between items-center text-[#737373] mb-8 pb-4 border-b border-[#E2E2DF]">
                <span>ORBITAL REGION DISTRIBUTION</span>
                <span>CATALOG SIZE: 12,482 OBJECTS</span>
              </div>

              {/* Density Progress Bars */}
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2 text-[#0A0A0A]">
                    <span className="font-bold">LEO (Low Earth Orbit: 160 – 2,000 km)</span>
                    <span className="text-[#0A0A0A] font-bold">8,942 Assets (71.6%)</span>
                  </div>
                  <div className="w-full bg-[#F5F5F2] h-4 border border-[#E2E2DF]">
                    <div className="bg-[#0A0A0A] h-full" style={{ width: "71.6%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2 text-[#0A0A0A]">
                    <span className="font-bold">MEO (Medium Earth Orbit: 2,000 – 35,786 km)</span>
                    <span>1,127 Assets (9.0%)</span>
                  </div>
                  <div className="w-full bg-[#F5F5F2] h-4 border border-[#E2E2DF]">
                    <div className="bg-[#0A0A0A]/70 h-full" style={{ width: "9.0%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2 text-[#0A0A0A]">
                    <span className="font-bold">GEO (Geostationary: ~35,786 km)</span>
                    <span>892 Assets (7.1%)</span>
                  </div>
                  <div className="w-full bg-[#F5F5F2] h-4 border border-[#E2E2DF]">
                    <div className="bg-[#0A0A0A]/50 h-full" style={{ width: "7.1%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2 text-[#0A0A0A]">
                    <span className="font-bold text-rose-600">UNTRACKED / DEBRIS CLOUDS</span>
                    <span className="text-rose-600 font-bold">1,521 Fragments (12.3%)</span>
                  </div>
                  <div className="w-full bg-[#F5F5F2] h-4 border border-[#E2E2DF]">
                    <div className="bg-rose-600 h-full" style={{ width: "12.3%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex justify-between items-center text-[#737373] mb-8 pb-4 border-b border-[#E2E2DF]">
                <span>HOURLY DATA DOWNLINK EFFICIENCY</span>
                <span>EDGE INT8 ACCELERATION</span>
              </div>

              {/* Comparative Timeline Blocks */}
              <div className="space-y-4">
                {[
                  { pass: "PASS 01 (SVALBARD)", raw: "420 MB", edge: "22 MB", ratio: "94.7%" },
                  { pass: "PASS 02 (TROMSØ)", raw: "680 MB", edge: "31 MB", ratio: "95.4%" },
                  { pass: "PASS 03 (PUNTA ARENAS)", raw: "510 MB", edge: "19 MB", ratio: "96.2%" },
                  { pass: "PASS 04 (HAWAII GS)", raw: "390 MB", edge: "14 MB", ratio: "96.4%" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 border border-[#E2E2DF] flex flex-wrap items-center justify-between gap-4 bg-[#F5F5F2]"
                  >
                    <div>
                      <span className="font-bold block text-sm">{item.pass}</span>
                      <span className="text-[#737373] text-[10px]">RAW: {item.raw}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-emerald-600 font-bold block text-sm">
                        DOWNLINK: {item.edge}
                      </span>
                      <span className="text-[#737373] text-[10px]">SAVINGS: {item.ratio}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="pt-6 border-t border-[#E2E2DF] flex justify-between text-[#737373] text-[11px] mt-8">
            <span>EPOCH: J2000.0 // TEME FRAME</span>
            <span>MODEL RETRAIN INTERVAL: 24 HR</span>
          </div>
        </div>

        {/* Right Info Metric Card */}
        <div className="lg:col-span-4 border border-[#0A0A0A] p-8 bg-[#0A0A0A] text-[#F5F5F2] flex flex-col justify-between min-h-[400px]">
          <div>
            <span className="text-[#00E5FF] block mb-3 uppercase tracking-widest text-[11px]">
              PROPRIETARY SCORING
            </span>
            <h3 className="font-display font-bold text-3xl uppercase tracking-tight mb-6">
              Spacelith Health Index.
            </h3>
            <p className="font-sans text-xs text-neutral-300 leading-relaxed mb-8">
              A composite metric calculating orbital trajectory stability, attitude control deviation, and multi-spectral anomaly coefficient in near real-time.
            </p>

            <div className="border border-neutral-800 p-4 space-y-3 font-mono text-xs">
              <div className="flex justify-between">
                <span className="text-neutral-400">TRAJECTORY FIDELITY:</span>
                <span className="text-[#00E5FF]">98.2%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">ATTITUDE STABILITY:</span>
                <span className="text-emerald-400">NOMINAL</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">CONJUNCTION RISK:</span>
                <span className="text-neutral-300">&lt; 10⁻⁶</span>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-neutral-800 font-mono text-[11px] text-neutral-400">
            AUTO-DOWNLINK TRIGGER: ACTIVE
          </div>
        </div>
      </div>
    </section>
  );
}