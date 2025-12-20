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
import { Menu, Heart, CircleUser, ShoppingBag, LogIn } from "lucide-react";
import { Button } from "./ui/button";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import { motion } from "motion/react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { useCartStore } from "@/context/CartContext";
import { useUserStore } from "@/context/UserContext";

const MotionButton = motion.create(Button);

export default function Navbar() {
  const cartCount = useCartStore((state) =>
    state.cartItems.reduce((total, item) => total + item.quantity, 0)
  );
  const user = useUserStore((state) => state.user);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    const Brand = SplitText.create(".Brand", { type: "chars" });
    const t1 = gsap.timeline();
    t1.from(Brand.chars, {
      y: 20,
      stagger: 0.04,
    });
    mm.add("(min-width: 1024px)", () => {
      t1.from(".MenuTD", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
      });
    });
    t1.from(".MenuT", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
    });
  });

  return (
    <div className="p-5 fixed w-full top-0 z-10 flex items-center justify-between bg-white shadow-md">
      <div>
        <Link href={"/home"} className="text-2xl pl-10 font-bold Brand text-blue-500">
          Amir Shoes
        </Link>
      </div>

      <div className="items-center gap-6 hidden lg:flex">
        <NavigationMenu viewport={false}>
          <NavigationMenuList className="flex gap-4">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="transition-colors MenuTD duration-200">
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
              <NavigationMenuTrigger className="transition-colors duration-200 MenuTD">
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
        <div className="MenuTD">
          <MotionButton
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            className="bg-pink-500 text-white  font-semibold px-5 py-2 rounded-lg shadow-lg shadow-pink-300/50 hover:bg-pink-400 transition duration-300 ease-in-out"
          >
            Support Us
          </MotionButton>
        </div>
        <div className="MenuTD">
        {user ? (
            <Button variant={"outline"} asChild>
              <Link href="/dashboard">
                {" "}
                <CircleUser /> {user.name}
              </Link>
            </Button>
          ) : (
            <Button variant={"outline"} asChild>
              <Link href="/auth/login">
                <LogIn />
                Login
              </Link>
            </Button>
          )}
        </div>
       
        <div className="MenuTD">
          <Button variant={"ghost"} className="relative">
            <ShoppingBag />
            {cartCount > 0 && (
              <Badge className="absolute -top-2 -right-2 h-5 min-w-5 flex items-center justify-center px-1 text-xs">
                {cartCount > 99 ? "99+" : cartCount}
              </Badge>
            )}
            Cart
          </Button>
        </div>
      </div>

      <div className="flex lg:hidden gap-4 items-center">
        <div className="MenuT">
          {user ? (
            <Button variant={"outline"} asChild>
              <Link href="/dashboard">
                {" "}
                <CircleUser /> {user.name}
              </Link>
            </Button>
          ) : (
            <Button variant={"outline"} asChild>
              <Link href="/auth/login">
                <LogIn />
                Login
              </Link>
            </Button>
          )}
        </div>
        <div className="MenuT">
          <Button variant={"ghost"} className="relative">
            <ShoppingBag />
            {cartCount > 0 && (
              <Badge className="absolute -top-2 -right-2 h-5 min-w-5 flex items-center justify-center px-1 text-xs">
                {cartCount > 99 ? "99+" : cartCount}
              </Badge>
            )}
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <div className="MenuT">
              <Button
                size={"icon-lg"}
                className="bg-blue-500  hover:bg-blue-400"
              >
                <Menu className="h-5 w-5" />
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
              <Heart className="h-4 w-4 mb-1" />
              Support us
            </Button>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
