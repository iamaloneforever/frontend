"use client"
import { AppSidebar } from "@/app/dashboard/components/app-sidebar"
import CursorFollow from "@/components/smoothui/cursor-follow"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { useUserStore } from "@/context/UserContext";
import Link from "next/link";

export default function Page({ children }: { children: React.ReactNode }) {
  const user = useUserStore((state) => state.user);
  if (!user)
    return (
      <div className="h-screen flex items-center justify-center flex-col gap-10">
        <h1 className="text-5xl">You Cant Be Here</h1>
        <Button className="w-1/3 h-10">
          <Link href={"/home"}>Home</Link>
        </Button>
        
      </div>
    );
  return (
    <CursorFollow  >
    <SidebarProvider className="my-20" style={{cursor:"none"}}>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        {children}
      </SidebarInset>
    </SidebarProvider>
    </CursorFollow>
  )
}
