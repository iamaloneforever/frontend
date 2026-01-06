"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

export default function PurchasessCards() {
  const purchases = [
    {
      image: "/Hero.png",
      price: 150000,
      info: "پرداخت شده",
      date: "1402/10/05",
    },
    {
      image: "/Hero.png",
      price: 85000,
      info: "در حال پردازش",
      date: "1402/10/10",
    },
    {
      image: "/Hero.png",
      price: 120000,
      info: "لغو شده",
      date: "1402/10/12",
    },
  ];

  const formatPrice = (num: number) =>
    num.toLocaleString("fa-IR") + " تومان";

  return (
    <div className="space-y-4">
      {purchases.map((purchase, idx) => (
        <Card key={idx} className="grid grid-cols-3 items-center p-4 gap-4">
          <CardHeader>
            <Image
              src={purchase.image}
              alt="product"
              width={80}
              height={80}
              className="rounded-lg object-cover"
            />
          </CardHeader>
          <CardContent className="flex flex-col justify-center">
            <span className="font-bold text-lg">{formatPrice(purchase.price)}</span>
            <span className="text-gray-500 text-sm">{purchase.info}</span>
          </CardContent>
          <CardContent className="flex items-center justify-center text-gray-400">
            {purchase.date}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
