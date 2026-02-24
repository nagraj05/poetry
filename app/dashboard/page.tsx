"use client";

import Link from "next/link";
import { useAuthors } from "@/hooks/useAuthors";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Page() {
  const { data, isLoading, error } = useAuthors();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  const names = data?.authors ?? [];

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {names.map((author:string) => (
          <Link
            key={author}
            href={`/dashboard/${encodeURIComponent(author)}`}
            className="block"
          >
            <Card className="hover:shadow-lg transition-shadow duration-200 cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">{author}</CardTitle>
                <CardDescription>Poetry Author</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}