import React from "react";
import SharedBanner from "../components/Layout/SharedBanner";
import LetsDiscuss from "../components/Landing/LetsDiscuss";

const Contact = () => {
  return (
    <div className="bg-[#C1FACC40] pb-[100px]">
      <SharedBanner text="CONTACT" />
      <div className="w-[85%] max-w-[1600px] mx-auto mt-[60px] flex justify-between gap-12">
        <img
          src="/images/glassesgirl.png"
          alt="girl with glasses"
          className="w-full max-w-[655px]"
        />
        <div className="w-full max-w-[898px] bg-primaryGreen rounded-[30px] px-[48px] flex flex-col justify-center">
          <p className="max-w-96 flex flex-col gap-5 justify-start">
            <span className="text-white text-2xl font-medium font-['Poppins'] leading-10">
              E-mail: info@bglafrica.com
            </span>

            <span className="text-white text-2xl font-medium font-['Poppins'] leading-10">
              URL: http://bglafrica.com
            </span>
            <span className="text-white text-2xl font-medium font-['Poppins'] leading-10">
              Tel: +234 810 997 6905
            </span>
            <span className="text-white text-2xl font-medium font-['Poppins'] leading-10">
              Address: Okoi Arikpo House 5th Floor, No 5, Idowu Taylor Street,
              Victoria Island, Lagos, Nigeria.
            </span>
          </p>
        </div>
      </div>
      <LetsDiscuss />
    </div>
  );
};

export default Contact;
