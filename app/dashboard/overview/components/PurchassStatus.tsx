import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";
import { CountingNumber } from "@/components/ui/shadcn-io/counting-number/index";
import CursorFollow from "@/components/smoothui/cursor-follow";
export default function PurchassStatus() {
  return (
    
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        
      <Card  
       
      >
        <CardHeader className="text-center text-2xl">
          <h1 className="text-green-500" >Deliverd</h1>
        </CardHeader>
        <CardContent className="text-3xl text-center">
          <CountingNumber
            number={4}
            inView={true}
            transition={{ stiffness: 100, damping: 30 }}
            data-cursor-text={"Thank You For Chosing us"}
          />
          ;
        </CardContent>
        <CardContent>
          <Button className="w-full" style={{cursor:"none"}}>See Details</Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="text-center text-2xl">
          <h1 className="text-red-500">Pending</h1>
        </CardHeader>
        <CardContent className="text-3xl text-center">
          <CountingNumber
            number={1}
            inView={true}
            transition={{ stiffness: 100, damping: 30 }}
            data-cursor-text={"They Will Arrive Soon"}
          />
          ;
        </CardContent>
        <CardContent>
          <Button className="w-full">See Details</Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="text-center">
          <h1 className="text-gray-500 text-2xl">Cart</h1>
        </CardHeader>
        <CardContent className="text-3xl text-center">
          <CountingNumber
            number={0}
            inView={true}
            transition={{ stiffness: 100, damping: 30 }}
            data-cursor-text={"Please Buy Them"}
          />
          ;
        </CardContent>
        <CardContent>
          <Button className="w-full">See Details</Button>
        </CardContent>
      </Card>
    </div>
    
  );
}
