import { Feather } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh bg-background gap-7">
      <div
        className="text-muted-foreground/50"
        style={{ animation: "float 3s ease-in-out infinite" }}
      >
        <Feather className="h-10 w-10" strokeWidth={1.5} />
      </div>

      <div className="flex flex-col items-center gap-4">
        <h2 className="font-serif italic text-2xl text-foreground/70 tracking-tight">
          Bronte
        </h2>

        <div className="flex items-center gap-3 opacity-30">
          <div className="h-px w-10 bg-foreground" />
          <div className="h-0.5 w-0.5 rounded-full bg-foreground" />
          <div className="h-px w-10 bg-foreground" />
        </div>

        <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground/50 animate-pulse">
          Gathering verses
        </p>
      </div>
    </div>
  );
}
