"use client";

import React, { useState } from "react";

const OBJECTS = [
  {
    id: "25544",
    name: "ISS (ZARYA)",
    type: "HABITATION",
    orbit: "LEO",
    alt: "419.2 KM",
    velocity: "7.66 KM/S",
    inc: "51.64°",
    status: "NOMINAL",
    score: 98,
    anomaly: 0.02,
  },
  {
    id: "48212",
    name: "COSMOS-2553",
    type: "ELECTRONIC INTEL",
    orbit: "LEO",
    alt: "448.1 KM",
    velocity: "7.63 KM/S",
    inc: "67.12°",
    status: "ELEVATED DRIFT",
    score: 74,
    anomaly: 0.78,
  },
  {
    id: "53813",
    name: "SHIJIAN-21",
    type: "RPO / INSPECTION",
    orbit: "GEO GRAVEYARD",
    alt: "35,786 KM",
    velocity: "3.07 KM/S",
    inc: "1.20°",
    status: "MANEUVER DETECTED",
    score: 62,
    anomaly: 0.91,
  },
  {
    id: "58201",
    name: "STARLINK-3104",
    type: "COMMUNICATIONS",
    orbit: "LEO",
    alt: "550.0 KM",
    velocity: "7.59 KM/S",
    inc: "53.20°",
    status: "NOMINAL",
    score: 95,
    anomaly: 0.05,
  },
];

export default function ConsoleDashboard() {
  const [selected, setSelected] = useState(OBJECTS[1]);

  return (
    <section id="platform" className="py-24 px-6 max-w-7xl mx-auto border-b border-[#E2E2DF]">
      <div className="flex items-center justify-between mb-8 font-mono text-xs text-[#737373]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          <span>SPACELITH MISSION CONTROL / V3.2-PROD</span>
        </div>
        <div>TIME REF: TEME / J2000</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 border border-[#0A0A0A] bg-white">
        {/* Left Object List */}
        <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-[#E2E2DF] p-6 font-mono text-xs">
          <div className="text-[#737373] uppercase tracking-wider mb-4">
            TRACKED ASSETS ({OBJECTS.length})
          </div>
          <div className="space-y-2">
            {OBJECTS.map((obj) => (
              <button
                key={obj.id}
                onClick={() => setSelected(obj)}
                className={`w-full text-left p-3 border transition-colors flex items-center justify-between ${
                  selected.id === obj.id
                    ? "border-[#0A0A0A] bg-[#0A0A0A] text-[#F5F5F2]"
                    : "border-[#E2E2DF] hover:border-[#0A0A0A] text-[#0A0A0A]"
                }`}
              >
                <div>
                  <div className="font-bold">{obj.name}</div>
                  <div className="text-[10px] opacity-70">NORAD: {obj.id} • {obj.orbit}</div>
                </div>
                <div
                  className={`text-[10px] px-2 py-0.5 font-semibold ${
                    obj.anomaly > 0.5 ? "bg-rose-500/20 text-rose-500" : "bg-emerald-500/20 text-emerald-500"
                  }`}
                >
                  {obj.status}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Center/Right Inspector Console */}
        <div className="lg:col-span-8 p-8 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center justify-between pb-6 border-b border-[#E2E2DF] gap-4">
              <div>
                <span className="font-mono text-xs text-[#737373] uppercase tracking-wider">
                  NORAD CAT ID: {selected.id}
                </span>
                <h3 className="font-display font-bold text-3xl uppercase tracking-tight text-[#0A0A0A]">
                  {selected.name}
                </h3>
              </div>
              <div className="text-right font-mono text-xs">
                <span className="text-[#737373] block uppercase">STATUS</span>
                <span className="font-bold text-[#0A0A0A]">{selected.status}</span>
              </div>
            </div>

            {/* Telemetry Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-8 font-mono text-xs border-b border-[#E2E2DF]">
              <div>
                <span className="text-[#737373] block mb-1">ALTITUDE</span>
                <span className="text-base font-semibold text-[#0A0A0A]">{selected.alt}</span>
              </div>
              <div>
                <span className="text-[#737373] block mb-1">VELOCITY</span>
                <span className="text-base font-semibold text-[#0A0A0A]">{selected.velocity}</span>
              </div>
              <div>
                <span className="text-[#737373] block mb-1">INCLINATION</span>
                <span className="text-base font-semibold text-[#0A0A0A]">{selected.inc}</span>
              </div>
              <div>
                <span className="text-[#737373] block mb-1">CLASSIFICATION</span>
                <span className="text-base font-semibold text-[#0A0A0A]">{selected.type}</span>
              </div>
            </div>

            {/* Pattern Engine Evaluation */}
            <div className="py-6">
              <span className="font-mono text-xs text-[#737373] block mb-4 uppercase tracking-wider">
                EDGE INFERENCE OUTPUT
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
                <div className="border border-[#E2E2DF] p-4 bg-[#F5F5F2]">
                  <span className="text-[#737373] block mb-1">BEHAVIORAL HEALTH SCORE</span>
                  <div className="text-3xl font-bold text-[#0A0A0A]">{selected.score} / 100</div>
                  <span className="text-[10px] text-[#737373] mt-2 block">
                    Confidence Interval: 98.4%
                  </span>
                </div>
                <div className="border border-[#E2E2DF] p-4 bg-[#F5F5F2]">
                  <span className="text-[#737373] block mb-1">ANOMALY COEFFICIENT</span>
                  <div className={`text-3xl font-bold ${selected.anomaly > 0.5 ? "text-rose-600" : "text-emerald-600"}`}>
                    {selected.anomaly}
                  </div>
                  <span className="text-[10px] text-[#737373] mt-2 block">
                    Isolation Forest Threshold: 0.65
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-[#E2E2DF] flex items-center justify-between font-mono text-xs text-[#737373]">
            <span>LAST SATELLITE PASS: 24S AGO (TROMSØ)</span>
            <button className="border border-[#0A0A0A] px-4 py-2 text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#F5F5F2] transition-colors">
              [ EXPORT TELEMETRY LOG ]
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}