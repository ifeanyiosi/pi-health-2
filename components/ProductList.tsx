/* eslint-disable @next/next/no-img-element */
import { products } from "@/constants";
import React from "react";

export default function ProductList() {
  return (
    <div className=" mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-start text-gray-800 mb-8">
        Find Your Device
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[400px] object-cover"
              />
              {/* Condition Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-xl font-semibold">
                {product.condition}
              </div>
            </div>

            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h2>
              <p className="text-gray-600 text-sm mt-1">{product.category}</p>

              <ul className="mt-3 text-gray-500 text-sm">
                {product.features.map((feature, index) => (
                  <li key={index} className="list-disc list-inside">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
