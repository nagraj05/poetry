"use client";

import { useQuery } from "@tanstack/react-query";
import { getPoem } from "@/services/poetryService";

export function usePoem(author: string, title: string) {
  return useQuery({
    queryKey: ["poem", author, title],
    queryFn: () => getPoem(author, title),
    enabled: !!author?.trim() && !!title?.trim(),
    staleTime: 1000 * 60 * 5,
  });
}
