import { Feather } from "lucide-react";

export function PoetryLoader() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
      <div className="relative">
        <Feather className="h-12 w-12 text-primary animate-bounce" />
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary/20 blur-sm rounded-full animate-pulse" />
      </div>
      <div className="flex flex-col items-center space-y-2">
        <p className="text-lg font-serif italic text-muted-foreground animate-pulse">
          Dipping the quill in ink...
        </p>
        <div className="flex gap-1">
          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]" />
          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]" />
          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </div>
  );
}
