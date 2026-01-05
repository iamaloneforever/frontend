"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  User2Icon,
} from "lucide-react"

import { NavMain } from "@/app/dashboard/components/nav-main"
import { NavProjects } from "@/app/dashboard/components/nav-projects"
import { NavUser } from "@/app/dashboard/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"

// This is sample data.
const data = {
  navMain: [
  
    {
      title: "Dashboard",
      url: "/dashboard/overview",
      icon: User2Icon,
      items: [
        {
          title: "Overview",
          url: "/dashboard/overview",
        },
        {
          title: "Purchases",
          url: "/dashboard/purchases",
        },
      ],
    },
    {
      title: "Settings",
      url: "/dashboard/setting",
      icon: Settings2,
      items: [
        {
          title: "Account Settings",
          url: "/dashboard/setting",
        },
        {
          title: "Preferences",
          url: "/dashboard/preferences",
        },
        {
          title: "Billing",
          url: "/dashboard/billing",
        }
      ],
    },
  ],
}

function SidebarFooterContent() {
  const { state } = useSidebar()
  
  if (state === "collapsed") {
    return null
  }
  
  return (
    <h1 className="text-sm">Provided  By <span className="text-xl font-medium">Alone</span></h1>
  )
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
      <NavUser  />
      </SidebarHeader>
      <Separator />
      <SidebarContent>
        <NavMain items={data.navMain} />

      </SidebarContent>
      <SidebarFooter>
        <SidebarFooterContent />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
