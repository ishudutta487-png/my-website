import WorkbenchHero from "@/components/WorkbenchHero";
import Scratchpad from "@/components/Scratchpad";
import SocialDispatch from "@/components/SocialDispatch";

export default function Home() {
  return (
    <main className="min-h-screen border-x border-zinc-800 max-w-7xl mx-auto flex flex-col bg-[#050607]">
      <WorkbenchHero />
      <Scratchpad />
      <SocialDispatch />

      {/* Industrial Telemetry Footer */}
      <footer className="p-6 md:p-8 border-t border-zinc-900 bg-black flex flex-col sm:flex-row justify-between items-center gap-4 font-mono text-[10px] text-zinc-600">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>STATUS: ONLINE // 0ms_LATENCY</span>
        </div>
        <span>OVERCLOCK // 00 &mdash; ZERO_BLOAT_ARCHITECTURE</span>
      </footer>
    </main>
  );
}