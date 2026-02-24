"use client";

import { useAuthorTitles } from "@/hooks/useAuthorTitles";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { PoetryLoader } from "@/components/poetry-loader";

export default function AuthorTitlesClient({ author }: { author: string }) {
  const { data: titles = [], isLoading, error } = useAuthorTitles(author);
  const searchParams = useSearchParams();
  const query = searchParams.get("q")?.toLowerCase() ?? "";

  if (isLoading) return <PoetryLoader />;

  if (error)
    return <div className="p-6 text-red-500">{(error as Error).message}</div>;

  const filteredTitles = titles.filter((title) =>
    title.toLowerCase().includes(query),
  );

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-semibold">{author}</h1>

      {filteredTitles.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <p className="text-xl font-medium text-muted-foreground">
            No poems found.
          </p>
          <p className="text-sm text-muted-foreground">
            Try a different search term.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTitles.map((title, index) => (
            <Link
              key={index}
              href={`/dashboard/${encodeURIComponent(author)}/${encodeURIComponent(title)}`}
              className="block h-full group"
            >
              <Card className="h-full hover:shadow-md transition-shadow group-hover:border-primary">
                <CardHeader>
                  <CardTitle className="text-base group-hover:text-primary transition-colors font-serif italic tracking-tighter">
                    {title}
                  </CardTitle>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
