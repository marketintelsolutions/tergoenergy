import React from "react";
import BringingItTogether from "../components/Landing/BringingItTogether";
import Banner from "../components/OurBusinesses/Banner";
import OurPortfolio from "../components/Landing/OurPortfolio";
import { Link } from "react-router-dom";

const CosolEnergy = () => {
  const renewableServices = [
    {
      title: "Renewable Energy Installation",
      description:
        "Expert installation of solar panels, wind turbines, and other renewable energy systems with comprehensive site assessment and optimization.",
      icon: "solar-panel",
    },
    {
      title: "Customized Energy Solutions",
      description:
        "Tailored renewable energy systems designed specifically for residential, commercial, and industrial applications to meet unique energy requirements.",
      icon: "custom-energy",
    },
    {
      title: "Power Audit",
      description:
        "Comprehensive assessments to identify inefficiencies and optimize energy consumption with detailed reports and actionable insights.",
      icon: "audit",
    },
    {
      title: "Energy Consultation",
      description:
        "Strategic advice on energy solutions, feasibility studies, and system design to help clients make informed decisions aligned with sustainability goals.",
      icon: "consultation",
    },
    {
      title: "Energy Storage Solutions",
      description:
        "Advanced battery storage systems and backup solutions to maximize renewable energy benefits and ensure power availability when needed.",
      icon: "battery",
    },
    {
      title: "Maintenance & Support",
      description:
        "Ongoing system performance management with regular inspections, monitoring, and rapid response to ensure uninterrupted clean energy.",
      icon: "maintenance",
    },
  ];

  const cosolAdvantages = [
    "Lower energy costs and long-term savings",
    "Increased property value and energy independence",
    "Reduced carbon footprint for a cleaner planet",
    "Enhanced brand reputation through sustainability leadership",
  ];

  const projectServices = [
    "Site assessments to determine feasibility and energy potential",
    "Custom system design tailored to unique energy needs",
    "Permit acquisition and regulatory approvals",
    "Coordination with local utilities and authorities",
  ];

  return (
    <div className="bg-lightGreen pb-10 md:pb-20">
      <Banner
        img={"cosolbanner.jpg"}
        text="COSOL Energy Solution Limited"
        desc="Whether you're looking to power a small home, a large industrial facility, or anything in between, we design and implement systems that deliver sustainable energy tailored to your situation."
      />

      <div className="w-[95%] md:w-[85%] max-w-[1600px] mx-auto my-12 md:my-20 lg:my-[100px]">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-16 mb-12 md:mb-20">
          <img
            src="/images/windturbine.jpg"
            alt="renewable energy systems"
            className="w-full lg:w-[40%] max-w-[685px] object-cover rounded-[20px] md:rounded-[30px]"
          />
          <div className="flex-1">
            <h3 className="text-cosolYellow text-2xl md:text-3xl font-bold font-['Inter'] leading-tight md:leading-10">
              COSOL Energy Solution Limited
            </h3>
            <p className="max-w-[836px] mt-6 md:mt-12 lg:mt-[50px] text-ash-g-Color text-lg md:text-xl lg:text-[22px] font-normal font-['Inter'] leading-relaxed md:leading-9 lg:leading-[47px]">
              At COSOL Energy, we are committed to delivering top-tier renewable
              energy solutions that drive sustainability and efficiency. Our
              comprehensive range of services is designed to meet the unique
              energy needs of both residential and commercial clients.
            </p>
            <p className="self-stretch mt-6 md:mt-10 text-ash-g-Color text-lg md:text-xl lg:text-[22px] font-normal font-['Inter'] leading-relaxed md:leading-9 lg:leading-[47px]">
              We specialize in developing customized renewable energy solutions
              that cater specifically to your requirements. Whether you're
              looking to power a small home, a large industrial facility, or
              anything in between, we design and implement systems that deliver
              sustainable energy tailored to your situation.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-20">
          {renewableServices.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-[20px] md:rounded-[30px] p-6 md:p-8 shadow-[0px_69px_114px_rgba(58,64,58,0.08)]"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-primaryGreen rounded-full flex items-center justify-center mb-4 md:mb-6">
                <span className="text-white text-xl md:text-2xl">⚡</span>
              </div>
              <h3 className="text-cosolYellow text-lg md:text-xl font-bold font-['Inter'] leading-tight md:leading-8 mb-3 md:mb-4">
                {service.title}
              </h3>
              <p className="text-ash-g-Color text-base md:text-lg font-normal font-['Inter'] leading-relaxed md:leading-[28px]">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Project Development Section */}
        <div className="bg-white rounded-[25px] md:rounded-[50px] p-8 md:p-12 shadow-[0px_69px_114px_rgba(58,64,58,0.08)] mb-12 md:mb-20">
          <h3 className="text-primaryGreen text-2xl md:text-3xl font-bold font-['Inter'] leading-tight md:leading-10 mb-6 md:mb-8 text-center">
            Project Development
          </h3>
          <p className="text-ash-g-Color text-lg md:text-xl font-normal font-['Inter'] leading-relaxed md:leading-[32px] mb-8 md:mb-10 text-center">
            We handle every aspect of solar project planning, ensuring
            efficiency and compliance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {projectServices.map((service, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-3 h-3 bg-cosolYellow rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-ash-g-Color text-base md:text-lg font-normal font-['Inter'] leading-relaxed md:leading-[28px]">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* COSOL Advantage Section */}
        <div className="w-full bg-cosolYellow flex flex-col xl:flex-row rounded-[25px] md:rounded-[50px] mb-12 md:mb-20">
          <div className="py-12 md:py-16 lg:py-[60px] flex flex-col gap-6 md:gap-8 px-6 md:px-12 lg:pl-[90px] lg:pr-8 justify-center w-full xl:w-[40%]">
            <h3 className="text-black text-xl md:text-2xl font-bold font-['Poppins'] leading-tight md:leading-10">
              The COSOL Advantage
            </h3>
            {cosolAdvantages.map((advantage, index) => (
              <p
                key={index}
                className="relative py-1 max-w-96 text-black text-base md:text-lg font-semibold font-['Poppins'] leading-relaxed md:leading-6"
              >
                {advantage}
                {index === 0 && (
                  <div className="absolute h-full -left-6 md:-left-10 top-0 w-[2px] bg-white"></div>
                )}
              </p>
            ))}
          </div>

          <div className="w-full xl:w-[60%] max-w-[1020px] px-6 md:px-12 lg:px-24 py-12 md:py-24 lg:py-28 bg-white/90 rounded-[25px] md:rounded-[50px] flex flex-col gap-6 md:gap-8 lg:gap-10">
            <div className="text-zinc-900 text-lg md:text-xl lg:text-3xl font-medium font-['Poppins'] leading-tight md:leading-8 lg:leading-9">
              Professional Installation & Support
            </div>
            <div className="text-ash-g-Color text-sm md:text-base lg:text-lg font-normal font-['Inter'] leading-relaxed md:leading-7 lg:leading-9">
              Our installation process guarantees optimal performance and
              durability. We provide high-quality solar panels and equipment
              procurement, precision installation by experienced professionals,
              compliance with industry standards and safety regulations, and
              thorough testing and commissioning for system efficiency. Maximize
              the lifespan and performance of your renewable energy system with
              our expert maintenance services including real-time monitoring,
              scheduled servicing, troubleshooting, and system upgrades.
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-primaryGreen text-2xl md:text-3xl lg:text-4xl font-bold font-['Poppins'] leading-tight md:leading-[1.2] lg:leading-[48px] mb-4 md:mb-6">
            Get Started Today!
          </h3>
          <p className="text-ash-g-Color text-lg md:text-xl font-normal font-['Inter'] leading-relaxed md:leading-[32px] mb-8 md:mb-10">
            Contact us today for a consultation and take the first step toward a
            greener, cost-effective energy future.
          </p>
          <Link to={"/contact"}>
            <button className="bg-cosolYellow text-white px-8 md:px-12 py-3 md:py-4 rounded-[15px] text-lg md:text-xl font-semibold font-['Poppins'] hover:bg-cosolYellow/90 transition-colors">
              Contact COSOL Energy
            </button>
          </Link>
        </div>
      </div>

      <OurPortfolio />
    </div>
  );
};

export default CosolEnergy;
