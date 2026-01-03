import * as React from "react";
import { Check, ChevronRight } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarContent className="gap-0">
        {/* We create a collapsible SidebarGroup for each parent. */}

        <Collapsible title={"hello"} defaultOpen className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel
              asChild
              className="group/label text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sm"
            >
              <CollapsibleTrigger>
                General
                <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  <div className="p-2 space-y-2">
                    <Label>Price</Label>
                    <Slider defaultValue={[50]} max={100} step={1} {...props} />
                  </div>
                  <div className="p-2 space-y-2">
                    <Label>Colors</Label>
                    <ul className=" *:flex space-y-2 *:items-center *:gap-2">
                      <li className="text-green-500">
                        <Checkbox />
                        Green
                      </li>
                      <li className="text-red-500">
                        <Checkbox />
                        Red
                      </li>
                      <li className="text-black">
                        <Checkbox />
                        Black
                      </li>
                      <li className="text-blue-500">
                        <Checkbox />
                        Blue
                      </li>
                    </ul>
                  </div>
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
        <Collapsible title={"hello"} defaultOpen className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel
              asChild
              className="group/label text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sm"
            >
              <CollapsibleTrigger>
                Brands
                <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  <div className="p-2 space-y-2">
                    
                    <ul className=" *:flex space-y-2 *:items-center *:gap-2">
                      <li >
                        <Checkbox />
                        Nike
                      </li>
                      <li >
                        <Checkbox />
                        Addisas
                      </li>
                      <li >
                        <Checkbox />
                        Black
                      </li>
                      <li >
                        <Checkbox />
                        Blue
                      </li>
                    </ul>
                  </div>
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
