import React, { useState, useEffect } from "react";

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
    <div className="flex flex-col-reverse lg:flex-row w-full max-w-5xl mx-auto min-h-[350px] items-center justify-center mt-30">
      {/* Carousel Section */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-start h-full">
        <div className="w-full max-w-lg bg-[#F4FBFF]  p-6 h-full">
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
          <div className="flex justify-center mt-4">
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
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <div className="w-full max-w-md bg-white p-8 shadow-lg shadow-gray-300/30">
          <div className="flex mb-6">
            <img
              src="/authentic/forgot.png"
              alt="Shield"
              className="w-10 h-10"
            />
          </div>

          <h2 className="text-2xl font-bold text-gray-900">Forget Password</h2>
          <p className="text-gray-500 mb-6">
            Enter Mobile Number/ Email you used when you joined & we will Send
            you OTP
          </p>

          <form>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2"></div>
            <label htmlFor="password" className="block text-sm text-gray-600">
              Mobile Number/Email
            </label>
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 p-2 rounded-lg w-full mt-4"
            />

            <button
              type="submit"
              className="w-full bg-red-600 text-white font-bold py-2 rounded-lg mt-6"
            >
              Send OTP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
