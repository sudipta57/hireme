import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function SignupWithCarousel() {
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
    <div className="flex flex-col lg:flex-row max-w-4xl mx-auto bg-gray-300 min-h-[400px] lg:gap-0 mx-auto my-10">
      {/* Carousel Section */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
        <div className="w-full max-w-lg bg-[#F4FBFF] p-6">
          <div className="relative h-96">
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
<div className="w-full lg:w-1/2 flex items-center justify-center lg:ml-0">
  <div className="w-full max-w-md bg-white p-8 shadow-lg shadow-gray-300/30">
    <h2 className="text-2xl font-bold text-gray-900 text-center">
      Let’s Get Started
    </h2>
    <p className="text-gray-500 text-center mb-6">
      Hire top talent faster with Maposer
    </p>

    <button className="w-full bg-white border border-gray-300 text-gray-700 font-semibold py-2 rounded-lg mb-4 flex items-center justify-center">
      <img
        src="https://cdn-teams-slug.flaticon.com/google.jpg"
        alt="Google Icon"
        className="w-5 h-5 mr-2"
      />
      Continue With Google
    </button>

    <div className="relative flex items-center justify-center my-4">
      <div className="w-full border-t border-gray-300"></div>
      <span className="absolute bg-white px-2 text-gray-500">OR</span>
    </div>

    <form>
      {/* First and Last Name Fields */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="flex flex-col">
          <label htmlFor="first-name" className="text-sm text-gray-600 mb-1">First Name</label>
          <input
            id="first-name"
            type="text"
            placeholder="First Name"
            className="border border-gray-300 p-2 rounded-lg"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="last-name" className="text-sm text-gray-600 mb-1">Last Name</label>
          <input
            id="last-name"
            type="text"
            placeholder="Last Name"
            className="border border-gray-300 p-2 rounded-lg"
          />
        </div>
      </div>

      {/* Email Field */}
      <div className="flex flex-col mt-4">
        <label htmlFor="email" className="text-sm text-gray-600 mb-1">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Email"
          className="border border-gray-300 p-2 rounded-lg w-full"
        />
      </div>

      {/* Password Field */}
      <div className="relative mt-4 flex flex-col">
        <label htmlFor="password" className="text-sm text-gray-600 mb-1">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Password"
          className="border border-gray-300 p-2 rounded-lg w-full"
        />
        <button
          type="button"
          className="absolute right-3 top-8 text-gray-500"
        >
          Show
        </button>
      </div>

      {/* Remember Me and Forgot Password */}
      <div className="flex items-center justify-between mt-4">
        <label className="flex items-center text-gray-500">
          <input type="checkbox" className="mr-2" />
          Remember me
        </label>
        <Link to="/forgot" className="text-sm text-blue-500">
          Forget Password?
        </Link>
      </div>

      <button
        type="submit"
        className="w-full bg-red-600 text-white font-bold py-2 rounded-lg mt-6"
      >
        Sign Up
      </button>
    </form>

    <p className="text-center text-gray-500 mt-4">
      Already have an account?{" "}
      <Link to="/login" className="text-blue-500">
        Login
      </Link>
    </p>
  </div>
</div>

    </div>
  );
}
