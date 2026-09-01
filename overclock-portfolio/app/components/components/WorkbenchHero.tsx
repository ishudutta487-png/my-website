"use client";

import React, { useState, useEffect } from "react";
import { playMechanicalClick } from "@/lib/sound";

const THEMES = [
    { name: "HAZARD_YEL", hex: "#FFE600", text: "text-yellow-400", bg: "bg-yellow-400"},
    { name: "SIGNAL_RED", hex: "#FF2A2A", text: "text-red-500", bg: "bg-red-500"},
    { name: "CYAN_PNEUMA", hex: "#00F0FF", text: "text-cyan-400", bg: "bg-cyan-400"},
    { name: "ACID_PINK", hex: "#FF007A", text: "text-pink-500", bg: "bg-pink-500"},
];

export default function WorkbenchHero() {
    const [activeTheme, setActiveTheme] = useState(0);
    const [timeString, setTimeString] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTimeString(now.toTimeString().split("")[0] + ":" + now.getMilliseconds().toString().padStart(3, "0"));
        };
        const timer = setInterval(updateTime, 47);
        return () => clearInterval(timer);
    }, []);

    const handleThemeChange = (idx: number) => {
        playMechanicalClick();
        setActiveTheme(idx);
    };

    const theme = THEMES[activeTheme];

  return (
    <div className="border-b border-zinc-800">
      <header className="border-b border-zinc-800 grid grid-cols-2 md:grid-cols-4 text-xs font-mono">
        <div className="p-3 border-r border-zinc-800 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
          <span>STATUS: OVERCLOCK_ACTIVE</span>
        </div>
        <div className="p-3 border-r border-zinc-800 hidden md:flex items-center justify-between">
          <span className="text-zinc-500">LATENCY:</span>
          <span className="text-zinc-200">0ms (ZERO_BLOAT)</span>
        </div>
        <div className="p-3 border-r border-zinc-800 flex items-center justify-between">
          <span className="text-zinc-500">SYS_CLOCK:</span>
          <span className="font-bold tabular-nums text-zinc-200">{timeString || "00:00:00:000"}</span>
        </div>
        <div className="p-3 flex items-center justify-between">
          <span className="text-zinc-500">PALETTE:</span>
          <span className={`px-1.5 py-0.5 font-bold ${theme.bg} text-black uppercase text-[10px]`}>
            {theme.name}
          </span>
        </div>
      </header>

      <section className="relative p-6 md:p-12 overflow-hidden bg-[#0A0C0E]">
        <div className="flex justify-between items-start mb-6">
          <span className="font-pixel text-[10px] tracking-widest text-zinc-500 block">
            [IDENT // BUILDER_MANIFESTO]
          </span>
          <div className="hidden sm:flex flex-col items-end">
            <div className="font-mono text-[9px] tracking-widest text-zinc-500">#00-OVERCLOCK</div>
            <div className="h-6 w-28 bg-zinc-200 flex items-center justify-around px-1 py-0.5 mt-1">
              {[4, 2, 6, 3, 1, 5, 2, 7, 2, 4, 3, 5, 1, 6, 2].map((w, i) => (
                <div key={i} className="bg-black h-full" style={{ width: `${w}px` }} />
              ))}
            </div>
          </div>
        </div>

        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter uppercase font-display leading-[0.85] text-white my-4">
          OVERCLOCKED<br />
          <span className={`${theme.text} transition-colors duration-75`}>THOUGHTS.</span>
          <br />
          <span className="text-transparent stroke-text hover:text-white transition-colors duration-75">
            ZERO BLOAT.
          </span>
        </h1>

        <p className="mt-8 text-sm md:text-base font-sans text-zinc-400 max-w-2xl leading-relaxed">
          I take static concepts, tear them down to bare metal, and rebuild them as responsive, 
          hyper-tactile web mechanics. No corporate boilerplate. No sluggish transitions.
        </p>

        <div className="mt-10 pt-6 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-4">
          <span className="text-[11px] font-mono text-zinc-500">SWAP ACTIVE ACCENT:</span>
          <div className="flex gap-2">
            {THEMES.map((t, idx) => (
              <button
                key={idx}
                onClick={() => handleThemeChange(idx)}
                className={`px-3 py-1 text-xs font-mono font-bold tracking-wider transition-transform active:scale-95 ${
                  activeTheme === idx ? "ring-2 ring-white" : ""
                }`}
                style={{ backgroundColor: t.hex, color: "#000" }}
              >
                {t.name.split("_")[0]}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
    }
