"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";
import { useCartStore } from "@/context/CartContext";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import _gsap from "gsap/gsap-core";

gsap.registerPlugin(SplitText);

export default function Hero() {
  const addToCart = useCartStore((state) => state.addToCart);

  const heroSlides = [
    {
      id: "slide-1",
      title: "Fly With Addias",
      description: "سبک و راحت برای پیاده‌روی و دویدن روزانه",
      bgColor: "bg-red-400",
      buttonColor:
        "bg-red-800 hover:bg-pink-700 hover:shadow-2xl shadow-pink-400",
      product: { id: "1", name: "Adidas Ultraboost", price: 64, image: "/Hero.png" },
    },
    {
      id: "slide-2",
      title: "Fly With Nike",
      description: "جدیدترین مدل نایک با تکنولوژی روز",
      bgColor: "bg-blue-400",
      buttonColor:
        "bg-blue-800 hover:bg-blue-700 hover:shadow-2xl shadow-blue-400",
      product: { id: "2", name: "Nike Air Max", price: 75, image: "/Hero.png" },
    },
    {
      id: "slide-3",
      title: "Fly With Puma",
      description: "مدل جدید پوما با رنگ‌بندی جذاب",
      bgColor: "bg-yellow-400",
      buttonColor:
        "bg-yellow-800 hover:bg-yellow-700 hover:shadow-2xl shadow-yellow-400",
      product: { id: "3", name: "Puma Runner", price: 70, image: "/Hero.png" },
    },
  ];

  const handleAddToCart = (productId: string) => {
    addToCart(productId);
    toast.success("به سبد خرید اضافه شد");
  };

  useGSAP(() => {
    const timeline = gsap.timeline();
  
    // عنوان (حروف)
    const Title = SplitText.create(".Title", { type: "chars" });
    timeline.from(Title.chars, {
      opacity: 0,
      y: -20,
      stagger: 0.04,
      duration: 0.4,
      ease: "power2.out",
    });
  
    // description (کلمات) → از راست به چپ
    const description = SplitText.create(".description", { type: "words" });
    timeline.from(
      description.words,
      {
        opacity: 0,
        x: 50,
        stagger: { each: 0.07, from: "end" },
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.4" // شروع 0.4 ثانیه قبل از پایان انیمیشن title → overlap
    );
  
    // button (کلمات) → همزمان با description کمی تاخیر
    const ButtonText = SplitText.create(".ButtonText", { type: "words" });
    timeline.from(
      ButtonText.words,
      {
        opacity: 0,
        y: 50,
        stagger: { each: 0.07, from: "end" },
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.3" // شروع کمی قبل از پایان description
    );
  });
  
  

  return (
    <Carousel>
      <CarouselContent className="Box">
        {heroSlides.map((slide, idx) => (
          <CarouselItem key={slide.id}>
            <div
           
              className={`${slide.bgColor} lg:h-[80vh] h-[100vh] py-20 grid text-white grid-cols-1 gap-10 lg:grid-cols-2 w-full`}
            >
              {/* Text */}
              <div className="flex p-10 space-y-5 flex-wrap items-center flex-col justify-center">
                <h1 className="Title font-bold text-4xl">{slide.title}</h1>
                <p className="desc text-sm text-center description">{slide.description}</p>
                <div className="button">
                  <Button
                    size={"lg"}
                    className={`${slide.buttonColor} hover:scale-110 flex gap-2`}
                    onClick={() => handleAddToCart(slide.product.id)}
                  >
                    <ShoppingCart className="h-5 w-5 mb-1 ButtonText" />
                    <h1 className="font-bold ButtonText">Buy Now - ${slide.product.price}</h1>
                  </Button>
                </div>
              </div>

              {/* Image */}
              <div className="image h-full flex items-center justify-center">
                <Image
                  src={slide.product.image}
                  width={300}
                  height={200}
                  alt={slide.product.name}
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
