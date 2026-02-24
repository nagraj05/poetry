import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";

import { DynamicBreadcrumb } from "@/components/dynamic-breadcrumb";
import { BackButton } from "@/components/back-button";
import { SearchBar } from "@/components/search-bar";
import { ModeToggle } from "@/components/mode-toggle";
import { Suspense } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center border-b sticky top-0 z-10 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
            <div className="flex justify-between items-center w-full px-4 gap-4">
              <div className="flex items-center gap-2 overflow-hidden">
                <SidebarTrigger />
                <Separator
                  orientation="vertical"
                  className="mr-2 h-4 shrink-0"
                />
                <DynamicBreadcrumb />
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <ModeToggle />
                <Suspense
                  fallback={
                    <div className="w-32 h-9 bg-muted animate-pulse rounded-md" />
                  }
                >
                  <SearchBar />
                </Suspense>
                <BackButton />
              </div>
            </div>
          </header>
          {children}
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
