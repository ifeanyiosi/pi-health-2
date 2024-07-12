"use client";

import Image from "next/image";
import React from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { joinCommunitySchema } from "@/validations/join-community";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

export default function JoinUs() {
  const benefits = [
    {
      name: "New & limited products",
    },
    {
      name: "Exclusive events",
    },
    {
      name: "Personalised content",
    },
    {
      name: "Special offers",
    },
    {
      name: "Behind the scenes",
    },
  ];

  // 1. Define your form.
  const form = useForm<z.infer<typeof joinCommunitySchema>>({
    resolver: zodResolver(joinCommunitySchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof joinCommunitySchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="bg-[rgb(25,24,23)] flex  w-full min-h-[500px] px-4 md:px-8 lg:px-16 2xl:px-64">
      <div className="   my-[30px] lg:my-[60px] flex flex-col lg:flex-row  w-full  ">
        <div className="w-full hidden md:flex h-[700px] relative  ">
          <Image
            priority
            fill
            className="h-[500px] flex object-center object-cover  "
            src="/interface.jpg"
            alt="background image"
          />
        </div>
        <div className="w-full flex px-5 md:px-10 py-[30px] flex-col items-start justify-start lg:px-10 bg-[#fff]">
          <h3 className="text-[0.875rem] uppercase mb-2 text-dark">
            Pi-Health
          </h3>
          <h5 className="text-[1.5rem] lg:max-w-[500px] text-dark mb-6 font-[500]">
            Join our global community for exclusive benefits and news about
          </h5>

          <div className="mb-6 px-6">
            {benefits.map((items) => (
              <ul className="list-disc" key={items.name}>
                <li className="text-[1rem] text-grey">{items.name}</li>
              </ul>
            ))}
          </div>

          <div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="lg:max-w-[500px] w-full input-field"
                          type="email"
                          placeholder="Email address"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex flex-col lg:max-w-[500px] justify-between  w-full md:flex-row gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            className="w-full input-field"
                            type="text"
                            placeholder="First name"
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            className="w-full input-field"
                            type="text"
                            placeholder="Last name"
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <p className="text-[0.75rem] lg:max-w-[500px] text-grey">
                  I accept that Pi-sense can contact me via digital
                  communication, including email with personalized marketing of
                  our products and events in Pi-sense shops. Unsubscribing is
                  possible at any time. Details on how personal data is
                  processed: privacy policy.
                </p>

                <p className="text-[0.75rem] lg:max-w-[500px] text-grey">
                  This site is protected by reCAPTCHA and the Google Privacy
                  Policy and Terms of Service apply.
                </p>
                <Button
                  className="rounded-[24px] w-full lg:w-auto mt-5 min-w-[140px] py-4 px-8 "
                  type="submit"
                >
                  Subscribe
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
