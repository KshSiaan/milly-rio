"use client";

import * as React from "react";
import { BookHeartIcon, InboxIcon, StoreIcon } from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "Admin",
    email: "admin@admin.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Manage Contents",
      url: "#",
      icon: BookHeartIcon,
      isActive: true,
      items: [
        {
          title: "Milly & Rio Books",
          url: "books",
        },
        {
          title: "Manage Fun activies",
          url: "activities",
        },
        {
          title: "Games",
          url: "games",
        },
        {
          title: "Educational Resources",
          url: "education",
        },
      ],
    },
    {
      title: "Shop & Merchandise",
      url: "#",
      icon: StoreIcon,
      isActive: true,
      items: [
        {
          title: "Add new Shop item",
          url: "add-shop",
        },
        {
          title: "Update Shop item",
          url: "update-shop",
        },
        {
          title: "Orders and Transaction",
          url: "transactions",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Inbox",
      url: "inbox",
      icon: InboxIcon,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent className="font-poppins">
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
