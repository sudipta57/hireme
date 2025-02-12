import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get the current pathname

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => location.pathname === path; // Check if the current path matches

  return (
    <div className="bg-[#F4F6FB]">
      <nav className=" flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link to={"/"}>
          <div className="text-2xl font-bold">
            <img src="/home/navLogo.png" alt="Logo" />
          </div>
        </Link>

        {/* Menu Icon */}
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        {/* Links */}
        <ul
          className={`hidden md:flex flex-col md:flex-row space-x-16 font-spaceGrotesk text-gray-700`}
        >
          <Link
            to="/our-product"
            className={`cursor-pointer text-[20px] font-[400] font-spaceGrotesk ${
              isActive("/our-product")
                ? "text-[#032170] font-bold"
                : "text-[#000000]"
            }`}
          >
            Products
          </Link>
          <Link
            to="/our-company"
            className={`cursor-pointer text-[20px] font-[400] font-spaceGrotesk ${
              isActive("/our-company")
                ? "text-[#032170] font-bold"
                : "text-[#000000]"
            }`}
          >
            Company
          </Link>
          <Link
            to="/our-resume"
            className={`cursor-pointer text-[20px] font-[400] font-spaceGrotesk ${
              isActive("/our-resume")
                ? "text-[#032170] font-bold"
                : "text-[#000000]"
            }`}
          >
            Upload Cv
          </Link>
          <Link
            to="/our-price"
            className={`cursor-pointer text-[20px] font-[400] font-spaceGrotesk ${
              isActive("/our-price")
                ? "text-[#032170] font-bold"
                : "text-[#000000]"
            }`}
          >
            Pricing
          </Link>
          <Link
            to="/contact-us"
            className={`cursor-pointer text-[20px] font-[400] font-spaceGrotesk ${
              isActive("/contact-us")
                ? "text-[#032170] font-bold"
                : "text-[#000000]"
            }`}
          >
            Contact
          </Link>
        </ul>

        {/* Login and Get Started */}
        <div className="hidden md:flex font-spaceGrotesk items-center space-x-10">
          <Link
            to={"/login"}
            className="text-[#000000] text-[24px] font-[500] font-spaceGrotesk"
          >
            Login
          </Link>
          <div
            className="bg-white p-1 rounded-[10px]"
            style={{
              boxShadow: "0px 4px 2px 0px #00000040",
            }}
          >
            <Link to={"/register"}>
              <button className="bg-[#032170] text-white px-4 py-2 rounded-[10px] text-[20px] font-[700] font-spaceGrotesk w-[194px] h-[65px]">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? "block my-6" : "hidden"}`}>
        <ul className="flex flex-col items-center space-y-4 font-spaceGrotesk text-gray-700">
          <Link
            to="/our-product"
            className={`hover:text-blue-600 cursor-pointer ${
              isActive("/our-product")
                ? "text-blue-600 font-bold"
                : "text-gray-700"
            }`}
          >
            Products
          </Link>
          <Link
            to="/our-company"
            className={`hover:text-blue-600 cursor-pointer ${
              isActive("/our-company")
                ? "text-blue-600 font-bold"
                : "text-gray-700"
            }`}
          >
            Company
          </Link>
          <Link
            to="/our-resume"
            className={`hover:text-blue-600 cursor-pointer ${
              isActive("/our-resume")
                ? "text-blue-600 font-bold"
                : "text-gray-700"
            }`}
          >
            Upload Cv
          </Link>
          <Link
            to="/our-price"
            className={`hover:text-blue-600 cursor-pointer ${
              isActive("/our-price")
                ? "text-blue-600 font-bold"
                : "text-gray-700"
            }`}
          >
            Pricing
          </Link>
          <Link
            to="/contact-us"
            className={`hover:text-blue-600 cursor-pointer ${
              isActive("/contact-us")
                ? "text-blue-600 font-bold"
                : "text-gray-700"
            }`}
          >
            Contact
          </Link>
          <Link
            to="/login"
            className="hover:text-blue-600 cursor-pointer text-gray-700"
          >
            Login
          </Link>
          <li className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer">
            Get Started
          </li>
        </ul>
      </div>
    </div>
  );
}
