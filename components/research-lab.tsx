"use client";

import React from "react";

const papers = [
  {
    num: "01",
    category: "ASTRODYNAMICS & SGP4",
    title: "Fast State Vector Propagation Under Non-Spherical Gravitational Perturbations",
    summary: "Evaluation of J2 through J4 zonal harmonics acceleration on edge microcontrollers for real-time ephemeris prediction.",
    readTime: "8 MIN READ",
  },
  {
    num: "02",
    category: "EDGE ML COMPILATION",
    title: "Zero-Latency INT8 Quantization for Satellite Multi-Spectral Sensor Shards",
    summary: "Post-training calibration techniques preserving 99.1% mAP on custom orbital feature datasets while cutting memory usage by 75%.",
    readTime: "12 MIN READ",
  },
  {
    num: "03",
    category: "SPACE SITUATIONAL AWARENESS",
    title: "Non-Cooperative Rendezvous & Proximity Operations (RPO) Classification",
    summary: "A temporal graph neural network model for detecting deliberate orbital phasing maneuvers disguised as natural ballistic drift.",
    readTime: "10 MIN READ",
  },
];

export default function ResearchLab() {
  return (
    <section id="research" className="py-24 px-6 max-w-7xl mx-auto border-b border-[#E2E2DF]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <span className="font-mono text-xs text-[#737373] tracking-widest uppercase block mb-3">
            06 / TECHNICAL WHITE PAPERS
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-6xl uppercase tracking-tight text-[#0A0A0A]">
            From The
            <br />
            Intelligence Lab.
          </h2>
        </div>
        <p className="font-sans text-sm text-[#0A0A0A]/70 max-w-sm">
          Peer-reviewed architectures, edge ML benchmarks, and astrodynamic algorithms developed for autonomous orbital flight.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono">
        {papers.map((paper) => (
          <div
            key={paper.num}
            className="border border-[#E2E2DF] p-8 bg-white flex flex-col justify-between hover:border-[#0A0A0A] transition-colors group cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-[#737373] mb-6">
                <span>// {paper.num}</span>
                <span className="text-[#0A0A0A] font-semibold">{paper.category}</span>
              </div>
              <h3 className="font-display font-bold text-xl text-[#0A0A0A] mb-4 group-hover:underline">
                {paper.title}
              </h3>
              <p className="font-sans text-xs text-[#0A0A0A]/70 leading-relaxed mb-8">
                {paper.summary}
              </p>
            </div>

            <div className="pt-4 border-t border-[#F5F5F2] flex items-center justify-between text-xs text-[#737373] group-hover:text-[#0A0A0A]">
              <span>{paper.readTime}</span>
              <span>READ PAPER →</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}