"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useAuthors } from "@/hooks/useAuthors";
import { PoetryLoader } from "@/components/poetry-loader";

export function AuthorsClient() {
  const { data, isLoading, error } = useAuthors();
  const searchParams = useSearchParams();
  const query = searchParams.get("q")?.toLowerCase() ?? "";

  if (isLoading) return <PoetryLoader />;
  if (error)
    return (
      <div className="flex items-center justify-center min-h-[40vh] text-destructive text-xs font-mono">
        {error.message}
      </div>
    );

  const allNames = data?.authors ?? [];
  const filteredNames = allNames.filter((name: string) =>
    name.toLowerCase().includes(query),
  );

  return (
    <div className="p-6 md:p-8">
      {filteredNames.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-center gap-2">
          <p className="font-serif italic text-muted-foreground">
            No poets found.
          </p>
          <p className="text-[10px] text-muted-foreground/40 tracking-wider font-mono uppercase">
            Try a different search.
          </p>
        </div>
      ) : (
        <>
          <p className="text-[9px] tracking-[0.22em] uppercase text-muted-foreground/40 font-mono mb-6">
            {filteredNames.length} poets
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-border/30">
            {filteredNames.map((author: string) => (
              <Link
                key={author}
                href={`/dashboard/${encodeURIComponent(author)}`}
                className="group bg-background p-5 hover:bg-muted/50 transition-colors duration-200"
              >
                <p className="font-serif italic text-[0.95rem] leading-snug text-foreground/75 group-hover:text-foreground transition-colors duration-200">
                  {author}
                </p>
                {/* <span className="text-[9px] tracking-[0.18em] uppercase font-mono text-muted-foreground/30 group-hover:text-muted-foreground/55 transition-colors duration-200 mt-2 block">
                  View poems →
                </span> */}
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
