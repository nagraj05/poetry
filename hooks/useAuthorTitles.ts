"use client";

import { useQuery } from "@tanstack/react-query";
import { getTitlesByAuthor } from "@/services/poetryService";

export function useAuthorTitles(author: string) {
  return useQuery({
    queryKey: ["titles", author],
    queryFn: () => getTitlesByAuthor(author),
    enabled: !!author?.trim(),
    staleTime: 1000 * 60 * 5,
  });
}