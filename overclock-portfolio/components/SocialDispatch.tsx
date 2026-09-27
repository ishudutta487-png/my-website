"use client";

import React, { useState } from "react";
import { playMechanicalClick } from "@/lib/sound";
import { MessageSquare, GitBranch, AtSign, Mail, Copy, Check, ArrowUpRight } from "lucide-react";

export default function SocialDispatch() {
  const [copied, setCopied] = useState(false);

  const handleCopyDiscord = () => {
    playMechanicalClick();
    navigator.clipboard.writeText("ishandutta");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="p-6 md:p-14 bg-[#050607]">
      <div className="mb-8">
        <span className="font-mono text-[10px] tracking-widest text-zinc-500 block mb-1">
          COMMUNICATIONS_ARRAY // DISPATCH
        </span>
        <h2 className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-white uppercase">
          Open Sockets
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono">
        {/* Discord Tactical Tile */}
        <button
          onClick={handleCopyDiscord}
          className="p-6 text-left border border-zinc-800 bg-black hover:border-indigo-500 hover:bg-indigo-950/20 transition-all flex flex-col justify-between group min-h-[160px] active:translate-x-0.5 active:translate-y-0.5"
        >
          <div className="flex justify-between items-center w-full border-b border-zinc-900 pb-3">
            <span className="text-[9px] text-zinc-500 tracking-widest group-hover:text-zinc-300">
              SOCKET // 01
            </span>
            <MessageSquare className="h-4 w-4 text-indigo-400" />
          </div>
          <div>
            <div className="text-sm font-bold text-white mb-1">DISCORD</div>
            <div className="text-xs text-zinc-400">@ishandutta</div>
          </div>
          <div className="flex items-center gap-1.5 text-[10px] text-zinc-500 pt-3 border-t border-zinc-900/60">
            {copied ? (
              <>
                <Check className="h-3 w-3 text-emerald-400" />
                <span className="text-emerald-400 font-bold">BUFFERED TO CLIPBOARD</span>
              </>
            ) : (
              <>
                <Copy className="h-3 w-3 text-zinc-600 group-hover:text-zinc-400" />
                <span>CLICK TO COPY HANDLE</span>
              </>
            )}
          </div>
        </button>

        {/* GitHub Tile */}
        <a
          href="https://github.com/ishudutta487-png"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => playMechanicalClick()}
          className="p-6 border border-zinc-800 bg-black hover:border-cyan-400 hover:bg-cyan-950/20 transition-all flex flex-col justify-between group text-zinc-300 min-h-[160px] no-underline active:translate-x-0.5 active:translate-y-0.5"
        >
          <div className="flex justify-between items-center w-full border-b border-zinc-900 pb-3">
            <span className="text-[9px] text-zinc-500 tracking-widest group-hover:text-zinc-300">
              SOCKET // 02
            </span>
            <GitBranch className="h-4 w-4 text-cyan-400" />
          </div>
          <div>
            <div className="text-sm font-bold text-white mb-1">GITHUB</div>
            <div className="text-xs text-zinc-400">ishudutta487-png</div>
          </div>
          <div className="flex items-center justify-between text-[10px] text-zinc-500 pt-3 border-t border-zinc-900/60 group-hover:text-zinc-300">
            <span>REPOSITORY_INDEX</span>
            <ArrowUpRight className="h-3 w-3" />
          </div>
        </a>

        {/* X / Twitter Tile */}
        <a
          href="https://x.com/Ishan_Dutta999"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => playMechanicalClick()}
          className="p-6 border border-zinc-800 bg-black hover:border-pink-500 hover:bg-pink-950/20 transition-all flex flex-col justify-between group text-zinc-300 min-h-[160px] no-underline active:translate-x-0.5 active:translate-y-0.5"
        >
          <div className="flex justify-between items-center w-full border-b border-zinc-900 pb-3">
            <span className="text-[9px] text-zinc-500 tracking-widest group-hover:text-zinc-300">
              SOCKET // 03
            </span>
            <AtSign className="h-4 w-4 text-pink-400" />
          </div>
          <div>
            <div className="text-sm font-bold text-white mb-1">TWITTER // X</div>
            <div className="text-xs text-zinc-400">@Ishan_Dutta999</div>
          </div>
          <div className="flex items-center justify-between text-[10px] text-zinc-500 pt-3 border-t border-zinc-900/60 group-hover:text-zinc-300">
            <span>TELEMETRY_FEED</span>
            <ArrowUpRight className="h-3 w-3" />
          </div>
        </a>

        {/* Direct Email Tile */}
        <a
          href="mailto:ishudutta487@gmail.com"
          onClick={() => playMechanicalClick()}
          className="p-6 border border-zinc-800 bg-black hover:border-yellow-400 hover:bg-yellow-950/20 transition-all flex flex-col justify-between group text-zinc-300 min-h-[160px] no-underline active:translate-x-0.5 active:translate-y-0.5"
        >
          <div className="flex justify-between items-center w-full border-b border-zinc-900 pb-3">
            <span className="text-[9px] text-zinc-500 tracking-widest group-hover:text-zinc-300">
              SOCKET // 04
            </span>
            <Mail className="h-4 w-4 text-yellow-400" />
          </div>
          <div>
            <div className="text-sm font-bold text-white mb-1">DIRECT_COMMS</div>
            <div className="text-xs text-zinc-400 truncate">ishudutta487@gmail.com</div>
          </div>
          <div className="flex items-center justify-between text-[10px] text-zinc-500 pt-3 border-t border-zinc-900/60 group-hover:text-zinc-300">
            <span>TRANSMIT_DISPATCH</span>
            <ArrowUpRight className="h-3 w-3" />
          </div>
        </a>
      </div>
    </section>
  );
}