import AuthorTitlesClient from "./AuthorTitlesClient";

export default async function Page({
  params,
}: {
  params: Promise<{ author: string }>;
}) {
  const { author } = await params;
  const decodedAuthor = decodeURIComponent(author);
  return <AuthorTitlesClient author={decodedAuthor} />;
}
