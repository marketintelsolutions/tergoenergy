import React from "react";
import BringingItTogether from "../components/Landing/BringingItTogether";
import Banner from "../components/OurBusinesses/Banner";

const MultigasSystems = () => {
  const gasApplications = [
    {
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
    <div className="bg-lightGreen pb-20">
      <Banner text="Multigas Systems Limited" />

      <div className="w-[85%] max-w-[1600px] mx-auto my-[100px]">
        <div className="flex gap-12 mb-20">
          <img
            src="/images/expert.jpg"
            alt="gas applications"
            className="w-[43%] max-w-[685px] object-cover rounded-[30px]"
          />
          <div>
            <h3 className="text-ash-g-Color text-3xl font-bold font-['Inter'] leading-10">
              Multigas Systems Limited
            </h3>
            <p className="max-w-[836px] mt-[50px] text-ash-g-Color text-[24px] font-normal font-['Inter'] leading-[47px]">
              Our Gas Application services are designed to maximize the
              versatility and efficiency of gas systems across multiple sectors.
              Through Multigas Systems Limited, we offer customized solutions
              that span from heating and power generation to cooling and
              transportation applications.
            </p>
            <p className="self-stretch mt-10 text-ash-g-Color text-[24px] font-normal font-['Inter'] leading-[47px]">
              At MULTIGAS, we are committed to delivering innovative, reliable,
              and efficient gas solutions across various industries. Whether you
              need gas infrastructure development or specialized gas application
              systems, we provide end-to-end services designed for safety,
              efficiency, and sustainability.
            </p>
          </div>
        </div>

        {/* Gas Applications Section */}
        <div className="space-y-16">
          {gasApplications.map((application, index) => (
            <div
              key={index}
              className="bg-white rounded-[30px] p-12 shadow-[0px_69px_114px_rgba(58,64,58,0.08)]"
            >
              <div className="flex items-start gap-8">
                <div className="w-20 h-20 bg-primaryGreen rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-3xl">🔥</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-primaryGreen text-3xl font-bold font-['Inter'] leading-10 mb-4">
                    {application.title}
                  </h3>
                  <p className="text-ash-g-Color text-xl font-normal font-['Inter'] leading-[32px] mb-8">
                    {application.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {application.applications.map((app, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primaryGreen rounded-full"></div>
                        <span className="text-ash-g-Color text-lg font-normal font-['Inter'] leading-[28px]">
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
        <div className="bg-white rounded-[50px] p-12 shadow-[0px_69px_114px_rgba(58,64,58,0.08)] my-20">
          <h3 className="text-primaryGreen text-3xl font-bold font-['Inter'] leading-10 mb-8 text-center">
            Installation & Maintenance Services
          </h3>
          <p className="text-ash-g-Color text-xl font-normal font-['Inter'] leading-[32px] mb-10 text-center">
            Safety and efficiency are our top priorities. We offer professional
            installation and maintenance services for all your gas equipment and
            systems.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-primaryGreen text-2xl font-bold font-['Inter'] leading-8 mb-4">
                LPG Storage Systems
              </h4>
              <p className="text-ash-g-Color text-lg font-normal font-['Inter'] leading-[28px]">
                We design and install safe and efficient LPG storage solutions
                for both residential and commercial use. Our team ensures
                compliance with all safety standards.
              </p>
            </div>
            <div>
              <h4 className="text-primaryGreen text-2xl font-bold font-['Inter'] leading-8 mb-4">
                CNG Equipment Maintenance
              </h4>
              <p className="text-ash-g-Color text-lg font-normal font-['Inter'] leading-[28px]">
                Regular maintenance is key to the longevity and efficiency of
                your CNG systems. Our experts provide comprehensive maintenance
                services to keep your equipment in top condition.
              </p>
            </div>
          </div>
        </div>

        {/* MULTIGAS Advantage Section */}
        <div className="w-full bg-primaryGreen flex rounded-[50px]">
          <div className="py-[100px] flex flex-col gap-8 pl-[90px] justify-center w-[40%]">
            <h3 className="text-white text-3xl font-bold font-['Poppins'] leading-10">
              The MULTIGAS Advantage
            </h3>
            {multgasAdvantages.map((advantage, index) => (
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
              Why Choose MULTIGAS?
            </div>
            <div className="text-ash-g-Color text-xl font-normal font-['Inter'] leading-10">
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
        <div className="text-center mt-20">
          <h3 className="text-primaryGreen text-4xl font-bold font-['Poppins'] leading-[48px] mb-6">
            Powering Businesses with Smart Gas Solutions
          </h3>
          <p className="text-ash-g-Color text-xl font-normal font-['Inter'] leading-[32px] mb-10">
            Partner with MULTIGAS for a seamless, efficient, and future-ready
            gas infrastructure.
          </p>
          <button className="bg-primaryGreen text-white px-12 py-4 rounded-[15px] text-xl font-semibold font-['Poppins']">
            Contact MULTIGAS Today
          </button>
        </div>
      </div>
      <BringingItTogether />
    </div>
  );
};

export default MultigasSystems;
