import React from "react";

const GasSolution = () => {
  return (
    <div className="w-[85%] max-w-[1600px] mx-auto my-[172px]">
      <div className="flex gap-12">
        <img
          src="/images/gas-facility.jpg"
          alt="gas facility"
          className="w-[43%] max-w-[685px] object-cover rounded-[30px]"
        />
        <div>
          <h3 className="justify-start text-ash-g-Color text-2xl font-bold font-['Inter'] leading-10">
            Nexus Gas Trading Limited
          </h3>
          <p className="max-w-[836px] mt-[50px] justify-start text-ash-g-Color text-[22px] font-normal font-['Inter'] leading-[37px]">
            At Nexus Gas Trading Limited, we provide high-quality gas solutions
            tailored to meet the needs of both our bulk and retail customers.
            Our range of services ensures that you receive reliable, safe, and
            efficient energy solutions, whether you're powering a small
            household or a large industrial operation.
          </p>
          <p className="self-stretch mt-10 justify-start text-ash-g-Color text-[22px] font-normal font-['Inter'] leading-[37px]">
            We offer comprehensive gas solutions including Liquefied Petroleum
            Gas (LPG), Compressed Natural Gas (CNG), Liquefied Natural Gas
            (LNG), and Propane for various applications. Our services span from
            bulk supply for industrial use to retail distribution for households
            and small businesses.
            <br />
            <br />
            Our cylinder recertification services ensure safety and compliance
            through comprehensive inspection, pressure testing, and
            certification of LPG cylinders to meet required safety standards.
          </p>
        </div>
      </div>

      <div className="w-full mt-20 bg-primaryGreen flex rounded-[50px]">
        <div className="py-[150px] flex flex-col gap-10 pl-[90px] justify-center w-[40%]">
          <p className="relative py-1 max-w-96 justify-start text-white text-xl font-semibold font-['Poppins'] leading-8">
            Bulk Gas Supply
            <div className="absolute h-full -left-10 top-0 w-[2px] bg-white"></div>
          </p>
          <p className="h-7 justify-start text-light-g-Color text-xl font-semibold font-['Poppins'] leading-10">
            Retail Gas Distribution
          </p>
          <p className="h-7 justify-start text-light-g-Color text-xl font-semibold font-['Poppins'] leading-10">
            Cylinder Recertification
          </p>
          <p className="h-7 justify-start text-light-g-Color text-xl font-semibold font-['Poppins'] leading-10">
            Gas Applications & Systems
          </p>
        </div>

        <div className="w-[60%] max-w-[1020px] h-[659px] px-24 py-44 bg-white/90 rounded-[50px] inline-flex flex-col justify-start items-start gap-10">
          <div className="justify-start text-zinc-900 text-3xl font-medium font-['Poppins'] leading-9">
            Bulk Gas Supply Services
          </div>
          <div className="justify-start">
            <span className="text-ash-g-Color text-xl font-normal font-['Inter'] leading-10">
              Our bulk gas supply service is designed for businesses and
              industries that require large volumes of gas. We offer a seamless
              supply chain with Gas Supply Agreements (GSAs) tailored to suit
              your energy needs, ensuring consistent and reliable energy supply
              for your operations.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GasSolution;
