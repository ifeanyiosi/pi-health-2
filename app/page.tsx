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
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <HeroIntro />
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
