"use client";

import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const PAPERS = [
  {
    id: "TR-2026-01",
    title: "Fast SGP4 Orbit Propagation Under Non-Spherical Gravitational Perturbations",
    author: "Spacelith Astrodynamics Group",
    date: "SEPTEMBER 2026",
    summary:
      "A vector-parallel implementation of SGP4 utilizing AVX-512 and ARM Neon intrinsics to achieve 400,000 ephemeris evaluations per second on embedded satellite flight computers.",
    tags: ["ASTRODYNAMICS", "SGP4", "J2 PERTURBATIONS"],
  },
  {
    id: "TR-2026-02",
    title: "Zero-Latency INT8 Quantization for Satellite Multi-Spectral Sensor Shards",
    author: "Spacelith Edge Intelligence Core",
    date: "AUGUST 2026",
    summary:
      "Methods for post-training quantization on Earth-Observation optical tiles. Preserves 98.4% mean average precision while lowering memory requirements to operate within CubeSat 15W power envelopes.",
    tags: ["EDGE ML", "INT8", "BANDWIDTH REDUCTION"],
  },
  {
    id: "TR-2026-03",
    title: "Autonomous Detection of Non-Cooperative Proximity Operations (RPO)",
    author: "SDA Defense Systems Lab",
    date: "JULY 2026",
    summary:
      "A temporal sequence autoencoder framework capable of distinguishing natural atmospheric drag decay from covert low-thrust rendezvous maneuvers in congested LEO shells.",
    tags: ["RPO DETECTION", "SPACE DEFENSE", "ANOMALY ISOLATION"],
  },
];

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F2] text-[#0A0A0A] flex flex-col justify-between">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-24 w-full">
        {/* Header */}
        <div className="mb-16 pb-8 border-b border-[#E2E2DF]">
          <span className="font-mono text-xs text-[#737373] tracking-widest uppercase block mb-3">
            06 / TECHNICAL MEMORANDA &amp; PAPERS
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-6xl uppercase tracking-tight text-[#0A0A0A]">
            The Intelligence
            <br />
            Research Lab.
          </h1>
          <p className="font-sans text-base text-[#0A0A0A]/70 max-w-xl mt-4">
            Engineering benchmarks, flight-certified algorithms, and astrodynamic specifications behind the Spacelith pattern recognition runtime.
          </p>
        </div>

        {/* Papers Grid */}
        <div className="space-y-6">
          {PAPERS.map((paper) => (
            <article
              key={paper.id}
              className="border border-[#0A0A0A] bg-white p-8 font-mono text-xs hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 text-[#737373] mb-4">
                <span>{paper.id} // {paper.date}</span>
                <div className="flex gap-2">
                  {paper.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-[#E2E2DF] px-2 py-0.5 text-[10px] text-[#0A0A0A]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#0A0A0A] mb-3">
                {paper.title}
              </h2>
              <span className="text-[#737373] block mb-4">BY {paper.author}</span>

              <p className="font-sans text-sm text-[#0A0A0A]/80 leading-relaxed max-w-3xl mb-6">
                {paper.summary}
              </p>

              <div className="pt-4 border-t border-[#F5F5F2] flex justify-between items-center">
                <span className="text-[#737373]">FORMAT: PDF / IEEE STYLE (REPRODUCIBLE CODE)</span>
                <button className="border border-[#0A0A0A] px-4 py-2 hover:bg-[#0A0A0A] hover:text-[#F5F5F2] transition-colors">
                  [ READ MEMORANDUM → ]
                </button>
              </div>
            </article>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}