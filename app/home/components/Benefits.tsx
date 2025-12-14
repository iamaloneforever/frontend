"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  faFaceGrinHearts,
  faShield,
  faShoppingCart,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { motion } from "motion/react";
import React from "react";

const MotionCard = motion.create(Card);

export default function Benefits() {
const container = React.useRef(null);

useGSAP(() => {
  gsap.from(".CardA", {
    y: 20,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".benefits-grid",
      start: "top 80%",
      end: "bottom 30%",

    },
  });
});



  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-center text-2xl">چرا ما ؟</h1>
      <div className="grid benefits-grid lg:grid-cols-2 lg:grid-rows-3 my-20  gap-10 w-[60vw]">
        <MotionCard
          initial={{ scale: 1 }}
          whileHover={{
            scale: 1.1,
            y: -10,
            x: -10,
            backgroundColor: "#30a145",
            boxShadow: "10px 10px 20px #30a145",
          }}
          className="bg-green-600 CardA text-white"
        >
          <CardHeader className="flex flex-col gap-10 items-center">
            <FontAwesomeIcon icon={faTruck} className="text-4xl" />
            <h1 className="text-2xl">سرعت در ارسال</h1>
          </CardHeader>
        </MotionCard>

        <MotionCard
          className="row-span-2 bg-yellow-500 CardA text-white"
          initial={{ scale: 1 }}
          whileHover={{
            scale: 1.1,
            y: -10,
            x: -10,
            backgroundColor: "#F9B806",
            boxShadow: "10px 10px 20px #F9B806",
          }}
        >
          <CardContent className="flex flex-col  gap-10 h-full justify-center items-center">
            <FontAwesomeIcon icon={faFaceGrinHearts} className="text-4xl" />
            <h1 className="text-2xl">اطمینان</h1>
          </CardContent>
        </MotionCard>

        <MotionCard
          className="bg-blue-500 CardA text-white"
          initial={{ scale: 1 }}
          whileHover={{
            scale: 1.1,
            y: -10,
            x: -10,
            backgroundColor: "#3385FF",
            boxShadow: "10px 10px 20px #3385FF",
          }}
        >
          <CardHeader className="flex flex-col gap-10 items-center">
            <FontAwesomeIcon icon={faShield} className="text-4xl" />
            <h1 className="text-2xl">سلامت کالا</h1>
          </CardHeader>
        </MotionCard>
      </div>
    </div>
  );
}
