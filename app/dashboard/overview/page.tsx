"use client";
import React from "react";
import Charts from "./components/Charts";
import { useUserStore } from "@/context/UserContext";
import PurchassStatus from "./components/PurchassStatus";
import {TypingText} from "@/components/animate-ui/primitives/texts/typing";



export default function page() {
  const user = useUserStore((state) => state.user);
  return (
    
    <div className="m-10 space-y-10 "  >
      <div>
      <TypingText className="font-bold text-2xl" text= {`Welcome Back ${user!.name}`} />
      </div>
    
      <Charts />
      <PurchassStatus />
      
    </div>

  );
}
