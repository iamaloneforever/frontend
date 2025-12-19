"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Zoom, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface ShowProductProps {
    title:string
}

export default function ShowcaseProduct({title}:ShowProductProps) {
  const items = ["hello", "world", "foo", "bar"];

  return (
    <div className="m-20">
      <h1 className="text-center text-2xl mb-10">{title}</h1>
      <Swiper
        modules={[Zoom, Pagination, Autoplay]}
        spaceBetween={50}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
          1280: { slidesPerView: 4, spaceBetween: 40 },
        }}
        zoom
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
        className="!pb-15"
      >
        {items.map((item, id) => (
          <SwiperSlide key={id}>
            <Card >
              <CardHeader>
                <Image
                  src={"/Hero.png"}
                  width={300}
                  height={200}
                  alt="Hero Photo"
                />
              </CardHeader>
              <CardContent>
                <p>{item}</p>
                <p className="truncate">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis, quasi? Eum, excepturi? Soluta recusandae tempore
                  incidunt, nobis iure ab quia adipisci eveniet doloremque velit
                  aspernatur, optio nihil pariatur, suscipit asperiores!
                </p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button size="lg" className="bg-blue-500 hover:bg-blue-400">
                  <ShoppingCart className="h-5 w-5 mb-1" />{" "}
                  Buy Now
                </Button>
              </CardFooter>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
