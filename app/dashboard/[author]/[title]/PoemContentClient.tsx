"use client";

import { usePoem } from "@/hooks/usePoem";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function PoemContentClient({
  author,
  title,
}: {
  author: string;
  title: string;
}) {
  const { data: poem, isLoading, error } = usePoem(author, title);

  if (isLoading) {
    return (
      <div className="p-6 space-y-4">
        <Skeleton className="h-10 w-3/4" />
        <Skeleton className="h-6 w-1/4" />
        <div className="space-y-2 pt-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      </div>
    );
  }

  if (error)
    return <div className="p-6 text-red-500">{(error as Error).message}</div>;
  if (!poem) return <div className="p-6">Poem not found.</div>;

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">{poem.title}</h1>
        <p className="text-xl text-muted-foreground">by {poem.author}</p>
      </div>

      <Card className="border-none shadow-none bg-zinc-50/50 dark:bg-zinc-900/50">
        <CardContent className="pt-6">
          <div className="space-y-1 font-serif text-lg leading-relaxed">
            {poem.lines.map((line, i) => (
              <p key={i} className="min-h-6">
                {line || "\u00A0"}
              </p>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="text-sm text-muted-foreground text-right italic">
        Line count: {poem.linecount}
      </div>
    </div>
  );
}
