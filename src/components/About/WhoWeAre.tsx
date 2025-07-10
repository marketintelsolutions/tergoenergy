import React from "react";

const WhoWeAre = () => {
  return (
    <section className="mt-8 md:mt-12 lg:mt-[60px] w-[95%] md:w-[85%] max-w-[1600px] mx-auto">
      <div className="w-full flex flex-col lg:flex-row justify-between gap-8 md:gap-12 lg:gap-[70px]">
        <div className="rounded-[30px] md:rounded-[60px] w-full lg:w-[40%] max-w-[685px]">
          <img
            src="/images/manteeth.png"
            alt="man shining teeth"
            className="w-full  object-cover rounded-[30px] md:rounded-[60px]"
          />
        </div>
        <div className="h-full w-full lg:w-[55%] max-w-[800px]">
          <h2 className="justify-start text-ash-g-Color text-xl md:text-3xl lg:text-4xl font-bold font-['Inter'] leading-tight md:leading-[1.2] lg:leading-11">
            About Tergo Energy
          </h2>
          <p className="mt-4 md:mt-6 lg:mt-[30px] text-justify justify-start text-black text-base md:text-lg lg:text-[20px] font-normal font-['Poppins'] leading-relaxed md:leading-8 lg:leading-[35.68px]">
            Tergo Energy Limited, a subsidiary of PanAfrican Capital Holdings
            Limited, is committed to advancing Africa's energy transition by
            harnessing natural gas and renewable energy solutions. We focus on
            delivering sustainable, efficient, and reliable energy to
            residential, commercial, and industrial consumers across Nigeria and
            West Africa.
            <br />
            <br />
            Established in 2020, Tergo Energy Limited is a leading indigenous
            energy company dedicated to the responsible development of natural
            energy resources across Nigeria and Africa. As a proud member of the
            Nigerian Gas Association, we are committed to addressing Africa's
            energy challenges by delivering clean, sustainable, and innovative
            energy solutions.
            <br />
            <br />
            Leveraging our multidisciplinary technical expertise, we focus on
            advancing natural gas and solar energy to drive positive and lasting
            impact. At Tergo Energy, we are devoted to serving our stakeholders
            by being responsible stewards of the resources we manage while
            ensuring attractive returns for our investors.
            <br />
            <br />
          </p>
        </div>
      </div>
      <p className="w-full max-w-[1596px] mt-8 md:mt-12 lg:mt-[50px] text-justify justify-start text-black text-base md:text-lg lg:text-[20px] font-normal font-['Poppins'] leading-relaxed md:leading-8 lg:leading-[35.68px]">
        Our success is built on our core values of Services, Professionalism,
        Integrity, Respect, Innovation, and Team Spirit. These principles put
        our clients at the center of everything we do and drive the level of
        professionalism that permeates throughout our organization.
        <br />
        <br />
        We provide world-class energy solutions through our three portfolio
        companies: COSOL Energy Solution Limited driving renewable energy
        solutions, Nexus Gas Trading Limited delivering high-quality gas
        services, and Multigas Systems Limited providing customized gas
        applications across multiple sectors.
        <br />
        <br />
        At Tergo Energy, we realize that our biggest assets are our people and
        our reputation. Integrity and sustainability in everything we do is
        paramount. We promote diversity and place much emphasis on the personal
        and professional development of all our team members, ensuring we
        deliver best-in-class energy solutions that maximize value for all our
        stakeholders.
      </p>
    </section>
  );
};

export default WhoWeAre;
