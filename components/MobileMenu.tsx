import React from "react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { menuLinks } from "@/constants";

export default function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger className="text-[#fff]" asChild>
        <Menu className="text-[#fff]" />
      </SheetTrigger>
      <SheetContent className=" w-full ">
        <div className="flex flex-col items-center text-xl justify-center  pt-5 pb-7  gap-8">
          {" "}
          {menuLinks.map((item) => (
            <SheetClose key={item.name} asChild>
              <Link
                className="text-[#fff"
                key={item.name}
                href={item.href}
                passHref
              >
                {item.name}
              </Link>
            </SheetClose>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
