"use client";
import { Button } from "@/components/ui/button";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { motion } from "motion/react";
import Image from "next/image";
import React from "react";


export default function Hero() {
  useGSAP(() => {
    const Text = SplitText.create(".Text", { type: "words" });
    const t1 = gsap.timeline();
    t1.from(Text.words, {
      y: 20,
      opacity: 0,
      stagger: 0.05,
    });
    t1.from(".image", {
      x: "100vh",
      opacity: 0,
    });
    t1.from(".button", {
      y: 10,
      opacity: 0,
    });
  });
  return (
    <div className="bg-red-400 Text h-fit py-20 grid text-white grid-cols-1 gap-10 lg:grid-cols-2 w-full">
      <div className="flex p-10 space-y-5 flex-wrap items-center flex-col justify-center">
        <h1 className="font-bold text-4xl">Fly With Addias</h1>
        <p className="text-sm text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
          assumenda ipsa quos corporis eius sequi qui quibusdam eligendi?
          Recusandae vero labore accusantium nesciunt molestias eos commodi,
          similique deserunt dignissimos suscipit.
        </p>
        <div className="button">
          <Button size={"lg"} className="bg-red-800   hover:bg-pink-700 hover:shadow-2xl shadow-pink-400 hover:scale-110">
            <FontAwesomeIcon size="lg" icon={faCartShopping} className="mb-1" />
            <h1 className="font-bold">Buy Now</h1>
          </Button>
        </div>
      </div>
      <div className="h-full image flex items-center justify-center">
        <Image src={"/Hero.png"} width={300} height={200} alt="Hero Photo" />
      </div>
    </div>
  );
}
