import React, { useState } from "react";
import { FaLinkedin, FaStar } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./Testi.css";

// Testimonial card component
const TeamCard = ({ img, name, position, description, isCenter }) => {
  return (
    <div
      className={`mx-5 p-6 text-white rounded-[11px] ${
        isCenter ? "center-slide" : ""
      }`}
      style={{
        // boxShadow: " 0px 9.77px 20.78px 0px #15151526",
        background: " #012169B2",
        backdropFilter: "blur(59.39999771118164px)",
      }}
    >
      <div className="flex flex-col items-center">
        <div className="text-center mb-10">
          <span className="text-[14px] font-semibold font-Roboto flex items-center justify-center">
            <img
              src="/landing/testimonial-like.png"
              alt="testimonial-like"
              className="me-3"
            />
            Testimonial
          </span>
        </div>
        <div
          className="bg-white relative rounded-lg pt-7 pb-6 px-4 flex flex-col items-center"
          style={{
            boxShadow: " 0px 16.2px 33.75px 0px #00000040",
          }}
        >
          <div className="absolute top-[-30px] w-[68px] h-[68px] rounded-full overflow-hidden border-2 border-white">
            <img
              src={img}
              alt="User Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute left-[-10px] top-[-100px] -z-10">
            <img src="/landing/cardbgEffect.png" alt="img" />
          </div>
          <div className="flex justify-center mb-2 mt-4 space-x-[2px]">
            {[...Array(5)].map((_, i) => (
              <img src="/landing/star.png" alt="star" />
            ))}
          </div>
          <p className="text-center text-[#050505] text-[12px] font-[400] font-poppins mb-2 px-4">
            {description}
          </p>
          <div className="text-center">
            <p className="font-semibold text-[#050505] text-[9px] font-poppins">
              {name}
            </p>
            <p className="text-[#050505] text-[7.2px] font-[400] font-poppins">
              {position}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const NextArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute right-[-100px] top-1/2 transform -translate-y-1/2 bg-[#E31837] w-10 h-10 flex items-center justify-center rounded-full shadow-md transition"
    >
      <img src="/landing/next-icon.png" alt="Next" className="cursor-pointer" />
    </button>
  );
};

// Custom Prev Arrow
const PrevArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute left-[-100px] top-1/2 transform -translate-y-1/2 bg-[#E31837] w-10 h-10 flex items-center justify-center rounded-full shadow-md transition"
    >
      <img src="/landing/prev-icon.png" alt="Prev" className="cursor-pointer" />
    </button>
  );
};

export default function LandingTestimonial() {
  const [centerSlide, setCenterSlide] = useState(1); // Initialize with the index of the center slide

  const settings = {
    infinite: true,
    speed: 500,
    centerMode: true,
    centerPadding: "20px",
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => {
      if (current == 1) {
        setCenterSlide(1);
      }
      setCenterSlide(next + 1); // Update the center slide index
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  const testimonials = [
    {
      id: 0,
      name: "Hritika Gupta",
      position: "Lead Operations in Maposer",
      description:
        "If you are a business owner, and you don’t have Xalor in your toolkit just yet, I highly recommend that you check it out.",
      img: "/landing/testi-1.png",
    },
    {
      id: 1,
      name: "Sumit Kumar",
      position: "Lead Operations in Maposer",
      description:
        "If you are a business owner, and you don’t have Xalor in your toolkit just yet, I highly recommend that you check it out.",
      img: "/landing/testi-2.png",
    },
    {
      id: 2,
      name: "Ashika Roy",
      position: "Lead Operations in Maposer",
      description:
        "If you are a business owner, and you don’t have Xalor in your toolkit just yet, I highly recommend that you check it out.",
      img: "/landing/testi-3.png",
    },
  ];

  return (
    <div className="w-full mx-auto max-w-6xl py-10">
      <h2 className="text-center text-[#012169] font-semibold text-[45px] font-Roboto mb-4">
        Testimonial
      </h2>
      <p className=" text-[#546E7A] text-center max-w-lg mx-auto font-light text-[16px] font-Roboto mb-16">
        We take pride in delivering exceptional service, but don’t just take our
        word for it—hear from our clients.
      </p>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div className="team-card mb-20" key={testimonial.id}>
            <TeamCard
              img={testimonial.img}
              name={testimonial.name}
              position={testimonial.position}
              description={testimonial.description}
              isCenter={index === centerSlide} // Check if this is the center slide
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
