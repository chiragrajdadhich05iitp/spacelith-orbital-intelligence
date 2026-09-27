"use client";

import dynamic from "next/dynamic";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import DataTicker from "../components/data-ticker";
import Problem from "../components/problem";
import IntelligenceEngine from "../components/intelligence-engine";
import PatternLab from "../components/pattern-lab";
import ConsoleDashboard from "../components/console-dashboard";
import OrbitInspector from "../components/orbit-inspector";
import DataVisualization from "../components/data-visualization";
import HowItWorks from "../components/how-it-works";
import UseCases from "../components/use-cases";
import TechStack from "../components/tech-stack";
import ResearchLab from "../components/research-lab";
import Footer from "../components/footer";

const OrbitalGlobe = dynamic(() => import("../components/orbital-globe"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[600px] border-b border-[#E2E2DF] flex items-center justify-center font-mono text-xs text-[#737373]">
      [ INITIALIZING ORBITAL CANVAS ENGINE... ]
    </div>
  ),
});

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F5F2] text-[#0A0A0A]">
      <Navbar />
      <Hero />
      <DataTicker />
      <OrbitalGlobe />
      <Problem />
      <IntelligenceEngine />
      <PatternLab />
      <ConsoleDashboard />
      <OrbitInspector />
      <DataVisualization />
      <HowItWorks />
      <UseCases />
      <TechStack />
      <ResearchLab />
      <Footer />
    </main>
  );
}