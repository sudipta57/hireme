import React from "react";

export default function Pricing() {
  return (
    <div className="font-spaceGrotesk">
      <div
        className="md:min-h-[546px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/product/bg.png')", // Replace with your background image path
        }}
      >
        <div className=" rounded-lg p-8 text-center ">
          <h1 className="md:text-[90px] font-bold text-[#FFFFFF] mb-4">
            Pricing Plans
          </h1>
          <p className="text-[#FFFFFF] text-[24px] font-bold mb-12">
            Our pricing plans are designed to be affordable, flexible, and
            tailored for <br /> both employers and candidates.
          </p>
          <div className="flex justify-center space-x-4">
            <div
              className="bg-white p-[2px] rounded-[10px]"
              style={{
                boxShadow: " 0px 4px 2px 0px #00000040",
              }}
            >
              <button className="bg-[#BACDD1] text-[#032170] px-4 py-2 rounded-[10px] text-[20px] font-[700] font-spaceGrotesk w-[246px] h-[65px]">
                For Employers
              </button>
            </div>
            <div
              className="bg-white p-[2px] rounded-[10px]"
              style={{
                boxShadow: " 0px 4px 2px 0px #00000040",
              }}
            >
              <button className=" text-[#032170] px-4 py-2 rounded-[10px] text-[20px] font-[700] font-spaceGrotesk w-[246px] h-[65px]">
                For Candidates
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* plan section */}
      <div className="bg-[#F4F6FB]">
        {/* Background Image */}

        <div className="max-w-7xl mx-auto relative z-10 pt-20">
          <h2 className="text-[#032170] text-[25px] font-bold uppercase mb-2">
            For Employers
          </h2>
          <h1 className="text-[52px] font-bold text-[#1C1C1C] mb-8">
            Choose a plan that suits your needs
          </h1>
        </div>

        <div className="max-w-6xl mx-auto pt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 mt-10">
            <div className="bg-white shadow-lg rounded-[25px] p-6 py-10 max-w-[546px] min-h-[744px] flex flex-col justify-between">
              <div>
                <h3 className="text-[30px] font-bold text-[#42454A]">Free</h3>
                <p className="text-[50px] font-bold text-[#032170] mt-2 pb-2 mb-4 border-b-2 border-[#EAEAEA]">
                  N0/monthly
                </p>
                <h2 className="text-[#42454A] text-[20px] font-bold mb-6">
                  Features Include
                </h2>
                <ul className=" space-y-5 mb-6">
                  {[
                    "Job Board",
                    "Quick Apply",
                    "Career Fairs",
                    "No of users / 2",
                  ].map((el, indx) => (
                    <li
                      className={`flex items-center text-[#42454A] leading-[22.97px] text-[18px] font-[400]  h-[46px] px-4 rounded-[15px] ${
                        indx % 2 == 0 && "bg-[#F5F8FF]"
                      }`}
                    >
                      <img
                        src="/circle-check.png"
                        alt="circle"
                        className="mr-2"
                      />
                      {el}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="bg-white p-1 rounded-[15px]"
                style={{
                  boxShadow: " 0px 4px 2px 0px #00000040",
                }}
              >
                <button className="bg-[#032170] text-white px-4 py-2 rounded-[15px] text-[20px] font-[700] font-spaceGrotesk w-full h-[57px]">
                  Try this for free
                </button>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-[25px] p-6 py-10 max-w-[546px] min-h-[744px] flex flex-col justify-between">
              <div>
                <h3 className="text-[30px] font-bold text-[#42454A]">Basic</h3>
                <p className="text-[50px] font-bold text-[#032170] mt-2 pb-2 mb-4 border-b-2 border-[#EAEAEA]">
                  10,000/monthly
                </p>
                <h2 className="text-[#42454A] text-[20px] font-bold mb-6">
                  Features Include
                </h2>
                <ul className=" space-y-5 mb-6">
                  {[
                    "Job Board",
                    "Direct Messaging",
                    "Career Fairs",
                    "Teams",
                    "No of users / 2",
                  ].map((el, indx) => (
                    <li
                      className={`flex items-center text-[#42454A] leading-[22.97px] text-[18px] font-[400]  h-[46px] px-4 rounded-[15px] ${
                        indx % 2 == 0 && "bg-[#F5F8FF]"
                      }`}
                    >
                      <img
                        src="/circle-check.png"
                        alt="circle"
                        className="mr-2"
                      />
                      {el}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="bg-white p-1 rounded-[15px]"
                style={{
                  boxShadow: " 0px 4px 2px 0px #00000040",
                }}
              >
                <button className="bg-[#032170] text-white px-4 py-2 rounded-[15px] text-[20px] font-[700] font-spaceGrotesk w-full h-[57px]">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <div
              className="absolute inset-0 bg-no-repeat bg-cover"
              style={{ backgroundImage: "url('/home/bg_map.png')" }}
            ></div> */}
        <div className="relative md:pb-52">
          {/* Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 mt-20 max-w-6xl mx-auto relative z-10">
            {/* Premium Card */}
            <div className="bg-white shadow-lg rounded-[25px] p-6 py-10 max-w-[546px] min-h-[744px] flex flex-col justify-between">
              <div>
                <h3 className="text-[30px] font-bold text-[#42454A]">
                  Premium
                </h3>
                <p className="text-[50px] font-bold text-[#032170] mt-2 pb-2 mb-4 border-b-2 border-[#EAEAEA]">
                  20,000/monthly
                </p>
                <h2 className="text-[#42454A] text-[20px] font-bold mb-6">
                  Features Include
                </h2>
                <ul className="space-y-5 mb-6">
                  {[
                    "Job Board",
                    "Direct Messaging",
                    "Quick Apply",
                    "Career Fairs",
                    "Event Posting",
                    "Teams",
                    "Mass Testing",
                    "No of users / 5",
                  ].map((el, indx) => (
                    <li
                      className={`flex items-center text-[#42454A] leading-[22.97px] text-[18px] font-[400] h-[46px] px-4 rounded-[15px] ${
                        indx % 2 == 0 && "bg-[#F5F8FF]"
                      }`}
                    >
                      <img
                        src="/circle-check.png"
                        alt="circle"
                        className="mr-2"
                      />
                      {el}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="bg-white p-1 rounded-[15px]"
                style={{
                  boxShadow: " 0px 4px 2px 0px #00000040",
                }}
              >
                <button className="bg-[#032170] text-white px-4 py-2 rounded-[15px] text-[20px] font-[700] font-spaceGrotesk w-full h-[57px]">
                  Get Started
                </button>
              </div>
            </div>

            {/* Enterprise Card */}
            <div className="bg-white shadow-lg rounded-[25px] p-6 py-10 max-w-[546px] min-h-[744px] flex flex-col justify-between">
              <div>
                <h3 className="text-[30px] font-bold text-[#42454A]">
                  Enterprise
                </h3>
                <p className="text-[50px] font-bold text-[#032170] mt-2 pb-2 mb-4 border-b-2 border-[#EAEAEA]">
                  Contact Sales
                </p>
                <h2 className="text-[#42454A] text-[20px] font-bold mb-6">
                  Features Include
                </h2>
                <ul className="space-y-5 mb-6">
                  {[
                    "Job Board",
                    "Direct Messaging",
                    "Quick Apply",
                    "Career Fairs",
                    "Event Posting",
                    "Teams",
                    "Company Spotlight",
                    "Company Specific Events",
                    "Customer Success Team",
                    "Mass Testing",
                    "No of users / 5",
                  ].map((el, indx) => (
                    <li
                      className={`flex items-center text-[#42454A] leading-[22.97px] text-[18px] font-[400] h-[46px] px-4 rounded-[15px] ${
                        indx % 2 == 0 && "bg-[#F5F8FF]"
                      }`}
                    >
                      <img
                        src="/circle-check.png"
                        alt="circle"
                        className="mr-2"
                      />
                      {el}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="bg-white p-1 rounded-[15px]"
                style={{
                  boxShadow: " 0px 4px 2px 0px #00000040",
                }}
              >
                <button className="bg-[#032170] text-white px-4 py-2 rounded-[15px] text-[20px] font-[700] font-spaceGrotesk w-full h-[57px]">
                  Get Started
                </button>
              </div>
            </div>
          </div>

          {/* Background Image */}
          <div
            className="absolute md:bottom-[-200px] left-0 right-0 w-full h-[772px] bg-no-repeat bg-contain"
            style={{ backgroundImage: "url('/home/bg_map.png')" }}
          ></div>
        </div>
      </div>

      {/* For Candidate Section */}

      <div
        className="min-h-screen relative bg-cover bg-center py-28 px-4 text-[#FFFFFF] bg-[#00113F]"
        // style={{
        //   backgroundImage: "url('/home/employee_bg.png')", // Replace with your image path
        // }}
      >
        <div className="text-center">
          <h2 className="text-[#FFFFFF] text-[25px] font-bold uppercase mb-2">
            For Candidates
          </h2>
          <h1 className="text-[52px] font-bold text-[#FFFFFF] mb-14">
            Choose a plan that suits your needs
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 mt-10 max-w-6xl mx-auto">
            <div className="bg-white shadow-lg rounded-[25px] p-6 py-10 max-w-[546px] min-h-[744px] flex flex-col justify-between">
              <div>
                <h3 className="text-[30px] font-bold text-[#42454A]">Basic</h3>
                <p className="text-[50px] font-bold text-[#032170] mt-2 pb-2 mb-4 border-b-2 border-[#EAEAEA]">
                  500/monthly
                </p>
                <h2 className="text-[#42454A] text-[20px] font-bold mb-6">
                  Features Include
                </h2>
                <ul className=" space-y-5 mb-6">
                  {[
                    "Job Board",
                    "In-person Career Fairs",
                    "Resume Builder",
                    "Early Recruiting Access",
                  ].map((el, indx) => (
                    <li
                      className={`flex items-center text-[#42454A] leading-[22.97px] text-[18px] font-[400]  h-[46px] px-4 rounded-[15px] ${
                        indx % 2 == 0 && "bg-[#F5F8FF]"
                      }`}
                    >
                      <img
                        src="/circle-check.png"
                        alt="circle"
                        className="mr-2"
                      />
                      {el}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="bg-white p-1 rounded-[15px]"
                style={{
                  boxShadow: " 0px 4px 2px 0px #00000040",
                }}
              >
                <button className="bg-[#032170] text-white px-4 py-2 rounded-[15px] text-[20px] font-[700] font-spaceGrotesk w-full h-[57px]">
                  Get Started
                </button>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-[25px] p-6 py-10 max-w-[546px] min-h-[744px] flex flex-col justify-between">
              <div>
                <h3 className="text-[30px] font-bold text-[#42454A]">
                  Premium
                </h3>
                <p className="text-[50px] font-bold text-[#032170] mt-2 pb-2 mb-4 border-b-2 border-[#EAEAEA]">
                  1,000/monthly
                </p>
                <h2 className="text-[#42454A] text-[20px] font-bold mb-6">
                  Features Include
                </h2>
                <ul className=" space-y-5 mb-6">
                  {[
                    "Job Board",
                    "Virtual Career Fairs",
                    "In-person Career Fairs",
                    "Resume Builder",
                    "Early Recruiting Access",
                    "Virtual Trainings / Events",
                    "Premium Insights",
                  ].map((el, indx) => (
                    <li
                      className={`flex items-center text-[#42454A] leading-[22.97px] text-[18px] font-[400]  h-[46px] px-4 rounded-[15px] ${
                        indx % 2 == 0 && "bg-[#F5F8FF]"
                      }`}
                    >
                      <img
                        src="/circle-check.png"
                        alt="circle"
                        className="mr-2"
                      />
                      {el}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="bg-white p-1 rounded-[15px]"
                style={{
                  boxShadow: " 0px 4px 2px 0px #00000040",
                }}
              >
                <button className="bg-[#032170] text-white px-4 py-2 rounded-[15px] text-[20px] font-[700] font-spaceGrotesk w-full h-[57px]">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Background Image */}
        {/* <div
          className="absolute inset-0 bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage: "url('/home/employee_bg.png')",
          }}
        ></div> */}
      </div>
    </div>
  );
}
