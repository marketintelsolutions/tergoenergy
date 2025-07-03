import React from "react";

const BringingItTogether = () => {
  return (
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
  );
};

export default BringingItTogether;
