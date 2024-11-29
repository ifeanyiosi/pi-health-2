"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import { menuLinks } from "@/constants";
import { Button } from "./ui/button";
import { User, User2Icon } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  return (
    <nav
      className={`top-0 z-[5000000] shadow-md sticky w-full transition-all duration-300 py-[17px] bg-white`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" h-full flex  items-center justify-between lg:hidden">
          {" "}
          <Link
            className="text-xl text-[#345334] tracking-wide uppercase"
            href="/"
          >
            Pi-Health
          </Link>
          <div className="flex items-center gap-4">
            {" "}
            <Link href=""></Link>
            <MobileMenu />
          </div>
        </div>

        <div className="hidden lg:flex items-center justify-between gap-8 w-full h-full">
          <div className="w-full flex items-center gap-2">
            <img src="/icon/logo.png" alt="pi-health logo" />
            <Link
              className="text-xl text-[#345334] tracking-wide uppercase font-bold flex gap-2"
              href="/"
            >
              Pi-Health
            </Link>
          </div>

          <div className="flex  items-center justify-end w-2/3 gap-4">
            <div className="hidden xl:flex gap-8 ">
              {menuLinks.map((item) => (
                <Link
                  className="text-[#345334] capitalize hover:text-[#43b38c] font-bold hover:underline "
                  key={item.name}
                  href={item.href}
                  passHref
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
