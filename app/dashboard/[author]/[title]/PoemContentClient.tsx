"use client";

import { usePoem } from "@/hooks/usePoem";
import { PoetryLoader } from "@/components/poetry-loader";

export default function PoemContentClient({
  author,
  title,
}: {
  author: string;
  title: string;
}) {
  const { data: poem, isLoading, error } = usePoem(author, title);

  if (isLoading) return <PoetryLoader />;
  if (error)
    return (
      <div className="flex items-center justify-center min-h-[40vh] text-destructive text-xs font-mono">
        {(error as Error).message}
      </div>
    );
  if (!poem)
    return (
      <div className="flex items-center justify-center min-h-[40vh] font-serif italic text-muted-foreground">
        Poem not found.
      </div>
    );

  return (
    <div className="p-6 md:p-10 lg:p-14 max-w-2xl mx-auto">
      {/* Header */}
      <div className="mb-9">
        <p className="text-[9px] tracking-[0.22em] uppercase text-muted-foreground/40 font-mono mb-2.5">
          {poem.author}
        </p>
        <h1 className="font-serif italic text-3xl md:text-4xl text-foreground leading-tight tracking-tight">
          {poem.title}
        </h1>
      </div>

      {/* Ornamental separator */}
      <div className="flex items-center gap-3 mb-10 opacity-30">
        <div className="h-px flex-1 bg-foreground" />
        <div className="h-0.5 w-0.5 rounded-full bg-foreground" />
        <div className="h-px w-8 bg-foreground" />
      </div>

      {/* Poem body */}
      <div className="space-y-0">
        {poem.lines.map((line: string, i: number) => (
          <p
            key={i}
            className="font-sans text-[1rem] leading-[1.9] text-foreground/80 min-h-[1.9em]"
          >
            {line || " "}
          </p>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-14 pt-5 border-t border-border/30">
        <p className="text-[9px] tracking-[0.2em] uppercase text-muted-foreground/35 font-mono">
          {poem.linecount} lines
        </p>
      </div>
    </div>
  );
}
