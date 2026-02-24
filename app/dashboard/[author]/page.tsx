import { Suspense } from "react";
import { PoetryLoader } from "@/components/poetry-loader";
import AuthorTitlesClient from "./AuthorTitlesClient";

export default async function Page({
  params,
}: {
  params: Promise<{ author: string }>;
}) {
  const { author } = await params;
  const decodedAuthor = decodeURIComponent(author);
  return (
    <Suspense fallback={<PoetryLoader />}>
      <AuthorTitlesClient author={decodedAuthor} />
    </Suspense>
  );
}
