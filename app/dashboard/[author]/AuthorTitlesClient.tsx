"use client";

import { useAuthorTitles } from "@/hooks/useAuthorTitles";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { PoetryLoader } from "@/components/poetry-loader";

export default function AuthorTitlesClient({ author }: { author: string }) {
  const { data: titles = [], isLoading, error } = useAuthorTitles(author);
  const searchParams = useSearchParams();
  const query = searchParams.get("q")?.toLowerCase() ?? "";

  if (isLoading) return <PoetryLoader />;
  if (error)
    return (
      <div className="flex items-center justify-center min-h-[40vh] text-destructive text-xs font-mono">
        {(error as Error).message}
      </div>
    );

  const filteredTitles = titles.filter((title) =>
    title.toLowerCase().includes(query),
  );

  return (
    <div className="p-6 md:p-10 max-w-3xl">
      {/* Author header */}
      <div className="mb-8">
        <p className="text-[9px] tracking-[0.22em] uppercase text-muted-foreground/40 font-mono mb-2">
          poet
        </p>
        <h1 className="font-serif italic text-3xl md:text-4xl text-foreground tracking-tight leading-tight">
          {author}
        </h1>
        {filteredTitles.length > 0 && (
          <p className="text-[9px] tracking-[0.22em] uppercase text-muted-foreground/40 font-mono mt-3">
            {filteredTitles.length} poems
          </p>
        )}
      </div>

      <div className="h-px w-full bg-border/50 mb-8" />

      {filteredTitles.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-center gap-2">
          <p className="font-serif italic text-muted-foreground">
            No poems found.
          </p>
          <p className="text-[10px] text-muted-foreground/40 tracking-wider font-mono uppercase">
            Try a different search.
          </p>
        </div>
      ) : (
        <div className="space-y-0">
          {filteredTitles.map((title, index) => (
            <Link
              key={index}
              href={`/dashboard/${encodeURIComponent(author)}/${encodeURIComponent(title)}`}
              className="group flex items-baseline justify-between gap-4 py-3 border-b border-border/25 hover:border-border/55 transition-colors duration-200"
            >
              <span className="font-sans italic text-foreground/70 group-hover:text-foreground transition-colors duration-200 text-[0.925rem] leading-snug">
                {title}
              </span>
              <span className="text-[9px] font-mono tracking-[0.18em] uppercase text-muted-foreground/25 group-hover:text-muted-foreground/55 transition-colors duration-200 shrink-0">
                read →
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
