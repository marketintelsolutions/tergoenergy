import React, { useEffect, useState } from "react";
import PortfolioItem from "./PortfolioItem";
import OurPortfolio from "./OurPortfolio";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Testimonials from "./Testimonials";
import PoweringAfrica from "./PoweringAfrica";

const BringingItTogether = () => {
  return (
    <section className="mt-10 md:mt-20">
      <PoweringAfrica />
      <OurPortfolio />

      {/* <Testimonials /> */}
    </section>
  );
};

export default BringingItTogether;
