type TitleRow = { title: string };

export async function getTitlesByAuthor(author: string): Promise<string[]> {
  const url = `https://poetrydb.org/author/${encodeURIComponent(author)}/title`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch titles for "${author}"`);

  const data = (await res.json()) as TitleRow[];
  return Array.isArray(data) ? data.map((x) => x.title) : [];
}

export type Poem = {
  title: string;
  author: string;
  lines: string[];
  linecount: string;
};

export async function getPoem(
  author: string,
  title: string,
): Promise<Poem | null> {
  const url = `https://poetrydb.org/author,title/${encodeURIComponent(author)};${encodeURIComponent(title)}`;
  const res = await fetch(url);
  if (!res.ok)
    throw new Error(`Failed to fetch poem "${title}" by "${author}"`);

  const data = await res.json();
  return Array.isArray(data) && data.length > 0 ? data[0] : null;
}
