import React from "react";
import PortfolioItem from "./PortfolioItem";
import OurPortfolio from "./OurPortfolio";

const BringingItTogether = () => {
  return (
    <section>
      <div
        className="w-[85%] max-w-[1600px] mx-auto rounded-[50px] py-[150px]"
        style={{
          backgroundImage: `url(/images/bringingtogetherbg.svg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="w-[90%] mx-auto flex justify-center items-center gap-14">
          <div>
            <h1 className="max-w-[404px] justify-start text-white text-6xl font-semibold font-['Poppins'] leading-[64px]">
              Bringing it all together
            </h1>
            <p className=" mt-5 justify-start text-white text-3xl font-medium font-['Poppins'] leading-10">
              Restructured. Reinforced. Rejuvenated
            </p>

            <button className="mt-[130px] bg-[#FEFEFE] py-[12px] px-[30px] rounded-[8px] ">
              <span className=" text-center justify-start text-ash-g-Color text-2xl font-bold font-['Poppins'] leading-normal">
                Learn More
              </span>
            </button>
          </div>
          <div className="w-full max-w-[45%] ">
            <img
              src="/images/bringingtogetherimg.png"
              alt="bring together"
              className="w-full  "
            />
          </div>
        </div>
      </div>

      <OurPortfolio />

      <h3 className="justify-start text-primaryGreen text-center mt-[152px] text-6xl font-semibold font-['Poppins'] leading-[105px]">
        Our Testimonials
      </h3>

      <div className="bg-white mt-[122px] w-[80%] py-[129px] max-w-[1410px] mx-auto">
        <div className="w-[80%] mx-auto">
          <div className="flex justify-between gap-14">
            <div className="relative w-[253px] h-[292px] bg-primaryGreen rounded-[8px]">
              <div className="absolute bottom-0 left-[27px] translate-y-1/2">
                <img src="/images/quoteleft.svg" alt="left quote" />
              </div>
            </div>
            <div>
              <p className="max-w-[718px] justify-start text-black text-3xl font-normal font-['Poppins'] leading-[51px] tracking-tight">
                BGL helped us with our finances for 8 months now and still helps
                us. Great service and highly recommended.
              </p>
              <p className="w-[540px] h-7 mt-20 justify-start text-green-900 text-xl font-normal font-['Poppins']">
                — Kim Hako - KIN Director at DGe Plc
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BringingItTogether;
