"use client";

import { Separator } from "@/components/ui/separator";
import { CountingNumber } from "@/components/animate-ui/primitives/texts/counting-number";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";

export default function Statics() {
  const [mounted, setMounted] = useState(false); 
  const isDesktop = useMediaQuery({ minWidth: 768 });

  useEffect(() => {
    setMounted(true);
  }, []);

  // فرض می‌کنیم این داده‌ها از API یا state گرفته شده
  const totalPurchases = 87;       // تعداد کل خریدها
  const totalProducts = 1500;      // تعداد کل محصولات خریداری شده
  const totalPaid = 12000;         // کل مبلغ پرداختی

  const stats = [
    { value: totalPurchases, title: "تعداد کل خریدها", color: "text-blue-500" },
    { value: totalProducts, title: "کل محصولات خریداری شده", color: "text-green-500" },
    { value: totalPaid, title: "کل مبلغ پرداختی (تومان)", color: "text-red-500" },
  ];

  if (!mounted) return null; 

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {stats.map((stat, idx) => (
        <div key={idx} className="relative flex flex-col items-center py-6">
          <p className={`mt-2 text-lg font-medium ${stat.color}`}>{stat.title}</p>

          <CountingNumber
            number={stat.value}
            fromNumber={0}
            decimalPlaces={0}
            padStart
            inView
            locale="fa-IR"  // نمایش اعداد فارسی
            className="text-3xl font-bold"
          />

          {idx !== stats.length - 1 &&
            (isDesktop ? (
              <Separator
                orientation="vertical"
                className="absolute right-0 top-1/2 h-12 -translate-y-1/2"
              />
            ) : (
              <Separator className="mt-6 w-full" />
            ))}
        </div>
      ))}
    </div>
  );
}
