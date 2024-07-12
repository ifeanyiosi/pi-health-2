import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";
import { menuLinks } from "@/constants";
import { Button } from "./ui/button";
import { User, User2Icon } from "lucide-react";

export default function Navbar() {
  return (
    <div className="h-20 sticky shadow-md bg-white z-[50] top-0 px-4 md:px-8 lg:px-16 2xl:px-64">
      <div className=" h-full flex  items-center justify-between lg:hidden">
        {" "}
        <Link className="text-xl tracking-wide uppercase" href="/">
          Pi-Health
        </Link>
        <div className="flex items-center gap-4">
          {" "}
          <Link href=""></Link>
          <MobileMenu />
        </div>
      </div>

      <div className="hidden lg:flex items-center justify-between gap-8 w-full h-full">
        <div className="w-full flex items-center gap-12 ">
          {" "}
          <Link
            className="text-xl tracking-wide uppercase font-bold flex gap-2"
            href="/"
          >
            Pi-Health
          </Link>
        </div>

        <div className="flex  items-center justify-end w-2/3 gap-4">
          <div className="hidden xl:flex gap-8 ">
            {menuLinks.map((item) => (
              <Link
                className="text-[rgba(32,41,47,.6)] capitalize hover:text-[#000] font-bold hover:underline "
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
  );
}
