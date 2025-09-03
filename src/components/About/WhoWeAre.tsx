import React from "react";

const WhoWeAre = () => {
  return (
    <section className="mt-8 md:mt-12 lg:mt-[60px] w-[95%] md:w-[85%] max-w-[1600px] mx-auto">
      <div className="w-full flex flex-col lg:flex-row justify-between gap-8 md:gap-12 lg:gap-[70px]">
        <div className="rounded-[30px] md:rounded-[60px] w-full lg:w-[40%] max-w-[685px]">
          <img
            src="/images/manteeth.png"
            alt="man shining teeth"
            className="w-full h-full object-cover rounded-[30px] md:rounded-[60px]"
          />
        </div>
        <div className="h-full w-full lg:w-[55%] max-w-[800px]">
          <h2 className="justify-start text-ash-g-Color text-xl md:text-3xl lg:text-4xl font-bold font-['Inter'] leading-tight md:leading-[1.2] lg:leading-11">
            About Tergo Energy
          </h2>
          <p className="mt-4 md:mt-6 lg:mt-[30px] text-justify justify-start text-black text-base md:text-lg lg:text-[20px] font-normal font-['Poppins'] leading-relaxed md:leading-8 lg:leading-[35.68px]">
            Tergo Energy Limited, a subsidiary of PanAfrican Capital Holdings
            Limited, is a specialized indigenous energy company facilitating
            Africa's transition to sustainable energy. Since our establishment
            in 2020, we have focused on responsibly developing natural gas and
            renewable energy solutions that power homes, businesses, and
            industries across Nigeria and West Africa.
            <br />
            <br />
            <h3 className="font-light uppercase">Our Portfolio Companies</h3>
            <p className="mt-2">
              We deliver specialized energy solutions through three focused
              subsidiaries:
            </p>
            <div className="flex flex-col gap-5 mt-5 text-lg ">
              <p className="flex items-start gap-2">
                <span>•</span>
                <span>
                  <b>COSOL Energy Solution Limited - </b> Renewable energy
                  solutions (solar, EV, consulting)
                </span>
              </p>
              <p className="flex items-start gap-2">
                <span>•</span>
                <span>
                  <b>Nexus Gas Trading Limited - </b> High-quality gas supply
                  and distribution
                </span>
              </p>
              <p className="flex items-start gap-2">
                <span>•</span>
                <span>
                  <b>Multigas Systems Limited - </b> Customized gas applications
                  for domestic, industrial and commercial use
                </span>
              </p>
            </div>
            <h3 className="font-light mt-10 uppercase">Our Core Commitment</h3>
            <p className="mt-2">
              At Tergo Energy Limited, our greatest assets are our people and
              our reputation. We operate with uncompromising integrity, foster
              diversity, and invest in our team’s growth to ensure:
            </p>
            <div className="flex flex-col gap-5 mt-5 text-lg ">
              <p className="flex items-start gap-2">
                <span>•</span>
                <span>
                  <b>Best-in-Class Solutions - </b> Leveraging multidisciplinary
                  expertise
                </span>
              </p>
              <p className="flex items-start gap-2">
                <span>•</span>
                <span>
                  <b>Sustainable Impact - </b> Balancing profitability with
                  environmental responsibility
                </span>
              </p>
              <p className="flex items-start gap-2">
                <span>•</span>
                <span>
                  <b>Stakeholder Trust - </b> Building long-term partnerships
                  across Africa’s energy sector
                </span>
              </p>
            </div>
          </p>

          <br />
        </div>
      </div>
      <p className="mt-4 md:mt-6 lg:mt-[30px] text-justify justify-start text-black text-base md:text-lg lg:text-[20px] font-normal font-['Poppins'] leading-relaxed md:leading-8 lg:leading-[35.68px]">
        Our membership in key industry bodies—including the Nigerian Gas
        Association (NGA), Renewable Energy Association of Nigeria (REAN),
        Nigerian Liquefied and Compressed Gases Association (NLCGA) and Lagos
        Chamber of Commerce & Industry (LCCI)— provides us with unparalleled
        local insight. This allows us to combine technical expertise with
        on-the-ground knowledge to deliver:
      </p>
      <div className="flex flex-col gap-5 mt-5 text-lg ">
        <p className="flex items-start gap-2">
          <span>•</span>
          <span>
            <b>Clean & Reliable Energy:</b> Sustainable natural gas and solar
            solutions tailored to Africa's unique needs.
          </span>
        </p>
        <p className="flex items-start gap-2">
          <span>•</span>
          <span>
            <b>End-to-End Services:</b> Comprehensive support, from renewable
            power generation to gas distribution and customized applications.
          </span>
        </p>
        <p className="flex items-start gap-2">
          <span>•</span>
          <span>
            <b>Stakeholder Value:</b> A balanced approach to resource management
            that ensures environmental stewardship and attractive investor
            returns.
          </span>
        </p>
      </div>
    </section>
  );
};

export default WhoWeAre;
