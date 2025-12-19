import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
export default function Details() {
  return (
    <div className="flex justify-center">
      <Tabs defaultValue="About" className="w-[80%]">
        <TabsList className="my-10 mx-auto w-fit justify-center">
          <TabsTrigger value="About">About</TabsTrigger>
          <TabsTrigger value="Details">Details</TabsTrigger>
        </TabsList>
        <TabsContent value="About" >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid ut
          ab in, optio quidem aperiam cupiditate. Temporibus officia suscipit
          porro corporis aperiam alias neque itaque minus aliquam. Nihil,
          dignissimos ullam?
        </TabsContent>
        <TabsContent value="Details">
          <Table>
            
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
               <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
               <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
            </TableBody>
            
          </Table>{" "}
          
        </TabsContent>
      </Tabs>
    </div>
  );
}
