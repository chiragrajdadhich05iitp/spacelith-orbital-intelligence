"use client";

import React from "react";

const stacks = [
  {
    category: "ASTRODYNAMICS & ORBIT",
    tools: [
      { name: "SGP4 / SDP4", desc: "Simplified General Perturbations satellite ephemeris" },
      { name: "TLE / OMM", desc: "Two-Line Element sets & Orbit Mean-Elements Message" },
      { name: "TEME / J2000", desc: "True Equator Mean Equinox inertial coordinate frame" },
      { name: "Keplerian Mechanics", desc: "Osculating state vector propagation routines" },
    ],
  },
  {
    category: "EDGE AI & PATTERN ENGINE",
    tools: [
      { name: "PyTorch & ONNX", desc: "Quantized INT8 neural model export for edge buses" },
      { name: "Isolation Forest", desc: "High-frequency streaming telemetry deviation scorer" },
      { name: "MobileNetV3 / YOLO", desc: "Spatial feature extraction on 512x512 optical tiles" },
      { name: "Temporal Autoencoders", desc: "Station-keeping and maneuver drift anomaly models" },
    ],
  },
  {
    category: "DISTRIBUTED SYSTEMS",
    tools: [
      { name: "FastAPI Runtime", desc: "Sub-millisecond downlink packet serialization" },
      { name: "Redis Pub/Sub", desc: "Telemetry burst cache during ground station passes" },
      { name: "Docker / ARM64", desc: "Containerized deployment targeting NVIDIA Jetson Orin" },
      { name: "PostgreSQL & Timescale", desc: "Time-series storage for multi-pass historical tracks" },
    ],
  },
  {
    category: "CLIENT & VISUALIZATION",
    tools: [
      { name: "Next.js & React", desc: "Server-side routing with mission-control UI flow" },
      { name: "Three.js / WebGL", desc: "Hardware-accelerated 3D wireframe orbit renderer" },
      { name: "Tailwind CSS", desc: "High-density editorial industrial typography" },
      { name: "Geist & Space Grotesk", desc: "Strict technical mono and display typeface system" },
    ],
  },
];

export default function TechStack() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto border-b border-[#E2E2DF]">
      <div className="mb-16">
        <span className="font-mono text-xs text-[#737373] tracking-widest uppercase block mb-3">
          07 / SYSTEM SPECIFICATION
        </span>
        <h2 className="font-display font-bold text-4xl sm:text-6xl uppercase tracking-tight text-[#0A0A0A]">
          Built For
          <br />
          Orbital Scale.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-xs">
        {stacks.map((stack) => (
          <div
            key={stack.category}
            className="border border-[#E2E2DF] bg-white p-6 flex flex-col justify-between"
          >
            <div>
              <span className="text-[#737373] block mb-6 text-[10px] tracking-wider uppercase">
                // {stack.category}
              </span>
              <div className="space-y-5">
                {stack.tools.map((tool) => (
                  <div key={tool.name} className="border-b border-[#F5F5F2] pb-3 last:border-b-0">
                    <span className="font-bold text-[#0A0A0A] block text-sm mb-1">{tool.name}</span>
                    <span className="text-[#737373] font-sans text-xs leading-relaxed block">
                      {tool.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-4 border-t border-[#F5F5F2] text-[10px] text-[#737373] flex justify-between mt-6">
              <span>INTEGRITY</span>
              <span className="text-emerald-600 font-semibold">VERIFIED</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}