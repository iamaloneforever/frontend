"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Heart, Trash, TruckIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import CardImage from "../../../public/Hero.png";
import Image from "next/image";
export default function CartProducts() {
  const [qty, setQty] = useState(1);

  return (
    <div className="flex items-center m-4 col-span-2 justify-center flex-col">
      <Separator />

      <div className="my-10  grid grid-cols-1 md:grid-cols-4 gap-6 w-full items-center">
        <div className="flex justify-center">
          <Image src={CardImage} alt="product" className="max-w-[150px]" />
        </div>

        <div className="h-full flex ">
         
          <div className="mx-6">
            <h1 className="text-lg font-medium">Adidas Ultraboost</h1>
            <ul className="text-gray-600 text-sm my-4 space-y-1">
              <li>Size: 42</li>
              <li>Color: Red</li>
              <li>In stock</li>
            </ul>
          </div>

         
        </div>
       
        <div className="flex flex-col col-span-2  *:space-y-2 sm:flex-row sm:justify-between gap-4">
        <Separator className="md:hidden"/>
          <div>
            <Label className="text-gray-600">Each</Label>
            <h1 className="font-bold">$64</h1>
          </div>

          <div className="space-y-2">
            <Label className="text-gray-600">Quantity</Label>
            <Input
              type="number"
              min={1}
              value={qty}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d*$/.test(value)) {
                  setQty(Number(value));
                }
              }}
            />
          </div>

          <div>
            <Label className="text-gray-600">Total</Label>
            <h1 className="font-bold">${64 * qty}</h1>
          </div>
        </div>
      </div>
      <div className="flex gap-10 mb-2 text-gray-600">
        <Trash/>
        <Heart/>
      </div>      
      
      <Separator />
      <div className="my-10 flex font-bold justify-between w-1/2">
        <h1>1 item</h1>
        <h1>$39</h1>
      </div>
    </div>
  );
}
