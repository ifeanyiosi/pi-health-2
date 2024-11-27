import { products, productsPage } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function OurProducts() {
  return (
    <div className="z-[500] text-black  min-h-screen py-5 md:py-0 ">
      <div className="w-full flex">
        <div className="relative w-full h-[500px]">
          <Image
            className="absolute object-cover w-full h-full"
            src="/images/product-hero.jpg"
            alt="Merch header"
            fill
          />
        </div>
      </div>

      {/* Currency Selector */}

      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2  gap-8 mx-auto px-4 py-10 sm:px-6 lg:px-8">
        {productsPage.map((product, index) => (
          <div
            key={product.id}
            className="p-6 z-[500] rounded-lg shadow-md cursor-pointer flex flex-col items-center justify-center text-center"
          >
            <div className="w-full  bg-[#fbee63] h-[600px] relative mb-4">
              <Image
                src={product.image}
                alt={product.name}
                fill
                objectFit="cover"
                className="rounded-md flex object-cover"
              />
            </div>
            <div className="bg-white flex flex-col items-center p-5 rounded-md">
              <h2 className="text-xl whitespace-nowrap w-fit px-4 py-2 text-center  font-semibold  mb-2">
                {product.name}
              </h2>

              <Link href={""}>Learn more</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
