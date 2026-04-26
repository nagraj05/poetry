"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import { useTransition } from "react";

export function SearchBar() {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("q", term);
    } else {
      params.delete("q");
    }
    startTransition(() => {
      replace(`${pathname}?${params.toString()}`);
    });
  };

  return (
    <div className="relative">
      <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-3 w-3 text-muted-foreground/50" strokeWidth={1.5} />
      <input
        type="search"
        placeholder="Search..."
        className="h-7 w-32 pl-6 pr-2.5 text-xs bg-transparent border border-border/50 rounded text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-ring/50 focus:w-40 transition-all duration-300 font-mono"
        defaultValue={searchParams.get("q")?.toString()}
        onChange={(e) => handleSearch(e.target.value)}
      />
      {isPending && (
        <div className="absolute right-2 top-1/2 -translate-y-1/2 h-3 w-3 animate-spin rounded-full border border-foreground/40 border-t-transparent" />
      )}
    </div>
  );
}
