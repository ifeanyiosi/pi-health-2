import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-gray-100 text-sm py-16 px-4 md:px-8 lg:px-16 2xl:px-64">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between gap-16 lg:gap-24">
        {/* Left Section */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-6">
          <Link
            className="text-xl font-bold tracking-wide uppercase flex gap-2"
            href="/"
          >
            Pi-health
          </Link>
          <p className="text-gray-700">
            Helping you manage your health better with smart, innovative
            technology.
          </p>
          <span className="font-semibold">hello@gmail.com</span>
          <span className="font-semibold">+000 000 000 000</span>

          <div className="flex gap-6 mt-4">
            <Image
              src="/facebook.png"
              alt="facebook logo"
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <Image
              src="/instagram.png"
              alt="instagram logo"
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <Image
              src="/youtube.png"
              alt="youtube logo"
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <Image
              src="/x.png"
              alt="twitter logo"
              width={20}
              height={20}
              className="cursor-pointer"
            />
          </div>
        </div>

        {/* Center Section */}
        <div className="hidden lg:flex justify-between w-1/2 space-x-12">
          <div className="flex flex-col">
            <h1 className="font-semibold text-lg text-gray-800">Company</h1>
            <div className="flex flex-col gap-4 mt-4 text-gray-600">
              <Link href="#">About Us</Link>
              <Link href="#">Careers</Link>
              <Link href="#">Affiliates</Link>
              <Link href="#">Blog</Link>
              <Link href="#">Contact Us</Link>
            </div>
          </div>

          <div className="flex flex-col">
            <h1 className="font-semibold text-lg text-gray-800">Products</h1>
            <div className="flex flex-col gap-4 mt-4 text-gray-600">
              <Link href="#">Smart Watches</Link>
              <Link href="#">Rings</Link>
              <Link href="#">Accessories</Link>
              <Link href="#">Health Tech</Link>
            </div>
          </div>

          <div className="flex flex-col">
            <h1 className="font-semibold text-lg text-gray-800">Help</h1>
            <div className="flex flex-col gap-4 mt-4 text-gray-600">
              <Link href="#">Customer Service</Link>
              <Link href="#">My Account</Link>
              <Link href="#">Find a Store</Link>
              <Link href="#">Legal & Privacy</Link>
              <Link href="#">Gift Card</Link>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-6">
          <h1 className="font-semibold text-lg text-gray-800">Subscribe</h1>
          <p className="text-gray-600">
            Stay updated with the latest news and promotions from Pi-health.
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div className="text-gray-500">
          © 2024 Pi-health, All Rights Reserved
        </div>
        <div className="flex gap-8">
          <div className="text-gray-500">
            <span className="mr-2">Language:</span>
            <span className="font-medium">Nigeria | English</span>
          </div>
          <div className="text-gray-500">
            <span className="mr-2">Currency:</span>
            <span className="font-medium">₦ NGN</span>
          </div>
        </div>
      </div>
    </div>
  );
}
