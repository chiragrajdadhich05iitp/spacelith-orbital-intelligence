"use client";

import React, { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

interface Satellite {
  norad: number;
  name: string;
  regime: string;
  altitude: string;
  inclination: string;
  velocity: string;
  period: string;
  status: string;
  pattern: string;
  anomalyScore: number;
  phaseOffset: number;
  groundStation: string;
}

const SATELLITE_CATALOG: Satellite[] = [
  {
    norad: 25544,
    name: "ISS (ZARYA)",
    regime: "LEO",
    altitude: "419.2 km",
    inclination: "51.64°",
    velocity: "7.66 km/s",
    period: "92.9 min",
    status: "NOMINAL",
    pattern: "PERIODIC STATION-KEEPING",
    anomalyScore: 0.02,
    phaseOffset: 0,
    groundStation: "SVALBARD GS (78°N)",
  },
  {
    norad: 48212,
    name: "COSMOS-2553",
    regime: "LEO",
    altitude: "448.1 km",
    inclination: "67.12°",
    velocity: "7.63 km/s",
    period: "93.4 min",
    status: "ELEVATED DRIFT",
    pattern: "UNSCHEDULED PHASING",
    anomalyScore: 0.78,
    phaseOffset: 120,
    groundStation: "TROMSØ GS (69°N)",
  },
  {
    norad: 53813,
    name: "SHIJIAN-21",
    regime: "GEO GRAVEYARD",
    altitude: "35,786.0 km",
    inclination: "1.20°",
    velocity: "3.07 km/s",
    period: "1436.1 min",
    status: "MANEUVER DETECTED",
    pattern: "RPO INSPECTION ARC",
    anomalyScore: 0.91,
    phaseOffset: 240,
    groundStation: "HAWAII OPTICAL (21°N)",
  },
  {
    norad: 43013,
    name: "NOAA-20 (JPSS-1)",
    regime: "SSO (LEO)",
    altitude: "824.5 km",
    inclination: "98.70°",
    velocity: "7.44 km/s",
    period: "101.4 min",
    status: "NOMINAL",
    pattern: "SUN-SYNC SCANNING",
    anomalyScore: 0.06,
    phaseOffset: 60,
    groundStation: "PUNTA ARENAS (53°S)",
  },
  {
    norad: 58201,
    name: "STARLINK-3104",
    regime: "LEO",
    altitude: "550.0 km",
    inclination: "53.20°",
    velocity: "7.59 km/s",
    period: "95.6 min",
    status: "NOMINAL",
    pattern: "AUTONOMOUS COLLISION AVOIDANCE",
    anomalyScore: 0.04,
    phaseOffset: 180,
    groundStation: "KIRUNA GS (67°N)",
  },
];

export default function ExplorerPage() {
  const [filter, setFilter] = useState("ALL");
  const [search, setSearch] = useState("");
  const [activeSat, setActiveSat] = useState<Satellite>(SATELLITE_CATALOG[0]);

  const filtered = SATELLITE_CATALOG.filter((item) => {
    const matchesFilter = filter === "ALL" || item.regime.includes(filter);
    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.norad.toString().includes(search);
    return matchesFilter && matchesSearch;
  });

  // Calculate dynamic sinusoidal ground track curve
  const generateTrackPath = (offset: number) => {
    const points: string[] = [];
    for (let x = 0; x <= 800; x += 20) {
      const rad = ((x + offset) / 800) * Math.PI * 4;
      const y = 100 + Math.sin(rad) * 60;
      points.push(`${x},${y.toFixed(1)}`);
    }
    return `M ${points.join(" L ")}`;
  };

  return (
    <div className="min-h-screen bg-[#F5F5F2] text-[#0A0A0A] flex flex-col justify-between">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-24 w-full">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-8 border-b border-[#E2E2DF]">
          <div>
            <span className="font-mono text-xs text-[#737373] tracking-widest uppercase block mb-2">
              CATALOG EXPLORER // TEME COORD FRAME
            </span>
            <h1 className="font-display font-bold text-4xl sm:text-6xl uppercase tracking-tight text-[#0A0A0A]">
              Orbital Object
              <br />
              Explorer.
            </h1>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 font-mono text-xs">
            <input
              type="text"
              placeholder="SEARCH BY NORAD ID OR CALLSIGN..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border border-[#0A0A0A] bg-white px-4 py-2 outline-none w-72"
            />
            <div className="flex border border-[#0A0A0A] bg-white">
              {["ALL", "LEO", "GEO"].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-2 transition-colors ${
                    filter === f ? "bg-[#0A0A0A] text-[#F5F5F2]" : "text-[#0A0A0A]"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Master Console Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Table / List */}
          <div className="lg:col-span-5 border border-[#0A0A0A] bg-white p-4 font-mono text-xs">
            <div className="flex justify-between text-[#737373] pb-3 mb-3 border-b border-[#E2E2DF] text-[10px]">
              <span>NORAD / DESIGNATION</span>
              <span>ORBIT / STATUS</span>
            </div>

            <div className="space-y-2">
              {filtered.map((sat) => (
                <button
                  key={sat.norad}
                  onClick={() => setActiveSat(sat)}
                  className={`w-full text-left p-3 border transition-colors flex items-center justify-between ${
                    activeSat.norad === sat.norad
                      ? "border-[#0A0A0A] bg-[#0A0A0A] text-[#F5F5F2]"
                      : "border-[#E2E2DF] hover:border-[#0A0A0A] text-[#0A0A0A]"
                  }`}
                >
                  <div>
                    <div className="font-bold">{sat.name}</div>
                    <div className="text-[10px] opacity-70">NORAD: {sat.norad}</div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] block opacity-70">{sat.regime}</span>
                    <span
                      className={`text-[9px] font-bold ${
                        sat.anomalyScore > 0.5 ? "text-rose-500" : "text-emerald-500"
                      }`}
                    >
                      {sat.status}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Detailed Inspector Card */}
          <div className="lg:col-span-7 border border-[#0A0A0A] bg-[#0A0A0A] text-[#F5F5F2] p-8 font-mono text-xs flex flex-col justify-between min-h-[540px]">
            <div>
              <div className="flex justify-between items-start border-b border-neutral-800 pb-6 mb-6">
                <div>
                  <span className="text-[#00E5FF] text-[10px] tracking-wider block mb-1">
                    TELEMETRY VECTOR LOCK
                  </span>
                  <h2 className="font-display font-bold text-3xl sm:text-4xl text-white uppercase">
                    {activeSat.name}
                  </h2>
                </div>
                <div className="text-right">
                  <span className="text-neutral-500 text-[10px] block">CATALOG REGISTRATION</span>
                  <span className="text-white font-bold">NORAD #{activeSat.norad}</span>
                </div>
              </div>

              {/* Dynamic 2D Ground Track Projection */}
              <div className="border border-neutral-800 p-4 bg-neutral-950 mb-6">
                <div className="flex justify-between text-[10px] text-neutral-400 mb-2">
                  <span>ORBITAL GROUND TRACK FOOTPRINT (MERCATOR PROJECTION)</span>
                  <span className="text-[#00E5FF]">PRIMARY LINK: {activeSat.groundStation}</span>
                </div>
                <div className="relative w-full h-36 bg-[#080808] border border-neutral-900 overflow-hidden flex items-center justify-center">
                  {/* Longitude and Latitude grid lines */}
                  <div className="absolute inset-0 grid grid-cols-6 grid-rows-3 pointer-events-none opacity-20">
                    {Array.from({ length: 18 }).map((_, i) => (
                      <div key={i} className="border border-neutral-700" />
                    ))}
                  </div>

                  {/* Sinusoidal Ground Pass SVG Path */}
                  <svg
                    viewBox="0 0 800 200"
                    className="w-full h-full preserve-3d"
                    fill="none"
                  >
                    <path
                      d={generateTrackPath(activeSat.phaseOffset)}
                      stroke={activeSat.anomalyScore > 0.5 ? "#E11D48" : "#00E5FF"}
                      strokeWidth="2"
                      strokeDasharray="4 2"
                    />
                    {/* Satellite Point Indicator */}
                    <circle
                      cx="400"
                      cy={100 + Math.sin(((400 + activeSat.phaseOffset) / 800) * Math.PI * 4) * 60}
                      r="5"
                      fill={activeSat.anomalyScore > 0.5 ? "#E11D48" : "#00E5FF"}
                      className="animate-ping"
                    />
                    <circle
                      cx="400"
                      cy={100 + Math.sin(((400 + activeSat.phaseOffset) / 800) * Math.PI * 4) * 60}
                      r="3"
                      fill="#FFFFFF"
                    />
                  </svg>
                </div>
                <div className="flex justify-between text-[9px] text-neutral-500 mt-2">
                  <span>180°W (PACIFIC)</span>
                  <span>0° (GREENWICH)</span>
                  <span>180°E (PACIFIC)</span>
                </div>
              </div>

              {/* Keplerian Orbital Telemetry Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-b border-neutral-800">
                <div>
                  <span className="text-neutral-500 block text-[10px]">ALTITUDE</span>
                  <span className="text-white font-semibold text-sm">{activeSat.altitude}</span>
                </div>
                <div>
                  <span className="text-neutral-500 block text-[10px]">INCLINATION</span>
                  <span className="text-white font-semibold text-sm">{activeSat.inclination}</span>
                </div>
                <div>
                  <span className="text-neutral-500 block text-[10px]">VELOCITY</span>
                  <span className="text-white font-semibold text-sm">{activeSat.velocity}</span>
                </div>
                <div>
                  <span className="text-neutral-500 block text-[10px]">ORBITAL PERIOD</span>
                  <span className="text-white font-semibold text-sm">{activeSat.period}</span>
                </div>
              </div>

              {/* Edge Inference Evaluation */}
              <div className="py-6 space-y-4">
                <span className="text-neutral-500 block text-[10px] uppercase">
                  EDGE PATTERN CLASSIFICATION ENGINE
                </span>
                <div className="border border-neutral-800 p-4 bg-neutral-900/50 flex justify-between items-center">
                  <div>
                    <span className="text-neutral-400 block text-[10px]">EXTRACTED PATTERN</span>
                    <span className="text-white font-bold text-sm">{activeSat.pattern}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-neutral-400 block text-[10px]">ANOMALY INDEX</span>
                    <span
                      className={`text-lg font-bold ${
                        activeSat.anomalyScore > 0.5 ? "text-rose-400" : "text-emerald-400"
                      }`}
                    >
                      {activeSat.anomalyScore}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-neutral-800 pt-4 flex justify-between text-neutral-500 text-[11px]">
              <span>PROPAGATION ENGINE: SGP4 INT8</span>
              <span>GROUND PASS WINDOW: 14M 22S</span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}