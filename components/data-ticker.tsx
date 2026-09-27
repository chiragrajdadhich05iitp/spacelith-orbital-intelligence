"use client";

import React, { useState, useEffect } from "react";

export default function DataTicker() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toISOString().slice(11, 19) + " UTC");
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="border-y border-[#E2E2DF] bg-[#F5F5F2] py-3 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[#0A0A0A]">
        {/* Status indicator */}
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-semibold uppercase tracking-wider">SYSTEM OPERATIONAL</span>
          <span className="text-[#737373]" suppressHydrationWarning>
            [{time ?? "SYNCING..."}]
          </span>
        </div>

        {/* Live Counters */}
        <div className="flex items-center gap-6 text-[#737373] text-[11px] uppercase tracking-widest">
          <div>
            <span className="text-[#0A0A0A] font-semibold">12,482</span> OBJECTS
          </div>
          <div>
            <span className="text-[#0A0A0A] font-semibold">8,942</span> ACTIVE
          </div>
          <div>
            <span className="text-[#0A0A0A] font-semibold">342</span> EVENTS/HR
          </div>
          <div>
            <span className="text-rose-600 font-semibold">17</span> DEVIATIONS
          </div>
          <div className="hidden md:block">
            <span className="text-[#0A0A0A] font-semibold">SVALBARD GS:</span> CONNECTED
          </div>
        </div>
      </div>
    </div>
  );
}