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
      url: "#",
      icon: User2Icon,
      items: [
        {
          title: "Overview",
          url: "#",
        },
        {
          title: "Purchases",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Account Settings",
          url: "#",
        },
        {
          title: "Preferences",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
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
