"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ShoppingCart } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Image from "next/image";
import { toast } from "sonner";
import { useCartStore } from "@/context/CartContext";

gsap.registerPlugin(ScrollTrigger, SplitText);

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
      product: {
        id: "1",
        name: "Adidas Ultraboost",
        price: 64,
        image: "/Hero.png",
      },
    },
    {
      id: "slide-2",
      title: "Fly With Nike",
      description: "جدیدترین مدل نایک با تکنولوژی روز",
      bgColor: "bg-blue-400",
      buttonColor:
        "bg-blue-800 hover:bg-blue-700 hover:shadow-2xl shadow-blue-400",
      product: {
        id: "2",
        name: "Nike Air Max",
        price: 75,
        image: "/Hero.png",
      },
    },
    {
      id: "slide-3",
      title: "Fly With Nike",
      description: "جدیدترین مدل نایک با تکنولوژی روز",
      bgColor: "bg-yellow-400",
      buttonColor:
        "bg-yellow-800 hover:bg-yellow-700 hover:shadow-2xl shadow-yellow-400",
      product: {
        id: "3",
        name: "Nike Air Max",
        price: 75,
        image: "/Hero.png",
      },
    },
  ];

  const handleAddToCart = (productId: string) => {
    addToCart(productId);
    toast.success("به سبد خرید اضافه شد");
  };

  useGSAP(() => {
    const sections = document.querySelectorAll(".Text");

    sections.forEach((section) => {
      const split = SplitText.create(section, { type: "words" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        },
      });

      tl.from(split.words, {
        y: 20,
        opacity: 0,
        stagger: 0.05,
      });

      tl.from(
        section.querySelector(".image"),
        { x: 100, opacity: 0, duration: 1 },
        "-=0.5"
      );

      tl.from(
        section.querySelector(".button"),
        { y: 10, opacity: 0, duration: 0.5 },
        "-=0.5"
      );
    });
  }, []);

  return (
    <Carousel>
      <CarouselContent className="Box">
        {heroSlides.map((slide) => (
          <CarouselItem key={slide.id}>
            <div
              className={`${slide.bgColor} Text lg:h-[80vh] h-[100vh] py-20 grid text-white grid-cols-1 gap-10 lg:grid-cols-2 w-full`}
            >
              {/* Text */}
              <div className="flex p-10 space-y-5 flex-wrap items-center flex-col justify-center">
                <h1 className="font-bold text-4xl">{slide.title}</h1>
                <p className="text-sm text-center">{slide.description}</p>
                <div className="button">
                  <Button
                    size={"lg"}
                    className={`${slide.buttonColor} hover:scale-110 flex gap-2`}
                    onClick={() => handleAddToCart(slide.product.id)}
                  >
                    <ShoppingCart className="h-5 w-5 mb-1" />
                    <h1 className="font-bold">
                      Buy Now - ${slide.product.price}
                    </h1>
                  </Button>
                </div>
              </div>

              {/* Image */}
              <div className="h-full image flex items-center justify-center">
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
