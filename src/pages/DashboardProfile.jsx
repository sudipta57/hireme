import React from "react";
import { FaEdit, FaLanguage, FaPhoneAlt, FaPlus } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import DashboardNavbar from "../Component/DashboardNavbar";
const portfolios = [
  {
    image: "/dashboard_profile/portfolio1.png", // Replace with actual image URL
    title: "Clinically - clinic & health care website",
  },
  {
    image: "/dashboard_profile/portfolio2.png", // Replace with actual image URL
    title: "Growthly - SaaS Analytics & Sales Website",
  },
  {
    image: "/dashboard_profile/portfolio3.png", // Replace with actual image URL
    title: "Planna - Project Management App",
  },
  {
    image: "/dashboard_profile/portfolio4.png", // Replace with actual image URL
    title: "Funiro - Landing Page for furniture shop",
  },
];
const skills = [
  "Communication",
  "Analytics",
  "Facebook Ads",
  "Content Planning",
  "Community Manager",
];
const DashboardProfile = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar */}
      <DashboardNavbar />
      {/* Profile Section */}
      <main className="container mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          {/* Left Column */}
          <div className="lg:col-span-2">
            {/* About Me */}
            <div className="bg-white shadow rounded-lg ">
              <div className="relative ">
                <img
                  src="/dashboard_profile/bg1.png"
                  alt="profilebg"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="absolute bottom-[-40px] left-0">
                  <img
                    src="/dashboard_profile/img1.png"
                    alt="Profile"
                    className="object-cover"
                  />
                </div>
                <div className="absolute top-5 right-5">
                  <img
                    src="/dashboard_profile/edit_icon.png"
                    alt="Profile"
                    className="rounded-full object-cover bg-white"
                  />
                </div>
              </div>
              {/* profile info */}
              <div className="flex items-center justify-between p-6 max-w-[90%] ml-auto">
                <div className="flex flex-col md:flex-row items-center md:space-x-6 mt-10 md:mt-0">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">
                      Jahan Ara
                    </h1>
                    <p className="text-gray-600">UI/UX Designer at Google</p>
                    <p className="text-gray-500">📍 Manchester, UK</p>
                    <button className="mt-2 bg-green-100 text-green-600 md:px-4 my-1 md:py-2 rounded text-sm">
                      OPEN FOR OPPORTUNITIES
                    </button>
                  </div>
                </div>
                <button className="border border-gray-300 text-gray-600 md:px-4 md:py-2 rounded">
                  Edit Profile
                </button>
              </div>
            </div>
            <section className="bg-white shadow rounded-lg p-6 mt-6 relative">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  About Me
                </h2>
                <p className="text-gray-600">
                  I'm a product designer + filmmaker currently working remotely
                  at Twitter from beautiful Manchester, United Kingdom. I'm
                  passionate about designing digital products that have a
                  positive impact on the world.
                </p>
                <p className="mt-3 text-gray-600">
                  For 10 years, I’ve specialised in interface, experience &
                  interaction design as well as working in user research and
                  product strategy for product agencies, big tech companies &
                  start-ups.
                </p>
              </div>
              <div className="absolute top-5 right-5">
                <img
                  src="/dashboard_profile/edit_icon.png"
                  alt="Profile"
                  className="object-cover"
                />
              </div>
            </section>

            {/* Experiences */}
            <section className="bg-white shadow rounded-lg p-6 mt-6 relative">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Experiences
                </h2>
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row items-start space-x-4 border-b mb-11 pb-11">
                    <img src="/dashboard_profile/exp1.png" alt="Company Logo" />
                    <div className="relative">
                      <h3 className="text-lg font-semibold text-gray-900">
                        Product Designer
                      </h3>
                      <p className="text-[16px] text-[#515B6F] font-[400] my-2">
                        <span className="text-[#25324B] font-[500]">
                          Google
                        </span>{" "}
                        · Full-Time · Jun 2023 - Present (1y 6m)
                      </p>
                      <p className="text-[#7C8493] text-[16px] font-[400]">
                        Manchester, UK
                      </p>
                      <p className="text-[#25324B] mt-2">
                        Created and executed social media plan for 10 brands
                        utilizing multiple features and content types to
                        increase brand outreach, engagement, and leads.
                      </p>
                      <div className="absolute top-0 right-0">
                        <img
                          src="/dashboard_profile/edit_icon.png"
                          alt="edit"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row items-start space-x-4 border-b mb-11 pb-11">
                    <img src="/dashboard_profile/exp2.png" alt="Company Logo" />
                    <div className="relative">
                      <h3 className="text-lg font-semibold text-gray-900">
                        Product Designer
                      </h3>
                      <p className="text-[16px] text-[#515B6F] font-[400] my-2">
                        <span className="text-[#25324B] font-[500]">
                          Google
                        </span>{" "}
                        · Full-Time · Jun 2023 - Present (1y 6m)
                      </p>
                      <p className="text-[#7C8493] text-[16px] font-[400]">
                        Manchester, UK
                      </p>
                      <p className="text-[#25324B] mt-2">
                        Created and executed social media plan for 10 brands
                        utilizing multiple features and content types to
                        increase brand outreach, engagement, and leads.
                      </p>
                      <div className="absolute top-0 right-0">
                        <img
                          src="/dashboard_profile/edit_icon.png"
                          alt="edit"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-[#4640DE] text-[16px] font-[600] text-center cursor-pointer">
                      Show 3 more experiences
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute top-5 right-5">
                <img
                  src="/dashboard_profile/add_icon.png"
                  alt="add"
                  className="rounded-full object-cover mb-4"
                />
              </div>
            </section>

            {/* Educations */}
            <section className="bg-white shadow rounded-lg p-6 mt-6 relative">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Educations
                </h2>
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row items-start space-x-4 border-b mb-11 pb-11">
                    <img src="/dashboard_profile/edu1.png" alt="Company Logo" />

                    <div className="relative">
                      <h3 className="text-lg font-semibold text-gray-900">
                        Harvard University
                      </h3>
                      <p className="text-[16px] text-[#515B6F] my-2">
                        Postgraduate degree, Applied Psychology
                      </p>
                      <p className="my-1 text-[#7C8493]">2012 - 2014</p>
                      <p className="text-[#25324B] mt-2">
                        As an Applied Psychologist in the field of Consumer and
                        Society, I am specialized in creating business
                        opportunities by observing, analysing, researching and
                        changing behaviour.
                      </p>
                      <div className="absolute top-0 right-0">
                        <img
                          src="/dashboard_profile/edit_icon.png"
                          alt="edit"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row items-start space-x-4 border-b mb-11 pb-11">
                    <img src="/dashboard_profile/edu2.png" alt="Company Logo" />
                    <div className="relative">
                      <h3 className="text-lg font-semibold text-gray-900">
                        University of Toronto
                      </h3>
                      <p className="text-[16px] text-[#515B6F] my-2">
                        Postgraduate degree, Applied Psychology
                      </p>
                      <p className="my-1 text-[#7C8493]">2012 - 2014</p>
                      <p className="text-[#25324B] mt-2">
                        As an Applied Psychologist in the field of Consumer and
                        Society, I am specialized in creating business
                        opportunities by observing, analysing, researching and
                        changing behaviour.
                      </p>
                      <div className="absolute top-0 right-0">
                        <img
                          src="/dashboard_profile/edit_icon.png"
                          alt="edit"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-[#4640DE] text-[16px] font-[600] text-center cursor-pointer">
                      Show 3 more experiences
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute top-5 right-5">
                <img
                  src="/dashboard_profile/add_icon.png"
                  alt="add"
                  className="rounded-full object-cover mb-4"
                />
              </div>
            </section>
            <div className="bg-white shadow-md rounded-lg p-6 mt-6">
              {/* Title */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Skills</h3>
                <div className="flex space-x-2">
                  <button
                    className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200"
                    title="Add Skill"
                  >
                    <FaPlus className="text-blue-600" />
                  </button>
                  <button
                    className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200"
                    title="Edit Skills"
                  >
                    <FaEdit className="text-blue-600" />
                  </button>
                </div>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-[#F1F1FF] text-[#4640DE] text-sm font-medium rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white shadow rounded-lg p-6 mt-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-900">
                  Portfolios
                </h2>
                <img
                  src="/dashboard_profile/add_icon.png"
                  alt="add"
                  className="cursor-pointer rounded-full"
                />
              </div>
              <div className="overflow-x-auto">
                <div className="flex space-x-6">
                  {portfolios.map((portfolio, index) => (
                    <div key={index} className="min-w-[200px]">
                      <img
                        src={portfolio.image}
                        alt={portfolio.title}
                        className="w-full h-32 object-cover rounded-lg mb-2"
                      />
                      <p className="text-sm font-medium text-gray-800">
                        {portfolio.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Additional Details */}
            <section className="bg-white shadow rounded-lg p-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Additional Details
                </h2>
                <img
                  src="/dashboard_profile/edit_icon.png"
                  alt="edit"
                  className="object-cover"
                />
              </div>
              <div>
                <div className="flex items-center space-x-4 my-2">
                  <MdEmail color="#7C8493" />
                  <div>
                    <p className="text-[#7C8493]">Email</p>
                    <p className="text-[16px] font-[400]">
                      shkhjahan@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 my-2">
                  <FaPhoneAlt color="#7C8493" />
                  <div>
                    <p className="text-[#7C8493]">Phone</p>
                    <p className="text-[16px] font-[400]">+91 9102026620</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 my-2">
                  <FaLanguage color="#7C8493" />
                  <div>
                    <p className="text-[#7C8493]">Languages</p>
                    <p className="text-[16px] font-[400]">English, Hindi</p>
                  </div>
                </div>{" "}
              </div>
            </section>

            {/* Social Links */}
            <section className="bg-white shadow rounded-lg p-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Social Links
                </h2>
                <img
                  src="/dashboard_profile/edit_icon.png"
                  alt="edit"
                  className="object-cover"
                />
              </div>
              <div>
                <div className="flex items-center space-x-4 my-2">
                  <MdEmail color="#7C8493" />
                  <div>
                    <p className="text-[#7C8493]">Instagram</p>
                    <a className="text-[16px] font-[400] text-[#4640DE]">
                      instagram.com/jahan{" "}
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4 my-2">
                  <FaPhoneAlt color="#7C8493" />
                  <div>
                    <p className="text-[#7C8493]">Twitter</p>
                    <a className="text-[16px] font-[400] text-[#4640DE]">
                      twitter.com/jahan
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4 my-2">
                  <FaLanguage color="#7C8493" />
                  <div>
                    <p className="text-[#7C8493]">Website</p>
                    <a className="text-[16px] font-[400] text-[#4640DE]">
                      www.jahan.com
                    </a>
                  </div>
                </div>{" "}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardProfile;
