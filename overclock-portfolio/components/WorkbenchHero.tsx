"use client";

import React, { useState, useEffect } from "react";
import { playMechanicalClick } from "@/lib/sound";
import { Terminal, Shield, Cpu, Activity, CornerDownRight, Radio } from "lucide-react";

const PALETTES = [
  { name: "HAZARD_YEL", hex: "#FFE600", text: "text-yellow-400", border: "border-yellow-400", bg: "bg-yellow-400" },
  { name: "SIGNAL_RED", hex: "#FF2A2A", text: "text-red-500", border: "border-red-500", bg: "bg-red-500" },
  { name: "CYAN_PNEUMA", hex: "#00F0FF", text: "text-cyan-400", border: "border-cyan-400", bg: "bg-cyan-400" },
  { name: "ACID_PINK", hex: "#FF007A", text: "text-pink-500", border: "border-pink-500", bg: "bg-pink-500" },
];

export default function WorkbenchHero() {
  const [activeTheme, setActiveTheme] = useState(0);
  const [timeString, setTimeString] = useState("");
  const [fps, setFps] = useState(60);

  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    const updateTime = () => {
      const now = new Date();
      const timePart = now.toTimeString().split(" ")[0];
      const ms = String(now.getMilliseconds()).padStart(3, "0");
      setTimeString(`${timePart}:${ms}`);

      frameCount++;
      const current = performance.now();
      if (current - lastTime >= 1000) {
        setFps(frameCount);
        frameCount = 0;
        lastTime = current;
      }
    };
    const timer = setInterval(updateTime, 47);
    return () => clearInterval(timer);
  }, []);

  const handleThemeChange = (idx: number) => {
    playMechanicalClick();
    setActiveTheme(idx);
  };

  const theme = PALETTES[activeTheme];

  return (
    <div className="border-b border-zinc-800 bg-[#060708] relative">
      {/* Top Industrial Diagnostic Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 border-b border-zinc-800 text-[10px] font-mono tracking-widest text-zinc-400 select-none bg-black/60">
        <div className="p-3 border-r border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-none animate-pulse" />
            <span className="text-zinc-200">CORE // ONLINE</span>
          </div>
          <span className="text-zinc-600">[00-V1]</span>
        </div>

        <div className="p-3 border-r border-zinc-800 hidden md:flex items-center justify-between">
          <span className="text-zinc-500">REFRESH_RATE:</span>
          <span className="text-zinc-200 font-bold tabular-nums">{fps} FPS // 0ms_LAG</span>
        </div>

        <div className="p-3 border-r border-zinc-800 flex items-center justify-between">
          <span className="text-zinc-500">SYS_TIME:</span>
          <span className="text-zinc-200 font-bold tabular-nums">{timeString || "00:00:00:000"}</span>
        </div>

        <div className="p-3 flex items-center justify-between">
          <span className="text-zinc-500">PALETTE_BUS:</span>
          <div className="flex gap-1">
            {PALETTES.map((p, i) => (
              <button
                key={p.name}
                onClick={() => handleThemeChange(i)}
                className={`w-3.5 h-3.5 border transition-all ${
                  activeTheme === i ? `${p.border}${p.bg} scale-110` : "border-zinc-700 bg-zinc-900 hover:border-zinc-400"
                }`}
                title={p.name}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main Console Canvas */}
      <section className="p-6 md:p-14 relative overflow-hidden">
        {/* Subtle Background Corner Markers */}
        <div className="absolute top-3 left-3 font-mono text-[9px] text-zinc-700 select-none">+ 00.00.X</div>
        <div className="absolute top-3 right-3 font-mono text-[9px] text-zinc-700 select-none">NODE // LOCAL +</div>

        <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 border border-zinc-800 bg-black font-mono text-[10px] tracking-wider text-zinc-400">
            <Radio className="h-3 w-3 text-red-500 animate-pulse" />
            <span>TRANSMISSION: DIRECT_PROTOTYPING</span>
          </div>

          {/* Barcode & Spec Blueprint Stamp */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="h-7 w-32 bg-zinc-300 flex items-center justify-between px-1 py-0.5">
              {[3, 1, 4, 2, 5, 1, 3, 2, 6, 2, 1, 4, 2, 5].map((w, i) => (
                <div key={i} className="bg-black h-full" style={{ width: `${w}px` }} />
              ))}
            </div>
            <div className="font-mono text-[9px] text-zinc-600 leading-tight">
              SPEC // 2026<br />ARCH: NEXT_APP
            </div>
          </div>
        </div>

        {/* Hero Title with Tactical Stroke Contrast */}
        <h1 className="text-5xl sm:text-7xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.82] text-white">
          OVERCLOCK<br />
          <span className={`${theme.text} transition-colors duration-100`}>PROTOTYPE.</span>
          <br />
          <span className="stroke-text tracking-tight transition-colors duration-100 hover:text-white cursor-crosshair">
            ZERO BLOAT.
          </span>
        </h1>

        <p className="mt-8 font-mono text-xs sm:text-sm text-zinc-400 max-w-2xl leading-relaxed border-l-2 border-zinc-800 pl-4">
          Experimental workbench engineered for zero latency and tactile web mechanics. 
          Stripping corporate framework bloat down to raw hardware-inspired interfaces.
        </p>

        {/* System Bus Metrics Footer */}
        <div className="mt-12 pt-6 border-t border-zinc-900 grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-[11px] text-zinc-500">
          <div className="border border-zinc-800/80 p-3 bg-black/40">
            <div className="text-[9px] text-zinc-600 mb-1">SYNTH_ENGINE</div>
            <div className="text-zinc-300 font-bold">WEB_AUDIO_API</div>
          </div>
          <div className="border border-zinc-800/80 p-3 bg-black/40">
            <div className="text-[9px] text-zinc-600 mb-1">INTERACTION_BUS</div>
            <div className="text-zinc-300 font-bold">0ms_INPUT_LAG</div>
          </div>
          <div className="border border-zinc-800/80 p-3 bg-black/40">
            <div className="text-[9px] text-zinc-600 mb-1">HEAP_PROFILE</div>
            <div className="text-zinc-300 font-bold tabular-nums">OPTIMIZED</div>
          </div>
          <div className="border border-zinc-800/80 p-3 bg-black/40">
            <div className="text-[9px] text-zinc-600 mb-1">ACTIVE_ACCENT</div>
            <div className={`font-bold ${theme.text}`}>{theme.name}</div>
          </div>
        </div>
      </section>
    </div>
  );
}