"use client";

import React from "react";

const steps = [
  {
    step: "01",
    tag: "INGESTION",
    title: "Collect & Ingest",
    desc: "Ingests raw high-res EO optical tiles, radar cross-sections, and high-frequency IMU telemetry frames on the satellite bus.",
  },
  {
    step: "02",
    tag: "NORMALIZATION",
    title: "Propagate & Enrich",
    desc: "Propagates ephemeris via accelerated SGP4 routines to map incoming sensor observations directly against TEME/J2000 state vectors.",
  },
  {
    step: "03",
    tag: "EDGE COMPUTE",
    title: "Pattern Recognition",
    desc: "Runs INT8-quantized spatial and temporal autoencoders on edge hardware to isolate deviations, tumbles, and orbital maneuvers.",
  },
  {
    step: "04",
    tag: "BANDWIDTH TRIAGE",
    title: "Prioritize Intelligence",
    desc: "Discards redundant optical data, packaging only critical anomaly crops and verified conjunction parameters into compressed packets.",
  },
  {
    step: "05",
    tag: "GROUND LINK",
    title: "Decision & Act",
    desc: "Downlinks mission-ready intelligence to ground stations during brief pass windows, enabling automated evasive burn calculations.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto border-b border-[#E2E2DF]">
      <div className="mb-16">
        <span className="font-mono text-xs text-[#737373] tracking-widest uppercase block mb-3">
          03 / ARCHITECTURAL PIPELINE
        </span>
        <h2 className="font-display font-bold text-4xl sm:text-6xl uppercase tracking-tight text-[#0A0A0A]">
          From Raw Orbit
          <br />
          To Decision.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 font-mono">
        {steps.map((s, idx) => (
          <div
            key={s.step}
            className="border-t border-[#0A0A0A] pt-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-[#737373] mb-4">
                <span>{s.step}</span>
                <span className="text-[#0A0A0A] font-semibold">{s.tag}</span>
              </div>
              <h3 className="font-display font-bold text-lg text-[#0A0A0A] mb-3">
                {s.title}
              </h3>
              <p className="font-sans text-xs text-[#0A0A0A]/70 leading-relaxed">
                {s.desc}
              </p>
            </div>
            {idx < 4 && (
              <div className="hidden md:block pt-6 text-[#737373] text-right text-xs">
                →
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}