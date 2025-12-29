import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

import { Heart, Share2, MessageCircle, Flame, Truck, Shield, Package } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { toast } from "sonner";
export default function CartCard() {
  return (
    <div className='flex items-center m-10 justify-center flex-col'>
    

      {/* INFO */}
      <Card className="hidden lg:block w-full h-[70%]">
        <CardHeader>
          <div className="flex justify-between">
            <h1 className="text-xl font-bold">Cart</h1>
          
          </div>
        
        </CardHeader>

        <Separator className="my-4" />

        <CardContent>
          <h1 className="text-sm flex items-center justify-end">
            تومان
            <span className="ml-2 text-2xl text-blue-500">
              {(4000000).toLocaleString()}
            </span>
          </h1>

          <Button
            
            className="w-full my-5"
          >
            خرید
          </Button>

          <div className="flex items-center justify-end gap-3">
            <span>۷ روز ضمانت بازگشت</span>
            <Shield className="h-5 w-5" />
          </div>

          <Separator className="my-4" />

          <CardFooter className="flex justify-end px-0">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" className="flex gap-3">
                  روش‌های ارسال
                  <Package className="h-4 w-4" />
                </Button>
              </DialogTrigger>

              <DialogContent>
                <DialogHeader>
                  <DialogTitle>روش‌های ارسال</DialogTitle>
                </DialogHeader>

                <Separator className="my-4" />

                <Accordion type="single" collapsible>
                  <AccordionItem value="normal">
                    <AccordionTrigger>ارسال معمولی</AccordionTrigger>
                    <AccordionContent>۷ روز کاری</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="fast">
                    <AccordionTrigger>ارسال سریع</AccordionTrigger>
                    <AccordionContent>۱ تا ۲ روز کاری</AccordionContent>
                  </AccordionItem>
                </Accordion>
              </DialogContent>
            </Dialog>
          </CardFooter>
        </CardContent >
      </Card>
    </div>
  )
}
