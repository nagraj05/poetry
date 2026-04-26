import * as React from "react";
import { Feather, Users } from "lucide-react";
import Link from "next/link";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

const navItems = [{ title: "Poets", url: "/dashboard", icon: Users }];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader className="border-b border-sidebar-border py-4 px-4">
        <Link href="/" className="flex items-center gap-2.5 group">
          <Feather
            className="h-3.5 w-3.5 text-sidebar-foreground/50 group-hover:text-sidebar-foreground transition-colors"
            strokeWidth={1.5}
          />
          <span className="font-serif italic text-[1.1rem] text-sidebar-foreground tracking-tight leading-none">
            Bronte
          </span>
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-[9px] tracking-[0.18em] uppercase text-sidebar-foreground/35 font-mono px-2">
            Library
          </SidebarGroupLabel>
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <Link href={item.url} className="gap-2.5 text-sm">
                    <item.icon className="h-3.5 w-3.5 opacity-50" strokeWidth={1.5} />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  );
}
