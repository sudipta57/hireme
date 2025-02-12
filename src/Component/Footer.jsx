import React from "react";
import {
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#012169] text-white py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Newsletter Section */}
        <div className="bg-white rounded-lg p-6 flex justify-between items-center md:flex-row flex-col mb-20">
          <div>
            <h3 className="text-[16px] font-[500] font-Roboto text-[#1C1C1C]">
              Newsletter
            </h3>
            <p className="text-[#1C1C1C] text-[16px] font-[400] font-Roboto">
              Be the first one to know about discounts, offers and events
            </p>
          </div>
          <div className="flex items-center justify-between w-[457px] h-[48px] space-x-2 md:space-y-0 space-y-6 border border-[#E1E1E1] ps-4 pe-2 rounded-[12px]">
            <div className="flex items-center space-x-2">
              <img src="/landing/icons/email.png" alt="email" />
              <input
                type="email"
                placeholder="Enter your email"
                className=" py-2 text-sm rounded-md focus:outline-none text-[16px] font-[400] font-Roboto text-[#1C1C1C] placeholder:text-[#1C1C1C]"
              />
            </div>
            <button className="bg-[#E31837] w-[94px] h-[36px] text-white rounded-md font-semibold">
              Submit
            </button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-10 text-sm">
          {/* Logo and Social Icons */}
          <div className="col-span-1">
            <img src="/footer-logo.png" alt="secweb" className="mb-4" />{" "}
            {/* Replace with the actual logo path */}
            <p className="text-[#FFFFFF] text-[14px] font-[400] font-Roboto">
              Focused on innovation and excellence, it aims to provide impactful
              solutions across diverse industries
            </p>
            <div className="pt-8 text-[14px] font-[400] font-Roboto">
              <p>Connect with us</p>
              <div className="flex space-x-4 mt-4">
                <img src="/landing/twitter.png" alt="twitter" />
                <img src="/landing/linkedin.png" alt="linkedin" />
                <img src="/landing/yt.png" alt="yt" />
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="font-Roboto md:ms-16">
            <h4 className="text-[#E31837] font-[700] mb-4 text-[20px]">
              ABOUT
            </h4>
            <ul className="space-y-4 font-[400] text-[14px]">
              <li>
                <a href="#" className="text-white ">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white ">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-white ">
                  Partners
                </a>
              </li>
              <li>
                <a href="#" className="text-white ">
                  Blogs
                </a>
              </li>
            </ul>
          </div>

          <div className="font-Roboto">
            <h4 className="text-[#E31837] font-[700] mb-4 text-[20px]">
              SUPPORT
            </h4>
            <ul className="space-y-4 font-[400] text-[14px]">
              <li>
                <a href="#" className="text-white">
                  Customer Support
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  YouTube
                </a>
              </li>
            </ul>
          </div>

          <div className="font-Roboto">
            <h4 className="text-[#E31837] font-[700] mb-4 text-[20px]">FAQ</h4>
            <ul className="space-y-4 font-[400] text-[14px]">
              <li>
                <a href="#" className="text-white ">
                  Account
                </a>
              </li>
              <li>
                <a href="#" className="text-white ">
                  Payment
                </a>
              </li>
              <li>
                <a href="#" className="text-white ">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-white ">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div className="font-Roboto">
            <h4 className="text-[#E31837] font-[700] mb-4 text-[20px]">
              CONTACT US
            </h4>
            <ul className="space-y-4 font-[400] text-[14px]">
              <li className="flex items-center text-white">
                <FaMapMarkerAlt className="mr-2" /> New Delhi, India.
              </li>
              <li className="flex items-center text-white">
                <FaEnvelope className="mr-2" /> info@maposer.com
              </li>
              <li className="flex items-center text-white">
                <FaPhoneAlt className="mr-2" /> +91 9958010814
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white pt-7 text-center text-white text-sm">
        © Copyright 2024, All Rights Reserved by Maposer
      </div>
    </div>
  );
};

export default Footer;
