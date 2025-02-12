import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
function Dashboard() {
  const shortlistedPercentage = 70;
  const notShortlistedPercentage = 30;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <nav
        className="bg-white px-4 lg:px-10 flex justify-between items-center h-[80px]"
        style={{
          boxShadow: "0px 1px 4px 0px #00000026",
        }}
      >
        <div className="flex items-center space-x-4">
          <img src="/landing/secweb.png" alt="img" className="w-[199px]" />
          <div className="hidden lg:flex ps-20 space-x-4">
            <button className="text-[#000000] text-[18px] font-[400] font-Roboto ">
              Start Screening
            </button>
            <button className="text-[#000000] text-[18px] font-[400] font-Roboto ">
              Report
            </button>
            <button className="text-[#000000] text-[18px] font-[400] font-Roboto ">
              Download
            </button>
          </div>
        </div>
        <div className="flex items-center md:w-1/2 space-x-4 lg:space-x-12">
          {/* Search Input */}
          <div className="hidden lg:flex items-center border rounded-md border-[#ACACAC] p-1 flex-grow md:w-[374px] h-[40px]">
            <input
              type="text"
              placeholder="Search by Job title, company, keywords"
              className="flex-grow text-gray-600 placeholder-gray-400 focus:outline-none"
            />
            <img
              src="/dashboard/search-icon.png"
              alt="search"
              className="cursor-pointer"
            />
          </div>

          {/* Notification Icon */}
          <div className="relative hidden lg:flex">
            <span className="text-gray-500 material-icons">
              <img src="/dashboard/notification.png" alt="Notification" />
            </span>
          </div>

          {/* Profile Section */}
          <div className="hidden lg:flex items-center justify-between space-x-2 bg-[#FFF1F3] rounded-full w-[170px] h-[40px] px-1">
            <div className="flex items-center">
              <img
                className="w-8 h-8 rounded-full border-2 border-blue-500"
                src="/dashboard/j.png"
                alt="Profile"
              />
              <span className="text-[#E31837] font-semibold ms-2">
                Hi, Jahan
              </span>
            </div>
            <img
              src="/dashboard/info.png"
              alt="info"
              className="cursor-pointer"
            />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-md p-4">
          <div className="flex flex-col space-y-4">
            <button className="text-gray-700">Take Interview</button>
            <button className="text-gray-700">Report</button>
            <button className="text-gray-700">Download</button>
            <div className="flex items-center border rounded-md shadow p-1">
              <input
                type="text"
                placeholder="Search by Job title, company, keywords"
                className="flex-grow p-2 text-gray-600 placeholder-gray-400 focus:outline-none"
              />
              <img
                src="/dashboard/search-icon.png"
                alt="search"
                className="cursor-pointer"
              />
            </div>
            <div className="flex items-center space-x-2">
              <img
                className="w-8 h-8 rounded-full border-2 border-blue-500"
                src="/dashboard/j.png"
                alt="Profile"
              />
              <span className="text-blue-700 font-semibold">Hi, Jahan</span>
            </div>
          </div>
        </div>
      )}

      {/* Banner */}
      <section
        className="text-white p-6 rounded-[30px] shadow-md mt-4 mx-4 relative"
        style={{
          backgroundImage: `url('/dashboard/banner.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className=" bg-opacity-50 p-6 rounded-md">
          <h2 className="text-[40px] font-light font-Roboto">
            Welcome To Maposer
          </h2>
          <p className="text-[40px] font-[800] font-Roboto">Jahan Ara</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 p-4 font-Roboto max-w-[1500px] mx-auto">
        {/* Left Section */}
        <div className="lg:col-span-4 space-y-4">
          {/* Job Applied and Interviews Circle Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {/* job apply and interview */}
            <div className="bg-white p-6 rounded-[10px] border border-[#DDDDDD] flex flex-col md:flex-row justify-around items-center space-y-4 md:space-y-0">
              {/* Job Applied Section */}
              <div className="flex flex-col items-center space-y-2">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-700">
                  <img src="/dashboard/jobApply.png" alt="Job Applied Icon" />
                </div>
                <div className="text-[48px] font-bold text-[#000000]">35</div>
                <p className="text-[#000000] text-[16px] font-[400]">
                  Job Applied
                </p>
              </div>

              {/* Interviewed Section */}
              <div className="flex flex-col items-center space-y-2">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-600">
                  <img
                    src="/dashboard/interview.png"
                    alt="Interview Icon"
                    className="w-12 h-12"
                  />
                </div>
                <div className="text-[48px] font-bold text-[#000000]">12</div>
                <p className="text-[#000000] text-[16px] font-[400]">
                  Interviewed
                </p>
              </div>
            </div>

            {/* job apply section */}
            <div className="bg-white p-4 rounded-[10px] border border-[#DDDDDD] flex flex-col items-center justify-between">
              {/* Header Section */}
              <div className="flex justify-between w-full md:px-4">
                <h2 className="md:text-[20px] font-[500] text-[#000000]">
                  Job Applied
                </h2>
                <a href="#" className="text-[#012169] text-[16px] font-[500]">
                  View All →
                </a>
              </div>

              <div className="flex items-start justify-between">
                {/* Circular Progress Chart */}
                <div className="w-[115px] h-[115px] relative">
                  <CircularProgressbar
                    value={shortlistedPercentage}
                    text={`${shortlistedPercentage}%`}
                    styles={buildStyles({
                      pathColor: "#1E3A8A", // Navy color for Shortlisted
                      trailColor: "#F87171", // Red color for Not Shortlisted
                      textColor: "#1E3A8A",
                      textSize: "16px",
                    })}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-sm font-bold text-gray-800">70%</div>
                  </div>
                </div>
                {/* Legend Section */}
                <div className="w-full px-4 flex-col md:flex-row mt-2 space-y-4">
                  <div className="flex items-center space-x-2 my-2 md:my-0">
                    <span className="w-[15px] h-[15px] bg-[#EF4444] rounded-full"></span>
                    <p className=" text-[#000000] text-[16px] font-[400] font-Roboto">
                      Not Shortlisted
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-[15px] h-[15px] bg-[#012169] rounded-full"></span>
                    <p className=" text-[#000000] text-[16px] font-[400] font-Roboto">
                      Shortlisted
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* save job section */}
            <div className="bg-white p-4 rounded-[10px] border border-[#DDDDDD] flex items-center flex-col w-full space-y-4">
              {/* Header Section */}
              <div className="flex justify-between items-center w-full">
                <h2 className="text-[20px] font-[500] text-[#000000]">
                  Saved Jobs
                </h2>
                <a href="#" className="text-[#012169] text-[16px] font-[500]">
                  View All →
                </a>
              </div>

              {/* Job List */}
              <div className="space-y-4 w-full">
                {/* Job Item 1 */}
                <div className="flex items-center space-x-3 flex-col md:flex-row space-y-5 md:space-y-0 ">
                  <img
                    src="/dashboard/saveJob1.png"
                    alt="DuckDuckGo Logo"
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="flex flex-col">
                    <h3 className="text-[#000000] text-[16px] font-[400] font-Roboto">
                      Senior IT Operations Engineer
                    </h3>
                    <div className="flex mt-1 items-center justify-between text-[#1C1C1C] text-[12px] font-[400] font-Roboto space-x-2">
                      <p>DuckDuckGo</p>
                      <span className="w-[3px] h-[3px] bg-black rounded-full"></span>
                      <p>Full-Time </p>
                      <span className="w-[3px] h-[3px] bg-black rounded-full"></span>
                      <span className="font-light text-[#898989]">
                        2 days ago
                      </span>
                    </div>
                  </div>
                </div>

                {/* Job Item 2 */}
                <div className="flex items-center space-x-3 flex-col md:flex-row space-y-5 md:space-y-0 ">
                  <img
                    src="/dashboard/saveJob2.png"
                    alt="Fireart Studio Logo"
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="flex flex-col justify-between">
                    <h3 className="text-[#000000] text-[16px] font-[400] font-Roboto">
                      UX Research
                    </h3>
                    <div className="flex mt-1 items-center justify-between text-[#1C1C1C] text-[12px] font-[400] font-Roboto space-x-2">
                      <p>DuckDuckGo</p>
                      <span className="w-[3px] h-[3px] bg-black rounded-full"></span>
                      <p>Full-Time </p>
                      <span className="w-[3px] h-[3px] bg-black rounded-full"></span>
                      <span className="font-light text-[#898989]">
                        2 days ago
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            {/* Upcoming Interviews */}
            <div className="bg-white p-6 rounded-[10px] border border-[#DDDDDD] flex-[2]">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-[#000000] text-[20px] font-[500]">
                  Upcoming Interviews
                </h3>
                <div className="text-sm text-[#000000] border border-[#E1E1E1] bg-white px-3 py-1 rounded-[5px]">
                  Oct 01, 2024
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {/* Interview Card */}
                {[
                  {
                    logo: "/dashboard/tcs.png",
                    title: "Senior Product Designer",
                    company: "Tata Consultancy",
                    time: "10:00AM",
                  },
                  {
                    logo: "/dashboard/tcs.png",
                    title: "Senior Product Designer",
                    company: "Tata Consultancy",
                    time: "10:00AM",
                  },
                  {
                    logo: "/dashboard/wipro.png",
                    title: "UI/UX Designer",
                    company: "Wipro",
                    time: "11:00AM",
                  },
                  {
                    logo: "/dashboard/wipro.png",
                    title: "UI/UX Designer",
                    company: "Wipro",
                    time: "11:00AM",
                  },
                ].map((interview, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center bg-[#F4FBFF] border border-[#E1E1E1] p-4 rounded-[10px] space-x-4 h-[54px]"
                  >
                    <div className="flex space-x-2">
                      <img
                        src={interview.logo}
                        alt={`${interview.company} Logo`}
                        className=" rounded-full"
                      />
                      <div>
                        <h4 className="text-[14px] font-[400] text-[#1C1C1C]">
                          {interview.title}
                        </h4>
                        <p className="text-[12px] font-light text-[#546E7A]">
                          {interview.company}
                        </p>
                      </div>
                    </div>
                    <div className="ml-auto text-[10px] font-[400] text-[#546E7A]">
                      {interview.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activities */}
            <div className="bg-white p-4 rounded-md border border-[#DDDDDD] flex-1">
              <h3 className="text-[#000000] text-[20px] font-[400] mb-4">
                Recent Activities
              </h3>
              <ul className="space-y-3">
                {[
                  {
                    text: " application was viewed",
                    position: "UI/UX Designer",
                    company: "TCS",
                    time: "2m",
                  },
                  {
                    text: " application was viewed",
                    position: "UI/UX Designer",
                    company: "TCS",
                    time: "1h",
                  },
                  {
                    text: " application was viewed",
                    position: "UI/UX Designer",
                    company: "TCS",
                    time: "2h",
                  },
                ].map((activity, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-start text-[14px] font-[400] text-[#616161]"
                  >
                    {/* Left side with activity details */}
                    <div className="flex pr-4">
                      <div className="flex items-center justify-center rounded-full w-8 h-8 mr-3">
                        <img
                          src="/dashboard/recentIcon.png"
                          alt="Activity Icon"
                          className="w-[20px] h-[20px]"
                        />
                      </div>
                      <div>
                        Your
                        <strong className="text-[#1C1C1C] font-[400]">
                          {activity.text}
                        </strong>{" "}
                        for <span className="">{activity.position}</span> at{" "}
                        {activity.company}
                      </div>
                    </div>

                    {/* Right side with activity time */}
                    <span className="text-gray-500 text-xs whitespace-nowrap">
                      {activity.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-4">
          {/* Profile Details */}
          <div className="bg-white rounded-lg shadow-md mx-auto">
            {/* Profile and Basic Info */}
            <div className="flex items-center space-x-4 p-6">
              {/* Profile Image with Badge */}
              <div className="relative">
                <img
                  src="/dashboard/jahan.png"
                  alt="Profile"
                  className="w-20 h-20 rounded-full border-2 border-gray-200"
                />
                {/* Profile Completion Badge */}
                <span className="absolute bottom-0 right-0 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  70%
                </span>
              </div>

              {/* User Information */}
              <div>
                <h3 className="text-[#1C1C1C] text-[24px] font-[800]">
                  Jahan Ara
                </h3>
                <p className="text-[#1C1C1C] text-[14px] font-[400]">
                  UI/UX Designer
                </p>
              </div>
            </div>
            <div className="px-6">
              <p className="text-[#ACACAC] text-[12px] font-[400] ">
                Working at{" "}
                <span className="font-[400] text-[#1C1C1C] leading-[14px]">
                  Secwebxperts
                </span>
              </p>
              <p className="text-[12px] font-[300] text-[#ACACAC]">
                Jamshedpur, Jharkhand
              </p>
            </div>
            {/* Availability Badge */}
            <div className="flex items-center justify-center bg-[#E6FFF4] text-[#1C1C1C] text-[16px] font-[400] mt-4 py-2">
              <img
                src="dashboard/available_work.png"
                alt="available_work"
                className="mr-2"
              />
              Available for work
            </div>

            {/* Personal Details Section */}
            <div className="p-6">
              <h4 className="text-[20px] font-[400] text-[#000000]">
                Personal Details
              </h4>
              <ul className="mt-1 space-y-3 text-gray-700">
                <li className="flex items-center">
                  <img
                    src="/dashboard/salary.png"
                    alt="salary"
                    className="mr-4"
                  />
                  <div>
                    <p className="text-[#898989] text-[12px] font-[400]">
                      {" "}
                      Salary Expectations
                    </p>{" "}
                    <p className="text-[#1C1C1C] text-[16px] font-[500]">
                      {" "}
                      ₹52,000/ Monthly
                    </p>
                  </div>
                </li>
                <li className="flex items-center">
                  <img
                    src="/dashboard/seniority.png"
                    alt="seniority"
                    className="mr-4"
                  />
                  <div>
                    <p className="text-[#898989] text-[12px] font-[400]">
                      {" "}
                      Seniority Level
                    </p>{" "}
                    <p className="text-[#1C1C1C] text-[16px] font-[500]">
                      {" "}
                      Senior Level
                    </p>
                  </div>
                </li>
                <li className="flex items-center">
                  <img
                    src="/dashboard/work_exp.png"
                    alt="work_exp"
                    className="mr-4"
                  />
                  <div>
                    <p className="text-[#898989] text-[12px] font-[400]">
                      {" "}
                      Working Experience
                    </p>{" "}
                    <p className="text-[#1C1C1C] text-[16px] font-[500]">
                      5 Years
                    </p>
                  </div>
                </li>
                <li className="flex items-center">
                  <img
                    src="/dashboard/emp_type.png"
                    alt="emp_type"
                    className="mr-4"
                  />
                  <div>
                    <p className="text-[#898989] text-[12px] font-[400]">
                      Employment Type
                    </p>{" "}
                    <p className="text-[#1C1C1C] text-[16px] font-[500]">
                      Full Time, Part Time
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 p-4 font-Roboto max-w-[1500px] mx-auto">
        <div className="lg:col-span-5">
          {/* Recommended Jobs */}
          <div className="bg-white p-6 rounded-md border border-[#DDDDDD]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-[#000000] text-[20px] font-[500]">
                Recommended jobs for you
              </h3>
              <button className="text-[#012169] text-[16px] font-[500]">
                View All →
              </button>
            </div>

            <div className="space-y-4">
              {[1, 2, 3, 4].map((job) => (
                <div
                  key={job}
                  className="p-4 border rounded-[20px] bg-[#F4FBFF]"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-[16px] font-[500] text-[#000000]">
                        Senior User Experience Designer
                      </h4>
                      <p className="text-[14px] font-[400] text-[#1C1C1C]">
                        TCS
                      </p>
                    </div>
                    <img
                      src="/dashboard/tata.png"
                      alt="TCS Logo"
                      className="w-25 h-12"
                    />
                  </div>

                  <div className="flex items-center flex-wrap space-x-7 md:space-x-2 text-[14px] text-[#1C1C1C] mt-4 font-[400]">
                    <div className="flex space-x-2">
                      <img src="/dashboard/experience.png" alt="experience" />
                      <p>1-3 Yrs</p>
                    </div>
                    <p>|</p>
                    <div className="flex space-x-2">
                      <img src="/dashboard/money.png" alt="money" />
                      <p> Not Disclosed</p>
                    </div>
                    <p>|</p>
                    <div className="flex space-x-2">
                      <img src="/dashboard/location.png" alt="location" />
                      <p>Gurugram</p>
                    </div>
                  </div>
                  <div className="flex items-center py-4">
                    <img
                      src="/dashboard/jam_document-f.png"
                      alt="img"
                      className="w-[16px] h-[16px] me-1"
                    />
                    <p className="text-[14px] text-[#1C1C1C] font-[400]">
                      We’re Intract, an ambitious startup building a strong Web3
                      presence.
                    </p>
                  </div>
                  <div className="flex flex-wrap text-[12px] font-[400] text-[#898989] space-x-2">
                    <span>User research</span>
                    <span>•</span>
                    <span>UX</span>
                    <span>•</span>
                    <span>User experience design</span>
                    <span>•</span>
                    <span>Interaction design</span>
                  </div>

                  <div className="flex justify-between mt-4">
                    <p className="text-xs text-[#898989] text-[12px] font-[400]">
                      Today
                    </p>
                    <div className="flex space-x-4">
                      <button className="text-[#012169] text-[12px] font-[400] flex items-center">
                        <img
                          src="/dashboard/hide.png"
                          alt="hide"
                          className="w-[14px] h-[12px] me-1 cursor-pointer"
                        />
                        Hide
                      </button>
                      <button className="text-[#012169] text-[12px] font-[400] flex items-center">
                        <img
                          src="/dashboard/save.png"
                          alt="hide"
                          className="w-[11px] h-[14px] me-1 cursor-pointer"
                        />
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center mt-6 p-4 h-[100px] bg-[#FFEDED] rounded-[10px]">
              <p className="text-[24px] font-[400] text-[#E31837]">
                Are these jobs relevant for you?
              </p>
              <div>
                <button className="ml-4 bg-white text-red-500 px-4 py-1 rounded-full w-[120px] h-[40px]">
                  Yes
                </button>
                <button className="ml-2 bg-white text-red-500 px-4 py-1 rounded-full w-[120px] h-[40px]">
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Summary */}
        <div className="bg-white p-6  rounded-md border border-[#DDDDDD] lg:col-span-2 self-start">
          <div className="flex justify-center items-center">
            <img
              src="/dashboard/summary.png"
              alt="Summary Illustration"
              className="w-35 h-40 object-cover rounded-md mb-4"
            />
          </div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-[#000000] font-[500] text-[20px]">Summary</h3>
            <button className="text-[#012169] text-[16px] font-[500]">
              View All →
            </button>{" "}
          </div>
          <ul className="space-y-3 text-sm">
            <li className="flex justify-between items-center">
              <div>
                <p className="font-[500] text-[16px] text-[#000000]">
                  UX/UI Designer
                </p>
                <p className="text-[#898989] font-[400] text-[12px]">
                  Inspire, New Delhi
                </p>
              </div>
              <span className="bg-[#FFFA91] text-[#857F00] w-[100px] h-[23px] rounded-full text-[12px] font-[400] flex justify-center items-center">
                In Process
              </span>
            </li>

            <li className="flex justify-between items-center">
              <div>
                <p className="font-semibold">Senior Product Designer</p>
                <p className="text-gray-500">Famapp, Bengaluru</p>
              </div>
              <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-medium">
                Shortlisted
              </span>
            </li>

            <li className="flex justify-between items-center">
              <div>
                <p className="font-semibold">UX Designer</p>
                <p className="text-gray-500">
                  Interim Deal Matchmaker, Kolkata
                </p>
              </div>
              <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-xs font-medium">
                In Process
              </span>
            </li>

            <li className="flex justify-between items-center">
              <div>
                <p className="font-semibold">UX Designer</p>
                <p className="text-gray-500">
                  Interim Deal Matchmaker, Kolkata
                </p>
              </div>
              <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-medium">
                Rejected
              </span>
            </li>

            <li className="flex justify-between items-center">
              <div>
                <p className="font-semibold">UX Designer</p>
                <p className="text-gray-500">
                  Interim Deal Matchmaker, Kolkata
                </p>
              </div>
              <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-xs font-medium">
                In Process
              </span>
            </li>

            <li className="flex justify-between items-center">
              <div>
                <p className="font-semibold">UX Designer</p>
                <p className="text-gray-500">
                  Interim Deal Matchmaker, Kolkata
                </p>
              </div>
              <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-medium">
                Shortlisted
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
