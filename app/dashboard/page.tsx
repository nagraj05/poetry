"use client";

import { useAuthors } from "@/hooks/useAuthors";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Page() {
  const { data, isLoading, error } = useAuthors();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  const names = data?.authors ?? [];

  return (
    <div className="p-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
      {names.map((author: string) => (
        <Card
          key={author}
          className="hover:shadow-lg transition-shadow duration-200 cursor-pointer"
        >
          <CardHeader>
            <CardTitle className="text-lg">{author}</CardTitle>
            <CardDescription>Poetry Author</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  </div>
  );
}