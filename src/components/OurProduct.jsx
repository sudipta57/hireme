import React from "react";

export default function OurProduct() {
  const productData = [
    {
      title: "Recruitment Solution",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor...",
      image: "/product/product1.png", // Replace with the actual image path
      background: "/product/bg1.png",
    },
    {
      title: "Personnel Outsourcing",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor...",
      image: "/product/product1.png",
      background: "/product/bg2.png",
    },
    {
      title: "HR Consulting",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor...",
      image: "/product/product3.png",
      background: "/product/bg3.png",
    },
    {
      title: "Leadership Training",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor...",
      image: "/product/product4.png",
      background: "/product/bg4.png",
    },
    {
      title: "Improving Resource",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor...",
      image: "/product/product5.png",
      background: "/product/bg5.png",
    },
    {
      title: "Employee Training",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor...",
      image: "/product/product6.png",
      background: "/product/bg6.png",
    },
  ];
  return (
    <div className="font-spaceGrotesk">
      <section className="py-16 bg-[#F4F6FB]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-[#032170] text-[25px] font-bold font-spaceGrotesk leading-[31.9px] mb-2">
            Our Products
          </h2>
          <h1 className="text-[#1C1C1C] text-[40px] leading-[52px] mt-10 font-bold mb-20">
            A Leading Global Provider <br /> Of Recruitment
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productData.map((product, index) => (
              <div
                key={index}
                className="bg-transparent rounded-[20px] max-w-[394px] h-[507px] text-left relative flex flex-col justify-between items-center"
                style={{
                  boxShadow: " 0px 3.84px 9.61px 0px #0000001A",
                }}
              >
                <div className=" p-6">
                  <h3 className="text-[20px] font-bold font-spaceGrotesk text-[#222737]">
                    {product.title}
                  </h3>
                  <p className="text-sm text-[#7D7D7D] mt-4 text-[15px] font-[400] font-spaceGrotesk mb-4">
                    {product.description}
                  </p>
                  <a
                    href="#"
                    className="text-[14px] font-[500] mt-10 font-poppins text-[#000000] flex items-center"
                  >
                    Explore Now{" "}
                    <img
                      src="/product/up-arrow.png"
                      alt="img"
                      className="ms-2"
                    />
                  </a>
                  <div className="h-[1px] bg-[#000000] w-[105px] mt-1"></div>
                </div>
                <div
                  className="p-8"
                  style={{
                    backgroundImage: `url(${product.background})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className=" object-cover rounded-t-lg mb-4"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* end section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white py-16 px-4 md:px-8"
        style={{
          backgroundImage: "url('/product/bg.png')", // Replace with your actual image path
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          {/* Left Section */}
          <div className="md:w-1/2">
            <h1 className="text-3xl md:text-[52px] font-bold font-spaceGrotesk leading-[66.35px] mb-4">
              Find The Best <br /> Talents & Build <br />
              Relationship
            </h1>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2">
            <p className="text-[#FFFFFF] text-[20px] font-[400] font-spaceGrotesk leading-[25.52px]">
              The most complete talent relationship platform for talent
              sourcing, recruitment events, and internal mobility.
            </p>

            {/* Input and Subscribe Button Container */}
            <div className="mt-12 flex items-center bg-white rounded-full shadow-md px-2 py-2 w-full max-w-[362px] h-[48.19px]">
              {/* Email Input */}
              <input
                type="email"
                placeholder="Enter email"
                className="flex-grow outline-none text-gray-800 px-2 w-28"
              />

              {/* Subscribe Button */}
              <button className="bg-[#BACDD1] text-[#032170] text-[14px] font-[500] font-spaceGrotesk rounded-full flex items-center justify-center py-2 min-w-[173px] h-[44px]">
                <img src="/product/subscribe.png" alt="sub" className="mr-2" />
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
