import React from "react";
import SharedBanner from "../components/Layout/SharedBanner";
import Banner from "../components/OurBusinesses/Banner";
import BringingItTogether from "../components/Landing/BringingItTogether";

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
    <div className="bg-lightGreen pb-20">
      <Banner text="Nexus Gas Trading Limited" />

      <div className="w-[85%] max-w-[1600px] mx-auto my-[100px]">
        <div className="flex gap-12 mb-20">
          <img
            src="/images/oilfactory.jpg"
            alt="gas infrastructure"
            className="w-[43%] max-w-[685px] object-cover rounded-[30px]"
          />
          <div>
            <h3 className="text-ash-g-Color text-3xl font-bold font-['Inter'] leading-10">
              Nexus Gas Trading Limited
            </h3>
            <p className="max-w-[836px] mt-[50px] text-ash-g-Color text-[24px] font-normal font-['Inter'] leading-[47px]">
              At Nexus Gas Trading Limited, we provide high-quality gas
              solutions tailored to meet the needs of both our bulk and retail
              customers. Our range of services ensures that you receive
              reliable, safe, and efficient energy solutions, whether you're
              powering a small household or a large industrial operation.
            </p>
            <p className="self-stretch mt-10 text-ash-g-Color text-[24px] font-normal font-['Inter'] leading-[47px]">
              Our seamless supply chain ensures you always have the energy you
              need to keep your operations running smoothly. We offer Gas Supply
              Agreements (GSA's) tailored to suit your specific energy
              requirements, providing consistency and reliability for your
              business operations.
            </p>
          </div>
        </div>

        {/* Services Section */}
        <div className="space-y-16">
          {gasServices.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-[30px] p-12 shadow-[0px_69px_114px_rgba(58,64,58,0.08)]"
            >
              <h3 className="text-primaryGreen text-3xl font-bold font-['Inter'] leading-10 mb-6">
                {service.title}
              </h3>
              <p className="text-ash-g-Color text-xl font-normal font-['Inter'] leading-[32px] mb-8">
                {service.description}
              </p>
              <div className="grid grid-cols-2 gap-6">
                {service.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primaryGreen rounded-full mt-3"></div>
                    <span className="text-ash-g-Color text-lg font-normal font-['Inter'] leading-[28px]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Advantages Section */}
        <div className="w-full mt-20 bg-primaryGreen flex rounded-[50px]">
          <div className="py-[100px] flex flex-col gap-8 pl-[90px] justify-center w-[40%]">
            <h3 className="text-white text-3xl font-bold font-['Poppins'] leading-10">
              The Nexus Gas Advantage
            </h3>
            {advantages.map((advantage, index) => (
              <p
                key={index}
                className="relative py-1 max-w-96 text-white text-xl font-semibold font-['Poppins'] leading-8"
              >
                {advantage}
                {index === 0 && (
                  <div className="absolute h-full -left-10 top-0 w-[2px] bg-white"></div>
                )}
              </p>
            ))}
          </div>

          <div className="w-[60%] max-w-[1020px] px-24 py-44 bg-white/90 rounded-[50px] flex flex-col gap-10">
            <div className="text-zinc-900 text-3xl font-medium font-['Poppins'] leading-9">
              Why Choose Nexus Gas Trading?
            </div>
            <div className="text-ash-g-Color text-xl font-normal font-['Inter'] leading-10">
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
      <BringingItTogether />
    </div>
  );
};

export default NexusGas;
