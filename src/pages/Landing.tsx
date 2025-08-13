import React from "react";
import Banner from "../components/Landing/Banner";
import WeBelieveSection from "../components/Landing/WeBelieveSection";
import BringingItTogether from "../components/Landing/BringingItTogether";
import StayUpdated from "../components/Landing/StayUpdated";

const Landing = () => {
  return (
    <div className="">
      <Banner />
      {/* <WeBelieveSection /> */}
      <BringingItTogether />
      <StayUpdated />
    </div>
  );
};

export default Landing;
