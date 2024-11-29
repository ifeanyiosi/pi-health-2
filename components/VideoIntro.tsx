import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function VideoIntro() {
  return (
    <main className="hidden md:flex md:min-h-screen  w-full flex-col items-center justify-between py-20 lg:py-0">
      <video
        className="absolute top-0 hidden md:flex left-0 w-full h-screen  object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source type="video/mp4" src="/videos/intro.mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-0 left-0 w-full h-screen bg-black opacity-50"></div>

      <div className="absolute bottom-0 left-0 w-full hidden md:flex flex-col items-start justify-end px-4 sm:px-6 lg:px-8 pb-8">
        <div className="z-[500000] md:max-w-[800px] w-full flex flex-col gap-4 text-start">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold uppercase font-paint text-[#43b38c] leading-tight">
            Pi-Health Technology
          </h1>
          <p className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-galindo text-white leading-snug">
            Wear the future, monitor the now!
          </p>
          <Button className="uppercase max-w-[280px] px-6 py-3 text-sm sm:text-base lg:text-lg font-bold font-galindo text-black bg-[#43b38c] hover:bg-yellow-300 rounded-lg">
            <Link href={"/about-us"}>Discover more</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
