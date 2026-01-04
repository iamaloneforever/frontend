"use client"
import { AppSidebar } from "./components/Sidebar";

import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Products from "./components/Products";
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams() as { query: string };
  const query = params.query;  
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="bg-background sticky border-t-2 top-20 z-50 flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <h1>Search : <span className="font-bold text-xlawd">{query}</span></h1>
        </header>

        <Products  searchQuery={query}/>
      </SidebarInset>
    </SidebarProvider>
  );
}
