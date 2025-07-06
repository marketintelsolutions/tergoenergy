import React from "react";
import Banner from "../components/OurBusinesses/Banner";
import BringingItTogether from "../components/Landing/BringingItTogether";

const BglSecurities = () => {
  return (
    <div className="bg-lightGreen pb-20">
      <Banner text="Bgl Securities" />

      <div className="w-[85%] max-w-[1600px] mx-auto my-[172px]">
        <div className="flex gap-12">
          <img
            src="/images/boywearingtie.png"
            alt="boy with tie"
            className="w-[43%] max-w-[685px] object-cover rounded-[30px]"
          />
          <div>
            <h3 className="justify-start text-ash-g-Color text-2xl font-bold font-['Inter'] leading-10">
              BGL Asset Management Limited
            </h3>
            <p className="max-w-[836px] mt-[50px] justify-start text-ash-g-Color text-[22px] font-normal font-['Inter'] leading-[37px]">
              “BAML” is a wholly owned subsidiary of BGL Plc. Licensed and
              registered with the Securities & Exchange Commission as
              Fund/Portfolio Managers, BAML is a creation of the unbundling
              exercise recently embarked upon by BGL Plc. Incorporated in 2007,
              BGL Asset Management Limited is a Wealth and Investment Management
              Company focused exclusively on the investment needs and
              aspirations of individual and institutional clients. With a
              commencement capital base of N4 billion, assets under management
              in excess of N85 billion, and a growing loyal client base of Ultra
              High Net Worth individuals and institutions (local and
              international), BGL Asset Management Limited is poised to become
              the preferred provider of asset management services in Nigeria.{" "}
            </p>
            <p className="self-stretch mt-10 justify-start text-ash-g-Color text-[22px] font-normal font-['Inter'] leading-[37px]">
              BGL PE is positioned to take the lead in deal origination, thereby
              achieving its goal of sustainable value creation above industry
              average. BGL PE will focus on client driven transactions with a
              clear view on value creation, while seeking innovative solutions
              to solve our clients’ needs. <br />
              <br />
              The Company’s primary focus will be on friendly acquisitions,
              nurturing, restructuring and unbundling of leading brands in high
              growth industries with underperforming assets, recapitalization,
              refinancing and restructuring needs.{" "}
            </p>
          </div>
        </div>

        <div className="w-full mt-20 bg-primaryGreen flex rounded-[50px]">
          <div className="py-[150px]  flex flex-col gap-10 pl-[90px] justify-center w-[40%]">
            <p className="relative py-1 max-w-96 justify-start text-white text-xl font-semibold font-['Poppins'] leading-8">
              Private Wealth Management and Advisory Services
              <div className="absolute h-full -left-10 top-0 w-[2px] bg-white"></div>
            </p>
            <p className=" h-7 justify-start text-light-g-Color text-xl font-semibold font-['Poppins'] leading-10">
              Equity/Fixed Income Trading{" "}
            </p>
            <p className=" h-7 justify-start text-light-g-Color text-xl font-semibold font-['Poppins'] leading-10">
              Strategic Acquisition and Advisory
            </p>
            <p className=" h-7 justify-start text-light-g-Color text-xl font-semibold font-['Poppins'] leading-10">
              Research avand Intelligence
            </p>
          </div>

          <div className="w-[60%] max-w-[1020px] h-[659px] px-24 py-44 bg-white/90 rounded-[50px] inline-flex flex-col justify-start items-start gap-10">
            <div className=" justify-start text-zinc-900 text-3xl font-medium font-['Poppins'] leading-9">
              Private Wealth Management and Advisory Services
            </div>
            <div className="  justify-start">
              <span className="text-ash-g-Color text-xl font-normal font-['Inter'] leading-10">
                Under this Program, we deploy our competences in creating value
                for our clients’ assets under management, through a customized
                Asset Allocation regime that takes into cognizance the various
                analyzed investment objectives, collated bio-data of the
                clients, associated risks and the tenor of the investments,
                amongst other proprietary processes/ factors. <br />
              </span>
            </div>
          </div>
        </div>
      </div>

      <BringingItTogether />
    </div>
  );
};

export default BglSecurities;
