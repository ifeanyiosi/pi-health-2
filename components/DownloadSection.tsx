/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const DownloadSection = () => {
  return (
    <section className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-extrabold mb-6">Download Our App</h2>
        <p className="text-lg mb-8 max-w-lg mx-auto">
          Take control of your health anytime, anywhere. Track your wellness and
          make data-driven decisions for a healthier life.
        </p>

        {/* Phone Image */}
        <div className="flex flex-col lg:flex-row items-center justify-center mb-10">
          <div className="mb-6 lg:mb-0">
            <img
              src="/images/app-image.png"
              alt="Phone displaying app"
              className="mx-auto w-[250px] md:w-[300px] lg:w-[350px] shadow-xl rounded-lg"
            />
          </div>

          {/* Store Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <div className="flex items-center gap-5">
              {/* App Store Button */}
              <a
                href="#"
                className="bg-black flex items-center justify-center gap-3 w-[220px] py-3 px-5 rounded-lg hover:bg-gray-800 transition transform hover:scale-105"
              >
                <FaApple className="text-2xl text-white" />
                <div>
                  <span className="text-sm text-gray-300">Download on the</span>
                  <h3 className="text-lg font-semibold text-white">
                    App Store
                  </h3>
                </div>
              </a>

              {/* Google Play Button */}
              <a
                href="#"
                className="bg-black flex items-center justify-center gap-3 w-[220px] py-3 px-5 rounded-lg hover:bg-gray-800 transition transform hover:scale-105"
              >
                <FaGooglePlay className="text-2xl text-white" />
                <div>
                  <span className="text-sm text-gray-300">Get it on</span>
                  <h3 className="text-lg font-semibold text-white">
                    Google Play
                  </h3>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
