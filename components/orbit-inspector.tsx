"use client";

import React, { useState } from "react";

export default function OrbitInspector() {
  const [maneuverTriggered, setManeuverTriggered] = useState(false);
  const [telemetryLogs, setTelemetryLogs] = useState<string[]>([
    "11:42:10 UTC - SGP4 state vector synchronized with NORAD 25544",
    "11:42:12 UTC - Station-keeping parameters within ±0.02km tolerance",
    "11:42:15 UTC - Optical pass over Tromsø Ground Station nominal",
  ]);

  const triggerThrusterBurn = () => {
    setManeuverTriggered(true);
    const newLog = `${new Date().toISOString().slice(11, 19)} UTC - [ALERT] Non-cooperative burn detected: ΔV = 1.42 m/s, Inc shift: +0.14°`;
    setTelemetryLogs((prev) => [newLog, ...prev.slice(0, 4)]);
  };

  const stabilizeOrbit = () => {
    setManeuverTriggered(false);
    const newLog = `${new Date().toISOString().slice(11, 19)} UTC - Station-keeping re-acquired. State vector stabilized.`;
    setTelemetryLogs((prev) => [newLog, ...prev.slice(0, 4)]);
  };

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto border-b border-[#E2E2DF]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="font-mono text-xs text-[#737373] tracking-widest uppercase block mb-3">
            04 / TRAJECTORY ANALYSIS
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl uppercase tracking-tight text-[#0A0A0A]">
            Autonomous Maneuver
            <br />
            Detection.
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={triggerThrusterBurn}
            className="bg-rose-600 text-white px-5 py-2.5 font-mono text-xs uppercase hover:bg-rose-700 transition-colors"
          >
            [ SIMULATE THRUST BURN / TUMBLE ]
          </button>
          <button
            onClick={stabilizeOrbit}
            className="border border-[#0A0A0A] px-4 py-2.5 font-mono text-xs uppercase hover:bg-[#0A0A0A] hover:text-white transition-colors"
          >
            [ STABILIZE ]
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 font-mono text-xs">
        {/* Dynamic Trajectory Deviation Visualizer */}
        <div className="lg:col-span-7 border border-[#0A0A0A] p-6 bg-white flex flex-col justify-between h-[340px]">
          <div className="flex justify-between text-[#737373]">
            <span>TRAJECTORY VECTOR (TEME COORD FRAME)</span>
            <span className={maneuverTriggered ? "text-rose-600 font-bold" : "text-emerald-600"}>
              {maneuverTriggered ? "STATUS: DEVIATING FROM TLE" : "STATUS: NOMINAL PATH"}
            </span>
          </div>

          {/* Graphical Representation */}
          <div className="relative w-full h-44 border-b border-l border-[#0A0A0A] my-auto flex items-end">
            {/* Baseline Path */}
            <div className="absolute top-1/2 w-full border-t border-dashed border-neutral-400">
              <span className="absolute right-0 -top-4 text-[10px] text-neutral-400">
                PREDICTED ORBIT (SGP4)
              </span>
            </div>

            {/* Actual Path SVG Curve */}
            <svg className="w-full h-full overflow-visible">
              <path
                d={
                  maneuverTriggered
                    ? "M 0,90 Q 200,90 350,20 T 700,0"
                    : "M 0,90 Q 200,90 400,90 T 700,90"
                }
                fill="none"
                stroke={maneuverTriggered ? "#E11D48" : "#0A0A0A"}
                strokeWidth="2.5"
                className="transition-all duration-700"
              />
            </svg>
          </div>

          <div className="flex justify-between text-[11px] text-[#737373]">
            <span>T-00:00:00</span>
            <span>T+00:45:00</span>
            <span>T+01:30:00 (NEXT PASS)</span>
          </div>
        </div>

        {/* Real-time Telemetry Event Feed */}
        <div className="lg:col-span-5 border border-[#E2E2DF] p-6 bg-[#F5F5F2] flex flex-col justify-between h-[340px]">
          <div>
            <span className="text-[#737373] block mb-4 uppercase tracking-wider">
              TELEMETRY EVENT STREAM (50 HZ)
            </span>
            <div className="space-y-3">
              {telemetryLogs.map((log, idx) => (
                <div
                  key={idx}
                  className={`p-2.5 border text-[11px] leading-relaxed ${
                    log.includes("[ALERT]")
                      ? "border-rose-600 bg-rose-50 text-rose-700"
                      : "border-[#E2E2DF] bg-white text-[#0A0A0A]"
                  }`}
                >
                  {log}
                </div>
              ))}
            </div>
          </div>
          <div className="text-[10px] text-[#737373] flex justify-between pt-4 border-t border-[#E2E2DF]">
            <span>FILTER: HIGH CONFIDENCE</span>
            <span>BUFFER: 5/5 SLOTS</span>
          </div>
        </div>
      </div>
    </section>
  );
}