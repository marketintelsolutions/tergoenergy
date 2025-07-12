import React from "react";
import Banner from "../components/OurBusinesses/Banner";
import { Link } from "react-router-dom";
import BringingItTogether from "../components/Landing/BringingItTogether";
import OurPortfolio from "../components/Landing/OurPortfolio";
import Testimonials from "../components/Landing/Testimonials";
import Button from "../components/ui/Button";

const Projects = () => {
  const projects = [
    {
      title: "Pan African Capital Holdings Number 09 Annex",
      category: "Commercial Solar Installation",
      description:
        "Comprehensive renewable energy solution for corporate headquarters featuring advanced solar panel systems and energy storage solutions.",
      image: "/images/pacannex.jpg",
      status: "Completed",
    },
    {
      title: "PACH Head Office",
      category: "Energy Infrastructure",
      description:
        "Complete energy infrastructure development including gas supply systems and renewable energy integration for efficient operations.",
      image: "/images/pacho.jpg",
      status: "Completed",
    },
    {
      title: "Lola's Garden",
      category: "Residential Energy Solutions",
      description:
        "Sustainable energy solutions for residential complex including solar installations, gas supply systems, and energy optimization.",
      image: "/images/lolagarden.jpg",
      status: "Completed",
    },
  ];

  const serviceAreas = [
    "Solar Energy Projects",
    "Gas Infrastructure Development",
    "Energy Storage Solutions",
    "Commercial Energy Systems",
    "Residential Energy Solutions",
    "Industrial Power Solutions",
  ];

  return (
    <div className="bg-lightGreen pb-10 md:pb-20">
      <Banner img={"projects"} text="Our Projects" />

      <div className="w-[95%] md:w-[85%] max-w-[1600px] mx-auto my-12 md:my-20 lg:my-[100px]">
        {/* Introduction */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="justify-start text-primaryGreen text-center mt-12 md:mt-20 lg:mt-[95px] text-2xl md:text-4xl lg:text-5xl font-semibold font-['Poppins'] leading-tight md:leading-[1.2] lg:leading-[105px]">
            Case Studies & Project Gallery
          </h2>

          <p className="max-w-[95%] md:max-w-[90%] mx-auto mt-4 md:mt-6 lg:mt-[18px] opacity-80 text-center justify-start text-black text-base md:text-lg font-normal font-['Poppins'] leading-relaxed md:leading-7">
            Explore our portfolio of successful energy projects across Nigeria
            and West Africa. From solar energy installations to comprehensive
            gas infrastructure development, see how we're advancing Africa's
            energy transition.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-12 md:space-y-16 mb-12 md:mb-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-[20px] md:rounded-[30px] p-6 md:p-8 shadow-[0px_69px_114px_rgba(58,64,58,0.08)]"
            >
              <div
                className={`flex flex-col lg:flex-row gap-8 md:gap-12 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="w-full lg:w-[45%]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[200px] md:h-[250px] lg:h-[300px] object-cover rounded-[15px] md:rounded-[20px]"
                  />
                </div>
                <div className="w-full lg:w-[55%] flex flex-col justify-center">
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="bg-green-600 text-white px-3 md:px-4 py-1 md:py-2 rounded-[15px] text-xs md:text-sm font-semibold">
                      {project.status}
                    </span>
                    <span className="bg-zinc-100 text-primaryGreen px-3 md:px-4 py-1 md:py-2 rounded-[15px] text-xs md:text-sm font-semibold">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-primaryGreen text-xl md:text-2xl lg:text-3xl font-bold font-['Inter'] leading-tight md:leading-8 lg:leading-10 mb-3 md:mb-4">
                    {project.title}
                  </h3>
                  <p className="text-ash-g-Color text-base md:text-lg lg:text-xl font-normal font-['Inter'] leading-relaxed md:leading-7 lg:leading-[32px] mb-6 md:mb-8">
                    {project.description}
                  </p>
                  <Button
                    width="auto"
                    className="max-w-[260px]"
                    text="View Project Details"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Service Areas */}
        <div className="bg-white rounded-[25px] md:rounded-[50px] p-8 md:p-12 shadow-[0px_69px_114px_rgba(58,64,58,0.08)] mb-12 md:mb-20">
          <h3 className="text-primaryGreen text-2xl md:text-3xl font-bold font-['Inter'] leading-tight md:leading-10 mb-6 md:mb-8 text-center">
            Our Project Expertise
          </h3>
          <p className="text-ash-g-Color text-lg md:text-xl font-normal font-['Inter'] leading-relaxed md:leading-[32px] mb-8 md:mb-10 text-center">
            We deliver comprehensive energy solutions across multiple sectors
            and applications
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {serviceAreas.map((area, index) => (
              <div
                key={index}
                className="bg-[#FAF6FF] rounded-[20px] p-4 md:p-6 text-center"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-600 rounded-full mx-auto mb-3 md:mb-4 flex items-center justify-center">
                  <span className="text-white text-lg md:text-xl">⚡</span>
                </div>
                <h4 className="text-primaryGreen text-base md:text-lg font-bold font-['Inter'] leading-tight md:leading-6">
                  {area}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-primaryGreen rounded-[25px] md:rounded-[50px] py-12 md:py-16 px-8 md:px-12 text-center">
          <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold font-['Poppins'] leading-tight md:leading-[1.2] lg:leading-[48px] mb-4 md:mb-6">
            Ready to Start Your Energy Project?
          </h3>
          <p className="text-zinc-300 text-lg md:text-xl font-normal font-['Inter'] leading-relaxed md:leading-[32px] mb-8 md:mb-10 max-w-[600px] mx-auto">
            Let us help you develop sustainable energy solutions tailored to
            your specific needs. Contact our team to discuss your project
            requirements.
          </p>
          <Link to={"/contact"}>
            <button className="bg-white border border-white hover:bg-primaryGreen hover:text-white text-primaryGreen px-8 md:px-12 py-3 md:py-4 rounded-[15px] text-lg md:text-xl font-semibold font-['Poppins'] transition-colors">
              Start Your Project
            </button>
          </Link>
        </div>
      </div>
      <Testimonials />
      <OurPortfolio />
    </div>
  );
};

export default Projects;
