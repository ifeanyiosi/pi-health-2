import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center px-4 md:px-8 lg:px-16 2xl:px-64 py-12 lg:gap-10">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl lg:text-5xl font-bold text-[#212529] mb-4">
            Guiding Healthcare Innovation and Excellence
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            At Pi-Health, we are transforming healthcare for individuals with
            multiple comorbidities through AI-backed remote monitoring
            technology linked to a clinicians’ interface. Our innovative devices
            empower clinicians, carers, and family members to make faster,
            smarter decisions for better patient outcomes.
          </p>
          <Button>Get started</Button>
        </div>
        {/* Hero Image */}
        <div className="w-full md:w-1/2 relative mt-8 md:mt-0 h-[300px] md:h-[900px]">
          <Image
            src="/images/share-hero.png" // Replace with the path to the hero image
            alt="Healthcare Solution"
            fill
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Content Section */}
      <section className="px-4 md:px-8 lg:px-16 2xl:px-64 py-12 ">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 bg-[#F9F9F9] lg:p-[80px] ">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-[#212529] flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">Clinicians</h1>
            <p className="text-lg text-gray-600 leading-relaxed tracking-wide mb-6">
              Pi-Health empowers clinicians to remotely triage patients and
              assess severity using AI-driven predictive algorithms, enhancing
              decision-making, efficiency, and patient satisfaction while
              reducing clinician burnout and patient no-shows. This wearable
              tool also supports remote monitoring of vital metrics like ECG,
              COPD, and atrial fibrillation, offering risk stratification to aid
              in clinical decisions. By organizing health data, Pi-Health
              provides educational value for less experienced practitioners and
              extends care access to patients unable to visit medical
              facilities.
            </p>
          </div>
          {/* Image for Vision Section */}
          <div className="w-full lg:w-1/2 relative h-[300px] lg:h-[550px]">
            <Image
              src="/images/clinicians.png" // Replace with the path to the vision image
              alt="Our Vision"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 lg:px-16 2xl:px-64 py-12 ">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 bg-[#F9F9F9] lg:p-[80px] ">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-[#212529] flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">Caregivers</h1>
            <p className="text-lg text-gray-600 leading-relaxed tracking-wide mb-6">
              Pi-Health’s caregivers&apos; interface enables care home staff to
              remotely monitor multiple patients, tracking vital signs and risk
              information by severity. This early detection of patient
              deterioration helps prevent costly adverse events and reduces
              caregiver burnout by automating data collection. The platform also
              ensures accurate, automated health data documentation,
              facilitating smooth patient handovers and minimizing errors in
              care management.
            </p>
          </div>
          {/* Image for Vision Section */}
          <div className="w-full lg:w-1/2 relative h-[300px] lg:h-[550px]">
            <Image
              src="/images/caregivers.png" // Replace with the path to the vision image
              alt="Our Vision"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 lg:px-16 2xl:px-64 py-12 ">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 bg-[#F9F9F9] lg:p-[80px] ">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-[#212529] flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">
              Hospital/Clinics
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed tracking-wide mb-6">
              Deploying Pi-Health in hospitals increases net patient revenue by
              enhancing workflow efficiency, boosting staff productivity, and
              lowering administrative costs. The technology addresses clinical
              staff shortages by improving efficiency and automating patient
              data management, streamlining transfers between clinicians for
              more seamless care.
            </p>
          </div>
          {/* Image for Vision Section */}
          <div className="w-full lg:w-1/2 relative h-[300px] lg:h-[550px]">
            <Image
              src="/images/hospital.png" // Replace with the path to the vision image
              alt="Our Vision"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 lg:px-16 2xl:px-64 py-12 ">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 bg-[#F9F9F9] lg:p-[80px] ">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-[#212529] flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">
              Home Health Organizations
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed tracking-wide mb-6">
              Pi-Health enhances organizational mobility for home healthcare
              providers by enabling rapid scaling while minimizing
              infrastructure costs and boosting caregiver productivity. Its
              remote monitoring reduces the travel required for caregivers,
              saving time and resources, from vehicle maintenance to travel
              hours, allowing organizations to focus more on quality patient
              care. Additionally, Pi-Health’s data communication system
              streamlines interactions between caregivers and the patient’s
              medical network, supporting more efficient and coordinated patient
              management.
            </p>
          </div>
          {/* Image for Vision Section */}
          <div className="w-full lg:w-1/2 relative h-[300px] lg:h-[550px]">
            <Image
              src="/images/organisation.png" // Replace with the path to the vision image
              alt="Our Vision"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
