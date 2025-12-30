import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

import {
  Heart,
  Share2,
  MessageCircle,
  Flame,
  Truck,
  Shield,
  Package,
  TruckIcon,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
export default function CartCard() {
  return (
    <div className="flex items-center m-4  justify-center flex-col">
      {/* INFO */}
      <Card className="lg:block w-full  border-0 shadow-none ">
        <CardHeader>
          <Label htmlFor="promocode" className="text-gray-500">
            Promo Code
          </Label>
          <div className="flex gap-2">
            <Input placeholder="Promo Code" id="promocode" />
            <Button type="submit" className="w-1/3">
              Subscribe
            </Button>
          </div>
        </CardHeader>

        <Separator className="my-4" />

        <CardContent>
          <div className="grid grid-cols-2 space-y-2 my-4 text-gray-600 grid-rows-3">
            <h1>Shopping cost</h1>
            <h1 className="text-end">TDB</h1>
            <h1>Discount</h1>
            <h1 className="text-end">- $0</h1>
            <h1>Tax</h1>
            <h1 className="text-end">TDB</h1>
          </div>
        </CardContent>
        <Separator />
        <CardFooter className="flex justify-end px-0">
          <Button className="w-full my-5 text-xl flex gap-2" size="lg">
            Checkout
            <TruckIcon className="!w-6 !h-6" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
