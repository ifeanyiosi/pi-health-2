"use client";

import { useState } from "react";

const LearnMoreSection = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <section
      id="space"
      className="flex flex-col md:flex-row items-center gap-8 py-16 px-8 bg-gray-900"
    >
      {/* Text Section */}
      <div className="w-full lg:ml-[80px] md:w-1/2 ml-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-200 leading-tight">
          Meili II: How Pi-health is Revolutionizing Space Health.
        </h2>
        <p className="mt-6 text-lg md:text-xl text-gray-400 leading-relaxed">
          Our products are designed to support astronauts during space missions,
          ensuring continuous health monitoring in extreme environments.
        </p>

        {/* Learn More Button */}
        <button
          className="mt-8 px-6 py-3 bg-[#345334] text-lg text-white rounded-md hover:bg-[#1e2e1e] transition"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? "Show Less" : "Learn More"}
        </button>

        {/* Collapsible Details Section */}
        {showDetails && (
          <div className="mt-6 text-lg text-gray-300 leading-relaxed">
            <p>
              During the Meili II mission, Pi-Health products will track vital
              health data, providing critical insights to medical teams on
              Earth. Our wearable devices offer real-time monitoring and are
              tailored for use in remote environments, simulating the conditions
              of space exploration.
            </p>
            <ul className="mt-4 list-disc list-inside">
              <li>Continuous vital signs monitoring</li>
              <li>Data visualization for medical teams</li>
              <li>Built for extreme environments</li>
            </ul>
          </div>
        )}
      </div>

      {/* Video Section */}
      <div className="w-full md:w-1/2 mr-auto">
        <video
          src="/videos/rocket.mp4"
          controls
          autoPlay
          loop
          muted
          className="rounded-lg shadow-lg w-full"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default LearnMoreSection;
