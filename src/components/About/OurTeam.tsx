import React, { useState } from "react";
import TeamItem from "./TeamItem";

const boardMembers = [
  {
    name: "Chris Oshiafi",
    role: "Chief Executive Officer",
    image: "chris.jpg",
    bio:
      "The Chief Executive Officer comes with over two decades of experience in Structured Finance, Consulting, Investment Banking and Venture Capital/Private Equity. He holds a 2nd Class (Upper Division) in Accounting & Finance from the University of London and a Master of Business Administration degree from the University of Lagos. He is a Fellow of the Institute of Chartered Accountants of Nigeria (ICAN), an Associate of the Chartered Insurance Institute of London, (ACII) UK and Chartered Institute of Taxation of Nigeria (ACIT). He also attended various programs at the prestigious Columbia Business School, New York, United States and INSEAD Business School, Fontainebleau, France, the IESE Business School in Barcelona, Spain and the Chief Executive Programme (CEP 17) Class of the Lagos Business School. He was the Pioneer Managing Director/CEO of Truebond Investments & Capital Limited, a Company with diverse interests in Oil & Gas, Telecommunications, Power and the Capital Markets. He has also worked with the firm of Damitop Consulting Limited as Managing Partner where he worked on a number of World Bank projects for the Federal and several State Governments. He served as Executive Director (Investment Banking) of Citizens International Bank (now Heritage Bank Limited) until his appointment as the pioneer Chief Executive Officer of PanAfrican Capital Holdings Limited.",
  },
  {
    name: "Sina Alimi",
    role: "Deputy Chief Executive Officer",
    image: "sina.jpg",
    bio:
      "Sina has considerable experience in Deal Structuring, Project Finance, Mergers & Acquisitions, Privatization and Asset Management. He is an Alumnus of the Lagos Business School's Chief Executive Programme (CEP 18) and IESE Business School, Barcelona, Spain. He holds a Bachelor of Science degree in Accounting (Second Class Upper) from the prestigious University of Lagos in 1989. He is also a Fellow of the Institute of Chartered Accountants of Nigeria (ICAN) and Chartered Institute of Taxation of Nigeria (CITN). He joined the Investment Banking Division of Fountain Trust Bank Plc in 1997 and subsequently served as Group Head, Corporate Finance and Head, Investment Banking Group. While in Corporate Finance, he was actively involved in high profile projects and advisory mandates in the private sector as well as the privatization programme of the Federal Government of Nigeria.",
  },
  {
    name: "Eric Okoruwa",
    role: "Executive Director",
    image: "eric.jpg",
    bio:
      "Eric holds a master's degree in marketing and a bachelor's degree in business administration from the University of Lagos. He is a member of the Nigerian Institute of Management. Prior to joining PanAfrican Capital Holdings, he was actively involved in various high-profile projects, capital raising exercise and advisory mandates in the private sector as well as privatization programme of both the State and Federal governments at Profound Securities Limited, Fountain Trust Bank Plc and Refuge Home Savings and Loans Limited. He has industry experience close to 20 years in Investment Banking & Structured Finance. He has been involved in raising capital in excess of N200 billion in the Nigerian markets and excess of $1 billion dollars from foreign institutions for project execution. He has attended various international and local courses on company Valuation and Issues Pricing, Managing and Packaging Issues, Mergers & Acquisitions, Bonds & Derivatives, Asset Backed Securities & Structured Finance.",
  },
  {
    name: "Nentok Gomwalk",
    role: "Head, Finance, Investment & Strategy",
    image: "nentok.jpg",
    bio:
      "Nentok holds a master's degree in marketing and a bachelor's degree in business administration from the University of Lagos. He is a member of the Nigerian Institute of Management. Prior to joining PanAfrican Capital Holdings, he was actively involved in various high-profile projects, capital raising exercise and advisory mandates in the private sector as well as privatization programme of both the State and Federal governments at Profound Securities Limited, Fountain Trust Bank Plc and Refuge Home Savings and Loans Limited. He has industry experience close to 20 years in Investment Banking & Structured Finance. He has been involved in raising capital in excess of N200 billion in the Nigerian markets and excess of $1 billion dollars from foreign institutions for project execution. He has attended various international and local courses on company Valuation and Issues Pricing, Managing and Packaging Issues, Mergers & Acquisitions, Bonds & Derivatives, Asset Backed Securities & Structured Finance.",
  },

  {
    name: "Bolarinwa Sanni",
    role: "Director",
    image: "teammember.png",
    bio:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium aperiam repellendus expedita molestias vero harum inventore, voluptatum perferendis voluptates omnis hic, minus neque delectus laborum corrupti quasi atque. Tempora, maiores!",
  },
  {
    name: "Isioma Martins",
    role: "Director",
    image: "teammember.png",
    bio:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium aperiam repellendus expedita molestias vero harum inventore, voluptatum perferendis voluptates omnis hic, minus neque delectus laborum corrupti quasi atque. Tempora, maiores!",
  },
];

const OurTeam = () => {
  const [selectedMember, setSelectedMember] = useState<any>();

  return (
    <section className="py-12 md:py-20 lg:py-[120px]">
      <h3 className="justify-start text-primaryGreen text-center mt-12 md:mt-20 lg:mt-[95px] text-3xl md:text-4xl lg:text-5xl font-semibold font-['Poppins'] leading-tight md:leading-[1.2] lg:leading-[105px]">
        Leadership Team
      </h3>
      <p className="mt-2 md:mt-3 lg:mt-4 w-[95%] md:w-[85%] mx-auto max-w-[1600px] opacity-80 text-center justify-start text-black text-base md:text-lg lg:text-xl font-normal font-['Poppins'] leading-relaxed md:leading-7">
        Our leadership team brings together diverse expertise in energy,
        finance, and strategic management to drive Tergo Energy's mission of
        advancing Africa's clean energy transition.
      </p>
      <div className="rounded-[25px] md:rounded-[50px] py-8 md:py-12 lg:py-[70px] px-4 md:px-8 lg:px-[80px] shadow-[0px_69px_114px_rgba(58,64,58,0.08)]">
        <div className="mt-16 md:mt-32 lg:mt-[207px] w-[95%] xl:w-[90%] max-w-[1300px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-32 md:gap-y-48 lg:gap-y-[284px] gap-6 md:gap-8 lg:gap-[50px] items-center mx-auto">
          {boardMembers.map((member, index) => (
            <TeamItem
              key={index}
              {...member}
              onReadMore={() => setSelectedMember(member)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[99999999] p-4">
          <div className="bg-white rounded-[20px] max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <img
                    src={`/images/${selectedMember.image}`}
                    alt={selectedMember.name}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-black">
                      {selectedMember.name}
                    </h3>
                    <p className="text-primaryGreen font-medium">
                      {selectedMember.role}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedMember(null)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              <div className="prose prose-sm md:prose-base max-w-none">
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {selectedMember.bio}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default OurTeam;
