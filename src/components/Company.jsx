import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Company() {
  const [activeTab, setActiveTab] = useState("mission");
  const teamMembers = [
    {
      name: "Jahan Ara",
      email: "jahan@example.com",
      image: "/company/jahan.png",
      linkedin: "#",
      behance: "#",
      instagram: "#",
    },
    {
      name: "Pinaki Sasmal",
      email: "pinaki@example.com",
      image: "/company/pinaki.png",
      linkedin: "#",
      behance: "#",
      instagram: "#",
    },
    {
      name: "Sudipta Ghorami",
      email: "sudipta@example.com",
      image: "/company/sudipta.png",
      linkedin: "#",
      behance: "#",
      instagram: "#",
    },
    {
      name: "Badhan Das",
      email: "badhan@example.com",
      image: "/company/badhan.png",
      linkedin: "#",
      behance: "#",
      instagram: "#",
    },
  ];
  return (
    <div className="font-spaceGrotesk">
      <section className="bg-[#F4F6FB] py-12 px-6 md:px-12">
        <div className="max-w-[1500px] mx-auto flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-12">
          {/* Left Section - Image */}
          <div className="md:w-1/2">
            <img src="/company/img1.png" alt="Team working together" />
          </div>

          {/* Right Section - Text */}
          <div className="md:w-1/2">
            <h3 className="text-[#032170] font-bold text-[25px] font-spaceGrotesk leading-[32px]">
              About Us
            </h3>
            <h2 className="text-[#1C1C1C] text-2xl md:text-[40px] font-bold font-spaceGrotesk leading-[51.04px] mt-8">
              One Stop Solution For All Your HR Needs
            </h2>
            <p className="text-[#000000] text-[20px] font-[400] font-spaceGrotesk leading-[26px] mt-4">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>

            {/* Tabs */}
            <div className="flex space-x-8 mt-12 border-b">
              <button
                className={`${
                  activeTab === "mission"
                    ? "text-[#032170] border-b-2 border-[#032170]"
                    : "text-[#222737]"
                } pb-[10px] cursor-pointer text-[16px] font-bold`}
                onClick={() => setActiveTab("mission")}
              >
                Our Mission
              </button>
              <button
                className={`${
                  activeTab === "vision"
                    ? "text-[#032170] border-b-2 border-[#032170]"
                    : "text-[#222737]"
                } pb-[10px] cursor-pointer text-[16px] font-bold`}
                onClick={() => setActiveTab("vision")}
              >
                Our Vision
              </button>
            </div>

            {/* Dynamic Content */}
            {activeTab === "mission" && (
              <div className="mt-8 text-[#7D7D7D] text-[16px] font-[400] font-spaceGrotesk leading-[24px]">
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </p>
                <p className="mt-2">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint.
                </p>
              </div>
            )}
            {activeTab === "vision" && (
              <div className="mt-8 text-[#7D7D7D] text-[16px] font-[400] font-spaceGrotesk leading-[24px]">
                <p>
                  Our vision is to create a world where every organization
                  thrives through empowered, motivated employees. We aim to
                  provide tools and insights that foster innovation and success.
                </p>
                <p className="mt-2">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint.
                </p>
              </div>
            )}

            {/* Button */}
            <div
              className="bg-transparent p-1 mt-10 rounded-[10px] border-[3px] border-[#032170] w-[215px] h-[65px]"
              style={{
                boxShadow: " 0px 4px 2px 0px #00000040",
              }}
            >
              <button className=" text-[#032170] w-full h-full rounded-[10px] text-[20px] font-[700] font-spaceGrotesk flex items-center justify-center">
                About Us
                <img src="/home/right-arrow.png" alt="play" className="ms-3" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* leader section */}

      <div className="relative min-h-screen bg-[#F4F6FB]   ">
        {/* Background Image */}
        {/* <img
          src="/home/bg_map.png"
          alt="Background"
          className="absolute inset-x-0 bottom-0 w-full object-cover"
        /> */}

        <div
          className="absolute top-20 inset-x-0 bg-[#F4F6FB]"
          style={{ backgroundImage: "url('/home/bg_map.png')" }}
        >
          <div className="max-w-6xl mx-auto px-4">
            {/* Heading Section */}
            <div className="text-center mb-12">
              <h3 className="text-[#032170] font-bold text-[25px]">
                Meet Our Experts
              </h3>
              <h2 className="text-[#1C1C1C] text-3xl md:text-[60px] font-bold mt-12">
                Our Leadership Team
              </h2>
            </div>

            {/* Swiper Slider */}
            <Swiper
              modules={[Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
              }}
              loop={true}
              pagination={{ clickable: true, el: ".custom-dots" }}
            >
              {teamMembers.map((member, index) => (
                <SwiperSlide key={index}>
                  <div
                    className={`bg-transparent rounded-xl p-6 flex flex-col transition-all duration-300 overflow-hidden ${
                      index % 2 === 0 ? "translate-y-12" : "translate-y-0"
                    }`}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full max-h-[250px] h-auto object-cover rounded-[20px] border-4 border-white"
                    />
                    <h4 className="text-[#222737] text-[20px] font-bold font-spaceGrotesk mt-4">
                      {member.name}
                    </h4>
                    <p className="text-[#7D7D7D] text-[15px] font-[400] font-spaceGrotesk border-b border-[#E3E3E3] pb-4">
                      {member.email}
                    </p>
                    <div className="flex items-center space-x-4 mt-4 ">
                      <a
                        href={member.linkedin}
                        className="text-black hover:opacity-80"
                      >
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a
                        href={member.behance}
                        className="text-black hover:opacity-80"
                      >
                        <i className="fab fa-behance"></i>
                      </a>
                      <a
                        href={member.instagram}
                        className="text-black hover:opacity-80"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Pagination Dots */}
            <div className="flex justify-center items-center mt-8 cursor-pointer custom-dots space-x-2"></div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>

      {/* commitment section */}
      <section
        className="relative py-16 px-6 md:px-12 bg-cover bg-center bg-[#032170] text-white"
        style={{ backgroundImage: "url('/home/bg_map.png')" }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <div className="flex flex-col md:flex-row items-center md:items-center justify-between space-y-8 md:space-y-0 md:space-x-8 my-12">
            {/* Left Section */}
            <div className="text-left md:w-1/2">
              <h3 className="text-[#FFFFFF] text-[25px] font-bold font-spaceGrotesk">
                Our Commitment
              </h3>
              <h2 className="text-[#FFFFFF] text-3xl md:text-[52px] font-bold font-spaceGrotesk leading-[66.35px] mt-7">
                Your Business Goals Are <br /> Our Top Priority
              </h2>
            </div>

            {/* Right Section */}
            <div className="md:max-w-[482px]">
              {/* Tabs */}
              <div className="flex justify-center items-center mb-8 max-w-[500px] mx-auto bg-white rounded-full shadow-lg">
                <button className="flex-1 px-6 py-2 text-[#032170] text-[14px] font-[500] bg-[#BACDD1] font-spaceGrotesk rounded-s-full transition-all duration-300">
                  Expertise
                </button>
                <button className="flex-1 px-6 py-2 text-[#032170] text-[14px] font-[500] bg-transparent hover:bg-[#BACDD1] transition-all duration-300">
                  Innovation
                </button>
                <button className="flex-1 px-6 py-2 text-[#032170] text-[14px] font-[500] bg-transparent hover:bg-[#BACDD1] rounded-e-full transition-all duration-300">
                  Accountability
                </button>
              </div>

              {/* Description */}
              <p className="text-left text-[#FFFFFF] text-[16px] font-[400] font-spaceGrotesk">
                We embody unwavering expertise, garnered through years of
                industry mastery. Our team's extensive knowledge and refined
                skills ensure effective solutions, fostering trust.
              </p>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-white text-center rounded-xl p-6 shadow-lg max-w-[288px] h-[217px]">
              <div className="flex justify-center mb-4">
                <img src="/company/icon1.png" alt="img" />
              </div>
              <h4 className="text-[32px] font-[600] text-[#222737]">15+</h4>
              <p className="text-[#7D7D7D] text-[15px] font-[400] font-spaceGrotesk mt-2">
                Years of industry experience
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-white text-center rounded-xl p-6 shadow-lg max-w-[288px] h-[217px]">
              <div className="flex justify-center mb-4">
                <img src="/company/icon2.png" alt="img" />
              </div>
              <h4 className="text-[32px] font-[600] text-[#222737]">244</h4>
              <p className="text-[#7D7D7D] text-[15px] font-[400] font-spaceGrotesk mt-2">
                Digital projects completed
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-white text-center rounded-xl p-6 shadow-lg max-w-[288px] h-[217px]">
              <div className="flex justify-center mb-4">
                <img src="/company/icon3.png" alt="img" />
              </div>
              <h4 className="text-[32px] font-[600] text-[#222737]">300</h4>
              <p className="text-[#7D7D7D] text-[15px] font-[400] font-spaceGrotesk mt-2">
                Data transferred monthly
              </p>
            </div>
            {/* Card 4 */}
            <div className="bg-white text-center rounded-xl p-6 shadow-lg max-w-[288px] h-[217px]">
              <div className="flex justify-center mb-4">
                <img src="/company/icon4.png" alt="img" />
              </div>
              <h4 className="text-[32px] font-[600] text-[#222737]">440+</h4>
              <p className="text-[#7D7D7D] text-[15px] font-[400] font-spaceGrotesk mt-2">
                Certified HR Solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimoniyal section */}
      <div className="bg-[#F4F6FB] p-6 md:p-10 flex flex-col md:flex-row items-center lg:gap-10 lg:px-16">
        <div className="lg:w-1/2">
          <img
            src="/company/testi.png" // Replace with your image path
            alt="Happy Customer"
            className="rounded-lg object-cover"
          />
        </div>
        <div className="mt-6 lg:mt-0 lg:w-2/5">
          <img src="/company/queate.png" />
          <h3 className="text-[#1C1C1C] text-[55px] font-bold font-spaceGrotesk my-2 flex items-center">
            Our Happy Customers
          </h3>
          <blockquote className="mt-8 text-[#000000] text-[20px] font-[400] leading-[26px] font-spaceGrotesk text-lg mb-8">
            "HR Solutions are incredibly accommodating, diligent and competent.
            They understand the scope, needs and importance of both concerned
            parties within the interviewing and hiring process - That really
            helps with building a life and career."
          </blockquote>
          <p className="text-[#222737] text-[18px] font-bold font-spaceGrotesk">
            Tathagata Das
          </p>
          <p className="text-[#7D7D7D] text-[16px] font-[400] font-spaceGrotesk">
            UI Designer
          </p>
        </div>
      </div>
    </div>
  );
}
