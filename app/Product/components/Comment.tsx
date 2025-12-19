"use client";
import {
  Card,
  CardDescription,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
export default function Comment() {
  const formSchema = z.object({
    Name: z.string().min(2).max(20),
    Content: z.string().min(1).max(100),
    Title: z.string().min(1).max(15),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Name: "",
      Content: "",
      Title: "",
    },
  });
  return (
    <div className="my-10 mx-10 space-y-10">
      <Card>
        <CardHeader>
          <CardTitle>Add A Comment</CardTitle>
          <CardDescription>We Will Be Happy</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit((data) => {
                // Convert form data to JSON
                const jsonData = JSON.stringify(data, null, 2);
                console.log("Form data (JSON):", jsonData);

                // Or as a plain object
                console.log("Form data:", data);

                // Reset form after submission
                form.reset();
              })}
            >
              <FormField
                control={form.control}
                name="Title"
                render={({ field }) => (
                  <FormItem className="my-10 space-y-2">
                    <FormLabel>title</FormLabel>
                    <FormControl>
                      <Input placeholder="It Was Great" {...field} />
                    </FormControl>
                    <FormDescription>Title</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Name"
                render={({ field }) => (
                  <FormItem className="my-10 space-y-2">
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="I Am Batman" {...field} />
                    </FormControl>
                    <FormDescription>Your Name</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Separator className="my-4" />
              <FormField
                control={form.control}
                name="Content"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>Content</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Your Content"
                        {...field}
                        id="content"
                      />
                    </FormControl>
                    <FormDescription>Maximum 100 character</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="w-full mt-3">Sumbit</Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {/* Comment */}
      <Card>
        <CardHeader>
          <CardTitle>عالی بود</CardTitle>
          <CardDescription className="ml-2">علی امیری</CardDescription>
        </CardHeader>

        <CardContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </CardContent>
        <Separator />
        <CardFooter>2021/12/19</CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>عالی بود</CardTitle>
          <CardDescription className="ml-2">علی امیری</CardDescription>
        </CardHeader>

        <CardContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </CardContent>
        <Separator />
        <CardFooter>2021/12/19</CardFooter>
      </Card>
    </div>
  );
}
