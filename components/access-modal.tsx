"use client";

import React, { useState } from "react";

interface AccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AccessModal({ isOpen, onClose }: AccessModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ callsign: "", organization: "", clearance: "COMMERCIAL" });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 font-mono text-xs">
      <div className="bg-[#F5F5F2] border border-[#0A0A0A] max-w-lg w-full p-8 relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#737373] hover:text-[#0A0A0A] text-sm font-bold"
        >
          [✕]
        </button>

        <span className="text-[#737373] block mb-2 text-[10px] tracking-widest uppercase">
          // ACCESS AUTHORIZATION PROTOCOL
        </span>
        <h3 className="font-display font-bold text-2xl uppercase tracking-tight text-[#0A0A0A] mb-6">
          Request Mission Access
        </h3>

        {submitted ? (
          <div className="border border-emerald-600 bg-emerald-50 text-emerald-800 p-6 text-center space-y-2">
            <span className="font-bold block text-sm">ENCRYPTED CREDENTIALS DISPATCHED</span>
            <span className="text-[11px] block">
              Clearance verification ticket queued. Telemetry link will synchronize shortly.
            </span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-[#737373] block mb-1 uppercase">OPERATOR CALLSIGN / NAME</label>
              <input
                required
                type="text"
                placeholder="CAPT. J. ORBITAL"
                value={formData.callsign}
                onChange={(e) => setFormData({ ...formData, callsign: e.target.value })}
                className="w-full border border-[#0A0A0A] bg-white p-2.5 outline-none focus:ring-1 focus:ring-[#0A0A0A] text-[#0A0A0A]"
              />
            </div>

            <div>
              <label className="text-[#737373] block mb-1 uppercase">ORGANIZATION / SATELLITE OPERATOR</label>
              <input
                required
                type="text"
                placeholder="AEROSPACE DYNAMICS LAB"
                value={formData.organization}
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                className="w-full border border-[#0A0A0A] bg-white p-2.5 outline-none focus:ring-1 focus:ring-[#0A0A0A] text-[#0A0A0A]"
              />
            </div>

            <div>
              <label className="text-[#737373] block mb-1 uppercase">CLEARANCE PROFILE</label>
              <select
                value={formData.clearance}
                onChange={(e) => setFormData({ ...formData, clearance: e.target.value })}
                className="w-full border border-[#0A0A0A] bg-white p-2.5 outline-none focus:ring-1 focus:ring-[#0A0A0A] text-[#0A0A0A]"
              >
                <option value="COMMERCIAL">COMMERCIAL CONSTELLATION OPERATOR</option>
                <option value="SDA">SPACE DOMAIN AWARENESS (SDA)</option>
                <option value="DEFENSE">DEFENSE &amp; STRATEGIC SURVEILLANCE</option>
                <option value="ACADEMIC">ACADEMIC / ASTRODYNAMICS RESEARCH</option>
              </select>
            </div>

            <div className="pt-4 flex justify-between items-center">
              <span className="text-[10px] text-[#737373]">EST. APPROVAL: &lt; 2 HR</span>
              <button
                type="submit"
                className="bg-[#0A0A0A] text-[#F5F5F2] px-6 py-2.5 uppercase font-bold hover:bg-neutral-800 transition-colors"
              >
                [ TRANSMIT REQUEST ]
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}