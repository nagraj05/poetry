"use client";

import Link from "next/link";
import { Feather } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";

export default function LandingPage() {
  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center bg-background text-foreground overflow-hidden">
      <div className="absolute top-5 right-5 z-20">
        <ModeToggle />
      </div>

      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <main className="relative z-10 flex flex-col items-center text-center px-6 gap-9">
        {/* Feather */}
        <div
          className="text-muted-foreground/50"
          style={{ animation: "float 4s ease-in-out infinite" }}
        >
          <Feather className="h-7 w-7" strokeWidth={1.5} />
        </div>

        {/* Title */}
        <h1 className="font-serif italic leading-none tracking-tighter text-foreground text-[clamp(4.5rem,14vw,10rem)]">
          Bronte
        </h1>

        {/* Ornament */}
        <div className="flex items-center gap-3 opacity-40">
          <div className="h-px w-16 bg-foreground" />
          <div className="h-1 w-1 rounded-full bg-foreground" />
          <div className="h-px w-16 bg-foreground" />
        </div>

        {/* Tagline */}
        <p className="font-sans italic text-muted-foreground leading-relaxed max-w-xs text-[clamp(0.8rem,2vw,1rem)]">
          &ldquo;A library of verses, where ink meets eternity.&rdquo;
        </p>

        {/* CTA */}
        <Link
          href="/dashboard"
          className="group inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase font-mono text-muted-foreground hover:text-foreground transition-colors duration-300 border-b border-border hover:border-foreground/50 pb-0.5 mt-2"
        >
          Enter the Library
          <span className="transition-transform duration-300 group-hover:translate-x-1.5">
            →
          </span>
        </Link>
      </main>

      <footer className="absolute bottom-5 text-muted-foreground/30 text-[9px] tracking-[0.2em] uppercase font-mono">
        © {new Date().getFullYear()} Bronte
      </footer>
    </div>
  );
}
