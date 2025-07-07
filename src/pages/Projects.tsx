import React from "react";
import Banner from "../components/OurBusinesses/Banner";
import { Link } from "react-router-dom";
import BringingItTogether from "../components/Landing/BringingItTogether";

const Projects = () => {
  const projects = [
    {
      title: "Pan African Capital Holdings Number 09 Annex",
      category: "Commercial Solar Installation",
      description:
        "Comprehensive renewable energy solution for corporate headquarters featuring advanced solar panel systems and energy storage solutions.",
      image: "/images/flower.jpg",
      status: "Completed",
    },
    {
      title: "PACH Head Office",
      category: "Energy Infrastructure",
      description:
        "Complete energy infrastructure development including gas supply systems and renewable energy integration for efficient operations.",
      image: "/images/flower.jpg",
      status: "Completed",
    },
    {
      title: "Lola's Garden",
      category: "Residential Energy Solutions",
      description:
        "Sustainable energy solutions for residential complex including solar installations, gas supply systems, and energy optimization.",
      image: "/images/flower.jpg",
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
    <div className="bg-lightGreen pb-20">
      <Banner text=" Our Projects" />

      <div className="w-[85%] max-w-[1600px] mx-auto my-[100px]">
        {/* Introduction */}
        <div className="text-center mb-16">
          <h2 className="justify-start text-primaryGreen text-center mt-[95px] text-6xl font-semibold font-['Poppins'] leading-[105px]">
            Case Studies & Project Gallery
          </h2>

          <p className=" mt-[18px] opacity-80 text-center justify-start text-black text-xl font-normal font-['Poppins'] leading-7">
            Explore our portfolio of successful energy projects across Nigeria
            and West Africa. From solar energy installations to comprehensive
            gas infrastructure development, see how we're advancing Africa's
            energy transition.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-16 mb-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-[30px] p-8 shadow-[0px_69px_114px_rgba(58,64,58,0.08)]"
            >
              <div
                className={`flex gap-12 ${
                  index % 2 === 1 ? "flex-row-reverse" : ""
                }`}
              >
                <div className="w-[45%]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[300px] object-cover rounded-[20px]"
                    // onError={(e) => {
                    //   e.target.src = "/images/placeholder-project.png";
                    // }}
                  />
                </div>
                <div className="w-[55%] flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="bg-primaryGreen text-white px-4 py-2 rounded-[15px] text-sm font-semibold">
                      {project.status}
                    </span>
                    <span className="bg-zinc-100 text-primaryGreen px-4 py-2 rounded-[15px] text-sm font-semibold ml-3">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-primaryGreen text-3xl font-bold font-['Inter'] leading-10 mb-4">
                    {project.title}
                  </h3>
                  <p className="text-ash-g-Color text-xl font-normal font-['Inter'] leading-[32px] mb-8">
                    {project.description}
                  </p>
                  <button className="bg-primaryGreen text-white px-8 py-3 rounded-[15px] text-lg font-semibold font-['Poppins'] w-fit">
                    View Project Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Service Areas */}
        <div className="bg-white rounded-[50px] p-12 shadow-[0px_69px_114px_rgba(58,64,58,0.08)] mb-20">
          <h3 className="text-primaryGreen text-3xl font-bold font-['Inter'] leading-10 mb-8 text-center">
            Our Project Expertise
          </h3>
          <p className="text-ash-g-Color text-xl font-normal font-['Inter'] leading-[32px] mb-10 text-center">
            We deliver comprehensive energy solutions across multiple sectors
            and applications
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {serviceAreas.map((area, index) => (
              <div
                key={index}
                className="bg-[#FAF6FF] rounded-[20px] p-6 text-center"
              >
                <div className="w-12 h-12 bg-primaryGreen rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-xl">⚡</span>
                </div>
                <h4 className="text-primaryGreen text-lg font-bold font-['Inter'] leading-6">
                  {area}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* Project Gallery Section */}
        {/* <div className="text-center mb-16">
          <h3 className="text-primaryGreen text-4xl font-bold font-['Poppins'] leading-[48px] mb-6">
            Project Gallery
          </h3>
          <p className="text-ash-g-Color text-xl font-normal font-['Inter'] leading-[32px] mb-10">
            Visual showcase of our energy projects, including images and videos
            of installations and completed systems
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className="aspect-square bg-zinc-100 rounded-[20px] flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-primaryGreen rounded-full mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white text-xl">📷</span>
                  </div>
                  <span className="text-zinc-400 text-sm">
                    Project Image {item}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Call to Action */}
        <div className="bg-primaryGreen rounded-[50px] py-16 px-12 text-center">
          <h3 className="text-white text-4xl font-bold font-['Poppins'] leading-[48px] mb-6">
            Ready to Start Your Energy Project?
          </h3>
          <p className="text-zinc-300 text-xl font-normal font-['Inter'] leading-[32px] mb-10 max-w-[600px] mx-auto">
            Let us help you develop sustainable energy solutions tailored to
            your specific needs. Contact our team to discuss your project
            requirements.
          </p>
          <Link to={"/contact"}>
            <button className="bg-white border border-white hover:bg-primaryGreen hover:text-white text-primaryGreen px-12 py-4 rounded-[15px] text-xl font-semibold font-['Poppins']">
              Start Your Project
            </button>
          </Link>
        </div>
      </div>
      <BringingItTogether />
    </div>
  );
};

export default Projects;
