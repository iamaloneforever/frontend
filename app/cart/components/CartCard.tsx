"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TruckIcon } from "lucide-react";
import { toast } from "sonner";

import { useCartStore } from "@/context/CartContext";

export default function CartCard() {
  const cartItems = useCartStore((state) => state.cartItems);

  // mock values
  const PRICE = 64;
  const SHIPPING = 0;
  const TAX = 0;

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.quantity * PRICE,
    0
  );

  const total = subtotal + SHIPPING + TAX;

  return (
    <div className="flex items-center my-10 mx-5 flex-col">
      <Card className="lg:block w-full border-0 shadow-none">
        {/* Promo */}
        <CardHeader>
          <Label htmlFor="promocode" className="text-gray-500">
            Promo Code
          </Label>
          <div className="flex gap-2">
            <Input placeholder="Promo Code" id="promocode" />
            <Button
              type="button"
              className="w-1/3"
              onClick={() => toast("Promo not implemented yet")}
            >
              Apply
            </Button>
          </div>
        </CardHeader>

        <Separator className="my-4" />

        {/* Summary */}
        <CardContent>
          <div className="grid grid-cols-2 space-y-2 my-4 text-gray-600">
            <h1>Subtotal</h1>
            <h1 className="text-end">${subtotal}</h1>

            <h1>Discount</h1>
            <h1 className="text-end">- $0</h1>

            <h1>Shipping</h1>
            <h1 className="text-end">
              {SHIPPING === 0 ? "TBD" : `$${SHIPPING}`}
            </h1>

            <h1>Tax</h1>
            <h1 className="text-end">
              {TAX === 0 ? "TBD" : `$${TAX}`}
            </h1>
          </div>
        </CardContent>

        <Separator />

        {/* Checkout */}
        <CardFooter className="flex justify-end px-0">
          <Button
            className="w-full my-5 text-xl flex gap-2"
            size="lg"
            disabled={cartItems.length === 0}
          >
            Checkout
            <TruckIcon className="!w-6 !h-6" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
