import React from "react";
import PortfolioItem from "./PortfolioItem";
const portfolio = [
  {
    img: "",
    icon: "lock",
    text: "SECURITIES SALES & TRADING",
  },
  {
    img: "",
    icon: "stairs",
    text: "ASSET MANAGEMENT & PRIVATE WEALTH MANAGEMENT",
  },
  {
    img: "",
    icon: "briefcase",
    text: "BGL CAPITAL LIMITED",
  },
];

const OurPortfolio = () => {
  return (
    <>
      <h3 className="justify-start text-primaryGreen text-center mt-[95px] text-6xl font-semibold font-['Poppins'] leading-[105px]">
        Our Portfolio
      </h3>

      <div className="w-[85%] max-w-[1600px] mx-auto flex gap-[27px] justify-center mt-40">
        {portfolio.map((item, index) => (
          <PortfolioItem {...item} key={index} />
        ))}
      </div>
    </>
  );
};

export default OurPortfolio;
