import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverGroup,
  Transition,
} from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";

export default function DashboardNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const notifications = [
    {
      id: 1,
      sender: "Jan Mayer",
      message: "invited you to interview with Nomad",
      status: "New",
      time: "12 mins ago",
      img: "https://s3-alpha-sig.figma.com/img/dd2a/0ce2/931952f6be080a1ad0a1a434fdbdc7e9?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kOjJZ9nS~MSfR~g-l6Di3NUoSDXLWBmEOTTMujxl9-F-GKaBcW8bpX0bC8CO3RzRU4Snxah7M86ZTVbqjpCsOGFCs8TgGrkEIToLG-YsPZWSDX64XoX2K6zo2eF0-ayitePWhrFOFXbrdmZuhJqy65aHqV7xJ3b7nroTOgjJicsxYQC~oxeMBKjiCl2vX8vqHZIAQ27~hdtUZfuJt~d6iJopGTCmzg0WGvf~f57SQ2mq2JK0aR8W-f0Remm~2BNb4VCLU1m2G3waholhGori53BPALLTGWhXSZ5XJWV09lRkrUIqpaiUYr6VUVQgTK02O-PkwfYkmysxCnu~8KSSWQ__",
    },
    {
      id: 2,
      sender: "Jana Alicia",
      message: "from Udacity updated your job application status",
      status: "Shortlisted",
      time: "3 days ago",
      img: "https://s3-alpha-sig.figma.com/img/610f/0a08/7723ad2ebfdb9ddcbb821785b02adbc1?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mATgT72qdKClx-Uh9cJT8wCaSFNud31N1m5ERjRZqw3xf78QsIKT5M7I7bAmHKiJJ8UfNfGVg5-2Aq1LMh8h3LIlXYPlRlQfntUXFoNHfVFS~Tit1iVSilAdQDXMto0G-NE8YlgySjbGyO4Odv1PhMB2Tbcfb-lGP5khTL1N6UQO5o9ogcKocHGn2PtT2Z7~IQexT3wCnje2uvMIO~ApAiQ00Z6UcTKRZ7Blzl1sQumQcp-y6m0m1XDG15rJeDgx8t2co6b1~FDWIkOlYHlymdqw4eWZeXdztX2L4jTF~uArDIT3rwldRG4saRYCFFWRWhkDbEj4lO1z2WdfTIWL-A__",
    },
    {
      id: 3,
      sender: "Ally Wales",
      message: "from Digital Ocean sent you an interview invitation",
      details: {
        title: "Interview - Jake Gyll",
        role: "Social Media Manager Role",
        date: "Mon, 20 July 2021",
        time: "12 PM - 12:30 PM",
        email: "jakegyll@email.com",
      },
      time: "14 July 2021 · 3:26 PM",
      img: "https://s3-alpha-sig.figma.com/img/0cc0/cb4b/dc7c7038cbe6ecbcb6471484d9a5714f?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nqn4Gk3lDz-HBpYXNHypFVS5vyHZUjS8KMNKNBE6i3UqxocrgAd32lDS8faFuw9Dzi0mdEgY2zgT-TFO9O7GWUx5jL9RSW4b-hxEWtrrPrT~-5~ziEmnMLI1h8BHsD67tceh-YDHBxjeN-JVsBKLdjrXHXZs8QcWlu7dPUG0wHbqXu-o-mm3Gq4~Cu5BnFpIxf1nW5McZOQiTg2EImaLDRGrV0Y2-qA6PqESKZshvbpQozIL6OfjFdvvG25k2FtbjGMvAS1c1feTS6CcbbNEgktBe3Kl28hdM142ecKmGN18IXLnL5-P8XNGNU~cqLHMa4q~SqZF4rQMxeWZnzanQQ__",
    },
  ];

  return (
    <div className="bg-white top-0 left-0 right-0 z-50">
      <div className="w-full mx-auto shadow-sm bg-white">
        <nav
          aria-label="Global"
          className="mx-auto flex max-w-[1400px] items-center justify-between p-3 lg:px-4"
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
          <PopoverGroup className="hidden lg:flex lg:gap-x-12">
            <Popover className="relative">
              <Popover.Button className="flex items-center text-[18px] font-poppins font-[400] leading-6 text-[#012169]">
                Start Screening
              </Popover.Button>
            </Popover>
            <Popover className="relative">
              <Popover.Button className="flex items-center text-[18px] font-poppins font-[400] leading-6 text-[#012169]">
                Report
              </Popover.Button>
            </Popover>
            <Popover className="relative">
              <Popover.Button className="flex items-center text-[18px] font-poppins font-[400] leading-6 text-[#012169]">
                Download
              </Popover.Button>
            </Popover>
          </PopoverGroup>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end md:mr-10">
            <Link
              to="/"
              className="text-lg font-bold leading-6 text-[#4640DE] border p-2 px-5 rounded-lg border-black "
            >
              Back To Home
            </Link>
          </div>

          {/* Notification Popover */}
          <Popover className="relative">
            <Popover.Button className="focus:outline-none">
              <IoNotifications size={24} className="cursor-pointer" />
            </Popover.Button>

            <Transition
              as={React.Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-2"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-2"
            >
              <Popover.Panel className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-bold text-gray-800">
                      Notifications
                    </h2>
                    <button className="text-blue-600 text-sm">
                      Mark all as read
                    </button>
                  </div>
                  <ul className="space-y-4">
                    {notifications.map((notification) => (
                      <li
                        key={notification.id}
                        className="flex space-x-3 border-b pb-3"
                      >
                        <img
                          src={notification.img}
                          alt={notification.sender}
                          className="h-10 w-10 rounded-full object-cover"
                        />
                        <div>
                          <p className="text-sm text-gray-700">
                            <span className="font-medium">
                              {notification.sender}
                            </span>{" "}
                            {notification.message}
                          </p>
                          {notification.status && (
                            <span className="text-xs font-medium text-white bg-green-500 px-2 py-0.5 rounded ">
                              {notification.status}
                            </span>
                          )}
                          {notification.details && (
                            <div className="mt-2 bg-gray-100 p-3 rounded">
                              <p className="text-sm font-semibold">
                                {notification.details.title}
                              </p>
                              <p className="text-xs text-gray-500">
                                {notification.details.role}
                              </p>
                              <p className="text-xs text-gray-500">
                                {notification.details.date} ·{" "}
                                {notification.details.time}
                              </p>
                              <p className="text-xs text-gray-500">
                                {notification.details.email}
                              </p>
                            </div>
                          )}
                          <p className="text-xs text-gray-500 mt-1">
                            {notification.time}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
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
