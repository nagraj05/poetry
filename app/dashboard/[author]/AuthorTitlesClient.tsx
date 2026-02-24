"use client";

import { useAuthorTitles } from "@/hooks/useAuthorTitles";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

export default function AuthorTitlesClient({ author }: { author: string }) {
  const { data: titles = [], isLoading, error } = useAuthorTitles(author);

  if (isLoading) {
    return (
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Skeleton key={i} className="h-24 w-full" />
        ))}
      </div>
    );
  }

  if (error)
    return <div className="p-6 text-red-500">{(error as Error).message}</div>;

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-semibold">{author}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {titles.map((title) => (
          <Link
            key={title}
            href={`/dashboard/${encodeURIComponent(author)}/${encodeURIComponent(title)}`}
            className="block h-full group"
          >
            <Card className="h-full hover:shadow-md transition-shadow group-hover:border-primary">
              <CardHeader>
                <CardTitle className="text-base group-hover:text-primary transition-colors">
                  {title}
                </CardTitle>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
