"use client";

import { usePoem } from "@/hooks/usePoem";
import { Card, CardContent } from "@/components/ui/card";
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
            {poem.lines.map((line: string, i: number) => (
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
