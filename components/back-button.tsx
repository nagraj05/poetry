"use client";

import { useRouter } from "next/navigation";

export function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="text-[9px] tracking-[0.18em] uppercase font-mono text-muted-foreground/50 hover:text-foreground transition-colors duration-200"
    >
      ← back
    </button>
  );
}
