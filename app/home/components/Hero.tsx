"use client";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Image from "next/image";
import React, { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Hero() {
  useGSAP(() => {
    const sections = document.querySelectorAll(".Text");

    sections.forEach((section) => {
      const split = SplitText.create(section, { type: "words" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%", // وقتی بالای بخش به 80% صفحه رسید
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
        {
          x: 100,
          opacity: 0,
          duration: 1,
        },
        "-=0.5"
      );

      tl.from(
        section.querySelector(".button"),
        {
          y: 10,
          opacity: 0,
          duration: 0.5,
        },
        "-=0.5"
      );
    });
  }, []);

  return (
    <Carousel>
      <CarouselContent className="Box">
        <CarouselItem>
          <div className="bg-red-400 Text lg:h-[60vh]  h-[80vh] py-20 grid text-white grid-cols-1 gap-10 lg:grid-cols-2 w-full">
            <div className="flex p-10 space-y-5 flex-wrap items-center flex-col justify-center">
              <h1 className="font-bold text-4xl">Fly With Addias</h1>
              <p className="text-sm text-center">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
                assumenda ipsa quos corporis eius sequi qui quibusdam eligendi?
              </p>
              <div className="button">
                <Button
                  size={"lg"}
                  className="bg-red-800 hover:bg-pink-700 hover:shadow-2xl shadow-pink-400 hover:scale-110"
                >
                  <FontAwesomeIcon size="lg" icon={faCartShopping} className="mb-1" />
                  <h1 className="font-bold">Buy Now</h1>
                </Button>
              </div>
            </div>
            <div className="h-full image flex items-center justify-center">
              <Image src={"/Hero.png"} width={300} height={200} alt="Hero Photo" />
            </div>
          </div>
        </CarouselItem>

        <CarouselItem>
          <div className="bg-blue-400 Text lg:h-[60vh] h-[80vh] py-20 grid text-white grid-cols-1 gap-10 lg:grid-cols-2 w-full">
            <div className="flex p-10 space-y-5 flex-wrap items-center flex-col justify-center">
              <h1 className="font-bold text-4xl">Fly With Nike</h1>
              <p className="text-sm text-center">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
                assumenda ipsa quos corporis eius sequi qui quibusdam eligendi?
              </p>
              <div className="button">
                <Button
                  size={"lg"}
                  className="bg-blue-800 hover:bg-blue-700 hover:shadow-2xl shadow-blue-400 hover:scale-110"
                >
                  <FontAwesomeIcon size="lg" icon={faCartShopping} className="mb-1" />
                  <h1 className="font-bold">Buy Now</h1>
                </Button>
              </div>
            </div>
            <div className="h-full image flex items-center justify-center">
              <Image src={"/Hero.png"} width={300} height={200} alt="Hero Photo" />
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}
