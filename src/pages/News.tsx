import React from "react";
import SharedBanner from "../components/Layout/SharedBanner";

const News = () => {
  return (
    <div className="bg-[#C1FACC40] pb-12 md:pb-20 lg:pb-[100px]">
      <SharedBanner img={"news"} text="NEWS" />
      <div className="w-[95%] md:w-[85%] max-w-[1600px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-10 mt-8 md:mt-12 lg:mt-[60px] justify-between">
          <div className="w-full lg:max-w-[685px]">
            <img
              src="/images/girllooking.png"
              alt="girl looking"
              className="w-full h-[250px] md:h-[350px] lg:h-full rounded-[20px] md:rounded-[30px] object-cover"
            />
          </div>
          <p className="w-full lg:max-w-[800px] text-justify justify-start text-black text-base md:text-lg lg:text-[20px] font-light font-['Poppins'] leading-relaxed md:leading-8 lg:leading-10">
            Tergo Energy's Corporate Finance Division provides a wide range of
            services to a substantial and diversified client base that includes
            corporations, financial institutions, investment funds and
            individuals. Our team offers insight across products, industries and
            regions, and clients may turn to us to structure an effective
            capital-raising strategy, orchestrate a difficult merger or to
            handle the sale of a subsidiary. Regardless of the assignment,
            clients expect the same level of expert advice and commitment to
            their needs that has kept BGL among the leading financial advisors
            in Nigeria every year since 1995. The Corporate Finance Division
            remains at the front end of our growing franchise and is composed of
            two main practices:
          </p>
        </div>
        <p className="w-full mt-8 md:mt-10 text-justify justify-start text-black text-base md:text-lg lg:text-[20px] font-light font-['Poppins'] leading-relaxed md:leading-8 lg:leading-10">
          Tergo Energy's Corporate Finance Division provides a wide range of
          services to a substantial and diversified client base that includes
          corporations, financial institutions, investment funds and
          individuals. Our team offers insight across products, industries and
          regions, and clients may turn to us to structure an effective
          capital-raising strategy, orchestrate a difficult merger or to handle
          the sale of a subsidiary. Regardless of the assignment, clients expect
          the same level of expert advice and commitment to their needs that has
          kept BGL among the leading financial advisors in Nigeria every year
          since 1995. The Corporate Finance Division remains at the front end of
          our growing franchise and is composed of two main practices:
        </p>

        <div className="mt-16 md:mt-20 lg:mt-[130px] flex flex-col xl:flex-row justify-between gap-8 md:gap-11">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 md:gap-x-10 gap-y-12 md:gap-y-20">
            {Array.from({ length: 4 }, (_, index) => (
              <div key={index} className="max-w-[437px]">
                <img
                  src="/images/officepeople.png"
                  alt="office people"
                  className="w-full h-[200px] md:h-[250px] object-cover rounded-[15px]"
                />
                <h3 className="max-w-96 mt-4 md:mt-[17px] justify-start text-ash-g-Color text-lg md:text-xl lg:text-2xl font-bold font-['Poppins'] leading-tight md:leading-normal">
                  Lorem ipsum dolor sit amet amet consectetur.{" "}
                </h3>
                <p className="max-w-64 mt-3 md:mt-[15px] justify-start text-ash-g-Color text-xs md:text-sm font-normal font-['Poppins'] uppercase leading-none">
                  Monday | December 19, 2024
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-8 md:gap-12 xl:max-w-[400px]">
            {Array.from({ length: 5 }, (_, index) => (
              <div key={index} className="flex gap-4 md:gap-[22px]">
                <img
                  src="/images/officepeople.png"
                  alt="office people"
                  className="w-20 h-20 md:w-24 md:h-24 lg:w-[175px] lg:h-auto object-cover rounded-[10px] flex-shrink-0"
                />
                <div className="flex flex-col gap-2 md:gap-3">
                  <p className="max-w-64 justify-start text-ash-g-Color text-xs md:text-sm font-normal font-['Poppins'] uppercase leading-none">
                    Monday | December 19, 2024
                  </p>
                  <div className="max-w-96 justify-start text-ash-g-Color text-sm md:text-base font-semibold font-['Poppins'] leading-tight">
                    Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor
                    sit amet consectetur.{" "}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
