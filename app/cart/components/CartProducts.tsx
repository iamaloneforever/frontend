"use client";

import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Heart, Trash } from "lucide-react";
import Image from "next/image";

import CardImage from "../../../public/Hero.png";
import { useCartStore } from "@/context/CartContext";

export default function CartProducts() {
  const cartItems = useCartStore((state) => state.cartItems);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  // چون فقط id داریم، قیمت mock
  const PRICE = 64;

  return (
    <div className="flex items-center mx-1 col-span-2 my-10 flex-col">
      <Separator />

      {cartItems.map((item) => (
        <div
          key={item.id}
          className="my-10 grid grid-cols-2 md:grid-cols-4 gap-6 w-full items-center"
        >
          {/* Image */}
          <div className="flex justify-center items-center">
            <Image src={CardImage} alt="product" className="max-w-[150px]" />
          </div>

          {/* Info */}
          <div className="h-full flex justify-center items-center">
            <div className="mx-6">
              <h1 className="text-lg font-medium">
                {item.id}
              </h1>
              <ul className="text-gray-600 text-sm my-4 space-y-1">
                <li>In stock</li>
              </ul>
            </div>
          </div>

          {/* Price / Qty / Total */}
          <div className="flex flex-col col-span-2 space-y-5 md:flex-row mx-4 md:justify-between lg:gap-4">
            <Separator className="md:hidden" />

            <div className="flex justify-center items-center flex-col">
              <Label className="text-gray-600">Each</Label>
              <h1 className="font-bold">${PRICE}</h1>
            </div>

            <div className="flex justify-center items-center flex-col">
              <Label className="text-gray-600">Quantity</Label>
              <Input
                type="number"
                min={1}
                value={item.quantity}
                onChange={(e) =>
                  updateQuantity(item.id, Number(e.target.value))
                }
              />
            </div>

            <div className="flex justify-center items-center flex-col">
              <Label className="text-gray-600">Total</Label>
              <h1 className="font-bold">
                ${PRICE * item.quantity}
              </h1>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-10 mb-2 text-gray-600 col-span-full justify-center">
            <Trash
              className="cursor-pointer"
              onClick={() => removeFromCart(item.id)}
            />
            <Heart className="cursor-pointer" />
          </div>

          <Separator className="col-span-full" />
        </div>
      ))}

      {/* Footer summary */}
      <div className="my-10 flex font-bold justify-between w-1/2">
        <h1>{cartItems.length} item</h1>
        <h1>
          $
          {cartItems.reduce(
            (sum, i) => sum + i.quantity * PRICE,
            0
          )}
        </h1>
      </div>
    </div>
  );
}
