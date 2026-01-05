"use client";
import React from "react";
import Charts from "./components/Charts";
import { useUserStore } from "@/context/UserContext";
import PurchassStatus from "./components/PurchassStatus";
import TypewriterText from "@/components/smoothui/typewriter-text";



export default function page() {
  const user = useUserStore((state) => state.user);
  return (
    
    <div className="m-10 space-y-10 "  >
      <div>
      <TypewriterText speed={100} className="font-bold  text-2xl">
        {`Welcome Back ${user!.name}`}
      </TypewriterText>
      </div>
    
      <Charts />
      <PurchassStatus />
      
    </div>

  );
}
