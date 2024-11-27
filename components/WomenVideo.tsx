import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { MoveRight } from "lucide-react";

export default function WomenVideo() {
  return (
    <main className="hidden md:flex md:min-h-screen w-full flex-col items-center justify-between py-20 lg:py-0 relative">
      <video
        className="absolute top-0 left-0 w-full h-screen object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source type="video/mp4" src="/videos/women.mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-screen bg-black opacity-50"></div>

      {/* Text Content */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full flex flex-col items-start justify-center px-4 sm:px-6 lg:px-8">
        <div className="z-[500000] md:max-w-[800px] w-full flex flex-col gap-4 text-start">
          <p className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-galindo text-white leading-snug">
            Health at your fingertips—track your cycle, stress, and wellness
            with ease.
          </p>
          <Link
            href=""
            className="mt-6 w-fit  text-white relative flex items-center gap-2 border-b-2 border-transparent hover:border-transparent transition-all duration-300 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-white before:transition-all before:duration-300 hover:before:w-full text-base sm:text-lg md:text-xl "
          >
            Discover more
            <MoveRight />
          </Link>
        </div>
      </div>
    </main>
  );
}
