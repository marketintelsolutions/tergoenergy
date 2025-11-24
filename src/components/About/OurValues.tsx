import React from "react";

const values = [
  {
    heading: "Services",
    text:
      "We deliver exceptional service quality, ensuring our clients receive the best energy solutions tailored to their specific needs and requirements.",
  },
  {
    heading: "Professionalism",
    text:
      "Our team maintains the highest standards of professionalism in all our interactions, from project development to ongoing support and maintenance.",
  },
  {
    heading: "Integrity",
    text:
      "We conduct business with unwavering integrity, building trust through transparent practices and honest communication with all stakeholders.",
  },
  {
    heading: "Respect",
    text:
      "We value and respect our clients, employees, partners, and the communities we serve, fostering positive relationships across all our operations.",
  },
  {
    heading: "Innovation",
    text:
      "We embrace cutting-edge technology and innovative approaches to deliver sustainable energy solutions that drive Africa's energy transition forward.",
  },
  {
    heading: "Team Spirit",
    text:
      "Our collaborative culture promotes teamwork and collective success, ensuring we work together to achieve our shared vision of clean energy transformation.",
  },
];

const OurValues = () => {
  return (
    <section className="mt-20 w-[95%] md:w-[85%] max-w-[1600px] mx-auto rounded-[30px] md:rounded-[50px] py-[10px] sm:py-[50px] lg:py-[60px] bg-primaryGreen">
      <div className="w-[95%] md:w-[90%] mx-auto max-w-[1500px] flex xl:flex-nowrap flex-wrap justify-center gap-10">
        <div className="flex flex-col min-h-full gap-10 xl:w-[40%] xl:max-w-[439px]">
          <div className="bg-[#FAF6FF] xl:w-fit py-[35px] px-[25px] rounded-[30px] md:rounded-[58px] flex flex-col items-center gap-4 md:gap-7">
            <img
              src="/images/missionicon.svg"
              alt="mission icon"
              className="w-full max-w-[80px] md:max-w-[100px]"
            />

            <h2 className="text-center text-black text-2xl md:text-3xl font-bold font-['Inter'] leading-10">
              Our Mission
            </h2>
            <div className="opacity-80 text-center text-black text-lg md:text-xl font-normal font-['Inter'] leading-loose">
            To build a profitable future by delivering accessible, reliable, 
            and sustainable clean energy solutions.
            </div>
          </div>
          <div className="bg-[#FAF6FF] xl:w-fit py-[35px] px-[25px] rounded-[30px] md:rounded-[58px] flex flex-col items-center gap-4 md:gap-7">
            <img
              src="/images/visionicon.svg"
              alt="vision icon"
              className="w-full max-w-[80px] md:max-w-[100px]"
            />
            <h2 className="text-center text-black text-2xl md:text-3xl font-bold font-['Inter'] leading-10">
              Our Vision
            </h2>
            <div className="opacity-80 text-center text-black text-lg md:text-xl font-normal font-['Inter'] leading-loose">
            To be a leading provider of trusted and innovative clean energy 
            solutions powering a profitable and sustainable future.
            </div>
          </div>
        </div>
        <div className="xl:w-[60%] max-w-[915px] flex flex-col items-center py-[50px] bg-[#FAF6FF] rounded-[30px] md:rounded-[58px]">
          <h2 className="w-full max-w-[80%] md:max-w-[60%] text-primaryGreen text-2xl md:text-3xl font-bold font-['Inter'] leading-10">
            Our Core Values
          </h2>
          <div className="w-full max-w-[80%] md:max-w-[60%] mx-auto mt-[22px] flex flex-col gap-[25px]">
            {values.map((item, index) => (
              <div
                key={index}
                className="relative flex flex-col gap-3 md:gap-3"
              >
                <div className="hidden md:flex absolute z-[1] -left-[100px] top-0 bg-secondaryGreen w-14 h-14 rounded-full"></div>
                <h2 className="text-left text-secondaryGreen text-2xl md:text-3xl font-bold font-['Inter'] md:leading-10">
                  {item.heading}
                </h2>
                <p className="z-[2] relative opacity-80 text-black text-[14px] md:text-[17px] font-normal font-['Inter'] leading-loose">
                  {item.text}
                  {index !== values.length - 1 && (
                    <div className="hidden md:flex absolute z-[2] -top-[20%] h-[162%] w-14 -left-[100px] flex-col items-center">
                      <div className="w-2 h-2 rounded-full bg-primaryGreen"></div>
                      <div className="w-[1px] h-full bg-primaryGreen"></div>
                      <div className="w-2 h-2 rounded-full bg-primaryGreen"></div>
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
