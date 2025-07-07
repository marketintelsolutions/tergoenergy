import React from "react";
import LetsDiscuss from "../components/Landing/LetsDiscuss";
import SharedBanner from "../components/Layout/SharedBanner";

const Contact = () => {
  return (
    <div className="bg-[#C1FACC40] pb-[100px]">
      <SharedBanner text="CONTACT US" />

      <div className="w-[85%] max-w-[1600px] mx-auto mt-[60px] flex justify-between gap-12">
        <img
          src="/images/glassesgirl.png"
          alt="girl with glasses"
          className="w-full max-w-[655px]"
        />
        <div className="w-full max-w-[898px] bg-primaryGreen rounded-[30px] px-[48px] flex flex-col justify-center">
          <p className="max-w-96 flex flex-col gap-5 justify-start">
            <span className="text-white text-2xl font-medium font-['Poppins'] leading-10">
              E-mail: info@tergoenergy.com
            </span>
            <span className="text-white text-2xl font-medium font-['Poppins'] leading-10">
              URL: https://tergoenergy.com
            </span>
            <span className="text-white text-2xl font-medium font-['Poppins'] leading-10">
              Tel: +234 800 300 3000
            </span>
            <span className="text-white text-2xl font-medium font-['Poppins'] leading-10">
              Address: 9 Elsie Femi Pearse, Off Adeola Odeku, Victoria Island,
              Lagos, Nigeria
            </span>
          </p>
        </div>
      </div>

      <LetsDiscuss />
    </div>
  );
};

export default Contact;
