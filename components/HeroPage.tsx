import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { MoveRight } from "lucide-react";

export default function HeroPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="w-full flex flex-col md:flex-row gap-4 lg:min-h-[650px]">
        <div className="w-full lg:w-[60%]  relative flex flex-col py-10 px-9  justify-end gap-4">
          <Image
            priority
            fill
            className=" flex object-cover brightness-50 -z-10"
            src="/watch.jpg"
            alt="background image"
          />
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-text ">
            Transform Your Health Journey
          </h1>
          <p className=" text-text text-sm md:text-base lg:text-lg">
            Experience the Future of Health Monitoring with Pi-Sense Wearables.
          </p>

          <Link
            href=""
            className="mt-6 w-fit  text-white relative flex items-center gap-2 border-b-2 border-transparent hover:border-transparent transition-all duration-300 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-white before:transition-all before:duration-300 hover:before:w-full text-base sm:text-lg md:text-xl "
          >
            Discover more
            <MoveRight />
          </Link>
        </div>
        <div className="w-full lg:w-[40%]  relative flex flex-col py-10 px-9  justify-end">
          <Image
            priority
            fill
            className=" flex object-cover brightness-50 -z-10"
            src="/diabetes-care.jpg"
            alt="background image"
          />
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-text ">
            Revolutionize Diabetes Care
          </h1>
          <p className=" text-text text-sm md:text-base lg:text-lg mt-4">
            Groundbreaking AI Technology for Superior Diabetes Management.
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

      <div className="flex relative  w-full  flex-col items-center justify-center  py-4 ">
        <video
          className="  hidden lg:flex w-[80%] h-[500px] object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source type="video/mp4" src="/astro-vid.mp4" />
        </video>
        <video
          className=" top-0 lg:hidden right-0 flex left-0 w-full h-[400px] object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source type="video/mp4" src="/astro-vid.mp4" />
        </video>

        <div className="lg:absolute   w-full mt-5 flex flex-col items-center justify-center">
          <div className="  lg:mt-0 flex flex-col items-center justify-center">
            <h1 className="  mb-[10px] text-center text-3xl md:text-4xl lg:text-5xl text-black lg:text-text ">
              Innovating Beyond Earth
            </h1>
            <p className="text-[16px] leading-[30px] text-black lg:text-text md:text-[18px] mt-4">
              Pi-Sense Technology Trusted by Astronauts
            </p>{" "}
            <Link
              href=""
              className="mt-6 w-fit  text-white relative flex items-center gap-2 border-b-2 border-transparent hover:border-transparent transition-all duration-300 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-white before:transition-all before:duration-300 hover:before:w-full text-base sm:text-lg md:text-xl "
            >
              Discover more
              <MoveRight />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row gap-4 lg:min-h-[500px]">
        <div className="w-full lg:w-[40%]  relative flex flex-col py-10 px-9  justify-end">
          <Image
            priority
            fill
            className=" flex object-cover brightness-50 -z-10"
            src="/interface-one.jpg"
            alt="background image"
          />
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-text ">
            Empowering Healthcare Professionals
          </h1>
          <p className=" text-text text-sm md:text-base lg:text-lg mt-4">
            Advanced Clinician Interface for Better Patient Outcomes
          </p>

          <Link
            href=""
            className="mt-6 w-fit  text-white relative flex items-center gap-2 border-b-2 border-transparent hover:border-transparent transition-all duration-300 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-white before:transition-all before:duration-300 hover:before:w-full text-base sm:text-lg md:text-xl "
          >
            Discover more
            <MoveRight />
          </Link>
        </div>

        <div className="w-full lg:w-[60%]   relative flex flex-col py-10 px-9  justify-end">
          <Image
            priority
            fill
            className=" flex object-cover brightness-50 -z-10"
            src="/fitness.jpg"
            alt="background image"
          />
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-text ">
            Empowering Women&apos;s Health
          </h1>
          <p className=" text-text text-sm md:text-base lg:text-lg mt-4">
            Monitor, Track, and Improve Your Well-being with Pi-Sense Wearables
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
    </div>
  );
}
