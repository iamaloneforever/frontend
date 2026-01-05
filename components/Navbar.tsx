"use client";
import React, { useState } from "react";
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
import {
  Menu,
  Heart,
  CircleUser,
  ShoppingBag,
  LogIn,
  Search,
} from "lucide-react";
import { Button } from "./ui/button";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import { motion } from "motion/react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { useCartStore } from "@/context/CartContext";
import { useUserStore } from "@/context/UserContext";
import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogContent,
  DialogDescription,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useRouter } from "next/navigation";
const MotionButton = motion.create(Button);

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const router = useRouter();
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

  const [isOpen, setIsOpen] = useState(false);
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(searchQuery);

    if (searchQuery === "") return;

    router.push(`/search/${encodeURIComponent(searchQuery)}`);

    setIsOpen(false);
  };

  return (
    <div className="p-5 sticky  top-0 z-10 flex items-center justify-between bg-white shadow-md">
      <div>
        <Link
          href={"/home"}
          className="text-2xl ml-10  font-bold Brand text-blue-500"
        >
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
              <Link href="/dashboard/overview">
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
        <Link href="/cart">
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
        </Link>

        <div className="MenuTD">
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button variant="outline">
                <Search />
              </Button>
            </DialogTrigger>

            <DialogContent>
              <form onSubmit={handleSearch} className="flex flex-col gap-4">
                <DialogHeader>
                  <DialogTitle>Search</DialogTitle>
                  <DialogDescription>
                    Search for your favorite brand or shoe.
                  </DialogDescription>
                </DialogHeader>

                <div className="flex w-full items-center gap-2">
                  <Input
                    type="text"
                    placeholder="Search For Brand Or Shoe"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />

                  <Button type="submit" variant="outline">
                    <Search />
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="flex lg:hidden gap-4 items-center">
        <div className="MenuT">
          {user ? (
            <Button variant={"outline"} asChild>
              <Link href="/dashboard/overview">
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
        <Link href="/cart">
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
        </Link>

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
            <div className="flex w-full items-center gap-2 px-10 my-4">
              <Input
                type="text"
                placeholder="Search For Brand Or Shoe"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />

              <Button type="button" variant="outline" onClick={handleSearch}>
                <Search />
              </Button>
            </div>

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
