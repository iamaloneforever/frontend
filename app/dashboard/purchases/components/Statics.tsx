"use client";

import { Separator } from "@/components/ui/separator";
import { CountingNumber } from "@/components/ui/shadcn-io/counting-number";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";

export default function Statics() {
  const [mounted, setMounted] = useState(false); // فقط بعد از mount رندر می‌کنیم
  const isDesktop = useMediaQuery({ minWidth: 768 });

  useEffect(() => {
    setMounted(true);
  }, []);

  const stats = [
    { value: 12000, title: "Users", color: "text-blue-500" },
    { value: 1500, title: "Projects", color: "text-green-500" },
    { value: 87, title: "Awards", color: "text-red-500" },
  ];

  const formatNumber = (num: number) => num.toLocaleString();

  if (!mounted) return null; // تا mount نشه چیزی رندر نمی‌کنه → no hydration mismatch

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
            className="text-3xl font-bold"
          >
            {formatNumber(stat.value)}
          </CountingNumber>

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
