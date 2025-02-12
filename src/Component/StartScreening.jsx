import React, { useState } from "react";
import DashboardNavbar from "./DashboardNavbar";

const StartScreening = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [uploadedImages, setUploadedImages] = useState([]); // Array to store uploaded images

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleImageUpload = (event) => {
    if (event.target.files && event.target.files[0]) {
      const imageUrl = URL.createObjectURL(event.target.files[0]);
      setUploadedImages([...uploadedImages, imageUrl]); // Add new image to the array
      setIsPopupOpen(false); // Close the popup after upload
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <DashboardNavbar />
      <div className="max-w-[1400px] mx-auto px-4 pt-10">
        {/* User Info Section */}
        <div className="flex items-center space-x-4 justify-center">
          <img
            src="/dashboard_profile/img1.png"
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover"
          />
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Jahan Ara</h1>
            <p className="text-sm text-gray-500">
              UI/UX Designer at{" "}
              <span className="font-medium text-gray-800">Google</span>
            </p>
            <p className="text-sm text-gray-500">📍 Manchester, UK</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {uploadedImages.map((image, index) => (
            <div
              key={index}
              className="bg-white border rounded-lg p-6 shadow-sm flex flex-col items-center text-center"
            >
              <img
                src={image}
                alt={`Uploaded ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg"
              />
              <h2 className="text-lg font-semibold text-gray-800 mt-4">
                Uploaded Shot {index + 1}
              </h2>
              <p className="text-sm text-gray-500 mt-2">
                Share more work to get feedback and connect with the community.
              </p>
            </div>
          ))}

          {/* Upload Card */}
          {uploadedImages.length < 3 && (
            <div className="bg-white border rounded-lg p-6 shadow-sm flex flex-col items-center justify-center text-center">
              <img src="/video.png" alt="record" />
              <h2 className="text-[30px] font-[700] mt-4">Upload Your Shot</h2>
              <p className="text-sm text-gray-500 mt-2">
                Show off your work. Get feedback, likes and be a part of a
                growing community.
              </p>
              <button
                onClick={handleOpenPopup}
                className="mt-4 px-4 py-2 bg-[#012169] text-white rounded-lg text-sm"
              >
                Select File
              </button>
            </div>
          )}

          {/* Placeholder for remaining slots */}
          {uploadedImages.length < 3 &&
            new Array(3 - uploadedImages.length - 1)
              .fill(null)
              .map((_, index) => (
                <div
                  key={`placeholder-${index}`}
                  className="bg-gray-100 rounded-lg h-72"
                ></div>
              ))}
        </div>
      </div>

      {/* Popup Modal */}
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 w-[400px] shadow-lg relative">
            <button
              onClick={handleClosePopup}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              &times;
            </button>
            <h2 className="text-lg font-semibold text-gray-800">
              Upload an Image
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              For best results, upload an image in JPG or PNG format.
            </p>
            <div className="mt-4 border-dashed border-2 border-gray-300 rounded-lg p-6 text-center">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                className="cursor-pointer flex flex-col items-center"
              >
                <img src="/video.png" alt="record" />

                <p className="text-sm text-gray-500 mt-2">
                  Drag and drop image files to upload
                </p>
                <button
                  onClick={() => document.getElementById("file-upload").click()}
                  className="mt-4 px-4 py-2 bg-gray-200 rounded-lg text-sm"
                >
                  Upload
                </button>
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StartScreening;
