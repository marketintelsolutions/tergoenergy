import React from "react";
import SharedBanner from "../components/Layout/SharedBanner";
import WhoWeAre from "../components/About/WhoWeAre";
import OurValues from "../components/About/OurValues";
import OurPortfolio from "../components/Landing/OurPortfolio";
import BringingItTogether from "../components/About/BringingItTogether";
import OurTeam from "../components/About/OurTeam";

const About = () => {
  return (
    <div className="bg-[#C1FACC40] pb-[100px]">
      <SharedBanner text="ABOUT" />
      <WhoWeAre />
      <OurValues />
      <OurPortfolio />
      <OurTeam />
      <BringingItTogether />
    </div>
  );
};

export default About;
