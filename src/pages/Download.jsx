import React from "react";
import DashboardNavbar from "../Component/DashboardNavbar";
import { useState } from "react";
import { FaThumbtack, FaEllipsisV } from "react-icons/fa";

const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState("Today, 07 Jan 2025");

  const announcements = [
    {
      title: "Outing schedule for every department",
      time: "5 Minutes ago",
    },
    {
      title: "Meeting HR Department",
      time: "Yesterday, 12:30 PM",
    },
    {
      title: "IT Department needs two more talents for UX/UI Designer position",
      time: "Yesterday, 09:15 AM",
    },
  ];

  const dates = [
    "Today, 07 Jan 2025",
    "Yesterday, 06 Jan 2025",
    "Last Week, 31 Dec 2024",
  ];

  const upcomingShedule = [
    {
      title: "Review candidate applications",
      time: "5 Minutes ago",
    },
    {
      title: "Interview with candidates",
      time: "Yesterday, 12:30 PM",
    },
    {
      title: "Short meeting with product designer from IT Departement",
      time: "Yesterday, 09:15 AM",
    },
  ];

  return (
    <>
      <DashboardNavbar />
      <div className="grid md:grid-cols-5 gap-4 p-4">
        {/* Left Section */}
        <div className="col-span-4 md:col-span-3 border border-[#DDDDDD] rounded-md p-4">
          {/* Cards for Files in PDF */}
          <h2 className="text-[20px] font-[600] mb-6">Files in PDF</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-[#FFEAEA] rounded-md p-4">
              <p className="text-[#DD3333] font-bold">UI/UX Designer</p>
              <p className="text-[32px] font-bold">12</p>
              <p className="text-[#DD3333]">4 vacancy required</p>
            </div>
            <div className="bg-[#F0F8FF] rounded-md p-4">
              <p className="text-[#3333DD] font-bold">Web Developer</p>
              <p className="text-[32px] font-bold">10</p>
              <p className="text-[#3333DD]">8 vacancy required</p>
            </div>
            <div className="bg-[#FFF0F5] rounded-md p-4">
              <p className="text-[#DD33AA] font-bold">Digital Marketing</p>
              <p className="text-[32px] font-bold">04</p>
              <p className="text-[#DD33AA]">2 vacancy required</p>
            </div>
          </div>

          {/* Total Employees and Requests */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="border border-[#DDDDDD] rounded-md p-4 flex justify-between items-center">
              <div>
                <p className="font-bold">Total Employees</p>
                <p className="text-[32px] font-bold my-1">216</p>
                <p className="text-sm text-gray-500">120 Men</p>
                <p className="text-sm text-gray-500 mt-2">96 Women</p>
              </div>
              <div>
                <img src="/graph.png" alt="graph" />
                <p className="text-sm text-red-500 mt-2">+2% Past month</p>
              </div>
            </div>
            <div className="border border-[#DDDDDD] rounded-md p-4 flex justify-between items-center">
              <div>
                <p className="font-bold">Total Request</p>
                <p className="text-[32px] font-bold my-1">16</p>
                <p className="text-sm text-gray-500">6 Men</p>
                <p className="text-sm text-gray-500 mt-2">10 Women</p>
              </div>
              <div>
                <img src="/graph.png" alt="graph" />
                <p className="text-sm text-red-500 mt-2">+2% Past month</p>
              </div>
            </div>
          </div>

          {/* Announcements */}
          <div className="border border-[#DDDDDD] rounded-md p-4">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <p className="font-bold text-lg">Announcement</p>
              <select
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="text-sm border border-[#DDDDDD] rounded-md p-1"
              >
                {dates.map((date, index) => (
                  <option key={index} value={date}>
                    {date}
                  </option>
                ))}
              </select>
            </div>

            {/* Announcements */}
            <ul>
              {announcements.map((announcement, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center border mb-2 p-2 rounded-lg bg-[#FAFAFA] border-[#DDDDDD] py-3 last:border-none"
                >
                  <div>
                    <p className="font-medium">{announcement.title}</p>
                    <p className="text-sm text-gray-500">{announcement.time}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <FaThumbtack className="text-gray-500 cursor-pointer hover:text-black" />
                    <FaEllipsisV className="text-gray-500 cursor-pointer hover:text-black" />
                  </div>
                </li>
              ))}
            </ul>

            {/* Footer */}
            <p className="text-center text-red-500 font-medium mt-4 cursor-pointer hover:underline">
              See All Announcements
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-span-4 md:col-span-2 mx-auto space-y-8">
          {/* User Profile */}
          {/* Candidate Info */}
          <div className="bg-white rounded-lg border border-[#DDDDDD] p-6 relative pb-12">
            <div className="flex items-center flex-col justify-center">
              <img
                src="/dashboard_profile/img1.png"
                alt="Profile"
                className="w-20 h-20 rounded-full"
              />
              <div className="text-center mt-3">
                <h3 className="text-lg font-semibold">Jahan Ara</h3>
                <p className="text-gray-500">
                  UI/UX Designer at <strong>Google</strong>
                </p>
                <p className="text-gray-500">Manchester, UK</p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-2 bg-[#FFF4F4]">
              <p className="text-sm text-gray-600 flex justify-between">
                <strong>Interview Time:</strong>
                <span> 10m 25s</span>
              </p>
            </div>
          </div>

          {/* Upcoming Schedule */}
          <div className="border border-[#DDDDDD] rounded-md p-4">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <p className="font-bold text-lg">Upcoming Schedule</p>
              <select
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="text-sm border border-[#DDDDDD] rounded-md p-1"
              >
                {dates.map((date, index) => (
                  <option key={index} value={date}>
                    {date}
                  </option>
                ))}
              </select>
            </div>

            {/* Announcements */}
            <p className="my-3">Priority</p>
            <ul>
              {upcomingShedule.map((announcement, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center border mb-2 p-2 rounded-lg bg-[#FAFAFA] border-[#DDDDDD] py-3 last:border-none"
                >
                  <div>
                    <p className="font-medium">{announcement.title}</p>
                    <p className="text-sm text-gray-500">{announcement.time}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <FaThumbtack className="text-gray-500 cursor-pointer hover:text-black" />
                    <FaEllipsisV className="text-gray-500 cursor-pointer hover:text-black" />
                  </div>
                </li>
              ))}
            </ul>

            {/* Footer */}
            <p className="text-center text-red-500 font-medium mt-4 cursor-pointer hover:underline">
              Create a New Schedule{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
