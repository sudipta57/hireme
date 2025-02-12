import React, { useState } from "react";

export default function Contact() {
  const [openIndex, setOpenIndex] = useState(null); // Track which FAQ is open

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle the clicked FAQ
  };

  return (
    <div className="font-spaceGrotesk">
      <section className="bg-[#F4F6FB] py-16 px-4 md:px-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side */}
          <div>
            <h2 className="text-[#032170] text-[25px] font-bold mb-2">
              Get In Touch
            </h2>
            <h1 className="mt-6 text-[40px] font-bold leading-[52px] text-[#1C1C1C] mb-4">
              Get In Touch With HR Consultation Experts
            </h1>
            <p className="text-[#000000] text-[16px] font-[400] leading-[24px] mt-10 mb-8 border-b-2 pb-6">
              In choosing a recruitment service, organizations should consider
              factors such as the agency's track record, industry expertise,
              reputation, and alignment with the company's values and needs.
            </p>
            <div>
              <h3 className="font-bold text-lg text-[#222737] text-[24px] mb-4">
                Our Information
              </h3>
              <ul className="space-y-6 text-[#7D7D7D] text-[16px] font-[400]">
                <li className="flex items-start">
                  <img src="/location.png" alt="img" className="me-3" />
                  1102 Washington Square South, New York, America
                </li>
                <li className="flex items-center">
                  <img src="/phone.png" alt="img" className="me-3" />
                  (+12) 3456 7890
                </li>
                <li className="flex items-center">
                  <img src="/mail.png" alt="img" className="me-3" />
                  recruitie@example.com
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side */}
          <div className="p-8 rounded-xl ">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-2 block w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-600 focus:border-blue-600 h-[54px]"
                    placeholder="Your Name *"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-2 block w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-600 focus:border-blue-600 h-[54px]"
                    placeholder="Your Phone*"
                  />
                </div>
              </div>

              <div>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className="mt-2 block w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-600 focus:border-blue-600 h-[54px]"
                  placeholder="Your Email*"
                />
              </div>
              <div>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  className="mt-2 block w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-600 focus:border-blue-600"
                ></textarea>
              </div>
              <div
                className="bg-transparent p-1 mt-10 rounded-[10px] border-[3px] border-[#032170] w-[244px] h-[65px]"
                style={{
                  boxShadow: " 0px 4px 2px 0px #00000040",
                }}
              >
                <button className=" text-[#032170] w-full h-full rounded-[10px] text-[20px] font-[700] font-spaceGrotesk flex items-center justify-center">
                  send message
                  <img
                    src="/home/right-arrow.png"
                    alt="play"
                    className="ms-3"
                  />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/*  */}
      <div className="w-full h-[500px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31536000!2d-122.41942!3d37.77493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064d92940d5%3A0x4af6c9c4a06dba64!2sEarth!5e0!3m2!1sen!2sus!4v1618228566575!5m2!1sen!2sus"
          title="World Map"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/*  */}
      <section className="relative bg-gray-50">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url('/home/bg_map2.png')` }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* FAQ Content */}
            <div>
              <h2 className="text-[42px] font-bold text-[#222737] mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-[#7D7D7D] text-[16px] font-[400] mb-8 border-b pb-6">
                If you have questions, we have answers for you here. In case we
                don’t, please feel free to reach out to us.
              </p>

              <div className="space-y-4">
                {[
                  {
                    question: "What is Recruitie and how does it work?",
                    answer:
                      "Our solution is agile and flexible, so we can adjust as your needs change. We take great pride in having long-standing client engagements and helping our partner companies grow.",
                  },
                  {
                    question: "Can we start any time of year?",
                    answer:
                      "Yes, you can start using our services at any time.",
                  },
                  {
                    question:
                      "How does the engagement change as my business scales?",
                    answer:
                      "As your business scales, our solution adapts to your growing needs, offering more advanced features and support.",
                  },
                  {
                    question: "In which countries can I find your company?",
                    answer:
                      "Our services are available globally, and we operate in multiple countries.",
                  },
                ].map((faq, index) => (
                  <div key={index} className="border-b pb-2 border-gray-200">
                    <button
                      type="button"
                      onClick={() => toggleFAQ(index)}
                      className="flex items-center justify-between w-full py-4 text-left"
                    >
                      <span className="text-[#222737] text-[18px] font-bold">
                        {faq.question}
                      </span>
                      <span className="text-gray-500">
                        {openIndex === index ? "−" : "+"}
                      </span>
                    </button>
                    {openIndex === index && (
                      <div className="pl-4 text-[#7D7D7D] text-[16px] font-[400]">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Image Section */}
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src="/home/con-right.png"
                alt="Happy Clients"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
