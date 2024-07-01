import Slider from "@/components/Slider";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { heroLinks, productsAndSolutions, whatCustomersDo } from "@/constants";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Slider />

      <section className="flex flex-col lg:flex-row my-4 lg:my-8 items-center justify-between px-4 md:px-8 lg:px-16 2xl:px-64">
        <div className="relative h-[500px] lg:h-[600px] w-full ">
          {" "}
          <Image fill className="flex object-cover" src="/pi-app.jpg" alt="" />
        </div>
        <div className="px-4 lg:px-16 w-full py-20 lg:py-0 flex flex-col ">
          <h2 className="text-[1rem] md:text-[1.75rem] font-bold ">
            The new Pi-Sense app: it&apos;s all about you.
          </h2>

          <p className="text-[1.25rem] lg:mt-8 mt-4 leading-relaxed ">
            Designed to keep you close to your goals, boost your motivation and
            show your progress on your health and fitness journey.
          </p>

          <Link
            className="mt-4 lg:mt-8 flex items-center gap-2 text-[16px] font-bold md:text-[18px]"
            href="/"
          >
            Learn More <ArrowRight />{" "}
          </Link>
        </div>
      </section>

      <section className="w-full h-full grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {heroLinks.map((item, index) => (
          <div key={item.image} className="relative h-[400px]">
            <Image
              fill
              className="absolute inset-0 w-full h-full object-cover z-0"
              src={item.image}
              alt=""
            />

            <div className="relative z-10 flex flex-col items-start justify-end text-center h-full px-6 md:px-8 ">
              <h2 className="text-[1rem] md:text-[20px] uppercase font-bold text-white">
                {item.heading}
              </h2>

              <Button asChild variant="outline">
                <Link
                  className="mt-4 lg:mt-8 flex items-center gap-2 uppercase text-[16px]  md:text-[18px mb-4"
                  href="/"
                >
                  {item.btnText} <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </section>

      <div className="w-full flex flex-col py-[100px] items-center justify-center text-[#212529] ">
        <h1 className="text-[18px] md:text-[32px] font-bold">
          Did you know? Our products are distributed worldwide.
        </h1>
        <Link
          className="mt-4 lg:mt-8 flex items-center gap-2 text-[16px] font-bold md:text-[18px]"
          href="/"
        >
          Read more on the blog <ArrowRight />{" "}
        </Link>
      </div>

      <section className="w-full h-full px-4 md:px-8 lg:px-16 2xl:px-64 flex flex-col gap-8">
        <div className="flex flex-col lg:flex-row w-full">
          <div className="relative h-[400px] lg:h-[300px] w-full ">
            <Image
              fill
              className="flex object-cover"
              src="/research.jpg"
              alt=""
            />
          </div>

          <div className="w-full lg:px-8 text-[#212529] flex flex-col items-start justify-center">
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

          <div className="w-full lg:px-8 text-[#212529] flex flex-col items-start justify-center">
            <h1 className="text-[28px] l lg:text-[32px]  font-bold">
              Real stories from real people
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

      <div className="flex flex-col lg:flex-row my-4 lg:my-8 items-center justify-between px-4 md:px-8 lg:px-16 2xl:px-64">
        <div className="relative h-[500px] lg:h-[600px] w-full ">
          {" "}
          <Image
            fill
            className="flex object-cover"
            src="/diverse-doctors.jpg"
            alt=""
          />
        </div>
        <div className="px-4 lg:px-16 w-full py-20 lg:py-0 flex flex-col ">
          <h2 className="text-[1rem] md:text-[1.75rem] font-bold ">
            Our Mission and Vision
          </h2>

          <p className="text-[1.25rem] lg:mt-8 mt-4 leading-relaxed ">
            Our vision is to be a global leader in health technology, known for
            our dedication to improving lives through innovation and excellence.
            We aspire to create a future where wearable health devices
            seamlessly integrate into daily life, offering invaluable insights
            that promote proactive health management. By continually advancing
            our products and services, we aim to set new standards in health
            monitoring and data integration, ultimately transforming the way
            people and healthcare providers approach health and wellness.
          </p>
        </div>
      </div>
    </div>
  );
}
