import { Dialog, DialogPanel, Popover, PopoverGroup } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white top-0 left-0 right-0 z-50">
      <div className="bg-red-600 text-white py-2">
        <div className="max-w-7xl mx-auto flex justify-between md:flex-row flex-row items-center px-4">
          {/* Left side - Phone and Email with icons */}
          <div className="flex space-x-6 md:flex-row flex-col text-[14px] font-[400] font-Roboto">
            <div className="flex items-center space-x-2">
              <FaPhoneAlt className="text-white" />
              <span>+1 (234) 567-890</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-white" />
              <span>contact@domain.com</span>
            </div>
          </div>

          {/* Right side - Social media icons */}
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/landing/navicon1.png" alt="x" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/landing/navicon2.png" alt="linkedIn" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/landing/navicon3.png" alt="youtube" />
            </a>
          </div>
        </div>
      </div>

      <div className="w-full mx-auto shadow-sm bg-white">
        <nav
          aria-label="Global"
          className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-4"
        >
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt="Logo"
                src="/landing/logo.png"
                className="h-14 w-auto rounded-full"
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <PopoverGroup className="hidden lg:flex lg:gap-x-12 text-[#012169] text-[18px] font-[400] font-Roboto ">
            <Popover className="relative">
              <Popover.Button className="flex items-center text-[18px] font-poppins font-[400] leading-6 text-[#012169]">
                Industry{" "}
                <ChevronDownIcon className="ml-1 h-5 w-5 text-gray-500" />
              </Popover.Button>
              <Popover.Panel className="absolute z-10 mt-2 w-48 bg-white shadow-lg rounded-md transition-opacity duration-200 ease-in-out opacity-100 transform scale-95 group-hover:scale-100">
                <Link
                  to="/industry/subpage1"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  IT Sector
                </Link>
                <Link
                  to="/industry/subpage2"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Health Sector
                </Link>
                <Link
                  to="/industry/subpage2"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Finance
                </Link>
                <Link
                  to="/industry/subpage2"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Development
                </Link>
                <Link
                  to="/industry/subpage2"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Cyber Security
                </Link>
                <Link
                  to="/industry/subpage2"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Language Translation
                </Link>
              </Popover.Panel>
            </Popover>
            <Popover className="relative">
              <Popover.Button className="flex items-center text-[18px] font-poppins font-[400] leading-6 text-[#012169]">
                Product{" "}
                <ChevronDownIcon className="ml-1 h-5 w-5 text-gray-500" />
              </Popover.Button>
              <Popover.Panel className="absolute z-10 mt-2 w-48 bg-white shadow-lg rounded-md transition-opacity duration-200 ease-in-out opacity-100 transform scale-95 group-hover:scale-100">
                <Link
                  to="/product/subpage1"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Subpage 1
                </Link>
                <Link
                  to="/product/subpage2"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Subpage 2
                </Link>
                <Link
                  to="/product/subpage2"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Subpage 3
                </Link>
              </Popover.Panel>
            </Popover>
            <Popover className="relative">
              <Popover.Button className="flex items-center text-[18px] font-poppins font-[400] leading-6 text-[#012169]">
                Pricing{" "}
                <ChevronDownIcon className="ml-1 h-5 w-5 text-gray-500" />
              </Popover.Button>
              <Popover.Panel className="absolute z-10 mt-2 w-48 bg-white shadow-lg rounded-md transition-opacity duration-200 ease-in-out opacity-100 transform scale-95 group-hover:scale-100">
                <Link
                  to="/pricing/subpage1"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Monthly
                </Link>
                <Link
                  to="/pricing/subpage2"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Quarterly
                </Link>

                <Link
                  to="/pricing/subpage2"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Yearly
                </Link>
              </Popover.Panel>
            </Popover>
            <Popover className="relative">
              <Popover.Button className="flex items-center text-[18px] font-poppins font-[400] leading-6 text-[#012169]">
                Company{" "}
                <ChevronDownIcon className="ml-1 h-5 w-5 text-gray-500" />
              </Popover.Button>
              <Popover.Panel className="absolute z-10 mt-2 w-48 bg-white shadow-lg rounded-md transition-opacity duration-200 ease-in-out opacity-100 transform scale-95 group-hover:scale-100">
                <Link
                  to="/pricing/subpage1"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  About
                </Link>
                <Link
                  to="/pricing/subpage2"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Career
                </Link>

                <Link
                  to="/pricing/subpage2"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Partner
                </Link>

                <Link
                  to="/pricing/subpage2"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Contact Us
                </Link>

                <Link
                  to="/pricing/subpage2"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Blog
                </Link>
              </Popover.Panel>
            </Popover>
            <Link
              to="/about"
              className="flex items-center text-[18px] font-poppins font-[400] leading-6 text-[#012169] "
            >
              Testimonial
            </Link>
          </PopoverGroup>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              to="/contact"
              className=" text-[#012169] text-[16px] font-Roboto font-[500] border rounded-lg border-[#012169] w-[118px] h-[46px] flex justify-center items-center"
            >
              Login
            </Link>
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed z-50" />
          <DialogPanel className="fixed inset-y-1 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link
                to="/"
                className="-m-1.5 p-1.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">SecWebXperts</span>
                <img alt="" src="/logo.png" className="h-8 w-auto" />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Link
                    to="/"
                    className="-mx-3 block rounded-lg px-3 py-2 text-lg font-bold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    to="/about"
                    className="-mx-3 block rounded-lg px-3 py-2 text-lg font-bold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                  {/* Repeat links for mobile view */}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </div>
    </div>
  );
}
