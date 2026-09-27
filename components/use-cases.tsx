"use client";

import React from "react";

const sectors = [
  {
    domain: "SATELLITE OPERATORS",
    headline: "Optimize Every Orbit.",
    desc: "Autonomous health monitoring, thruster misfire classification, and predictive station-keeping telemetry for high-density LEO constellations.",
    bullets: ["Station-keeping drift profiling", "Attitude rate deviation alerts", "Onboard thermal anomaly triage"],
  },
  {
    domain: "SPACE DOMAIN AWARENESS",
    headline: "Know What Is Above.",
    desc: "Continuous identification of non-cooperative orbital rendezvous (RPO), breakup debris modeling, and real-time conjunction risk indexing.",
    bullets: ["Real-time miss distance calculation", "Covert maneuver detection", "Debris cloud propagation"],
  },
  {
    domain: "DEFENSE & INTELLIGENCE",
    headline: "Understand What Watches.",
    desc: "Predictive observation window analytics, hostile sensor pointing detection, and rapid mission reassessment for sovereign assets.",
    bullets: ["Optical ground-pass windows", "Foreign satellite proximity alerts", "Tamper-resistant encrypted downlinks"],
  },
];

export default function UseCases() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto border-b border-[#E2E2DF]">
      <div className="mb-16">
        <span className="font-mono text-xs text-[#737373] tracking-widest uppercase block mb-3">
          04 / SECTOR APPLICATIONS
        </span>
        <h2 className="font-display font-bold text-4xl sm:text-6xl uppercase tracking-tight text-[#0A0A0A]">
          Built For Operational
          <br />
          Space Scale.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {sectors.map((sec) => (
          <div
            key={sec.domain}
            className="border border-[#E2E2DF] bg-white p-8 flex flex-col justify-between"
          >
            <div>
              <span className="font-mono text-xs text-[#737373] block mb-4 uppercase tracking-wider">
                // {sec.domain}
              </span>
              <h3 className="font-display font-bold text-2xl text-[#0A0A0A] mb-4">
                {sec.headline}
              </h3>
              <p className="font-sans text-sm text-[#0A0A0A]/70 leading-relaxed mb-6">
                {sec.desc}
              </p>
            </div>
            <ul className="border-t border-[#F5F5F2] pt-6 space-y-2 font-mono text-xs text-[#0A0A0A]">
              {sec.bullets.map((b) => (
                <li key={b} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#0A0A0A] rounded-full inline-block" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}