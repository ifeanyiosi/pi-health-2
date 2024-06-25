"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const slides = [
  {
    id: 1,
    title: "Welcome to the FUTURE",
    description: "Innovative Health Solutions for a Better Life",

    img: "https://images.pexels.com/photos/5935180/pexels-photo-5935180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    url: "/",
    bg: "bg-[#009fdf]/10",
  },
  {
    id: 2,
    title: "PISense Wearables",
    description: "Monitor Your Health with Precision",

    img: "https://images.unsplash.com/photo-1486649961855-75838619c131?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "/",
    bg: "bg-[#009fdf]/10",
  },
  {
    id: 3,
    title: "Advanced Clinician Interface",
    description: "Empowering Healthcare Professionals",

    img: "https://images.unsplash.com/photo-1616587226960-4a03badbe8bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "/",
    bg: "bg-[#009fdf]/10",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden">
      <div
        className="w-max h-full flex transition-all  ease-in-out duration-1000"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {slides.map((slide) => (
          <div
            className={`${slide.bg} w-screen h-full pt-4 md:pt-0  flex flex-col gap-16 xl:flex-row`}
            key={slide.id}
          >
            {/* TEXT CONTAINER */}
            <div className="h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center">
              <h1 className="text-5xl font-semibold  ">{slide.title}</h1>

              <h2 className="text-xl ">{slide.description}</h2>

              <Link href={slide.url}>
                <Button>
                    Learn more
                </Button>
              </Link>
            </div>
            {/* IMAGE CONTAINER */}
            <div className="h-1/2 xl:w-1/2 xl:h-full relative">
              <Image
                src={slide.img}
                alt=""
                fill
                sizes="100%"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute m-auto  right-[40%]  lg:left-1/2  bottom-8 lg:flex hidden gap-4">
        {slides.map((slide, index) => (
          <div
            className={`w-3 h-3  rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${
              current === index ? "scale-150" : ""
            }`}
            key={slide.id}
            onClick={() => setCurrent(index)}
          >
            {current === index && (
              <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
