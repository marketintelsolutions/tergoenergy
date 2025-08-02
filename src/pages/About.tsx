import React from "react";
import SharedBanner from "../components/Layout/SharedBanner";
import WhoWeAre from "../components/About/WhoWeAre";
import OurValues from "../components/About/OurValues";
import OurPortfolio from "../components/Landing/OurPortfolio";
import BringingItTogether from "../components/About/BringingItTogether";
import OurTeam from "../components/About/OurTeam";
import PoweringAfrica from "../components/Landing/PoweringAfrica";

const About = () => {
  return (
    <div className="bg-[#C1FACC40] pb-[100px]">
      <SharedBanner img={"aboutbanner"} text="ABOUT" />
      <WhoWeAre />
      <OurValues />
      <OurPortfolio />
      <OurTeam />
    </div>
  );
};

export default About;
