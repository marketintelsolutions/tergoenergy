import React from "react";

const BringingItTogether = () => {
  return (
    <div
      className="w-[95%] md:w-[85%] max-w-[1600px] mx-auto rounded-[25px] md:rounded-[50px] py-12 md:py-20 lg:py-[95px]"
      style={{
        backgroundImage: `url(/images/webelieveimg.png)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-[85%] mx-auto flex flex-col lg:flex-row justify-center items-center gap-8 md:gap-14">
        <div className="text-center lg:text-left">
          <h1 className="justify-start text-white text-2xl md:text-4xl lg:text-5xl font-semibold font-['Poppins'] leading-tight md:leading-[1.2] lg:leading-[64px]">
            Powering Africa's Energy Future
          </h1>
          <p className="mt-3 md:mt-5 justify-start text-white text-lg md:text-xl lg:text-2xl font-medium font-['Poppins'] leading-relaxed md:leading-8 lg:leading-10">
            Clean. Sustainable. Reliable.
          </p>

          <button className="mt-8 md:mt-16 lg:mt-[130px] bg-[#FEFEFE] py-3 md:py-4 lg:py-[12px] px-6 md:px-8 lg:px-[30px] rounded-[8px] hover:bg-gray-100 transition-colors">
            <span className="text-center justify-start text-ash-g-Color text-base md:text-lg lg:text-xl font-bold font-['Poppins'] leading-normal">
              Learn More
            </span>
          </button>
        </div>
        <div className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-[45%]">
          <img
            src="/images/bringingtogetherimg.png"
            alt="bring together"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default BringingItTogether;
