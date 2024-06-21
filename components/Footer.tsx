import { Facebook, FacebookIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="px-4 md:px-8 lg:px-16 2xl:px-64 bg-gray-100 text-sm mt-24 py-24">
      {/* top */}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/* left */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link className="text-xl tracking-wide uppercase flex gap-2" href="/">
           Pi-health
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
            veritatis.
          </p>
          <span className="font-semibold">hello@gmail.com</span>
          <span className="font-semibold">00000000000</span>

          <div className="flex gap-6">
            <Image
              src="/facebook.png"
              alt="facebook logo"
              width={16}
              height={16}
            />
            <Image
              src="/instagram.png"
              alt="facebook logo"
              width={16}
              height={16}
            />
            <Image
              src="/youtube.png"
              alt="facebook logo"
              width={16}
              height={16}
            />
            <Image src="/x.png" alt="facebook logo" width={16} height={16} />
          </div>
        </div>
        {/* center */}
        <div className="hidden lg:flex justify-between w-1/2">
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">COMPANY</h1>
            <div className="flex flex-col gap-6">
              <Link href="">About Us</Link>
              <Link href="">Careers</Link>
              <Link href="">Affiliates</Link>
              <Link href="">Blog</Link>
              <Link href="">Contact Us</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">PRODUCTS</h1>
            <div className="flex flex-col gap-6">
              <Link href="">New Arrivals</Link>
              <Link href="">Accessories</Link>
              <Link href="">Men</Link>
              <Link href="">Women</Link>
              <Link href="">All Products</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">HELP</h1>
            <div className="flex flex-col gap-6">
              <Link href="">Customer Service</Link>
              <Link href="">My Account</Link>
              <Link href="">Find a Store</Link>
              <Link href="">Legal & Privacy</Link>
              <Link href="">Gift Card</Link>
            </div>
          </div>
        </div>
        {/* right */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className="font-medium text-lg">Subscribe</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas,
            harum!
          </p>

          <span className="font-semibold">Secure Payments</span>
          <div className="flex justify-between">
            <Image src="/discover.png" alt="" width={40} height={20} />
            <Image src="/skrill.png" alt="" width={40} height={20} />
            <Image src="/paypal.png" alt="" width={40} height={20} />
            <Image src="/mastercard.png" alt="" width={40} height={20} />
            <Image src="/visa.png" alt="" width={40} height={20} />
          </div>
        </div>
      </div>
      {/* bottom */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div className="">© 2024 Adtitude Affairs</div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="">
            <span className="text-gray-500 mr-4">Language</span>
            <span className="font-medium">Nigeria | English</span>
          </div>
          <div className="">
            <span className="text-gray-500 mr-4">Currency</span>
            <span className="font-medium">₦ NGN</span>
          </div>
        </div>
      </div>
    </div>
  );
}
