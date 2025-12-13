"use client";
import { faGithub, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { useEffect } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Footer() {
  useEffect(() => {
    const title = SplitText.create(".title", { type: "chars" });

    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".footer",
        start: "top 80%", // وقتی که بالای فوتر به 80% صفحه رسید
        end: "bottom 20%",
        toggleActions: "play reverse play reverse",
      },
    });

    t1.from(title.chars, {
      y: 20,
      opacity: 0,
      stagger: 0.05,
    })
      .to(".title", { scale: 1.1 })
      .to(".title", { scale: 1 });
  }, []);

  return (
    <div className="footer bg-blue-400 w-full gap-20 p-20 grid grid-cols-1 lg:grid-cols-2 text-white">
      <div className="flex items-center flex-col gap-2">
        <h1 className="text-2xl font-bold title">Amir Shoes</h1>
        <p className="text-sm text-gray-300">A Store</p>
        <ul className="mt-5 space-x-5 *:text-xl *:cursor-pointer flex">
          <FontAwesomeIcon icon={faGithub} />
          <FontAwesomeIcon icon={faTelegram} />
        </ul>
      </div>
      <div className="grid grid-cols-2">
        <div className="flex justify-center items-center">
          <ul className="space-y-3 title">
            {["Home", "Shop", "Contact"].map((item, i) => (
              <motion.li
                key={i}
                whileHover={{ y: -10, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="cursor-pointer"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center items-center title">
          <ul className="space-y-4">
            {["About", "Blog", "FAQ"].map((item, i) => (
              <motion.li
                key={i}
                whileHover={{ y: -10, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="cursor-pointer"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
