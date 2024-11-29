/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

export default function Partners() {
  return (
    <section className="px-4 mt-10 md:px-8 lg:px-16 2xl:px-64 py-12 flex flex-col items-center justify-center ">
      <div className="text-center mb-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#212529]">
          Our Partners
        </h2>
        <p className="text-lg text-gray-600 mt-4">
          We are proud to work with leading brands and organizations to make
          healthcare more accessible and efficient.
        </p>
      </div>

      <div className="bg-black  flex items-center justify-center">
        <img
          className="h-[100px] flex items-center justify-center"
          src="/images/cosens-logo.png"
          alt=""
        />
      </div>
    </section>
  );
}
