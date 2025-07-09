import React from "react";
import PortfolioItem from "./PortfolioItem";

const portfolio = [
  {
    img: "windturbine",
    icon: "energy",
    text: "COSOL ENERGY SOLUTION LIMITED",
    desc:
      "We specialize in developing customized renewable energy solutions that cater specifically to your requirements. ",
    link: "/our-businesses/cosol-energy",
  },
  {
    img: "oilfactory",
    icon: "gas",
    text: "NEXUS GAS TRADING LIMITED",
    desc:
      "Our seamless supply chain ensures you always have the energy you need to keep your operations running smoothly.",
    link: "/our-businesses/nexus-gas",
  },
  {
    img: "expert",
    icon: "cylinder",
    text: "MULTIGAS SYSTEMS LIMITED",
    desc:
      "We are committed to delivering innovative, reliable, and efficient gas solutions across various industries.",
    link: "/our-businesses/multigas-systems",
  },
];

const OurPortfolio = () => {
  return (
    <>
      <h3 className="justify-start text-primaryGreen text-center mt-16 md:mt-20 lg:mt-[95px] text-2xl md:text-4xl lg:text-5xl font-semibold font-['Poppins'] leading-tight md:leading-[1.2] lg:leading-[105px]">
        Our Portfolio Companies
      </h3>

      <div className="w-[95%] md:w-[85%] max-w-[1600px] mx-auto flex flex-col md:flex-row gap-6 md:gap-[27px] justify-center mt-12 md:mt-20 lg:mt-28">
        {portfolio.map((item, index) => (
          <PortfolioItem {...item} key={index} />
        ))}
      </div>
    </>
  );
};

export default OurPortfolio;
