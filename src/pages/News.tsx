import React from "react";
import SharedBanner from "../components/Layout/SharedBanner";

const News = () => {
  return (
    <div className="bg-[#C1FACC40] pb-[100px]">
      <SharedBanner text="NEWS" />
      <div className="w-[85%] max-w-[1600px] mx-auto">
        <div className="flex gap-10 mt-[60px] justify-between">
          <div className="w-full min-h-full border max-w-[685px]">
            <img
              src="/images/girllooking.png"
              alt="girl looking"
              className="w-full h-full rounded-[30px] object-cover"
            />
          </div>
          <p className=" w-full max-w-[800px] text-justify justify-start text-black text-[22px] font-light font-['Poppins'] leading-10">
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
        <p className="w-full mt-10 text-justify justify-start text-black text-2xl font-light font-['Poppins'] leading-10">
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

        <div className="mt-[130px] flex justify-between gap-11">
          <div className="grid grid-cols-2 gap-x-10 gap-y-20">
            {Array.from({ length: 4 }, (_, index) => (
              <div key={index} className="max-w-[437px]">
                <img src="/images/officepeople.png" alt="office people" />
                <h3 className="max-w-96 mt-[17px] h-20 justify-start text-ash-g-Color text-2xl font-bold font-['Poppins'] leading-normal">
                  Lorem ipsum dolor sit amet amet consectetur.{" "}
                </h3>
                <p className="max-w-64 h-6 mt-[15px] justify-start text-ash-g-Color text-sm font-normal font-['Poppins'] uppercase leading-none">
                  Monday | December 19, 2024
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-12">
            {Array.from({ length: 5 }, (_, index) => (
              <div key={index} className="flex gap-[22px]">
                <img
                  src="/images/officepeople.png"
                  alt="office people"
                  className="w-full max-w-[175px]"
                />
                <div className="flex flex-col gap-3">
                  <p className="max-w-64 h-6 justify-start text-ash-g-Color text-sm font-normal font-['Poppins'] uppercase leading-none">
                    Monday | December 19, 2024
                  </p>
                  <div className="max-w-96 h-16 justify-start text-ash-g-Color text-base font-semibold font-['Poppins'] leading-tight">
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
