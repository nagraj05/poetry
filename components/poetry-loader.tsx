import { Feather } from "lucide-react";

export function PoetryLoader() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] gap-5">
      <div
        className="text-muted-foreground/50"
        style={{ animation: "float 3s ease-in-out infinite" }}
      >
        <Feather className="h-8 w-8" strokeWidth={1.5} />
      </div>
      <p className="font-sans italic text-muted-foreground/60 text-sm animate-pulse">
        Dipping the quill...
      </p>
    </div>
  );
}
