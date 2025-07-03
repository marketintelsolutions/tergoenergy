import React from "react";

const values = [
  {
    heading: "Connectedness",
    text:
      "BGL is well connected to its people: clients, employees, communities and partners throughout the global investment banking fraternity. Because we know that well connected institutions that give their customers access to a wide range of life-transforming opportunities are rare.",
  },
  {
    heading: "Trailblazing",
    text:
      "Fresh thinking, future focus, impeccable innovation and imagination sets BGL apart. Into Africa and out of Africa, BGL’s footprint is expanding with new products and services to match changing times and to complement the evolving business and investment character of our clients.",
  },
  {
    heading: "Can do",
    text:
      "BGL’s ambitious, energetic spirit embraces the new: new approaches, new directions, new opportunities, new growth, and new wealth creation.",
  },
];

const OurValues = () => {
  return (
    <section className="mt-20 w-[85%] max-w-[1600px] mx-auto rounded-[50px] py-[100px] bg-primaryGreen">
      <div className="w-[90%] mx-auto  max-w-[1500px] flex justify-center gap-10">
        <div className=" grid grid-cols-1  min-h-full gap-10 w-[40%] max-w-[439px]">
          <div className="bg-[#FAF6FF] w-fit py-[35px] px-[25px] rounded-[58px] flex flex-col items-center gap-7">
            <img
              src="/images/missionicon.svg"
              alt="mission icon"
              className=""
            />
            <h2 className="text-center  text-black text-3xl font-bold font-['Inter'] leading-10">
              Our Mission Statement
            </h2>
            <div className=" opacity-80 text-center  text-black text-xl font-normal font-['Inter'] leading-loose">
              “BGL will actively seek the best opportunities to bring people and
              knowledge together to deliver values greater than the sum of its
              parts”
            </div>
          </div>
          <div className="bg-[#FAF6FF] w-fit py-[35px] px-[25px] rounded-[58px] flex flex-col items-center gap-7">
            <img src="/images/visionicon.svg" alt="mission icon" className="" />
            <h2 className="text-center  text-black text-3xl font-bold font-['Inter'] leading-10">
              Our Vision Statement
            </h2>
            <div className=" opacity-80 text-center  text-black text-xl font-normal font-['Inter'] leading-loose">
              “To champion wealth creation that makes a positive impact on
              society”
            </div>
          </div>
        </div>
        <div className="w-[60%] max-w-[915px] flex flex-col items-center py-[50px] bg-[#FAF6FF] rounded-[58px]">
          <h2 className="w-full max-w-[60%]  text-black text-3xl font-bold font-['Inter'] leading-10">
            Our Values
          </h2>

          <div className="w-full max-w-[58%] mx-auto  mt-[22px] flex flex-col gap-[22px]">
            {values.map((item, index) => (
              <div key={index} className="relative flex flex-col gap-5">
                <div className="absolute z-[1] -left-[100px] top-0 bg-[#D9D9D9] w-14 h-14 rounded-full"></div>
                <h2 className=" text-left  text-zinc-400 text-3xl font-bold font-['Inter'] leading-10">
                  {item.heading}
                </h2>
                <p className="z-[2] relative opacity-80  text-black text-[17px] font-normal font-['Inter'] leading-loose">
                  {item.text}
                  {index !== values.length - 1 && (
                    <div className="absolute z-[2] -top-[11%] h-[132%] w-14 -left-[100px] flex flex-col items-center">
                      <div className="w-2 h-2 rounded-full bg-[#B4B9B8] "></div>
                      <div className="w-[1px] h-full bg-[#B4B9B8] "></div>
                      <div className="w-2 h-2 rounded-full bg-[#B4B9B8] "></div>
                    </div>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
