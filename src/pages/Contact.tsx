import React from "react";
import LetsDiscuss from "../components/Landing/LetsDiscuss";
import SharedBanner from "../components/Layout/SharedBanner";

const Contact = () => {
  return (
    <div className="bg-[#C1FACC40] pb-12 md:pb-20 lg:pb-[100px]">
      <SharedBanner text="CONTACT US" />

      <div className="w-[95%] md:w-[85%] max-w-[1600px] mx-auto mt-8 md:mt-12 lg:mt-[60px] flex flex-col lg:flex-row justify-between gap-8 md:gap-12">
        <img
          src="/images/glassesgirl.png"
          alt="girl with glasses"
          className="w-full lg:max-w-[655px] h-[250px] md:h-[350px] lg:h-auto object-cover rounded-[20px] md:rounded-[30px]"
        />
        <div className="w-full lg:max-w-[898px] bg-primaryGreen rounded-[20px] md:rounded-[30px] p-6 md:p-8 lg:px-[48px] flex flex-col justify-center">
          <div className="flex flex-col gap-4 md:gap-5">
            <span className="text-white text-base md:text-lg lg:text-xl font-medium font-['Poppins'] leading-relaxed md:leading-8 lg:leading-10">
              E-mail: info@tergoenergy.com
            </span>
            <span className="text-white text-base md:text-lg lg:text-xl font-medium font-['Poppins'] leading-relaxed md:leading-8 lg:leading-10">
              URL: https://tergoenergy.com
            </span>
            <span className="text-white text-base md:text-lg lg:text-xl font-medium font-['Poppins'] leading-relaxed md:leading-8 lg:leading-10">
              Tel: +234 800 300 3000
            </span>
            <span className="text-white text-base md:text-lg lg:text-xl font-medium font-['Poppins'] leading-relaxed md:leading-8 lg:leading-10">
              Address: 9 Elsie Femi Pearse, Off Adeola Odeku, Victoria Island,
              Lagos, Nigeria
            </span>
          </div>
        </div>
      </div>

      <LetsDiscuss />

      <div className="mt-12 md:mt-20 px-4 md:px-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7014444232495!2d3.408562875240249!3d6.432384193558742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8ad0c20671c7%3A0x514faf255c7e07e5!2s9%20Elsie%20Femi%20Pearse%20St%2C%20Victoria%20Island%2C%20Lagos%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1752062904803!5m2!1sen!2sng"
          width="100%"
          height="400"
          className="md:h-[500px] lg:h-[550px] rounded-[15px] md:rounded-[20px]"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
