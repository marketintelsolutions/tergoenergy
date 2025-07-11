import React from "react";
import SharedBanner from "../components/Layout/SharedBanner";
import Banner from "../components/OurBusinesses/Banner";
import BringingItTogether from "../components/Landing/BringingItTogether";
import OurPortfolio from "../components/Landing/OurPortfolio";

const NexusGas = () => {
  const gasServices = [
    {
      title: "Bulk Gas Supply",
      description:
        "Reliable supply of LPG, CNG, and LNG for industrial and commercial use with GSA's tailored to suit your energy needs.",
      items: [
        "Liquefied Petroleum Gas (LPG)",
        "Propane (C5)",
        "Compressed Natural Gas (CNG)",
        "Liquefied Natural Gas (LNG)",
      ],
    },
    {
      title: "Retail Gas Distribution",
      description:
        "Convenient access to high-quality LPG cylinders and CNG refilling stations for households and small businesses.",
      items: [
        "LPG Cylinders - Various sizes",
        "CNG Refilling Stations",
        "Timely delivery & safe handling",
        "Strategically located stations",
      ],
    },
    {
      title: "Cylinder Recertification",
      description:
        "Ensuring safety and longevity of gas cylinders through comprehensive inspection and certification services.",
      items: [
        "Comprehensive Inspection",
        "Pressure Testing",
        "Safety Certification",
        "Compliance Standards",
      ],
    },
  ];

  const advantages = [
    "Competitive Pricing & Flexible Contracts",
    "Risk Management & Stability",
    "Energy Efficiency & Sustainability",
    "Unmatched Customer Support",
  ];

  return (
    <div className="bg-lightGreen pb-10 md:pb-20">
      <Banner
        text="Nexus Gas Trading Limited"
        desc="We offer Gas Supply Agreements (GSA's) tailored to suit your specific energy requirements, providing consistency and reliability for your business operations."
      />

      <div className="w-[95%] md:w-[85%] max-w-[1600px] mx-auto my-12 md:my-20 lg:my-[100px]">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-16 mb-12 md:mb-20">
          <img
            src="/images/oilfactory.jpg"
            alt="gas infrastructure"
            className="w-full lg:w-[40%] max-w-[685px] object-cover rounded-[20px] md:rounded-[30px]"
          />
          <div className="flex-1">
            <h3 className="text-ash-g-Color text-2xl md:text-3xl font-bold font-['Inter'] leading-tight md:leading-10">
              Nexus Gas Trading Limited
            </h3>
            <p className="max-w-[836px] mt-6 md:mt-12 lg:mt-[50px] text-ash-g-Color text-lg md:text-xl lg:text-[22px] font-normal font-['Inter'] leading-relaxed md:leading-9 lg:leading-[47px]">
              At Nexus Gas Trading Limited, we provide high-quality gas
              solutions tailored to meet the needs of both our bulk and retail
              customers. Our range of services ensures that you receive
              reliable, safe, and efficient energy solutions, whether you're
              powering a small household or a large industrial operation.
            </p>
            <p className="self-stretch mt-6 md:mt-10 text-ash-g-Color text-lg md:text-xl lg:text-[22px] font-normal font-['Inter'] leading-relaxed md:leading-9 lg:leading-[47px]">
              Our seamless supply chain ensures you always have the energy you
              need to keep your operations running smoothly. We offer Gas Supply
              Agreements (GSA's) tailored to suit your specific energy
              requirements, providing consistency and reliability for your
              business operations.
            </p>
          </div>
        </div>

        {/* Services Section */}
        <div className="space-y-8 md:space-y-12 lg:space-y-16">
          {gasServices.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-[20px] md:rounded-[30px] p-6 md:p-8 lg:p-12 shadow-[0px_69px_114px_rgba(58,64,58,0.08)]"
            >
              <h3 className="text-primaryGreen text-xl md:text-2xl lg:text-3xl font-bold font-['Inter'] leading-tight md:leading-8 lg:leading-10 mb-4 md:mb-6">
                {service.title}
              </h3>
              <p className="text-ash-g-Color text-base md:text-lg lg:text-xl font-normal font-['Inter'] leading-relaxed md:leading-7 lg:leading-[32px] mb-6 md:mb-8">
                {service.description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {service.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primaryGreen rounded-full mt-2 md:mt-3 flex-shrink-0"></div>
                    <span className="text-ash-g-Color text-base md:text-lg font-normal font-['Inter'] leading-relaxed md:leading-[28px]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Advantages Section */}
        <div className="w-full mt-12 md:mt-20 bg-primaryGreen flex flex-col xl:flex-row rounded-[25px] md:rounded-[50px]">
          <div className="py-12 md:py-16 lg:py-[80px] flex flex-col gap-6 md:gap-8 px-6 md:px-12 lg:pl-[90px] lg:pr-8 justify-center w-full xl:w-[40%]">
            <h3 className="text-white text-xl md:text-2xl font-bold font-['Poppins'] leading-tight md:leading-10">
              The Nexus Gas Advantage
            </h3>
            {advantages.map((advantage, index) => (
              <p
                key={index}
                className="relative py-1 max-w-96 text-white text-base md:text-lg font-semibold font-['Poppins'] leading-relaxed md:leading-8"
              >
                {advantage}
                {index === 0 && (
                  <div className="absolute h-full -left-6 md:-left-10 top-0 w-[2px] bg-white"></div>
                )}
              </p>
            ))}
          </div>

          <div className="w-full xl:w-[60%] max-w-[1020px] px-6 md:px-12 lg:px-24 py-12 md:py-24 lg:py-32 bg-white/90 rounded-[25px] md:rounded-[50px] flex flex-col gap-6 md:gap-8 lg:gap-10">
            <div className="text-zinc-900 text-lg md:text-xl lg:text-2xl font-medium font-['Poppins'] leading-tight md:leading-8 lg:leading-9">
              Why Choose Nexus Gas Trading?
            </div>
            <div className="text-ash-g-Color text-sm md:text-base lg:text-lg font-normal font-['Inter'] leading-relaxed md:leading-8 lg:leading-10">
              Partnering with Nexus Gas Trading means gaining access to a
              trusted gas supplier that ensures seamless trading experience for
              businesses of all sizes. We provide competitive pricing, flexible
              contracts, risk management strategies, and unmatched customer
              support to help you navigate market fluctuations while minimizing
              price volatility.
            </div>
          </div>
        </div>
      </div>
      <OurPortfolio />
    </div>
  );
};

export default NexusGas;
