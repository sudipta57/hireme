import React from "react";

export default function Register() {
  return (
    <div className="max-w-[1300px] mx-auto flex space-x-15 min-h-screen font-spaceGrotesk">
      {/* Left Section with Background Image */}
      <div
        className="w-1/2 h-screen bg-blue-900 text-white flex flex-col justify-between p-8"
        style={{
          backgroundImage: "url('/home/register_bg.png')", // Replace with the actual image path
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Top Left Logo */}
        <div className="top-4 left-4">
          <img src="/home/reg_logo.png" className="text-4xl font-bold mt-0" />
        </div>

        {/* Left Side Content */}
        <div className="flex flex-col justify-center items-start h-full">
          <h2 className="text-[40px] font-[700] leading-[51.04px] mb-4">
            HR Management Platform
          </h2>
          {/* White Line */}
          <div className="w-[141px] h-[14px] bg-white rounded-[8px] mb-6"></div>
          <p className="my-6 text-[24px] font-[400] leading-[30.62px]">
            Manage all employees, payrolls, and other human resource operations.
          </p>
          <div className="flex space-x-4 justify-center items-center mt-10">
            <button className="bg-[#FF8D48] text-black w-[244px] h-[70px] text-[25px] font-[500] px-4 rounded-[11px]">
              Learn More
            </button>
            <button className="border-4 border-white text-white px-4 w-[244px] h-[70px] rounded-[11px] text-[25px] font-[500]">
              Our Features
            </button>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className=" bg-white flex items-center justify-center px-10">
        <div className="items-start">
          <h2 className="text-[48px] font-bold text-[#253D90] mb-2">
            Welcome to Hire Me
          </h2>
          <p className="text-[#969696] text-[24px] font-[500] mb-10">
            Register your account
          </p>

          <form className="space-y-6">
            {/* First Name and Last Name */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-[20px] font-[400] text-[#253D90] mb-3"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="border rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full h-[61px]"
                  style={{
                    boxShadow: "5px 2px 10px 3px #0000000D",
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-[20px] font-[400] text-[#253D90] mb-3"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="border rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full h-[61px]"
                  style={{
                    boxShadow: "5px 2px 10px 3px #0000000D",
                  }}
                />
              </div>
            </div>

            {/* Email Address and Phone Number */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-[20px] font-[400] text-[#253D90] mb-3"
                >
                  E-mail Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="border rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full h-[61px]"
                  style={{
                    boxShadow: "5px 2px 10px 3px #0000000D",
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-[20px] font-[400] text-[#253D90] mb-3"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  className="border rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full h-[61px]"
                  style={{
                    boxShadow: "5px 2px 10px 3px #0000000D",
                  }}
                />
              </div>
            </div>

            {/* Password and Confirm Password */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="password"
                  className="block text-[20px] font-[400] text-[#253D90] mb-3"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="border rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full h-[61px]"
                  style={{
                    boxShadow: "5px 2px 10px 3px #0000000D",
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-[20px] font-[400] text-[#253D90] mb-3"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  className="border rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full h-[61px]"
                  style={{
                    boxShadow: "5px 2px 10px 3px #0000000D",
                  }}
                />
              </div>
            </div>

            {/* Checkboxes */}
            <div className="space-y-2">
              <div>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="text-blue-500 focus:ring-blue-500 w-[30px] h-[26px]"
                  />
                  <span className="text-[#8F8F8F] font-[400] text-[20px]">
                    Yes, I want to receive KRIS newsletters
                  </span>
                </label>
              </div>
              <div>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="text-blue-500 focus:ring-blue-500 w-[30px] h-[26px]"
                  />
                  <span className="text-[#8F8F8F] font-[400] text-[20px]">
                    I agree to all the{" "}
                    <a href="#" className="text-[#253D90]">
                      Terms, Privacy Policy
                    </a>
                  </span>
                </label>
              </div>
            </div>

            {/* Create Account Button */}
            <button
              type="submit"
              className=" bg-[#253D90] w-[312px] h-[61px] text-white font-semibold py-2 px-4 rounded-md"
            >
              Create Account
            </button>

            <p className="text-black font-[400] text-[20px] mt-8">
              Already have an account?{" "}
              <a href="#" className="text-[#253D90]">
                Log In
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
