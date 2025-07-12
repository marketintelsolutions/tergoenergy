import React from "react";
import Banner from "../components/OurBusinesses/Banner";
import OurPortfolio from "../components/Landing/OurPortfolio";
import { FaFireAlt, FaRegSnowflake } from "react-icons/fa";
import { GiElectric, GiRiceCooker } from "react-icons/gi";
import { MdOutlineLocalShipping } from "react-icons/md";

const MultigasSystems = () => {
  const gasApplications = [
    {
      icon: <FaFireAlt />,
      title: "Gas to Heating",
      description:
        "Innovative gas solutions for industrial and residential heating applications, ensuring optimal energy use and cost efficiency.",
      applications: [
        "Industrial Heating Systems",
        "Residential & Commercial Heating",
        "Gas-fired Water Heaters",
        "Manufacturing Plant Solutions",
      ],
    },
    {
      icon: <GiElectric />,
      title: "Gas to Power",
      description:
        "Gas-powered solutions for electricity generation, enhancing energy reliability and reducing environmental impact.",
      applications: [
        "Backup Power Systems",
        "Grid Power Generation",
        "Emergency Power Solutions",
        "Mission-Critical Operations",
      ],
    },
    {
      icon: <FaRegSnowflake />,
      title: "Gas to Cooling",
      description:
        "Advanced gas-based cooling systems for industrial and commercial applications, offering sustainable temperature control.",
      applications: [
        "Industrial Cooling Systems",
        "Commercial Air Conditioning",
        "Food Processing Cooling",
        "Pharmaceutical Applications",
      ],
    },
    {
      icon: <MdOutlineLocalShipping />,
      title: "Gas to Transport",
      description:
        "Supporting the transition to cleaner energy in the transport sector with gas-fueled vehicles and transportation systems.",
      applications: [
        "CNG Vehicle Conversion",
        "Fleet Solutions",
        "Public Transportation",
        "Clean Transport Infrastructure",
      ],
    },
    {
      icon: <GiRiceCooker />,
      title: "Gas to Cooking",
      description:
        "Safe and efficient gas solutions for domestic and commercial cooking, promoting energy efficiency and sustainability.",
      applications: [
        "Residential LPG Solutions",
        "Commercial Kitchen Systems",
        "Restaurant Solutions",
        "Large-scale Food Processing",
      ],
    },
  ];

  const multgasAdvantages = [
    "Comprehensive Gas Infrastructure Solutions",
    "Tailored Gas Application Systems",
    "Safety & Compliance Excellence",
    "Reliable & Cost-Effective Energy Solutions",
  ];

  return (
    <div className="bg-lightGreen pb-10 md:pb-20">
      <Banner text="Multigas Systems Limited" />
      
      <div className="w-[95%] md:w-[85%] max-w-[1600px] mx-auto my-12 md:my-20 lg:my-[100px]">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-16 mb-12 md:mb-20">
          <img
            src="/images/multigasbusiness.jpg"
            alt="gas applications"
            className="w-full lg:w-[40%] max-w-[685px] object-cover rounded-[20px] md:rounded-[30px]"
          />
          <div className="flex-1">
            <h3 className="text-ash-g-Color text-2xl md:text-3xl font-bold font-['Inter'] leading-tight md:leading-10">
              Multigas Systems Limited
            </h3>
            <p className="max-w-[836px] mt-6 md:mt-12 lg:mt-[50px] text-ash-g-Color text-lg md:text-xl lg:text-[22px] font-normal font-['Inter'] leading-relaxed md:leading-9 lg:leading-[40px]">
              Our Gas Application services are designed to maximize the
              versatility and efficiency of gas systems across multiple sectors.
              Through Multigas Systems Limited, we offer customized solutions
              that span from heating and power generation to cooling and
              transportation applications.
            </p>
            <p className="self-stretch mt-6 md:mt-10 text-ash-g-Color text-lg md:text-xl lg:text-[22px] font-normal font-['Inter'] leading-relaxed md:leading-9 lg:leading-[47px]">
              At MULTIGAS, we are committed to delivering innovative, reliable,
              and efficient gas solutions across various industries. Whether you
              need gas infrastructure development or specialized gas application
              systems, we provide end-to-end services designed for safety,
              efficiency, and sustainability.
            </p>
          </div>
        </div>

        {/* Gas Applications Section */}
        <div className="space-y-8 md:space-y-12 lg:space-y-16">
          {gasApplications.map((application, index) => (
            <div
              key={index}
              className="bg-white rounded-[20px] md:rounded-[30px] p-6 md:p-8 lg:p-12 shadow-[0px_69px_114px_rgba(58,64,58,0.08)]"
            >
              <div className="flex flex-col sm:flex-row items-start gap-6 md:gap-8">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl md:text-3xl">
                    {application.icon}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-primaryGreen text-xl md:text-2xl lg:text-3xl font-bold font-['Inter'] leading-tight md:leading-8 lg:leading-10 mb-3 md:mb-4">
                    {application.title}
                  </h3>
                  <p className="text-ash-g-Color text-base md:text-lg lg:text-xl font-normal font-['Inter'] leading-relaxed md:leading-7 lg:leading-[32px] mb-6 md:mb-8">
                    {application.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    {application.applications.map((app, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primaryGreen rounded-full flex-shrink-0"></div>
                        <span className="text-ash-g-Color text-sm md:text-base lg:text-lg font-normal font-['Inter'] leading-relaxed md:leading-[28px]">
                          {app}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Installation & Maintenance */}
        <div className="bg-white rounded-[25px] md:rounded-[50px] p-8 md:p-12 shadow-[0px_69px_114px_rgba(58,64,58,0.08)] my-12 md:my-20">
          <h3 className="text-primaryGreen text-2xl md:text-3xl font-bold font-['Inter'] leading-tight md:leading-10 mb-6 md:mb-8 text-center">
            Installation & Maintenance Services
          </h3>
          <p className="text-ash-g-Color text-lg md:text-xl font-normal font-['Inter'] leading-relaxed md:leading-[32px] mb-8 md:mb-10 text-center">
            Safety and efficiency are our top priorities. We offer professional
            installation and maintenance services for all your gas equipment and
            systems.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h4 className="text-primaryGreen text-xl md:text-2xl font-bold font-['Inter'] leading-tight md:leading-8 mb-3 md:mb-4">
                LPG Storage Systems
              </h4>
              <p className="text-ash-g-Color text-base md:text-lg font-normal font-['Inter'] leading-relaxed md:leading-[28px]">
                We design and install safe and efficient LPG storage solutions
                for both residential and commercial use. Our team ensures
                compliance with all safety standards.
              </p>
            </div>
            <div>
              <h4 className="text-primaryGreen text-xl md:text-2xl font-bold font-['Inter'] leading-tight md:leading-8 mb-3 md:mb-4">
                CNG Equipment Maintenance
              </h4>
              <p className="text-ash-g-Color text-base md:text-lg font-normal font-['Inter'] leading-relaxed md:leading-[28px]">
                Regular maintenance is key to the longevity and efficiency of
                your CNG systems. Our experts provide comprehensive maintenance
                services to keep your equipment in top condition.
              </p>
            </div>
          </div>
        </div>

        {/* MULTIGAS Advantage Section */}
        <div className="w-full bg-primaryGreen flex flex-col xl:flex-row rounded-[25px] md:rounded-[50px] mb-12 md:mb-20">
          <div className="py-12 md:py-16 lg:py-[80px] flex flex-col gap-6 md:gap-8 px-6 md:px-12 lg:pl-[90px] lg:pr-8 justify-center w-full xl:w-[40%]">
            <h3 className="text-white text-xl md:text-2xl font-bold font-['Poppins'] leading-tight md:leading-8">
              The MULTIGAS Advantage
            </h3>
            {multgasAdvantages.map((advantage, index) => (
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

          <div className="w-full xl:w-[60%] max-w-[1020px] px-6 md:px-12 lg:px-20 py-12 md:py-24 lg:py-32 bg-white/90 rounded-[25px] md:rounded-[50px] flex flex-col gap-6 md:gap-8 lg:gap-10">
            <div className="text-zinc-900 text-lg md:text-xl lg:text-2xl font-medium font-['Poppins'] leading-tight md:leading-8 lg:leading-9">
              Why Choose MULTIGAS?
            </div>
            <div className="text-black text-sm md:text-base lg:text-lg font-normal font-['Inter'] leading-relaxed md:leading-6 lg:leading-8">
              From design and construction to ongoing maintenance, we ensure
              your gas systems are built to the highest industry standards. We
              provide industrial, commercial, and residential gas solutions,
              optimizing energy use for heating, cooking, power generation, and
              more. Our team follows strict regulatory guidelines to ensure all
              infrastructure and applications meet national and international
              safety standards.
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-primaryGreen text-2xl md:text-3xl lg:text-4xl font-bold font-['Poppins'] leading-tight md:leading-[1.2] lg:leading-[48px] mb-4 md:mb-6">
            Powering Businesses with Smart Gas Solutions
          </h3>
          <p className="text-ash-g-Color text-lg md:text-xl font-normal font-['Inter'] leading-relaxed md:leading-[32px] mb-8 md:mb-10">
            Partner with MULTIGAS for a seamless, efficient, and future-ready
            gas infrastructure.
          </p>
          <button className="bg-primaryGreen text-white px-8 md:px-12 py-3 md:py-4 rounded-[15px] text-lg md:text-xl font-semibold font-['Poppins'] hover:bg-primaryGreen/90 transition-colors">
            Contact MULTIGAS Today
          </button>
        </div>
      </div>
      <OurPortfolio />
    </div>
  );
};

export default MultigasSystems;
