"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useAuthors } from "@/hooks/useAuthors";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PoetryLoader } from "@/components/poetry-loader";

export function AuthorsClient() {
  const { data, isLoading, error } = useAuthors();
  const searchParams = useSearchParams();
  const query = searchParams.get("q")?.toLowerCase() ?? "";

  if (isLoading) return <PoetryLoader />;
  if (error) return <div className="p-6 text-red-500">{error.message}</div>;

  const allNames = data?.authors ?? [];
  const filteredNames = allNames.filter((name: string) =>
    name.toLowerCase().includes(query),
  );

  return (
    <div className="p-6">
      {filteredNames.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <p className="text-xl font-medium text-muted-foreground">
            No poets found.
          </p>
          <p className="text-sm text-muted-foreground">
            Try a different search term.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredNames.map((author: string) => (
            <Link
              key={author}
              href={`/dashboard/${encodeURIComponent(author)}`}
              className="block"
            >
              <Card className="hover:shadow-lg transition-shadow duration-200 cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-lg font-serif italic tracking-tighter">{author}</CardTitle>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
