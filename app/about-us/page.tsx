import Partners from "@/components/Partners";
import { CheckCircle, Heart, Shield, Star } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function AboutUs() {
  return (
    <div className="bg-[#F6F6F6]">
      <section className=" w-full lg:h-screen bg-gray-100">
        <div className="relative h-[400px] lg:h-[600px] w-full ">
          <Image fill className="flex object-cover" src="/about.jpg" alt="" />
        </div>

        <div className="w-full  text-[#212529] flex flex-col py-8 mt-4 md:mt-8 items-start justify-center px-4 md:px-8 lg:px-16 2xl:px-64">
          <h1 className="text-[28px] l lg:text-[32px]  font-bold">
            Predictive Healthcare for a Healthier Tomorrow
          </h1>
          <p className="leading-relaxed tracking-wide mt-4">
            Pi-Health is a suite of wearable technology that uses
            advanced biosensors to remotely monitor people with complex
            conditions like Heart Disease, COPD, Asthma, Diabetes, Sleep
            Disorders, and Atrial Fibrillation (Strokes) complications. These
            biosensors generate ailment-specific vitals in real-time and send
            them to a connected clinician’s interface, Juni. Clinicians can view
            patient vitals by severity, from the most severe to the least
            severe. The clinicians’ interface is backed by Artificial
            Intelligence, enhancing the accuracy and efficiency of patient care.
            Other features include virtual wards, E-Visits, E-Pharmacies, Remote
            Admissions, and Test Centres. It’s a convergence of ailment-specific
            wearable technology, biosensor-driven insights, and an AI-backed
            clinician interface.
          </p>
        </div>
      </section>

      <section className="px-4 md:px-8 lg:px-16 2xl:px-64 py-5 ">
        <h1 className="text-[28px] l lg:text-[32px]  font-bold">
          Why choose us?
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-8 py-12">
          {/* Box 1 */}
          <div className="flex flex-col items-center text-center p-6 bg-gray-100 rounded-lg shadow-lg">
            <Heart className="text-red-500 mb-4 w-12 h-12" />
            <h3 className="text-lg font-semibold text-gray-800">
              Early Illness/Crisis Detection
            </h3>
            <p className="text-gray-600 mt-2">
              Early Illness/Crisis Detection Real-time vitals read by clinicians
              have shown a 60% improvement in early detection of conditions,
              thereby reducing hospital stays for patients with co-morbidities.
              It reduces backlog and re-admissions thus reducing/ preventing
              casualty.
            </p>
          </div>

          {/* Box 2 */}
          <div className="flex flex-col items-center text-center p-6 bg-gray-100 rounded-lg shadow-lg">
            <Star className="text-yellow-500 mb-4 w-12 h-12" />
            <h3 className="text-lg font-semibold text-gray-800">
              Increase In Revenue
            </h3>
            <p className="text-gray-600 mt-2">
              Hospitals in the Middle East, Gulf Regions, and Africa, where most
              of our clientele is located, will see a significant increase in
              revenue from the clinicians&apos; interface for outpatient
              subscriptions.
            </p>
          </div>

          {/* Box 3 */}
          <div className="flex flex-col items-center text-center p-6 bg-gray-100 rounded-lg shadow-lg">
            <CheckCircle className="text-green-500 mb-4 w-12 h-12" />
            <h3 className="text-lg font-semibold text-gray-800">
              The Future of Healthcare
            </h3>
            <p className="text-gray-600 mt-2">
              Our product meets all the requirements of the NHS 10-Year Plan and
              the Arab Vision 2030 healthcare plan. By integrating wearables,
              Al-powered severity ranking on the clinician&apos;s interface,
              virtual wards, e-visits, e- prescriptions, and test centres, we
              have created the ultimate healthcare solution for modern society.
            </p>
          </div>

          {/* Box 4 */}
          <div className="flex flex-col items-center text-center p-6 bg-gray-100 rounded-lg shadow-lg">
            <Shield className="text-blue-500 mb-4 w-12 h-12" />
            <h3 className="text-lg font-semibold text-gray-800">
              Better Outcomes
            </h3>
            <p className="text-gray-600 mt-2">
              For Physicians - it&apos;s about time savings. For Patients -
              it&apos;s managed healthcare access for both patients and
              physicians. For Hospitals - it&apos;s about reducing admissions
              and readmissions, increasing revenue, and improving overall costs.
            </p>
          </div>
        </div>
      </section>

      <section className=" md:h-[800px] flex flex-col lg:flex-row items-center px-4 md:px-8 lg:px-16 2xl:px-64  gap-10">
        <div className="w-full  text-[#212529] flex flex-col mt-4 items-start justify-center  gap-10 ">
          <div>
            <h1 className="text-[28px] l lg:text-[32px]  font-bold">
              Our Mission
            </h1>
            <p className="leading-relaxed tracking-wide mt-4">
              To empower healthcare providers with real-time, AI-driven insights
              and remote-monitoring technology, enabling precise, proactive care
              for people with comorbidity, regardless of location.
            </p>
          </div>

          <div>
            <h1 className="text-[28px] l lg:text-[32px]  font-bold">
              Our Vision
            </h1>
            <p className="leading-relaxed tracking-wide mt-4">
              A world where wearable technology and AI-backed clinical
              intelligence converge seamlessly to save lives, reduce
              hospitalizations, and transform chronic care management.
            </p>
          </div>

          <div>
            <h1 className="text-[28px] l lg:text-[32px]  font-bold">
              Our Values
            </h1>
            <p className="leading-relaxed tracking-wide mt-4">
              Mindful of net-zero targets, social and environmental commitments,
              Pi-Health has incorporated an ESG strategy to accomplish its
              sustainability objectives.
            </p>
          </div>
        </div>
        <div className="relative h-[400px] mt-4 lg:mt-0 lg:h-[600px] w-full ">
          <Image fill className="flex object-cover" src="/about.jpg" alt="" />
        </div>
      </section>

      <section className="px-4 md:px-8 lg:px-16 2xl:px-64 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* CEO's Picture */}
          <div className="w-full lg:w-1/2 relative h-[300px] lg:h-[500px]">
            <Image
              src="/images/ceo-pic.jpg" // Replace with the path to the CEO's image
              alt="CEO's Picture"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* CEO's Quote and Text */}
          <div className="w-full lg:w-1/2 text-[#212529] flex flex-col justify-center">
            <h2 className="text-[28px] lg:text-[32px] font-bold mb-4">
              Our Story
            </h2>
            <blockquote className="text-lg italic text-gray-600 mb-6">
              “At the heart of our mission is a deep commitment to improving
              lives through accessible, innovative healthcare. We strive to
              create a future where healthcare is not just a service, but a
              seamless experience that empowers people everywhere.”
            </blockquote>
            <p className="leading-relaxed tracking-wide mb-6">
              Our company was founded with the goal of revolutionizing
              healthcare through technology. With our AI-driven insights and
              remote monitoring solutions, we are building a future where
              healthcare providers can offer personalized and proactive care, no
              matter where their patients are located. We believe in the power
              of technology to transform lives, and we&apos;re dedicated to
              making this vision a reality.
            </p>

            {/* CEO's Name and Title */}
            <div className="text-lg font-semibold">
              <p className="text-gray-800">Blossom Fletcher</p>
              <p className="text-gray-600">Founder & CEO of Pi-Health</p>
            </div>
          </div>
        </div>

        <Partners />
      </section>
    </div>
  );
}
