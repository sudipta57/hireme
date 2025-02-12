import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  // Function to move to the next slide
  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  // Auto-slide effect
  useEffect(() => {
    const slideInterval = setInterval(goToNextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(slideInterval);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row max-w-[1600px] mx-auto bg-gray-100 lg:min-h-screen gap-6 p-4 lg:p-10">
      {/* Carousel Section */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
        <div className="w-full max-w-[1600px] bg-[#F4FBFF] p-6 flex flex-col h-screen md:h-auto rounded-lg">
          <div className="relative flex-grow h-full">
            {/* Slide 1 */}
            <div
              className={`absolute w-full flex flex-col items-center p-8 text-center transition-opacity duration-1000 ${
                currentSlide === 0 ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <img
                src="/authentic/carousal1.png"
                alt="Illustration 1"
                className="w-24 h-24 lg:w-32 lg:h-32 mb-6"
              />
              <h2 className="text-lg lg:text-xl font-bold mb-4 text-gray-900">
                Focus on the work that matters
              </h2>
              <p className="text-sm lg:text-base text-gray-600">
                Prioritize essential tasks to boost productivity and achieve
                meaningful results in both business and personal goals.
              </p>
            </div>

            {/* Slide 2 */}
            <div
              className={`absolute w-full flex flex-col items-center p-8 text-center transition-opacity duration-1000 ${
                currentSlide === 1 ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <img
                src="/authentic/carousal2.png"
                alt="Illustration 2"
                className="w-24 h-24 lg:w-32 lg:h-32 mb-6"
              />
              <h2 className="text-lg lg:text-xl font-bold mb-4 text-gray-900">
                Stay Organized
              </h2>
              <p className="text-sm lg:text-base text-gray-600">
                Organize your workflow to handle tasks more efficiently and keep
                track of your progress.
              </p>
            </div>

            {/* Slide 3 */}
            <div
              className={`absolute w-full flex flex-col items-center p-8 text-center transition-opacity duration-1000 ${
                currentSlide === 2 ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <img
                src="/authentic/carousal3.png"
                alt="Illustration 3"
                className="w-24 h-24 lg:w-32 lg:h-32 mb-6"
              />
              <h2 className="text-lg lg:text-xl font-bold mb-4 text-gray-900">
                Achieve Your Goals
              </h2>
              <p className="text-sm lg:text-base text-gray-600">
                Set realistic goals and work consistently to turn your
                aspirations into reality.
              </p>
            </div>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center mt-4">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 lg:w-4 lg:h-4 mx-1 ${
                  currentSlide === index ? "bg-blue-600" : "bg-gray-300"
                } rounded-full`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <div className="w-full max-w-md bg-white p-6 sm:p-8 flex flex-col h-full rounded-lg shadow-md">
          <h2 className="text-xl lg:text-2xl font-bold text-gray-900 text-center lg:text-left">
            Login
          </h2>
          <form className="flex flex-col mt-6 space-y-4">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm text-gray-600">
                Mobile Number/Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="border border-gray-300 p-2 rounded-lg w-full mt-1"
              />
            </div>

            {/* Location */}
            <div>
              <label htmlFor="location" className="block text-sm text-gray-600">
                Select Location
              </label>
              <select
                id="location"
                className="border border-gray-300 p-2 rounded-lg w-full mt-1"
              >
                <option value="">Location</option>
                <option value="ABCD">ABCD</option>
              </select>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm text-gray-600">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="border border-gray-300 p-2 rounded-lg w-full mt-1"
                />
                <button
                  type="button"
                  className="absolute right-3 top-2 text-gray-500"
                >
                  Show
                </button>
              </div>
            </div>

            {/* Remember Me & Forget Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center text-gray-500">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <Link to="/forgot" className="text-sm text-blue-500">
                Forget Password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-red-600 text-white font-bold py-2 rounded-lg"
            >
              Sign Up
            </button>
          </form>

          {/* Register */}
          <p className="text-center text-gray-500 mt-4">
            Already have an account?{" "}
            <Link to="/reg" className="text-blue-500">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
