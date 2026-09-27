"use client";

import React from "react";

const capabilities = [
  {
    index: "01",
    label: "BEHAVIORAL PATTERN",
    title: "Orbital Trajectory & Station-Keeping",
    desc: "Extracts recurring maneuvers, solar array adjustments, and drift cycles using temporal sequence modeling to build baseline behavioral envelopes.",
    metric: "99.2% RECALL",
  },
  {
    index: "02",
    label: "ANOMALY DETECTION",
    title: "Deviation & Attitude Tumble",
    desc: "Flags unexpected thermal fluctuations, thrust signatures, or quaternion drift against historical telemetry baselines in near real-time.",
    metric: "<25MS LATENCY",
  },
  {
    index: "03",
    label: "PROXIMITY ANALYSIS",
    title: "Non-Cooperative Rendezvous (RPO)",
    desc: "Calculates relative motion vectors and dynamic miss distances to detect covert co-orbital inspections and conjunction hazards.",
    metric: "0.02 KM RES",
  },
  {
    index: "04",
    label: "EDGE DECISION ENGINE",
    title: "Bandwidth Compression & Downlink Triage",
    desc: "Ranks captured optical frames by priority score. Only downlinks high-confidence event crops, achieving a 95%+ data reduction ratio.",
    metric: "112:1 RATIO",
  },
];

export default function IntelligenceEngine() {
  return (
    <section id="engine" className="py-24 px-6 max-w-7xl mx-auto border-b border-[#E2E2DF]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <span className="font-mono text-xs text-[#737373] tracking-widest uppercase block mb-3">
            02 / CORE INTELLIGENCE PIPELINE
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-6xl uppercase tracking-tight text-[#0A0A0A]">
            Pattern Recognition
            <br />
            Engine.
          </h2>
        </div>
        <p className="font-sans text-base text-[#0A0A0A]/70 max-w-md">
          Detecting non-cooperative orbital behavior and sensor anomalies at the edge before they become mission-critical hazards.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {capabilities.map((item) => (
          <div
            key={item.index}
            className="border border-[#E2E2DF] p-8 bg-white hover:border-[#0A0A0A] transition-colors flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between font-mono text-xs text-[#737373] mb-6">
                <span>// {item.index} — {item.label}</span>
                <span className="text-[#0A0A0A] font-semibold">{item.metric}</span>
              </div>
              <h3 className="font-display font-bold text-2xl text-[#0A0A0A] mb-4">
                {item.title}
              </h3>
              <p className="font-sans text-sm text-[#0A0A0A]/70 leading-relaxed">
                {item.desc}
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#F5F5F2] flex items-center justify-between font-mono text-xs text-[#737373] group-hover:text-[#0A0A0A]">
              <span>STATUS: COMPILED INT8</span>
              <span>ENGINE READY →</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}