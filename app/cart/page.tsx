import React from "react";
import CartCard from "./components/CartCard";
import { ShoppingBag } from "lucide-react";
import CartProducts from "./components/CartProducts";

export default function page() {
  return (
    <div className="min-h-screen">
      <div className="mt-10 flex justify-center items-center gap-4">
        <ShoppingBag className="w-[clamp(2.5rem,6vw,4rem)] h-[clamp(2.5rem,6vw,4rem)]" />
        <h1 className="text-[clamp(1.5rem,4vw,2.5rem)] font-semibold">Cart</h1>
      </div>

      <div className=" w-full h-full grid grid-cols-1 lg:grid-cols-3">
        <CartProducts />
        <CartCard />
      </div>
    </div>
  );
}
