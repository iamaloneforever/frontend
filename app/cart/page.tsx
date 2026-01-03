import React from "react";
import CartCard from "./components/CartCard";
import { ShoppingBag } from "lucide-react";
import CartProducts from "./components/CartProducts";

export default function page() {
  return (
    <div className="min-h-screen">
   

      <div className=" w-full h-full grid grid-cols-1 gap-10  lg:grid-cols-3">
        <CartProducts />
        <CartCard />
      </div>
    </div>
  );
}
