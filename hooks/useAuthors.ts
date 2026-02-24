import { useQuery } from "@tanstack/react-query";
import { getAuthors } from "@/services/authorService";

export const useAuthors = () => {
  return useQuery({
    queryKey: ["authors"],
    queryFn: getAuthors,
    staleTime: 1000 * 60 * 5,
  });
};
