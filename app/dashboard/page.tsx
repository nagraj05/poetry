import { Suspense } from "react";
import { AuthorsClient } from "./AuthorsClient";
import { PoetryLoader } from "@/components/poetry-loader";

export default function Page() {
  return (
    <Suspense fallback={<PoetryLoader />}>
      <AuthorsClient />
    </Suspense>
  );
}
