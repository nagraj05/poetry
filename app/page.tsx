"use client";

import Link from "next/link";
import { Feather, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

export default function LandingPage() {
  return (
    <div className="relative flex min-h-svh flex-col items-center justify-between bg-white dark:bg-[#0a0a0a] text-black dark:text-[#fafafa] overflow-hidden selection:bg-primary/30 transition-colors duration-500">
      {/* Top Navigation */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20">
        <ModeToggle />
      </div>

      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/4 w-[220px] sm:w-[350px] md:w-[500px] h-[220px] sm:h-[350px] md:h-[500px] bg-primary/20 dark:bg-primary/10 rounded-full blur-[80px] md:blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[200px] sm:w-[320px] md:w-[480px] h-[200px] sm:h-[320px] md:h-[480px] bg-primary/10 dark:bg-primary/5 rounded-full blur-[80px] md:blur-[120px]" />
      </div>

      {/* Main content */}
      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 sm:px-6 text-center max-w-4xl w-full space-y-8 sm:space-y-12">
        {/* Logo + Title */}
        <div className="flex flex-col items-center space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="p-3 sm:p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-sm shadow-lg">
            <Feather className="h-7 w-7 sm:h-9 sm:w-9 text-primary dark:text-white" />
          </div>

          {/* Clamp-based responsive heading */}
          <h1 className="font-serif italic tracking-tighter leading-none text-[clamp(3rem,10vw,7rem)]">
            Bronte
          </h1>
        </div>

        {/* Text */}
        <div className="space-y-4 sm:space-y-6 animate-in fade-in slide-in-from-bottom-12 duration-700 delay-150">
          <p className="font-serif italic text-muted-foreground leading-relaxed mx-auto max-w-md sm:max-w-xl text-sm sm:text-lg md:text-2xl">
            &ldquo;A library of verses, where ink meets eternity.&rdquo;
          </p>

          <div className="h-px w-16 sm:w-24 bg-linear-to-r from-transparent via-primary/50 to-transparent mx-auto" />

          <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground/60 tracking-widest uppercase font-sans">
            Curated Poetry Selection
          </p>
        </div>

        {/* CTA */}
        <div className="animate-in fade-in slide-in-from-bottom-16 duration-700 delay-300">
          <Link href="/dashboard">
            <Button
              size="lg"
              className="h-11 sm:h-14 px-7 sm:px-10 text-sm sm:text-base md:text-lg rounded-full group bg-black dark:bg-white text-white dark:text-black hover:opacity-90 transition-all"
            >
              Go
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 mb-4 sm:mb-6 text-muted-foreground/40 text-[10px] sm:text-xs font-mono tracking-widest uppercase text-center px-4">
        © {new Date().getFullYear()} Bronte Project
      </footer>
    </div>
  );
}