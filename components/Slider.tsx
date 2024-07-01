"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const slides = [
  {
    id: 1,
    title: "Welcome to the FUTURE",
    description:
      "Discover our cutting-edge wearables and clinician interface designed to enhance your health and well-being.e",

    img: "/interface-one.jpg",
    url: "/",
    bg: "bg-[#009fdf]/10",
  },
  {
    id: 2,
    title: "Pi-Sense Wearables",
    description:
      "Monitor vital health metrics with our state-of-the-art rings and wearables, designed to fit seamlessly into your lifestyle.",

    img: "https://images.unsplash.com/photo-1486649961855-75838619c131?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "/",
    bg: "bg-[#009fdf]/10",
  },
  {
    id: 3,
    title: "Advanced Clinician Interface",
    description:
      "Enhance patient care with our intuitive clinician interface, providing real-time health insights and data integration.",

    img: "/doc.jpg",
    url: "/",
    bg: "bg-[#009fdf]/10",
  },
  {
    id: 3,
    title: "Trusted by Astronauts",
    description:
      "Our wearables provide critical health data to astronauts, ensuring their well-being during space missions.",

    img: "/space.jpg",
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
    <div className="lg:h-[calc(100vh-80px)] h-full overflow-hidden">
      <div
        className="w-max lg:h-full h-[500px] flex transition-all  ease-in-out duration-1000"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {slides.map((slide) => (
          <div
            className={`${slide.bg} w-screen h-full md:pt-0  flex flex-col gap-16 xl:flex-row`}
            key={slide.id}
          >
            {/* TEXT CONTAINER */}

            {/* IMAGE CONTAINER */}
            <div className="lg:h-full h-[500px] w-full relative flex items-center justify-center">
              <Image
                src={slide.img}
                alt=""
                fill
                sizes="100%"
                className="flex object-cover brightness-50 -z-10"
              />

              <div className=" flex  w-full flex-col lg:items-start items-center  px-4 md:px-8 lg:px-16 2xl:px-64 lg:justify-start justify-center gap-8 2xl:gap-12 text-center text-white">
                <h1 className="lg:text-5xl text-xl font-semibold  ">
                  {slide.title}
                </h1>

                <h2 className="lg:text-xl lg:w-[700px] lg:text-left  text-[18px]">
                  {slide.description}
                </h2>

                <Link href={slide.url}>
                  <Button>Learn more</Button>
                </Link>
              </div>
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
