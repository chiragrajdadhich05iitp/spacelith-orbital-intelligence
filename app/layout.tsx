import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter" 
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"], 
  variable: "--font-space-grotesk" 
});

const mono = JetBrains_Mono({ 
  subsets: ["latin"], 
  variable: "--font-geist-mono" 
});

export const metadata: Metadata = {
  title: "SPACELITH AERONAUTS — Orbital Intelligence & Edge Pattern Recognition",
  description: "Detecting orbital behavior before it becomes an operational problem. Edge inference & real-time telemetry.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${mono.variable}`}>
      <body 
        className="bg-background text-foreground antialiased"
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}