import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk, Silkscreen } from "next/font/google";
import "./globals.css";

const grotesk = Space_Grotesk({ 
  subsets: ["latin"], 
  variable: "--font-display" 
});

const mono = JetBrains_Mono({ 
  subsets: ["latin"], 
  variable: "--font-mono" 
});

const pixel = Silkscreen({ 
  weight: "400", 
  subsets: ["latin"], 
  variable: "--font-pixel" 
});

export const metadata: Metadata = {
  title: "[OVERCLOCK // 00]",
  description: "Overclocked Thoughts // Zero Corporate Bloat",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${grotesk.variable} ${mono.variable} ${pixel.variable} dark`}>
      <body className="bg-[#08090A] text-[#E4E4E7] antialiased selection:bg-[#FFE600] selection:text-black font-mono overflow-x-hidden">
        {/* SVG Halftone Noise Texture */}
        <svg className="pointer-events-none fixed isolate z-50 opacity-25 mix-blend-soft-light inset-0 h-full w-full">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
        {children}
      </body>
    </html>
  );
}