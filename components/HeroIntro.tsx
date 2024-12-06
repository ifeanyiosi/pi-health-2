import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HeroIntro() {
  return (
    <section className="w-full min-h-screen flex flex-col lg:flex-row ">
      {/* Right Section */}
      <div className="w-full  grid  lg:grid-cols-2">
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] flex flex-col justify-end py-8 px-6">
          <Image
            priority
            fill
            className="absolute inset-0 object-cover brightness-50 -z-10 "
            src="/watch.jpg"
            alt="Transform Your Health Journey"
          />
          <h1 className="text-4xl   text-white font-bold">
            Monitor, Track, Respond
          </h1>
          <p className="text-white text-xs md:text-sm lg:text-base">
            Experience Remote Monitoring for Long term conditions with a
            difference.
          </p>
        </div>
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] flex flex-col justify-end py-8 px-6">
          <Image
            priority
            fill
            className="absolute inset-0 object-cover brightness-50 -z-10 "
            src="/interface-one.jpg"
            alt="Empowering Healthcare Professionals"
          />
          <h1 className="text-2xl lg:text-4xl text-white font-semibold">
            Next-Generation Clinician Interface
          </h1>
          <p className="text-white text-xs md:text-sm lg:text-base">
            Advanced Clinician Interface for Better Patient Outcomes.
          </p>
        </div>
        {/* First Image Section */}

        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] flex flex-col justify-end py-8 px-6 rounded-lg">
          <Image
            priority
            fill
            className="absolute inset-0 object-cover brightness-50 -z-10 "
            src="/images/astro.jpg"
            alt="Empowering Women's Health"
          />
          <h1 className="text-2xl  lg:text-4xl text-white font-semibold">
            Out of Earth, In Space
          </h1>
          <p className="text-white text-xs md:text-sm lg:text-base">
            Explore our missions out of earth.
          </p>
        </div>

        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] flex flex-col justify-end py-8 px-6 rounded-lg">
          <Image
            priority
            fill
            className="absolute inset-0 object-cover brightness-50 -z-10 "
            src="/images/woman-1.jpg"
            alt="Empowering Women's Health"
          />
          <h1 className="text-2xl lg:text-4xl  text-white font-semibold">
            Healthcare for women
          </h1>
          <p className="text-white text-xs md:text-sm lg:text-base">
            Monitor, Track, and Improve Your Well-being with Pi-Sense Wearables.
          </p>
        </div>

        {/* Second Image Section */}
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] flex flex-col justify-end py-8 px-6">
          <Image
            priority
            fill
            className="absolute inset-0 object-cover brightness-50 -z-10 "
            src="/products/bg-ring.jpg"
            alt="Revolutionize Diabetes Care"
          />
          <h1 className="text-2xl lg:text-4xl  text-white font-semibold">
            Revolutionize Diabetes Care
          </h1>
          <p className="text-white text-xs md:text-sm lg:text-base">
            Groundbreaking AI Technology for Superior Diabetes Management.
          </p>
        </div>

        {/* Third Image Section */}

        {/* Fourth Image Section */}

        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] flex flex-col justify-end py-8 px-6 rounded-lg">
          <Image
            priority
            fill
            className="absolute inset-0 object-cover brightness-50 -z-10 "
            src="/images/ecg.jpg"
            alt="Empowering Women's Health"
          />
          <h1 className="text-2xl lg:text-4xl  text-white font-semibold">
            Health Monitoring: Anytime, Anywhere
          </h1>
          <p className="text-white text-xs md:text-sm lg:text-base">
            Heart rate, activity, sleep, and more—designed for your well-being.
          </p>
        </div>
      </div>
    </section>
  );
}
