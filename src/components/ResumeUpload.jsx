import React from "react";

export default function ResumeUpload() {
  return (
    <div className="font-spaceGrotesk bg-[#F4F6FB] ">
      <div className="max-w-7xl mx-auto p-6 md:p-10 flex flex-col md:flex-row items-center justify-between lg:gap-10 !py-20">
        {/* Left Section */}
        <div className="lg:w-1/2">
          <h1 className="text-3xl md:text-[72px] font-bold font-spaceGrotesk leading-[82px] text-[#1C1C1C] mb-6">
            Upload your <br /> resume to get <br /> the best
          </h1>
          <p className="text-[#000000] text-[20px] font-[400] font-spaceGrotesk mb-7 leading-[25.72px]">
            Post your resume on Career today to ensure recruiters and hiring
            managers can easily find you.
          </p>
          <h2 className="text-[20px] font-[700] font-spaceGrotesk text-[#110B08] mb-4">
            By uploading your resume, you’ll also:
          </h2>
          <ul className="list-disc list-inside text-[#574F4A] text-[18px] font-[400] font-spaceGrotesk space-y-3">
            <li>Receive recommended jobs in your inbox</li>
            <li>Be able to easily apply for thousands of jobs</li>
            <li>Receive a free professional assessment of your resume</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="bg-white rounded-lg p-6 mt-10 lg:mt-0 lg:min-w-[470px] h-[630px]">
          <h3 className="-[#110B08] text-[20px] font-[700] font-spaceGrotesk  mb-4">
            Add files or drop files here
          </h3>
          <div className="bg-[#ACCAFF] flex items-center justify-center rounded-md h-[236px] mb-6">
            <img src="/cv/cloud-icon.png" alt="img" />
          </div>
          <h4 className="text-[#110B08] text-[20px] font-[700] font-spaceGrotesk mb-8">
            Upload from
          </h4>
          <div className="space-y-4">
            <button
              className="w-full flex items-center justify-between px-4 h-[60px] border border-[#110B08] text-[#574F4A] font-[400] font-spaceGrotesk rounded-lg transition"
              aria-label="Upload from Google Drive"
            >
              Upload from Google Drive
              <img src="/cv/drive.png" alt="drive" />
            </button>
            <button
              className="w-full flex items-center justify-between px-4 h-[60px] border border-[#110B08] text-[#574F4A] font-[400] font-spaceGrotesk rounded-lg transition"
              aria-label="Upload from Dropbox"
            >
              Upload from Dropbox
              <img src="/cv/dropbox.png" alt="dropbox" />
            </button>
            <button
              className="w-full flex items-center justify-between px-4 h-[60px] border border-[#110B08] text-[#574F4A] font-[400] font-spaceGrotesk rounded-lg transition"
              aria-label="Upload from Microsoft Onedrive"
            >
              Upload from Microsoft Onedrive
              <img src="/cv/onedrive.png" alt="onedrive" />
            </button>
          </div>
        </div>
      </div>
      {/* end section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white py-16 px-4 md:px-8"
        style={{
          backgroundImage: "url('/product/bg.png')", // Replace with your actual image path
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center space-y-6 md:space-y-0 text-center">
          <h1 className="text-3xl md:text-[52px] font-bold font-spaceGrotesk leading-[66.35px] mb-8">
            Don’t have any resume? Make <br /> your resume now
          </h1>
          <div
            className="bg-white p-[2px] rounded-[10px]"
            style={{
              boxShadow: " 0px 4px 2px 0px #00000040",
            }}
          >
            <button className="bg-[#BACDD1] text-[#032170] px-4 py-2 rounded-[10px] text-[20px] font-[700] font-spaceGrotesk w-[246px] h-[65px]">
              Make My CV
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
