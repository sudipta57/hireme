import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="bg-[#032170] text-white py-12 px-14">
        <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-6 gap-16">
          {/* Left Section */}
          <div className="md:col-span-2">
            <h1 className="text-4xl font-bold mb-4">
              <img src="/home/footerLogo.png" />
            </h1>
            <p className="font-spaceGrotesk text-[24px] font-[400] leading-[29.06px] mb-6">
              Our platform is designed to streamline and simplify your hiring
              journey, allowing you to recruit with ease.
            </p>
            <address className="not-italic mb-4 font-spaceGrotesk text-[24px] font-[400] leading-[29.06px]">
              21/25 Broad Street, Lagos Island, Lagos <br />
              <a href="mailto:comms@hireme.net" className="underline">
                comms@hireme.net
              </a>
            </address>
            {/* Social Icons */}
            <div className="flex space-x-4">
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="#" aria-label="LinkedIn">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="#" aria-label="Twitter">
                <i className="fab fa-twitter text-xl"></i>
              </a>
            </div>
          </div>

          {/* Right Sections */}
          <div>
            <h2 className=" mb-4 font-spaceGrotesk text-[28px] font-bold leading-[33.91px]">
              Our Products
            </h2>
            <ul className="font-spaceGrotesk font-[400] leading-[55.22px] text-[23px]">
              <li>
                <a href="#">For Employers</a>
              </li>
              <li>
                <a href="#">For Candidates</a>
              </li>
              <li>
                <a href="#">For Institutions</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className=" mb-4 font-spaceGrotesk text-[28px] font-bold leading-[33.91px]">
              Our Company
            </h2>
            <ul className="font-spaceGrotesk font-[400] leading-[55.22px] text-[23px]">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Leadership</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Security</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className=" mb-4 font-spaceGrotesk text-[28px] font-bold leading-[33.91px]">
              Resources
            </h2>
            <ul className="font-spaceGrotesk font-[400] leading-[55.22px] text-[23px]">
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">News</a>
              </li>
              <li>
                <a href="#">Events</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className=" mb-4 font-spaceGrotesk text-[28px] font-bold leading-[33.91px]">
              Support
            </h2>
            <ul className="font-spaceGrotesk font-[400] leading-[55.22px] text-[23px]">
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Newsletter</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <section className="bg-[#001754] item-center p-5 flex items-center justify-center h-[148px]">
        <h4 className="text-white text-[36px] font-bold font-spaceGrotesk">
          © 2023 HireMe. All Rights Reserved
        </h4>
      </section>
    </div>
  );
}
