import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function VerifyOTP() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  // Function to move to the next slide
  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  // Auto-slide effect
  useEffect(() => {
    const slideInterval = setInterval(goToNextSlide, 5000); // Change slide every 5 seconds

    // Clear interval on component unmount
    return () => clearInterval(slideInterval);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row max-w-4xl lg:gap-0 mx-auto my-10 border-lg justify-center min-h-[350px] mt-20">
      {/* Carousel Section */}
      <div className="w-full lg:w-1/2 flex justify-center min-h-[350px] lg:justify-start">
        <div className="w-full max-w-lg bg-[#F4FBFF] p-6 flex flex-col h-full">
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
                className="w-32 h-32 mb-6"
              />
              <h2 className="text-xl font-bold mb-4 text-gray-900">
                Focus on the work that matters
              </h2>
              <p className="text-gray-600">
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
                className="w-32 h-32 mb-6"
              />
              <h2 className="text-xl font-bold mb-4 text-gray-900">
                Stay Organized
              </h2>
              <p className="text-gray-600">
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
                className="w-32 h-32 mb-6"
              />
              <h2 className="text-xl font-bold mb-4 text-gray-900">
                Achieve Your Goals
              </h2>
              <p className="text-gray-600">
                Set realistic goals and work consistently to turn your
                aspirations into reality.
              </p>
            </div>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center mt-4 ml-4">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-1 mx-1 ${
                  currentSlide === index ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center min-h-[350px]">
        <div className="w-full max-w-md bg-white p-8 shadow-lg  shadow-gray-200/30">
          {/* Shield Icon */}
          <div className="flex justify-center mb-6">
            <img
              src="/authentic/verifyLogo.png"
              alt="Shield"
              className="w-16 h-16"
            />
          </div>

          {/* OTP Verification Header */}
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
            OTP Verification
          </h2>
          <p className="text-gray-500 text-center mb-4">
            Enter OTP sent to{" "}
            <span className="font-semibold">+91-8958255870</span>{" "}
            <span className="text-blue-600 cursor-pointer">Edit</span>
          </p>

          {/* OTP Input */}
          <form>
            <div className="flex justify-center gap-2 mb-4">
              <input
                type="text"
                maxLength="1"
                className="w-12 h-12 border border-gray-300 rounded-lg text-center text-2xl focus:outline-none focus:border-blue-500"
              />
              <input
                type="text"
                maxLength="1"
                className="w-12 h-12 border border-gray-300 rounded-lg text-center text-2xl focus:outline-none focus:border-blue-500"
              />
              <input
                type="text"
                maxLength="1"
                className="w-12 h-12 border border-gray-300 rounded-lg text-center text-2xl focus:outline-none focus:border-blue-500"
              />
              <input
                type="text"
                maxLength="1"
                className="w-12 h-12 border border-gray-300 rounded-lg text-center text-2xl focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Resend OTP */}
            <p className="text-center text-gray-500 mb-6">
              Didn’t get OTP?{" "}
              <span className="text-blue-600 cursor-pointer">
                <Link to="/forgot">Resend OTP</Link>
              </span>
            </p>

            {/* Buttons */}
            <div className="flex justify-between">
              <button
                type="button"
                className="w-1/2 border border-red-600 text-red-600 font-bold py-2 rounded-lg mr-2"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-1/2 bg-red-600 text-white font-bold py-2 rounded-lg ml-2"
              >
                Verify OTP
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
