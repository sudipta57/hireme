import React from "react";
import DashboardNavbar from "../Component/DashboardNavbar";

const ReportScreen = () => {
  const questions = [
    "Tell us about yourself?",
    "Why do you think you are good at sales?",
    "What is the biggest deal you have closed?",
    "Why you choose this company?",
    "What is your expectation in this company?",
  ];
  const activeQuestion = 2;

  return (
    <>
      <DashboardNavbar />
      <div className="grid md:grid-cols-5 gap-4 p-4">
        {/* Left Section */}
        <div className="col-span-4 md:col-span-3 border border-[#DDDDDD] rounded-e-md p-4">
          {/* Performance Summary Section */}
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Jahan’s Report</h2>
            <div className="bg-red-50 p-4 rounded-lg mb-6 border border-[#DDDDDD]">
              <div className="flex items-center justify-center flex-col">
                <h1 className="text-[#A5AAB4]">Performance Summary</h1>
                <div className="flex space-x-2 my-5">
                  <span className="text-yellow-500 text-2xl">⭐</span>
                  <span className="text-yellow-500 text-2xl">⭐</span>
                  <span className="text-yellow-500 text-2xl">⭐</span>
                </div>
                <p className="ml-4 text-gray-700">
                  The presentation of the candidate is good. Check the breakdown
                  summary of the interview score.
                </p>
              </div>
            </div>
          </div>

          {/* Score Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
            <CircularCard
              percentage={80}
              label="Professionalism"
              clr={"#10b981"}
            />
            <CircularCard
              percentage={80}
              label="Business Acument"
              clr={"#10b981"}
            />
            <CircularCard
              percentage={80}
              label="Opportunistic"
              clr={"#FF9458"}
            />
            <CircularCard
              percentage={80}
              label="Closing Technique"
              clr={"#10b981"}
            />
          </div>
        </div>
        {/* Right Section */}
        <div className="col-span-4 md:col-span-2 p-6 mx-auto space-y-8">
          {/* Profile and Question Section */}
          <div>
            {/* Candidate Info */}
            <div className="bg-white rounded-lg border border-[#DDDDDD] p-6 relative pb-12">
              <div className="flex items-center flex-col justify-center">
                <img
                  src="/dashboard_profile/img1.png"
                  alt="Profile"
                  className="w-20 h-20 rounded-full"
                />
                <div className="text-center mt-3">
                  <h3 className="text-lg font-semibold">Jahan Ara</h3>
                  <p className="text-gray-500">
                    UI/UX Designer at <strong>Google</strong>
                  </p>
                  <p className="text-gray-500">Manchester, UK</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-2 bg-[#FFF4F4]">
                <p className="text-sm text-gray-600 flex justify-between">
                  <strong>Interview Time:</strong>
                  <span> 10m 25s</span>
                </p>
              </div>
            </div>

            {/* Question List */}
            <div className="bg-white rounded-lg border border-[#DDDDDD] p-6 mt-6">
              {/* Title */}

              <h3 className="text-lg font-semibold mb-6">Question List</h3>

              {/* Question List */}
              <ul className="relative space-y-6">
                {questions.map((question, index) => (
                  <li key={index} className="relative flex items-start">
                    {/* Circle and Connector Line */}
                    <div className="flex flex-col items-center">
                      {/* Circle */}
                      {index + 1 <= activeQuestion ? (
                        <div className="flex items-center justify-center w-6 h-6 bg-green-500 text-white text-sm rounded-full">
                          {index + 1}
                        </div>
                      ) : (
                        <div className="flex items-center justify-center w-6 h-6 border border-gray-300 text-gray-500 text-sm rounded-full">
                          {index + 1}
                        </div>
                      )}

                      {/* Vertical Line */}
                      {index < questions.length - 1 && (
                        <div
                          className={`w-[2px] h-full ${
                            index + 1 < activeQuestion
                              ? "bg-green-500"
                              : "bg-gray-300"
                          }`}
                        ></div>
                      )}
                    </div>

                    {/* Question Text */}
                    <p
                      className={`ml-4 ${
                        index + 1 <= activeQuestion
                          ? "text-black font-medium"
                          : "text-gray-500"
                      }`}
                    >
                      {question}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            {/* Summary Section */}
            <div className="mt-6 bg-white rounded-lg border border-[#DDDDDD] p-6">
              <h3 className="text-[40px] font-bold">85%</h3>
              <h2 className="text-[16px] font-[500]">
                Screening Score Summary
              </h2>
              <p className="mt-2 text-[#515B6F] text-[14px] font-[400]">
                The presentation of the candidate is good. Check the breakdown
                summary of the interview score.
              </p>
              <div className="mt-4 flex space-x-4 justify-center">
                <button className="text-green-500 border border-green-500 px-4 py-2 rounded-lg">
                  Shortlist
                </button>
                <button className="text-[#E31837] border border-[#E31837] px-4 py-2 rounded-lg">
                  Reject
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportScreen;

const CircularCard = ({ percentage, label, clr }) => {
  return (
    <div className=" bg-white rounded-lg border border-[#DDDDDD] flex flex-col justify-center items-center p-4">
      {/* Circular Progress Bar */}
      <div className="relative">
        <svg className="w-20 h-20">
          <circle
            cx="40"
            cy="40"
            r="36"
            stroke="#e5e7eb"
            strokeWidth="8"
            fill="none"
          />
          <circle
            cx="40"
            cy="40"
            r="36"
            stroke={clr}
            strokeWidth="8"
            fill="none"
            strokeDasharray="226.19"
            strokeDashoffset={226.19 - (percentage / 100) * 226.19}
            strokeLinecap="round"
            className="transition-all duration-500"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-bold text-black">{percentage}%</span>
        </div>
      </div>
      {/* Label */}
      <p className="mt-4 font-[500] text-[20px]">{label}</p>
    </div>
  );
};
