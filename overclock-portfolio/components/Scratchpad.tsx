"use client";

import React, { useState } from "react";
import { playMechanicalClick } from "@/lib/sound";
import { Terminal, Flame, Skull, Zap, ChevronRight, Lock, Unlock } from "lucide-react";

const ETHOS = [
  {
    id: "01",
    tag: "ETHOS // 01",
    icon: Flame,
    title: "NUKE & REBUILD",
    desc: "If the architecture fights you, don't patch broken scaffolding. Tear it down to zero and re-engineer it cleaner in 20 minutes.",
    accent: "text-red-500",
    borderHover: "hover:border-red-500",
  },
  {
    id: "02",
    tag: "STANDARD // 02",
    icon: Skull,
    title: "ANTI-BOILERPLATE",
    desc: "Refuse generic corporate templates. Build micro-interactions, hardware telemetry, and tactile feedback from scratch.",
    accent: "text-yellow-400",
    borderHover: "hover:border-yellow-400",
  },
  {
    id: "03",
    tag: "CORE // 03",
    icon: Zap,
    title: "TACTILE OVER STATIC",
    desc: "Static UI is inert. Every interaction should produce instant mechanical feedback—synthesized clicks, snap transitions, zero latency.",
    accent: "text-cyan-400",
    borderHover: "hover:border-cyan-400",
  },
  {
    id: "04",
    tag: "TELEMETRY // 04",
    icon: Terminal,
    title: "ORGANIZED ENTROPY",
    desc: "Peak engineering thrives at 3 AM with 40 tabs open, a terminal humming, and hyper-fixation locked onto a single interaction.",
    accent: "text-pink-500",
    borderHover: "hover:border-pink-500",
  },
];

export default function Scratchpad() {
  const [active, setActive] = useState<string | null>(null);

  const toggleTile = (id: string) => {
    playMechanicalClick();
    setActive(active === id ? null : id);
  };

  return (
    <section className="p-6 md:p-14 border-b border-zinc-800 bg-[#070809]">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <div className="font-mono text-[10px] tracking-widest text-zinc-500 mb-1 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-zinc-600 inline-block" />
            CORE_PHILOSOPHY // ANTI_RULES
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-white uppercase">
            Execution Directives
          </h2>
        </div>
        <span className="font-mono text-[10px] text-zinc-600">
          [ INTERACT TO ENGAGE LOCK ]
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {ETHOS.map((item) => {
          const isLocked = active === item.id;
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              onClick={() => toggleTile(item.id)}
              className={`border p-6 bg-black flex flex-col justify-between min-h-[260px] cursor-pointer transition-all duration-75 select-none ${
                isLocked
                  ? "border-white bg-zinc-950 translate-x-1 translate-y-1 shadow-[4px_4px_0px_0px_#ffffff]"
                  : `border-zinc-800/90 ${item.borderHover} hover:bg-zinc-950/80`
              }`}
            >
              <div>
                <div className="flex justify-between items-center mb-6 border-b border-zinc-900 pb-3">
                  <span className="font-mono text-[9px] tracking-widest text-zinc-500">
                    {item.tag}
                  </span>
                  <Icon className={`h-4 w-4 ${item.accent}`} />
                </div>

                <h3 className="font-mono font-bold text-base text-zinc-100 uppercase tracking-tight mb-3">
                  {item.title}
                </h3>
                <p className="font-mono text-xs text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-900/80 flex justify-between items-center font-mono text-[9px] text-zinc-500">
                <span className="flex items-center gap-1.5">
                  {isLocked ? (
                    <>
                      <Lock className="h-3 w-3 text-white" />
                      <span className="text-white font-bold">STATE: LOCKED</span>
                    </>
                  ) : (
                    <>
                      <Unlock className="h-3 w-3 text-zinc-600" />
                      <span>STATE: STANDBY</span>
                    </>
                  )}
                </span>
                <span className="text-zinc-600">#0{item.id}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}