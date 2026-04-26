import { Feather } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6">
      <div
        className="text-muted-foreground/50"
        style={{ animation: "float 3s ease-in-out infinite" }}
      >
        <Feather className="h-9 w-9" strokeWidth={1.5} />
      </div>

      <div className="flex flex-col items-center gap-3">
        <p className="font-sans italic text-muted-foreground/70 text-sm">
          Turning pages...
        </p>
        <div className="flex gap-1.5">
          <div className="w-1 h-1 rounded-full bg-foreground/25 animate-bounce [animation-delay:-0.3s]" />
          <div className="w-1 h-1 rounded-full bg-foreground/25 animate-bounce [animation-delay:-0.15s]" />
          <div className="w-1 h-1 rounded-full bg-foreground/25 animate-bounce" />
        </div>
      </div>
    </div>
  );
}
