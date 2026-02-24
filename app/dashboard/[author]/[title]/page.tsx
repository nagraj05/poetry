import PoemContentClient from "./PoemContentClient";

export default async function Page({
  params,
}: {
  params: Promise<{ author: string; title: string }>;
}) {
  const { author, title } = await params;
  const decodedAuthor = decodeURIComponent(author);
  const decodedTitle = decodeURIComponent(title);

  return <PoemContentClient author={decodedAuthor} title={decodedTitle} />;
}
