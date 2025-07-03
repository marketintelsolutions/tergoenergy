import React from "react";

const TeamItem = () => {
  return (
    <div className=" relative ">
      <div className="absolute  w-full  h-1/2 rounded-full   ">
        <div className="-translate-y-1/2 p-4 rounded-full border-4 border-primaryGreen">
          <img src="/images/teammember.png" alt="team member" className="" />
        </div>
      </div>
      <div className="px-4">
        <div className=" bg-[#FAF6FF] px-10 pb-10 pt-[60%] rounded-[50px] shadow-[0px_30px_114px_0px_rgba(51,50,52,0.20)]">
          <h3 className=" text-center justify-start text-black text-3xl font-semibold font-['Poppins'] leading-9">
            Name Name{" "}
          </h3>
          <p className=" mt-[18px] opacity-80 text-center justify-start text-black text-xl font-normal font-['Poppins'] leading-7">
            Research Manager
          </p>
          <p className=" mt-[14px] opacity-80 text-center justify-start text-BHL-Color text-xl font-normal font-['Poppins'] leading-7">
            name@bgl.com{" "}
          </p>
          <button className=" py-3 w-full bg-primaryGreen mt-10 rounded-[15px]">
            <span className="w-24 h-7 justify-start text-white text-lg font-normal font-['Poppins'] leading-loose">
              Read More
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamItem;
