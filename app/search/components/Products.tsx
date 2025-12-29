"use client"
import React from 'react'
import Link from 'next/link'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useCartStore } from "@/context/CartContext";
import { toast } from 'sonner';
import { ShoppingCart } from 'lucide-react';

export default function Products() {
  const addToCart = useCartStore((state) => state.addToCart);
  const items = ["hello", "world", "foo", "bar","hello","hello","hello"];

  const handleAddToCart = (item: string) => {
    addToCart(item);
    toast.success("به سبد خرید اضافه شد");
  };

  return (
    <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-10 m-5'>
      {items.map((item, id) => (
        <Link key={id} href={`/product/${item}`} className="block">
          <Card className="cursor-pointerhover:shadow-lg transition">
            <CardHeader>
              <Image
                src={"/Hero.png"}
                width={500}
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
            <CardFooter className='flex items-center gap-4'>
              <span className="ml-2 text-2xl text-blue-500">
                {(4000000).toLocaleString()}
              </span>
              <h1>تومن</h1>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  )
}
