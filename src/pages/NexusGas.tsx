import React from "react";
import Banner from "../components/OurBusinesses/Banner";
import OurPortfolio from "../components/Landing/OurPortfolio";
import { Link } from "react-router-dom";
const gasServices = [
  {
    title: "Bulk Gas Supply",
    description: "For Retail Plants, Industrial & Manufacturing Operations",
    items: [
      "Liquefied Petroleum Gas (LPG)",
      "Propane (C5)",
      "Compressed Natural Gas (CNG)",
      "Liquefied Natural Gas (LNG)",
    ],
  },
  {
    title: "Commercial Gas Solutions",
    description: "For Businesses, Hotels, and Offices",

    items: [
      "LPG Cylinders - Various sizes",
      "CNG Refilling Stations",
      "Timely delivery & safe handling",
      "Strategically located stations",
    ],
  },
  {
    title: "Retail & Domestic Gas Supply",
    description: "For Households",
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

const whyChooseUs = [
  {
    heading: "Uninterrupted Supply",
    text:
      "Our seamless logistics and strategic partnerships ensure you have the energy you need, when you need it.",
  },
  {
    heading: "Tailored Solutions",
    text:
      "From bulk supply for commercial and industrial clients to flexible packages for homes and businesses, we customize our services to your exact needs.",
  },
  {
    heading: "Safety Assurance",
    text:
      "We adhere to the highest international standards, ensuring the gas we deliver is handled with utmost safety.",
  },
  {
    heading: "Strategic Partnerships",
    text:
      "We build long-term relationships based on reliability, trust, and mutual growth.",
  },
];
const NexusGas = () => {
  return (
    <div className=" pb-10 md:pb-20">
      <Banner
        img={"nexusbanner.jpg"}
        text="Nexus Gas Trading Limited"
        desc="Reliable Gas Solutions for Every Need"
      />

      <div className="w-[95%] md:w-[85%] max-w-[1600px] mx-auto my-12 md:my-20 lg:my-[100px]">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-16 mb-12 md:mb-20">
          <img
            src="/images/oilfactory.jpg"
            alt="gas infrastructure"
            className="w-full lg:w-[40%] max-w-[685px] object-cover rounded-[20px] md:rounded-[30px]"
          />
          <div className="flex-1">
            <h3 className="text-nexusBlue text-2xl md:text-3xl font-bold font-['Inter'] leading-tight md:leading-10">
              Powering Homes, Businesses, and Industries
            </h3>
            <p className="max-w-[836px] mt-6 md:mt-12 lg:mt-[50px] text-ash-g-Color text-lg md:text-xl lg:text-[22px] font-normal font-['Inter'] leading-relaxed md:leading-9 lg:leading-[47px]">
              Nexus Gas Trading Limited is focused on delivering tailored energy
              solutions to domestic, commercial, and industrial customers across
              Nigeria. We are dedicated to ensuring your operations—whether a
              small household or a large manufacturing plant—run smoothly with a
              reliable, safe, and efficient fuel source.
            </p>
            <p className="self-stretch mt-6 md:mt-10 text-ash-g-Color text-lg md:text-xl lg:text-[22px] font-normal font-['Inter'] leading-relaxed md:leading-9 lg:leading-[47px]">
              Our core strength lies in our robust supply chain and
              customer-centric approach. We structure Gas Supply Agreements
              (GSAs) that are meticulously designed to meet your specific
              consumption and sales patterns and operational requirements. This
              guarantees not just consistency in supply, but also predictability
              in cost, allowing you to focus on your core business without
              energy concerns.
            </p>
          </div>
        </div>

        {/* Services Section */}
        <div className="space-y-8 md:space-y-12 lg:space-y-16">
          {gasServices.map((service, index) => (
            <div
              key={index}
              className="bg-lightGreen/20 rounded-[20px] md:rounded-[30px] p-6 md:p-8 lg:p-12 shadow-[0px_69px_114px_rgba(58,64,58,0.08)]"
            >
              <h3 className="text-nexusBlue text-xl md:text-2xl lg:text-3xl font-bold font-['Inter'] leading-tight md:leading-8 lg:leading-10 mb-4 md:mb-6">
                {service.title}
              </h3>
              <p className="text-ash-g-Color text-base md:text-lg lg:text-xl font-normal font-['Inter'] leading-relaxed md:leading-7 lg:leading-[32px] mb-6 md:mb-8">
                {service.description}
              </p>
              {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {service.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-nexusBlue rounded-full mt-2 md:mt-3 flex-shrink-0"></div>
                    <span className="text-ash-g-Color text-base md:text-lg font-normal font-['Inter'] leading-relaxed md:leading-[28px]">
                      {item}
                    </span>
                  </div>
                ))}
              </div> */}
            </div>
          ))}
        </div>

        {/* Advantages Section */}
        <div className="w-full mt-12 md:mt-20 bg-nexusBlue flex flex-col xl:flex-row rounded-[25px] md:rounded-[50px]">
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

          <div className="w-full xl:w-[60%] max-w-[1020px] px-6 md:px-12 lg:px-20 py-12 md:py-24 lg:py-20 bg-white/90 rounded-[25px] md:rounded-[50px] flex flex-col gap-6 md:gap-8 lg:gap-10">
            <div className="text-zinc-900 text-lg md:text-xl lg:text-2xl font-medium font-['Poppins'] leading-tight md:leading-8 lg:leading-9">
              Why Choose Nexus Gas Trading?
            </div>
            <div className="text-ash-g-Color flex flex-col gap-8 text-sm md:text-base lg:text-lg font-normal font-['Inter'] leading-relaxed md:leading-8 lg:leading-10">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="flex flex-col gap-3">
                  <h4 className="uppercase  text-xl">{item.heading}</h4>
                  <p className="font-light">{item.text}</p>
                </div>
              ))}
              {/* Partnering with Nexus Gas Trading means gaining access to a
              trusted gas supplier that ensures seamless trading experience for
              businesses of all sizes. We provide competitive pricing, flexible
              contracts, risk management strategies, and unmatched customer
              support to help you navigate market fluctuations while minimizing
              price volatility. */}
            </div>
          </div>
        </div>

        <div className="text-center mt-20">
          <h3 className="text-primaryGreen text-2xl md:text-3xl lg:text-3xl max-w-[800px] mx-auto font-bold font-['Poppins'] leading-tight md:leading-[1.2] lg:leading-[48px] mb-4 md:mb-6">
            Ready to secure a consistent and reliable energy source for your
            home or business?
          </h3>
          <p className="text-ash-g-Color text-lg md:text-xl font-normal font-['Inter'] leading-relaxed md:leading-[32px] mb-8 md:mb-10">
            Contact us today to discuss a structured Gas Supply Agreement (GSA)
            tailored to your needs.
          </p>
          <Link to={"/contact"}>
            <button className="bg-nexusBlue text-white px-8 md:px-12 py-3 md:py-4 rounded-[15px] text-lg md:text-xl font-semibold font-['Poppins'] hover:bg-nexusBlue/80 transition-colors">
              Contact Nexus Gas
            </button>
          </Link>
        </div>
      </div>
      <OurPortfolio />
    </div>
  );
};

export default NexusGas;
