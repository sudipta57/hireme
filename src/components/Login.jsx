import React from "react";

export default function Login() {
  return (
    <div className="max-w-[1200px] mx-auto flex justify-between items-center h-[700px] space-x-30  font-spaceGrotesk">
      {/* Left Section with Background Image */}
      <div className="px-10">
        {/* Top Left Logo */}
        <div className="top-4 left-4">
          <img src="/home/reg_logo.png" className="text-4xl font-bold mt-0" />
        </div>

        <h2 className="text-[48px] font-bold text-[#253D90] mb-2">Login</h2>
        <p className="text-[#969696] text-[24px] font-[500] mb-10">
          Login to your account.
        </p>

        {/* Form */}
        <form>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-[20px] font-[400] text-[#253D90] mb-3"
            >
              E-mail Address
            </label>
            <input
              type="email"
              id="email"
              className="border rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-[530px] h-[61px]"
              style={{
                boxShadow: "5px 2px 10px 3px #0000000D",
              }}
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-[20px] font-[400] text-[#253D90] mb-3"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-[530px] h-[61px]"
              style={{
                boxShadow: "5px 2px 10px 3px #0000000D",
              }}
            />
          </div>

          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="text-blue-500 focus:ring-blue-500 w-[30px] h-[26px]"
              />
              <label
                htmlFor="remember"
                className="ml-2 text-[#8F8F8F] font-[400] text-[20px]"
              >
                Remember me
              </label>
            </div>
            <a
              href="#"
              className="text-sm text-[#253D90] text-[20px] font-[400]"
            >
              Reset Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-[#253D90] h-[61px] text-white py-2 px-4 rounded text-[20px] font-[400]"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-[#8F8F8F] text-[20px] font-[400]">
          Don’t have an account yet?{" "}
          <a
            href="#"
            className="text-[#253D90] font-semibold hover:underline focus:outline-none"
          >
            Join KRIS today.
          </a>
        </p>
      </div>
      {/* Right Section */}

      <div
        className="w-1/2 h-screen bg-blue-900 text-white flex flex-col justify-between p-8 relative"
        style={{
          backgroundImage: "url('/home/login_bg.png')", // Replace with the actual image path
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Left Side Content */}
        <h2 className="text-[40px] font-[700] leading-[51.04px] mb-4 absolute bottom-32">
          Manage all <span className="text-[#FF8D48]">HR Operations </span>
          from the comfort of your home.
        </h2>
      </div>
    </div>
  );
}
