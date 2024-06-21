import Slider from "@/components/Slider";
import { Separator } from "@/components/ui/separator";
import { productsAndSolutions, whatCustomersDo } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Slider />

      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="relative h-[500px] lg:h-[600px] w-full ">
          {" "}
          <Image
            fill
            className="flex object-cover"
            src="https://images.unsplash.com/photo-1631217875019-8cb2649c3478?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="px-4 lg:px-16 md:pr-8 lg:pr-16 2xl:pr-64 w-full py-20 lg:py-0 flex flex-col gap-4">
          <h2 className="text-xl lg:text-3xl 2xl:text-5xl">
            Heart disease is the #1 cause of death in the United Kingdom.
          </h2>
          <h1 className="text-5xl font-semibold">
            80% of cases are preventable.
          </h1>
          <p className="text-xl ">
            We are advancing our mission with end-to-end cardiological care and
            services for consumers, patients, providers and payers that use
            state-of-the-art tools to improve diagnosis and treatment and help
            reduce disparities in care.*Data on file
          </p>
        </div>
      </div>

      <div className="w-full lg:h-screen relative flex items-center justify-center">
        <Image
          priority
          className="lg:flex object-cover hidden  "
          fill
          src="https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />

        <div className="lg:absolute  bg-primary lg:rounded-md backdrop-blur-md  md:max-w-[1000px] w-full">
          <div className="lg:p-20 p-4 text-white">
            <h1 className="text-[36px] font-bold">Our solutions</h1>
            <h2 className="text-[16px] mt-12">
              Pi-Health was established on the foundation of its unique
              technologies: AI-driven, machine learning-enhanced ECG sensors
              that provide medical-grade heart data at any time and from any
              location. Our digital solutions enable patients to access, manage,
              and share their health information, as well as connect with
              cardiologists to gain better insights into their heart health and
              manage it more effectively.
            </h2>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-8 lg:px-16 2xl:px-64  w-full flex flex-col items-center my-20 lg:my-40 ">
        <div className="w-full flex items-center gap-4 mb-[40px] lg:mb-[120px]">
          {" "}
          <h1 className="text-2xl font-bold text-primary/90">Our Customers</h1>
          <div className="h-[1px] bg-primary/50 w-[500px]" />
        </div>
        <div className="flex w-full justify-between gap-8 ">
          <div className="flex flex-col gap-8">
            {whatCustomersDo.map((item) => (
              <div key={item.desc} className="flex items-center gap-4">
                <div>
                  <item.icon className="text-[50px] text-primary" />
                </div>
                <div className="text-gray-500">{item.desc}</div>
              </div>
            ))}
          </div>
          <div className="w-full lg:flex hidden">
            <div className="relative w-[500px] h-[300px] flex items-center justify-center">
              <Image
                priority
                className="lg:flex object-cover hidden  "
                fill
                src="https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-primary-foreground min-h-screen px-4 md:px-8 lg:px-16 2xl:px-64 py-20 lg:py-40 ">
        <div className="w-full flex flex-col gap-4 mb-[40px] lg:mb-[120px]">
          <h1 className="text-2xl font-bold text-black/90">
            Discover our products & solutions
          </h1>

          <div className="flex flex-col mt-10 gap-8">
            {productsAndSolutions.map((item, index) => (
              <div key={item.href}>
                <div className="flex flex-col gap-8">
                  <Link className="flex flex-col text-xl py-3 gap-8" href={item.href}>
                    {item.name}
                  </Link>
                </div>
                {index < productsAndSolutions.length - 1 && <Separator className="bg-gray-300 lg:w-[300px]"  />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
