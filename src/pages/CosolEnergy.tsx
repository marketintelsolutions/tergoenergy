import React from "react";
import BringingItTogether from "../components/Landing/BringingItTogether";
import Banner from "../components/OurBusinesses/Banner";

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
    <div className="bg-lightGreen pb-20">
      <Banner text="COSOL Energy Solution Limited" />

      <div className="w-[85%] max-w-[1600px] mx-auto my-[100px]">
        <div className="flex gap-12 mb-20">
          <img
            src="/images/windturbine.jpg"
            alt="renewable energy systems"
            className="w-[43%] max-w-[685px] object-cover rounded-[30px]"
          />
          <div>
            <h3 className="text-ash-g-Color text-3xl font-bold font-['Inter'] leading-10">
              COSOL Energy Solution Limited
            </h3>
            <p className="max-w-[836px] mt-[50px] text-ash-g-Color text-[24px] font-normal font-['Inter'] leading-[47px]">
              At COSOL Energy, we are committed to delivering top-tier renewable
              energy solutions that drive sustainability and efficiency. Our
              comprehensive range of services is designed to meet the unique
              energy needs of both residential and commercial clients.
            </p>
            <p className="self-stretch mt-10 text-ash-g-Color text-[24px] font-normal font-['Inter'] leading-[47px]">
              We specialize in developing customized renewable energy solutions
              that cater specifically to your requirements. Whether you're
              looking to power a small home, a large industrial facility, or
              anything in between, we design and implement systems that deliver
              sustainable energy tailored to your situation.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {renewableServices.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-[30px] p-8 shadow-[0px_69px_114px_rgba(58,64,58,0.08)]"
            >
              <div className="w-16 h-16 bg-primaryGreen rounded-full flex items-center justify-center mb-6">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-primaryGreen text-xl font-bold font-['Inter'] leading-8 mb-4">
                {service.title}
              </h3>
              <p className="text-ash-g-Color text-lg font-normal font-['Inter'] leading-[28px]">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Project Development Section */}
        <div className="bg-white rounded-[50px] p-12 shadow-[0px_69px_114px_rgba(58,64,58,0.08)] mb-20">
          <h3 className="text-primaryGreen text-3xl font-bold font-['Inter'] leading-10 mb-8 text-center">
            Project Development
          </h3>
          <p className="text-ash-g-Color text-xl font-normal font-['Inter'] leading-[32px] mb-10 text-center">
            We handle every aspect of solar project planning, ensuring
            efficiency and compliance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectServices.map((service, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-3 h-3 bg-primaryGreen rounded-full mt-2"></div>
                <span className="text-ash-g-Color text-lg font-normal font-['Inter'] leading-[28px]">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* COSOL Advantage Section */}
        <div className="w-full bg-primaryGreen flex rounded-[50px]">
          <div className="py-[100px] flex flex-col gap-8 pl-[90px] justify-center w-[40%]">
            <h3 className="text-white text-3xl font-bold font-['Poppins'] leading-10">
              The COSOL Advantage
            </h3>
            {cosolAdvantages.map((advantage, index) => (
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
              Professional Installation & Support
            </div>
            <div className="text-ash-g-Color text-xl font-normal font-['Inter'] leading-10">
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
        <div className="text-center mt-20">
          <h3 className="text-primaryGreen text-4xl font-bold font-['Poppins'] leading-[48px] mb-6">
            Get Started Today!
          </h3>
          <p className="text-ash-g-Color text-xl font-normal font-['Inter'] leading-[32px] mb-10">
            Contact us today for a consultation and take the first step toward a
            greener, cost-effective energy future.
          </p>
          <button className="bg-primaryGreen text-white px-12 py-4 rounded-[15px] text-xl font-semibold font-['Poppins']">
            Contact COSOL Energy
          </button>
        </div>
      </div>

      <BringingItTogether />
    </div>
  );
};

export default CosolEnergy;
