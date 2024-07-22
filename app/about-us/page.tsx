import Image from "next/image";
import React from "react";

export default function AboutUs() {
  return (
    <div>
      <section className=" w-full lg:h-screen bg-gray-100">
        <div className="relative h-[400px] lg:h-[600px] w-full ">
          <Image fill className="flex object-cover" src="/about.jpg" alt="" />
        </div>

        <div className="w-full  text-[#212529] flex flex-col py-8 mt-4 md:mt-8 items-start justify-center px-4 md:px-8 lg:px-16 2xl:px-64">
          <h1 className="text-[28px] l lg:text-[32px]  font-bold">About Us</h1>
          <p className="leading-relaxed tracking-wide mt-4">
            At PI Health, we drive innovation through cutting-edge Research and
            Development. Collaborating with top medical institutions, we focus
            on advancing sensor technologies, AI-driven insights, and rigorous
            clinical validation. Our goal is to pioneer personalized health
            solutions that empower individuals and healthcare providers with
            accurate and actionable data.
          </p>
        </div>
      </section>

      <section className=" md:h-[800px] flex flex-col lg:flex-row items-center px-4 md:px-8 lg:px-16 2xl:px-64">
        <div className="w-full  text-[#212529] flex flex-col mt-4 md:mt-8 items-start justify-center ">
          <h1 className="text-[28px] l lg:text-[32px]  font-bold">Our Mission</h1>
          <p className="leading-relaxed tracking-wide mt-4">
            At PI Health, we drive innovation through cutting-edge Research and
            Development. Collaborating with top medical institutions, we focus
            on advancing sensor technologies, AI-driven insights, and rigorous
            clinical validation. Our goal is to pioneer personalized health
            solutions that empower individuals and healthcare providers with
            accurate and actionable data.
          </p>
        </div>
        <div className="relative h-[400px] mt-4 lg:mt-0 lg:h-[600px] w-full ">
          <Image fill className="flex object-cover" src="/about.jpg" alt="" />
        </div>
      </section>
    </div>
  );
}
