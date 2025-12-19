"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import { Heart, Share2, MessageCircle, Flame, Truck, Shield, Package } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { toast } from "sonner";

type ColorType = {
  name: string;
  value: string;
};

export default function ProductView() {
  const colors: ColorType[] = [
    { name: "مشکی", value: "#000000" },
    { name: "زرد", value: "#eab308" },
    { name: "سبز", value: "#22c55e" },
  ];

  const [selectedColor, setSelectedColor] = useState<ColorType>(colors[0]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3  gap-10 p-10">
      <Card>
        <CardHeader className="p-0">
          <Swiper
            modules={[Pagination, Navigation]}
            pagination={{ clickable: true }}
            navigation
            slidesPerView={1}
            className="w-full h-100"
          >
            {[1, 2].map((i) => (
              <SwiperSlide key={i} className="w-full h-80 lg:h-96">
                <Image
                  src="/Hero.png"
                  alt="Product"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-md"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </CardHeader>

        <CardContent>
          <ul className="flex justify-between text-xl">
            <li>
              <Heart className="h-5 w-5" />
            </li>
            <li>
              <Share2 className="h-5 w-5" />
            </li>
            <li>
              <MessageCircle className="h-5 w-5" />
            </li>
          </ul>
        </CardContent>
      </Card>
      {/* COLORS */}
      <div className="flex flex-col gap-6">
        <div className="flex justify-between">
          <Badge variant="outline">۱ دیدگاه</Badge>
          <Badge className="bg-red-600 flex gap-2">
            <Flame className="h-4 w-4" />
            پرطرفدار
          </Badge>
          <Badge variant={"outline"} className="lg:hidden">
          <Truck className="h-4 w-4 mr-1" />
          ارسال فوری
          </Badge>
        </div>

        <div className="flex justify-end items-center gap-2">
          <span
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: selectedColor.value }}
          />
          <span>{selectedColor.name}</span>
          <span>: رنگ</span>
        </div>

        <div className="flex justify-between gap-2">
          {colors.map((color) => (
            <Button
              key={color.name}
              variant={"outline"}
              onClick={() => setSelectedColor(color)}
              className="flex gap-2"
            >
              {color.name}
              <span
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: color.value }}
              />
            </Button>
          ))}
        </div>
      </div>

      {/* INFO */}
      <Card className="hidden lg:block">
        <CardHeader>
          <div className="flex justify-between">
            <h1 className="text-xl font-bold">Nike Model 1012</h1>
            <Badge variant="secondary" className="max-h-10">
              <Truck className="h-4 w-4" />
              ارسال سریع
            </Badge>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            quaerat vero eveniet explicabo itaque voluptatibus sapiente quod,
            nemo ab, deserunt totam officia quisquam ducimus! Harum hic nisi
            magnam nihil id.
          </p>
        </CardHeader>

        <Separator className="my-4" />

        <CardContent>
          <h1 className="text-sm flex items-center justify-end">
            تومان
            <span className="ml-2 text-2xl text-blue-500">
              {(4000000).toLocaleString()}
            </span>
          </h1>

          <Button
            onClick={() => toast.success("به سبد خرید اضافه شد")}
            className="w-full my-5"
          >
            خرید
          </Button>

          <div className="flex items-center justify-end gap-3">
            <span>۷ روز ضمانت بازگشت</span>
            <Shield className="h-5 w-5" />
          </div>

          <Separator className="my-4" />

          <CardFooter className="flex justify-end px-0">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" className="flex gap-3">
                  روش‌های ارسال
                  <Package className="h-4 w-4" />
                </Button>
              </DialogTrigger>

              <DialogContent>
                <DialogHeader>
                  <DialogTitle>روش‌های ارسال</DialogTitle>
                </DialogHeader>

                <Separator className="my-4" />

                <Accordion type="single" collapsible>
                  <AccordionItem value="normal">
                    <AccordionTrigger>ارسال معمولی</AccordionTrigger>
                    <AccordionContent>۷ روز کاری</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="fast">
                    <AccordionTrigger>ارسال سریع</AccordionTrigger>
                    <AccordionContent>۱ تا ۲ روز کاری</AccordionContent>
                  </AccordionItem>
                </Accordion>
              </DialogContent>
            </Dialog>
          </CardFooter>
        </CardContent>
      </Card>
      <div className="fixed bottom-0 px-2 bg-white left-0 w-full z-20 h-20 border-t-2 items-center lg:hidden flex justify-between">
        
        <h1 className="text-sm flex items-center justify-end">
          
          تومان
          <span className="ml-2 text-2xl text-blue-500">
            {(4000000).toLocaleString()}
          </span>
          
        </h1>
        <Button
          className="bg-blue-400 w-1/2"
          onClick={() =>
            toast.success("به سبد خرید اضافه شد", {
              position: "top-center",
              duration: 3000,
            })
          }
        >
          خرید
        </Button>
      </div>
    </div>
  );
}
