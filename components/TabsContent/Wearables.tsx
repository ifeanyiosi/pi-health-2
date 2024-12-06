import Image from "next/image";
import React from "react";

export default function Wearables() {
  return (
    <section className="px-4 bg-white md:px-8 lg:px-16 2xl:px-64 lg:w-fit ">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:p-[80px]">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-[#212529] flex flex-col">
          <div className=" mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 md:text-3xl">
              Real-Time Health Monitoring with Wearables
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Wearables transmit real-time, ailment-specific vitals to the app
              and clinicians’ interface, allowing users to maintain their
              lifestyle without being hospital or bed-bound. These devices
              seamlessly integrate with the app, offering continuous monitoring
              of key health indicators such as{" "}
              <span className="font-medium text-gray-800">heart rate</span>,{" "}
              <span className="font-medium text-gray-800">blood pressure</span>,{" "}
              <span className="font-medium text-gray-800">
                oxygen saturation
              </span>
              , and{" "}
              <span className="font-medium text-gray-800">activity levels</span>
              .
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              This data empowers clinicians to detect early warning signs,
              adjust treatment plans remotely, and provide personalized care
              recommendations without the need for frequent in-person visits.
              Users can also receive instant alerts for critical health events,
              enabling timely intervention and reducing the risk of
              complications.
            </p>
          </div>
        </div>

        {/* Image for Vision Section */}
        <div className="w-full lg:w-1/2 relative h-[300px] lg:h-[550px]">
          <Image
            src="/images/wearable.png" // Replace with the path to the vision image
            alt="Our Vision"
            fill
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
