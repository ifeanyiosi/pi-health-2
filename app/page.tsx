/* eslint-disable @next/next/no-img-element */
import DownloadSection from "@/components/DownloadSection";
import HeroIntro from "@/components/HeroIntro";
import HeroPage from "@/components/HeroPage";
import HowItWorks from "@/components/HowItWorks";
import JoinUs from "@/components/JoinUs";
import Partners from "@/components/Partners";
import ProductList from "@/components/ProductList";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import VideoIntro from "@/components/VideoIntro";
import WomenVideo from "@/components/WomenVideo";
import { heroLinks, productsAndSolutions, whatCustomersDo } from "@/constants";
import { ArrowRight, CheckCircle, Heart, Shield, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <HeroIntro />

      <div className="w-full flex flex-col gap-8 px-4 py-8 mx-auto  bg-gray-900">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center">
          The Solution
        </h2>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 justify-between mx-auto text-white">
          {/* Text Content */}
          <div className="flex-1 flex justify-center md:justify-start items-center h-full">
            <div className="flex flex-col items-center md:items-start">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-[300] leading-tight text-white">
                Ailment-Specific Wearables, Mobile Application, and
                Clinician&apos;s Interface Backed by AI.
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-white mt-4">
                At Pi-Health, we are transforming healthcare for individuals
                with multiple comorbidities through AI-backed remote monitoring
                technology linked to a clinicians’ interface. Our innovative
                devices empower clinicians, carers, and family members to make
                faster, smarter decisions for better patient outcomes.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1">
            <img
              src="/images/products.png"
              alt="Healthcare device"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="w-full flex flex-col gap-8 px-4 py-8 mx-auto">
          {/* Section Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center">
            Who We Are
          </h2>

          {/* Content Section */}
          <div className="flex flex-col md:flex-row items-center gap-6 justify-between mx-auto max-w-4xl">
            {/* Text Content */}
            <div className="flex-1 flex justify-center md:justify-start items-center h-full">
              <div className="flex flex-col items-center md:items-start">
                <p className="text-base md:text-lg lg:text-xl text-gray-600 mt-4 text-center md:text-left">
                  Pi-Health is a suite of wearable technology (Pi-Sense) that
                  remotely monitors people with complex conditions like Heart
                  disease, COPD, Asthma, Diabetes, Sleep disorders, and Atrial
                  Fibrillation (Strokes) complications. The wearables generate
                  ailment-specific vitals in real-time and send them to a
                  connected clinician&apos;s interface, Juni.
                </p>
                {/* <p className="text-base md:text-lg lg:text-xl text-gray-600 mt-4 text-center md:text-left">
                Clinicians can view patient vitals by severity, from the most
                severe to the least severe. The clinicians&apos; interface is
                backed by Artificial Intelligence. Other features include
                virtual wards, E-Visits, E-Pharmacies, Remote admissions, and
                Test Centres.
              </p>
              <p className="text-base md:text-lg lg:text-xl text-gray-600 mt-4 text-center md:text-left">
                It&apos;s a convergence of ailment-specific wearable technology
                and an AI-backed clinicians&apos; interface.
              </p> */}
              </div>
            </div>
          </div>
        </div>

        <Link
          href={"/about-us"}
          className="px-4 md:px-8 flex items-center justify-center flex-col py-5 w-full "
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl  font-bold">
            Why us?
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-8 py-12 w-full">
            {/* Box 1 */}
            <div className="flex flex-col items-center text-center p-6 bg-gray-100 rounded-lg shadow-lg">
              <Heart className="text-red-500 mb-4 w-12 h-12" />
              <h3 className="text-lg font-semibold text-gray-800">
                Early Illness/Crisis Detection
              </h3>
            </div>

            {/* Box 2 */}
            <div className="flex flex-col items-center text-center p-6 bg-gray-100 rounded-lg shadow-lg">
              <Star className="text-yellow-500 mb-4 w-12 h-12" />
              <h3 className="text-lg font-semibold text-gray-800">
                Increase In Revenue
              </h3>
            </div>

            {/* Box 3 */}
            <div className="flex flex-col items-center text-center p-6 bg-gray-100 rounded-lg shadow-lg">
              <CheckCircle className="text-green-500 mb-4 w-12 h-12" />
              <h3 className="text-lg font-semibold text-gray-800">
                The Future of Healthcare
              </h3>
            </div>

            {/* Box 4 */}
            <div className="flex flex-col items-center text-center p-6 bg-gray-100 rounded-lg shadow-lg">
              <Shield className="text-blue-500 mb-4 w-12 h-12" />
              <h3 className="text-lg font-semibold text-gray-800">
                Better Outcomes
              </h3>
            </div>
          </div>
        </Link>
      </div>

      <WomenVideo />
      {/* <VideoIntro /> */}

      <HowItWorks />

      <ProductList />

      <div className="w-full flex flex-col py-[100px] items-center justify-center text-[#212529] ">
        <h1 className="text-[18px] text-center md:text-[32px] font-bold">
          Did you know? Our products are distributed worldwide.
        </h1>
        <Link
          className="mt-4 lg:mt-8 flex items-center gap-2 text-[16px] font-bold md:text-[18px]"
          href="/"
        >
          Read more on the blog <ArrowRight />{" "}
        </Link>
      </div>
      <HeroPage />

      <Partners />

      <DownloadSection />

      <section className="w-full mt-5 h-full px-4 md:px-8 lg:px-16 2xl:px-64 flex flex-col gap-8 py-5">
        <div className="flex flex-col lg:flex-row w-full ">
          <div className="relative h-[400px] lg:h-[300px] w-full ">
            <Image
              fill
              className="flex object-cover"
              src="/research.jpg"
              alt=""
            />
          </div>

          <div className="w-full lg:px-8 text-[#212529] flex flex-col mt-4 lg:mt-0 items-start justify-center">
            <h1 className="text-[28px] l lg:text-[32px]  font-bold">
              Research and Development
            </h1>
            <p className="leading-relaxed tracking-wide mt-4">
              At PI Health, we drive innovation through cutting-edge Research
              and Development. Collaborating with top medical institutions, we
              focus on advancing sensor technologies, AI-driven insights, and
              rigorous clinical validation. Our goal is to pioneer personalized
              health solutions that empower individuals and healthcare providers
              with accurate and actionable data.
            </p>
            <Link
              className="mt-4 lg:mt-8 flex items-center gap-2 text-[16px] font-bold md:text-[18px]"
              href="/"
            >
              Learn more <ArrowRight />{" "}
            </Link>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row-reverse w-full">
          <div className="relative h-[400px] lg:h-[300px] w-full ">
            <Image
              fill
              className="flex object-cover"
              src="https://images.unsplash.com/photo-1631217875019-8cb2649c3478?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>

          <div className="w-full lg:px-8 text-[#212529] mt-4 lg:mt-0 flex flex-col items-start justify-center">
            <h1 className="text-[28px] l lg:text-[32px]  font-bold">
              The Secret behind Pi-Health
            </h1>
            <p className="leading-relaxed tracking-wide mt-4">
              At PI Health, we drive innovation through cutting-edge Research
              and Development. Collaborating with top medical institutions, we
              focus on advancing sensor technologies, AI-driven insights, and
              rigorous clinical validation. Our goal is to pioneer personalized
              health solutions that empower individuals and healthcare providers
              with accurate and actionable data.
            </p>
            <Link
              className="mt-4 lg:mt-8 flex items-center gap-2 text-[16px] font-bold md:text-[18px]"
              href="/"
            >
              Learn more <ArrowRight />{" "}
            </Link>
          </div>
        </div>
      </section>

      <JoinUs />
    </div>
  );
}
