import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Wearables from "./TabsContent/Wearables";
import Image from "next/image";

export default function HowItWorks() {
  return (
    <section className="px-4 py-12 w-fit mx-auto flex flex-col items-center bg-[#F6F6F6] justify-center ">
      <div className=" mx-auto flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-4xl text-center font-bold mb-8 text-gray-800">
          How we transform health monitoring.
        </h1>

        <Tabs
          defaultValue="wearables"
          className="w-fit flex flex-col bg-[#F6F6F6] items-center justify-center"
        >
          {/* Tab Navigation */}
          <TabsList className="flex w-fit bg-white justify-center ">
            <TabsTrigger value="wearables" className="mx-2 bg-white">
              Wearables
            </TabsTrigger>
            <TabsTrigger value="mobile-application" className="mx-2">
              Mobile Application
            </TabsTrigger>
            <TabsTrigger value="clinician-interface" className="mx-2">
              Clinician Interface
            </TabsTrigger>
          </TabsList>

          {/* Wearables Tab */}
          <TabsContent className="" value="wearables">
            <Wearables />
          </TabsContent>

          {/* Mobile Application Tab */}
          <TabsContent value="mobile-application">
            <section className="px-4 bg-white md:px-8 lg:px-16 2xl:px-64 ">
              <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:p-[80px]">
                {/* Text Content */}
                <div className="w-full lg:w-1/2 text-[#212529] flex flex-col">
                  <div className=" mx-auto text-start">
                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                      Mobile Application
                    </h1>
                    <p className="text-lg text-gray-600 leading-relaxed text-start tracking-wide mb-6">
                      The mobile application allows users to display their
                      symptoms and enables clinicians to communicate with
                      patients through the clinician interface.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed tracking-wide mb-6">
                      Users can securely log their health conditions, upload
                      medical reports, and monitor vital signs through connected
                      wearable devices. The app offers a seamless, intuitive
                      interface that guides users through symptom tracking and
                      health data logging with minimal effort.
                    </p>
                  </div>
                </div>

                {/* Image for Vision Section */}
                <div className="w-full lg:w-1/2 relative h-[300px] lg:h-[550px]">
                  <Image
                    src="/images/mobile.png" // Replace with the path to the vision image
                    alt="Our Vision"
                    fill
                    className="object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </section>
          </TabsContent>

          {/* Clinician Interface Tab */}
          <TabsContent value="clinician-interface">
            <section className="px-4 bg-white md:px-8 lg:px-16 2xl:px-64  w-full">
              <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:p-[80px]">
                {/* Text Content */}
                <div className="w-full lg:w-1/2 text-[#212529] flex flex-col">
                  <div className=" mx-auto text-start">
                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                      Clinicians’ Interface
                    </h1>
                    <p className="text-lg text-gray-600 leading-relaxed tracking-wide mb-6">
                      The platform displays wearable-derived vitals to
                      physicians, ranked by severity using AI, and enables
                      e-visits, remote triage, e-admissions, threshold setting,
                      and e-prescribing while integrating with hospital
                      electronic records to support seamless care management and
                      proactive notifications on patient health.
                    </p>

                    <p className="text-lg text-gray-600 leading-relaxed tracking-wide mb-6">
                      With real-time dashboards, clinicians can monitor patient
                      health trends over time, enabling early detection of
                      deteriorating conditions. Advanced analytics provide
                      personalized insights for each patient, allowing targeted
                      interventions that improve outcomes and reduce hospital
                      readmissions.
                    </p>
                  </div>
                </div>

                {/* Image for Vision Section */}
                <div className="w-full lg:w-1/2 relative h-[300px] lg:h-[550px]">
                  <Image
                    src="/images/clinician.png" // Replace with the path to the vision image
                    alt="Our Vision"
                    fill
                    className="object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </section>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
