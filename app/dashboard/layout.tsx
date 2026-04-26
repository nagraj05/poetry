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
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-11 shrink-0 items-center border-b border-border/50 sticky top-0 z-10 bg-background/90 backdrop-blur-sm">
          <div className="flex justify-between items-center w-full px-4 gap-3">
            <div className="flex items-center gap-2 overflow-hidden min-w-0">
              <SidebarTrigger className="h-6 w-6 text-muted-foreground/60 hover:text-foreground" />
              <Separator
                orientation="vertical"
                className="h-3 shrink-0 opacity-40"
              />
              <div className="hidden sm:block">
                <DynamicBreadcrumb />
              </div>
            </div>
            <div className="flex items-center gap-2.5 shrink-0">
              <ModeToggle />
              <Suspense
                fallback={
                  <div className="w-28 h-7 bg-muted animate-pulse rounded" />
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
  );
}
