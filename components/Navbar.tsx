"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBurger,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "./ui/button";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import {motion} from "motion/react"

const MotionButton = motion.create(Button);


export default function Navbar() {
  useGSAP(() => {
    const Brand = SplitText.create(".Brand", { type: "chars" });
    const t1 = gsap.timeline();
    t1.from(Brand.chars,{
      y:20,
      stagger:0.04
    })
    t1.from(".MenuT", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger:0.3
    });
  });
  
  return (
    <div className="p-5 flex items-center justify-between bg-white shadow-md">
      <div>
        <h1 className="text-2xl font-bold Brand text-blue-500">Amir Shoes</h1>
      </div>

      <div className="flex items-center gap-6 hidden lg:flex">
        <NavigationMenu viewport={false}>
          <NavigationMenuList className="flex gap-4">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="transition-colors MenuT duration-200">
                Brands
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink className="block px-4 py-2 hover:bg-blue-100 rounded-md">
                  Nike
                </NavigationMenuLink>
                <NavigationMenuLink className="block px-4 py-2 hover:bg-blue-100 rounded-md">
                  Adidas
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="transition-colors duration-200 MenuT">
                Company
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink className="block  px-4 py-2 hover:bg-blue-100 rounded-md">
                  About Us
                </NavigationMenuLink>
                <NavigationMenuLink className="block  px-4 py-2 hover:bg-blue-100 rounded-md">
                  Careers
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      <div className="MenuT">
          <MotionButton initial={{scale:1}}  whileHover={{scale:1.1}} className="bg-pink-500 text-white  font-semibold px-5 py-2 rounded-lg shadow-lg shadow-pink-300/50 hover:bg-pink-400 transition duration-300 ease-in-out">
          Support Us
        </MotionButton>
      </div>
      
      </div>

      <div className="flex lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <div className="MenuT">
              <Button
                size={"icon-lg"}
                className="bg-blue-500  hover:bg-blue-400"
              >
                <FontAwesomeIcon icon={faBurger}></FontAwesomeIcon>
              </Button>
            </div>
          </SheetTrigger>
          <SheetContent side={"left"} className="">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>
                Browse our brands and company info
              </SheetDescription>
            </SheetHeader>
            <Accordion type="single" collapsible className="w-full  p-10 mt-20">
              <AccordionItem value="brands">
                <AccordionTrigger>Brands</AccordionTrigger>
                <AccordionContent>
                  <p className="py-2">Nike</p>
                  <p className="py-2">Adidas</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="company">
                <AccordionTrigger>Company</AccordionTrigger>
                <AccordionContent>
                  <p className="py-2">About Us</p>
                  <p className="py-2">Careers</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Button className="bg-gradient-to-r  from-pink-400 mx-10 to-pink-600 hover:to-pink-700 hover:from-pink-500 text-white">
              <FontAwesomeIcon icon={faHeart} className="mb-1" />
              Support us
            </Button>

          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
