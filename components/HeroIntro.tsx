import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HeroIntro() {
  return (
    <section className="w-full min-h-screen flex flex-col lg:flex-row ">
      {/* Left Section */}
      {/* <div className="w-full lg:w-[40%] flex flex-col gap-6 justify-start">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-[300] leading-tight text-gray-900">
          Ailment-Specific Wearables, Mobile Application, and Clinicians&apos;
          Interface Backed by AI.
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-gray-600">
          At Pi-Health, we are transforming healthcare for individuals with
          multiple comorbidities through AI-backed remote monitoring technology
          linked to a clinicians’ interface. Our innovative devices empower
          clinicians, carers, and family members to make faster, smarter
          decisions for better patient outcomes.
        </p>
      </div> */}

      {/* Right Section */}
      <div className="w-full  grid  lg:grid-cols-2">
        {/* First Image Section */}
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] flex flex-col justify-end py-8 px-6">
          <Image
            priority
            fill
            className="absolute inset-0 object-cover brightness-50 -z-10 "
            src="/watch.jpg"
            alt="Transform Your Health Journey"
          />
          <h1 className="text-2xl   text-white font-semibold">
            Transform Your Health Journey
          </h1>
          <p className="text-white text-xs md:text-sm lg:text-base">
            Experience Remote Monitoring for Long term conditions with a
            difference.
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
          <h1 className="text-2xl   text-white font-semibold">
            Revolutionize Diabetes Care
          </h1>
          <p className="text-white text-xs md:text-sm lg:text-base">
            Groundbreaking AI Technology for Superior Diabetes Management.
          </p>
        </div>

        {/* Third Image Section */}
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] flex flex-col justify-end py-8 px-6">
          <Image
            priority
            fill
            className="absolute inset-0 object-cover brightness-50 -z-10 "
            src="/interface-one.jpg"
            alt="Empowering Healthcare Professionals"
          />
          <h1 className="text-2xl  text-white font-semibold">
            Empowering Healthcare Professionals
          </h1>
          <p className="text-white text-xs md:text-sm lg:text-base">
            Advanced Clinician Interface for Better Patient Outcomes.
          </p>
        </div>

        {/* Fourth Image Section */}
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] flex flex-col justify-end py-8 px-6 rounded-lg">
          <Image
            priority
            fill
            className="absolute inset-0 object-cover brightness-50 -z-10 "
            src="/fitness.jpg"
            alt="Empowering Women's Health"
          />
          <h1 className="text-2xl   text-white font-semibold">
            Empowering Women&apos;s Health
          </h1>
          <p className="text-white text-xs md:text-sm lg:text-base">
            Monitor, Track, and Improve Your Well-being with Pi-Sense Wearables.
          </p>
        </div>

        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] flex flex-col justify-end py-8 px-6 rounded-lg">
          <Image
            priority
            fill
            className="absolute inset-0 object-cover brightness-50 -z-10 "
            src="/images/astro.jpg"
            alt="Empowering Women's Health"
          />
          <h1 className="text-2xl   text-white font-semibold">
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
            src="/images/ecg.jpg"
            alt="Empowering Women's Health"
          />
          <h1 className="text-2xl   text-white font-semibold">
            Comprehensive Health Monitoring, Anytime, Anywhere
          </h1>
          <p className="text-white text-xs md:text-sm lg:text-base">
            Heart rate, activity, sleep, and more—designed for your well-being.
          </p>
        </div>
      </div>
    </section>
  );
}
