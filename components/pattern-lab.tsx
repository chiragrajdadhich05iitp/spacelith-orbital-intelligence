"use client";

import React, { useState } from "react";

interface Tile {
  id: number;
  anomalyScore: number;
  hasObject: boolean;
  classification: string;
  flagged: boolean;
}

export default function PatternLab() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [tiles, setTiles] = useState<Tile[]>(() =>
    Array.from({ length: 16 }, (_, i) => ({
      id: i + 1,
      anomalyScore: 0.05,
      hasObject: false,
      classification: "NOMINAL VOID",
      flagged: false,
    }))
  );

  const [metrics, setMetrics] = useState({
    rawSizeMb: 400,
    downlinkMb: 0.1,
    savedPct: 99.9,
    latencyMs: 18.4,
    flaggedCount: 0,
    runtime: "INT8-ONNX-ARM64",
  });

  const runEdgeInference = async () => {
    setIsProcessing(true);

    try {
      const res = await fetch("/api/telemetry");
      const data = await res.json();
      const flaggedTiles: number[] = data.bandwidth_metrics.flagged_tiles || [];

      const updatedTiles = tiles.map((t) => {
        const isAnomaly = flaggedTiles.includes(t.id);
        const score = isAnomaly
          ? +(Math.random() * 0.35 + 0.65).toFixed(3)
          : +(Math.random() * 0.15).toFixed(3);

        return {
          ...t,
          anomalyScore: score,
          hasObject: isAnomaly,
          classification: isAnomaly ? "PROXIMITY_TARGET" : "BACKGROUND_EARTH",
          flagged: isAnomaly,
        };
      });

      setTiles(updatedTiles);
      setMetrics({
        rawSizeMb: data.bandwidth_metrics.raw_ingest_mb,
        downlinkMb: data.bandwidth_metrics.selective_downlink_mb,
        savedPct: parseFloat(data.bandwidth_metrics.bandwidth_saved_pct),
        latencyMs: data.inference_stats.latency_ms,
        flaggedCount: flaggedTiles.length,
        runtime: data.inference_stats.runtime,
      });
    } catch (err) {
      console.error("Telemetry link failed:", err);
    } finally {
      setIsProcessing(false);
    }
  };

  const resetSensor = () => {
    setTiles(
      Array.from({ length: 16 }, (_, i) => ({
        id: i + 1,
        anomalyScore: 0.05,
        hasObject: false,
        classification: "NOMINAL VOID",
        flagged: false,
      }))
    );
    setMetrics({
      rawSizeMb: 400,
      downlinkMb: 0.1,
      savedPct: 99.9,
      latencyMs: 18.4,
      flaggedCount: 0,
      runtime: "INT8-ONNX-ARM64",
    });
  };

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto border-b border-[#E2E2DF]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="font-mono text-xs text-[#737373] tracking-widest uppercase block mb-3">
            03 / LIVE INTERACTIVE BENCHMARK
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl uppercase tracking-tight text-[#0A0A0A]">
            Edge Inference &amp;
            <br />
            Tile Sharding Lab.
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={runEdgeInference}
            disabled={isProcessing}
            className="bg-[#0A0A0A] text-[#F5F5F2] px-5 py-2.5 font-mono text-xs uppercase hover:bg-neutral-800 disabled:opacity-50 transition-colors"
          >
            {isProcessing ? "[ TRANSMITTING TO API... ]" : "[ TRIGGER SENSOR INGEST ]"}
          </button>
          <button
            onClick={resetSensor}
            className="border border-[#0A0A0A] px-4 py-2.5 font-mono text-xs uppercase hover:bg-[#0A0A0A] hover:text-[#F5F5F2] transition-colors"
          >
            [ RESET ]
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Sensor Grid */}
        <div className="lg:col-span-7 border border-[#0A0A0A] p-6 bg-white">
          <div className="flex justify-between items-center font-mono text-xs text-[#737373] mb-4">
            <span>OPTICAL SENSOR GRID (512x512 SHARDS)</span>
            <span>RUNTIME: {metrics.runtime}</span>
          </div>

          <div className="grid grid-cols-4 gap-2 bg-[#F5F5F2] p-2 border border-[#E2E2DF]">
            {tiles.map((tile) => (
              <div
                key={tile.id}
                className={`relative h-20 sm:h-24 border p-2 flex flex-col justify-between transition-all ${
                  tile.flagged
                    ? "border-rose-600 bg-rose-500/10 shadow-[0_0_10px_rgba(225,29,72,0.2)]"
                    : "border-[#E2E2DF] bg-white hover:border-[#0A0A0A]"
                }`}
              >
                <div className="flex justify-between font-mono text-[10px]">
                  <span className="text-[#737373]">T-{tile.id.toString().padStart(2, "0")}</span>
                  <span
                    className={
                      tile.anomalyScore > 0.5 ? "text-rose-600 font-bold" : "text-neutral-400"
                    }
                  >
                    {tile.anomalyScore}
                  </span>
                </div>

                {tile.flagged ? (
                  <div className="font-mono text-[9px] text-rose-600 border border-rose-600 px-1 py-0.5 uppercase bg-white">
                    {tile.classification}
                  </div>
                ) : (
                  <div className="font-mono text-[9px] text-neutral-400 truncate">NOMINAL</div>
                )}

                <div className="text-[9px] font-mono text-[#737373] flex justify-between">
                  <span>{tile.flagged ? "TRANSMIT" : "DISCARD"}</span>
                  {tile.flagged && <span className="text-rose-600 font-bold">●</span>}
                </div>
              </div>
            ))}
          </div>
          <div className="font-mono text-[11px] text-[#737373] mt-3">
            * Direct API bridge: Flags generated from simulated edge telemetry response packet.
          </div>
        </div>

        {/* Telemetry Analytics */}
        <div className="lg:col-span-5 space-y-4 font-mono text-xs">
          <div className="border border-[#0A0A0A] p-6 bg-[#0A0A0A] text-[#F5F5F2]">
            <span className="text-[#00E5FF] block mb-2">// REAL-TIME EDGE METRICS</span>
            <div className="text-2xl font-bold tracking-tight text-white mb-6">
              {metrics.savedPct}% BANDWIDTH SAVED
            </div>

            <div className="space-y-4 border-t border-neutral-800 pt-4">
              <div className="flex justify-between">
                <span className="text-neutral-400">RAW SENSOR INGEST:</span>
                <span className="text-white">{metrics.rawSizeMb} MB</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">SELECTIVE DOWNLINK:</span>
                <span className="text-[#00E5FF] font-bold">{metrics.downlinkMb} MB</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">COMPRESSION RATIO:</span>
                <span className="text-emerald-400">
                  {(metrics.rawSizeMb / Math.max(metrics.downlinkMb, 0.05)).toFixed(1)}:1
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">MODEL LATENCY:</span>
                <span className="text-white">{metrics.latencyMs} ms / pass</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">ANOMALIES QUEUED:</span>
                <span className={metrics.flaggedCount > 0 ? "text-rose-400 font-bold" : "text-white"}>
                  {metrics.flaggedCount} / 16 TILES
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}