import React from "react";

export default function Home() {
  return (
    <div className="max-w-[1500px] mx-auto">
      {/* banner section */}

      <div className="relative bg-[#F4F6FB]">
        <div className=" flex justify-end">
          <img src="/home/banner.png" alt="banner" />
        </div>
        <div className="md:text-left absolute top-0 md:left-20 md:top-[5%] w-full md:max-w-[700px]">
          <h1 className="md:text-[64px] font-bold font-spaceGrotesk text-[#0B3299] md:leading-[70px] md:tracking-[-2.6px]">
            Unlock Your Potential with HireMe Exciting Career Opportunities
          </h1>
          <p className="sm:text-[24px] mt-10 font-[400] font-spaceGrotesk text-[#000000]">
            Stand out with an impressive resume, connect with top companies, and
            gain valuable insights for your professional journey.
          </p>
          <div className="flex flex-col md:flex-row justify-center md:justify-start md:space-x-4 mt-10">
            <div
              className="bg-white p-1 rounded-[10px]"
              style={{
                boxShadow: " 0px 4px 2px 0px #00000040",
              }}
            >
              <button className="bg-[#BACDD1] text-[#032170] px-4 py-2 rounded-[10px] text-[20px] font-[700] font-spaceGrotesk md:w-[246px] md:h-[65px]">
                For Employers
              </button>
            </div>
            <div
              className="bg-white p-1 rounded-[10px]"
              style={{
                boxShadow: " 0px 4px 2px 0px #00000040",
              }}
            >
              <button className="bg-[#032170] text-white px-4 py-2 rounded-[10px] text-[20px] font-[700] font-spaceGrotesk w-[246px] h-[65px]">
                For Candidates
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
        {/* Left Section: Text */}
        <div className="md:flex-[0.4] space-y-6 text-center md:text-left">
          <h2
            className="text-3xl sm:text-4xl md:text-[49px] font-bold text-[#0B3299] font-spaceGrotesk tracking-[-2.6px]"
            style={{
              lineHeight: "53.46px",
            }}
          >
            We connect young professionals to internships and early career
            opportunities.
          </h2>
          <p className="text-[#000000] text-[24px] font-[400] font-spaceGrotesk leading-[30.86px]">
            We understand that starting a career can be daunting, which is why
            we strive to simplify the process and ensure a smooth transition
            into the professional world.
          </p>
          {/* Watch Video Button */}
          <div
            className="bg-white p-1 rounded-[10px] border-[3px] border-[#032170] w-[246px] h-[65px]"
            style={{
              boxShadow: " 0px 4px 2px 0px #00000040",
            }}
          >
            <button className="text-[#032170] w-full h-full rounded-[10px] text-[20px] font-[700] font-spaceGrotesk flex items-center justify-center">
              <img src="/home/play-icon.png" alt="play" className="me-3" />
              Watch Video
            </button>
          </div>
        </div>

        {/* Right Section: Video Placeholder */}
        <div className="md:flex-[0.6] md:w-full">
          <img src="/home/video.png" alt="video" className="w-full" />
        </div>
      </div>

      {/* employee section */}
      <div className="bg-[url('/product/bg.png')] bg-cover bg-center text-white py-12 px-4 sm:px-6 lg:px-10">
        <div className="container mx-auto">
          {/* Header */}
          <div className="my-20">
            <h1 className="text-2xl sm:text-3xl md:text-[49px] font-bold font-spaceGrotesk">
              HireMe FOR{" "}
              <span className="bg-white text-blue-900 font-spaceGrotesk px-2 py-1 rounded-lg">
                EMPLOYERS
              </span>
            </h1>
          </div>

          {/* Top Section */}
          <div className="grid lg:grid-cols-2 gap-8 items-center pt-10">
            {/* Left Text */}
            <div>
              <h2 className="text-[28px] sm:text-[35px] lg:text-[48px] font-bold leading-[48px] font-spaceGrotesk mt-4">
                Access a constant <br /> stream of fresh talent
              </h2>
              <p className="text-[#FFFFFF] text-[18px] md:text-[24px] leading-[31px] font-[400] font-spaceGrotesk mt-8">
                Find the perfect candidates for your <br /> organization from a
                diverse pool of <br /> young professionals.
              </p>
            </div>

            {/* Right List */}
            <div className="space-y-4">
              {[
                { name: "Adora Jacobs", image: "/home/adora.png" },
                { name: "Martin Kanuri", image: "/home/martin.png" },
                { name: "Tosin Adeola", image: "/home/tosin.png" },
              ].map((candidate, idx) => (
                <div
                  key={idx}
                  className="flex flex-col md:flex-row items-center justify-between bg-white text-[#292929] p-4 rounded-lg shadow space-y-5 md:space-y-0"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={candidate.image}
                      alt={candidate.name}
                      className="w-[62px] h-[62px] rounded-full"
                    />
                    <div>
                      <div className="flex items-center">
                        <h3 className="text-[17px] font-[500] font-dmsans me-1">
                          {candidate.name}
                        </h3>
                        <img src="/home/verified-icon.png" alt="img" />
                      </div>
                      <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mt-2">
                        <div className="flex items-center space-x-2">
                          <img src="/home/graduate.png" alt="img" />
                          <p className="text-[#292929] text-[11px] font-[400] font-dmsans">
                            Graduate
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <img src="/home/university.png" alt="img" />
                          <p className="text-[#292929] text-[11px] font-[400] font-dmsans">
                            University of Lagos
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <img src="/home/location.png" alt="img" />
                          <p className="text-[#292929] text-[11px] font-[400] font-dmsans">
                            Lagos
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button className="bg-[#032170] text-white text-[12px] font-[400] font-dmsans w-[137px] h-[35px] px-4 py-2 rounded-lg">
                      View Application
                    </button>
                    <img
                      src="/home/save.png"
                      alt="img"
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Middle Section */}
          <div className="mt-12 grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Image */}
            <div className="bg-white rounded-lg shadow p-4 md:w-4/5 flex flex-col justify-center items-center">
              <div className="flex items-center space-x-4">
                <img
                  src="/home/toyin.png"
                  alt="Adeola Toyin"
                  className="w-[93px] h-[93px] rounded-full"
                />
                <div>
                  <div className="flex items-center">
                    <h3 className="text-[17px] font-[500] font-dmsans me-1 text-[#292929]">
                      Adeola Toyin
                    </h3>
                    <img src="/home/verified-icon.png" alt="img" />
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mt-2">
                    <div className="flex items-center space-x-2">
                      <img src="/home/graduate.png" alt="img" />
                      <p className="text-[#292929] text-[11px] font-[400] font-dmsans">
                        Graduate
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <img src="/home/university.png" alt="img" />
                      <p className="text-[#292929] text-[11px] font-[400] font-dmsans">
                        University of Lagos
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <img src="/home/location.png" alt="img" />
                      <p className="text-[#292929] text-[11px] font-[400] font-dmsans">
                        Lagos
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <button className="bg-[#032170] mt-4 text-white text-[17px] font-[700] font-spaceGrotesk w-[284px] h-[34px] rounded-lg items-center">
                Candidate Is Qualified
              </button>
            </div>

            {/* Right Text */}
            <div>
              <h2 className="text-[28px] sm:text-[35px] lg:text-[48px] font-bold leading-[62px] font-spaceGrotesk mt-4">
                Ease high turnover rates by training and retaining only the most
                qualified candidates
              </h2>
              <p className="text-[#FFFFFF] mt-8 text-[18px] sm:text-[24px] lg:text-[30px] font-[400] font-spaceGrotesk leading-[39px]">
                Our platform allows you to identify talent with the right skills
                and cultural fit.
              </p>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-20 grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Text */}
            <div>
              <h2 className="text-[28px] sm:text-[35px] lg:text-[48px] font-bold leading-[62px] font-spaceGrotesk mt-4 tracking-[-2.6px]">
                Build company culture <br /> from the ground up
              </h2>
              <p className="text-[#FFFFFF] mt-10 text-[18px] sm:text-[24px] lg:text-[30px] font-[400] font-spaceGrotesk leading-[39px]">
                Connect with motivated candidates <br /> who align with your
                company values <br /> and vision.
              </p>
            </div>

            {/* Right Image */}
            <div className="rounded-lg shadow">
              <img
                src="/home/company_calture.png"
                alt="Company Culture"
                className="rounded-lg w-full"
              />
            </div>
          </div>

          {/* Find Your Ideal Candidate Section */}
          <div className="mt-12 grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Image */}
            <div className="rounded-lg shadow">
              <img
                src="/home/find_idea.png"
                alt="Find Candidate"
                className="rounded-lg w-full"
              />
            </div>

            {/* Right Text */}
            <div>
              <h2 className="text-[28px] sm:text-[35px] lg:text-[48px] font-bold leading-[62px] font-spaceGrotesk">
                Find your ideal candidate
              </h2>
              <p className="text-[#FFFFFF] mt-8 text-[18px] sm:text-[24px] lg:text-[30px] font-[400] leading-[39px] font-spaceGrotesk">
                Our advanced search and matching algorithms ensure you can
                efficiently find the right candidate for your job openings.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* candidate section */}
      <div className="bg-white p-6 sm:p-10 mt-10 lg:mt-20">
        {/* Top Section - Header */}
        <div className="mb-8 lg:mb-10 text-center lg:text-left">
          <h1 className="md:mb-24 text-2xl sm:text-3xl lg:text-[49px] font-bold font-spaceGrotesk tracking-[-2.0px]">
            <span className="text-black font-spaceGrotesk">HireMe </span>
            <span className="text-black font-spaceGrotesk">FOR </span>
            <span className="text-white bg-[#032170] font-spaceGrotesk px-2 py-1 rounded-lg">
              CANDIDATES
            </span>
          </h1>
        </div>

        {/* Main Content Section */}
        <div className=" flex flex-col lg:flex-row items-stretch">
          {/* Left Section - Profile Cards */}
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {[
              { title: "UI/UX Design Intern", image: "/home/candidate1.png" },
              { title: "Data Analyst Intern", image: "/home/candidate2.png" },
              { title: "Graphic Design Intern", image: "/home/candidate3.png" },
              { title: "Graduate Trainee", image: "/home/candidate4.png" },
            ].map((card, idx) => (
              <div
                key={idx}
                className="border rounded-lg p-4 w-[262px] h-[350px] mx-auto flex flex-col items-center"
                style={{
                  boxShadow: " 12.67px 15.65px 33.54px 8.2px #00000024",
                }}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-auto object-cover rounded-lg"
                />
                <p className="mt-3 text-center text-[#000000] font-bold font-spaceGrotesk text-[19px]">
                  {card.title}
                </p>
              </div>
            ))}
          </div>

          {/* Right Section - Text Features */}
          <div className=" flex-1 lg:ml-8 mt-10 lg:mt-0 flex flex-col justify-center">
            <ul className="space-y-6">
              {[
                {
                  title: "Early access to opportunities",
                  description:
                    "Gain exclusive access to internships and early career opportunities, giving you a head start in your professional journey.",
                },
                {
                  title: "Connect with over 100 top companies",
                  description:
                    "Expand your network and engage with leading companies actively seeking fresh talent.",
                },
                {
                  title: "Network with fellow students and recent graduates",
                  description:
                    "Build connections with like-minded professionals, sharing insights and experiences.",
                },
                {
                  title:
                    "Get direct insights on what it takes to secure your dream job",
                  description:
                    "Attend virtual events and gain valuable insights from industry experts.",
                },
              ].map((feature, idx) => (
                <li key={idx}>
                  <h2 className="text-[24px] sm:text-[28px] lg:text-[40px] font-bold font-spaceGrotesk text-[#0B3299] leading-[51.04px] tracking-[-2.0px]">
                    {feature.title}
                  </h2>
                  <p className="text-[#000000] text-[18px] sm:text-[20px] lg:text-[22px] mt-2 font-[400] font-spaceGrotesk leading-[28.07px]">
                    {feature.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* features */}
      <div className="bg-[#F4F6FB] p-6 sm:p-8 lg:p-16">
        {/* <div className=" max-w-6xl mx-auto"> */}
        {/* Header */}
        <div className="text-center mb-8 lg:mb-16">
          <h1 className="text-[32px] sm:text-[40px] lg:text-[58px] font-bold text-[#0F0F0F] font-spaceGrotesk">
            FEATURES
          </h1>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Resume Builder Section */}
          <div className="flex flex-col">
            <h2 className="text-[30px] sm:text-[35px] lg:text-[48px] font-spaceGrotesk font-bold text-[#0331AC] tracking-[-2.0px]">
              Resume Builder
            </h2>
            <p className="text-[#000000] mt-6 text-[18px] sm:text-[20px] lg:text-[24px] font-[400] leading-[30.62px] font-spaceGrotesk tracking-[-2.0px] max-w-md">
              Create a professional and compelling resume that showcases your
              skills and experiences. Our user-friendly builder guides you
              through the process, ensuring your resume stands out.
            </p>
            <div
              className="bg-transparent p-1 mt-10 rounded-[10px] border-[3px] border-[#032170] w-[246px] h-[65px]"
              style={{
                boxShadow: " 0px 4px 2px 0px #00000040",
              }}
            >
              <button className=" text-[#032170] w-full h-full rounded-[10px] text-[20px] font-[700] font-spaceGrotesk flex items-center justify-center">
                Learn More
                <img src="/home/right-arrow.png" alt="play" className="ms-3" />
              </button>
            </div>
          </div>
          <div>
            <img
              src="/home/features.png"
              alt="Resume Builder"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-32">
          {/* Online Events Section */}
          <div className="order-2 lg:order-none">
            <img
              src="/home/online_event.png"
              alt="Online Events"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="flex flex-col">
            <h2 className="text-[30px] sm:text-[35px] lg:text-[48px] font-spaceGrotesk font-bold text-[#0331AC] tracking-[-2.0px]">
              Online Events
            </h2>
            <p className="text-[#000000] mt-6 text-[18px] sm:text-[20px] lg:text-[24px] font-[400] leading-[30.62px] font-spaceGrotesk tracking-[-2.0px]">
              Attend virtual workshops, webinars, and networking events hosted
              by industry professionals. Expand your knowledge, enhance your
              skills, and connect with experts in your field.
            </p>
            <div
              className="bg-transparent p-1 mt-16 rounded-[10px] border-[3px] border-[#032170] w-[246px] h-[65px]"
              style={{
                boxShadow: " 0px 4px 2px 0px #00000040",
              }}
            >
              <button className=" text-[#032170] w-full h-full rounded-[10px] text-[20px] font-[700] font-spaceGrotesk flex items-center justify-center">
                Learn More
                <img src="/home/right-arrow.png" alt="play" className="ms-3" />
              </button>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>

      {/* job boards section */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between mt-8 sm:mt-12 lg:mt-15 p-6 sm:p-12 lg:p-20 bg-[#FFFFFF]">
        {/* Left Section */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-20">
          <h2 className="text-[30px] sm:text-[35px] lg:text-[48px] font-spaceGrotesk font-bold text-[#0331AC]">
            Job Boards
          </h2>
          <p className="text-[#000000] mt-6 text-[18px] sm:text-[20px] lg:text-[24px] font-[400] leading-[30.62px] font-spaceGrotesk ">
            Access a wide range of job postings from top companies across
            various industries. Discover internship and early career
            opportunities tailored to your skills and interests.
          </p>
          <div
            className="bg-transparent p-1 mt-16 rounded-[10px] border-[3px] border-[#032170] w-[246px] h-[65px]"
            style={{
              boxShadow: " 0px 4px 2px 0px #00000040",
            }}
          >
            <button className=" text-[#032170] w-full h-full rounded-[10px] text-[20px] font-[700] font-spaceGrotesk flex items-center justify-center">
              Learn More
              <img src="/home/right-arrow.png" alt="play" className="ms-3" />
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-3/5 mt-6 sm:mt-8 md:mt-0">
          <div className="rounded-lg overflow-hidden p-4 sm:p-6 flex items-center justify-center">
            <img
              src="/home/job_board.png"
              alt="Job Recommendations"
              className="w-full h-auto max-w-sm sm:max-w-md lg:max-w-lg object-cover rounded-md"
            />
          </div>
        </div>
      </div>

      {/* trust section */}
      <section
        className="relative py-16 px-4 md:px-12 lg:px-20 inset-0"
        style={{
          backgroundImage: "url('/home/trust_bg.png')", // Replace with your background image URL
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
          {/* Left Section - Vertically Centered */}
          <div className="md:w-1/3 flex items-center justify-center">
            <h2 className="text-[48px] md:text-[52px] font-bold font-spaceGrotesk leading-[51.79px] text-[#0331AC] py-20">
              A platform <br /> you can trust
            </h2>
          </div>

          {/* Right Section - Cards */}
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div
              className="bg-white shadow-lg rounded-[24.69px] p-6"
              style={{
                boxShadow: " 13.99px 17.28px 37.04px 9.05px #00000024",
              }}
            >
              <h3 className="text-[21px] font-bold font-spaceGrotesk text-[#032170]">
                We use https with 256-bit encryption
              </h3>
              <p className="text-[#000000] font-[400] font-spaceGrotesk leading-[19.13px] text-[15px] mt-4">
                Rest assured that when you use HireMe, your data and personal
                information are handled with the utmost care and security. Your
                privacy and peace of mind are our top priorities.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="bg-white shadow-lg rounded-[24.69px] p-6"
              style={{
                boxShadow: " 13.99px 17.28px 37.04px 9.05px #00000024",
              }}
            >
              <h3 className="text-[21px] font-bold font-spaceGrotesk text-[#032170]">
                Be at ease with our two-factor verification system
              </h3>
              <p className="text-[#000000] font-[400] font-spaceGrotesk leading-[19.13px] text-[15px] mt-4">
                With our two-factor verification system, you can have peace of
                mind knowing that even if someone gains access to your login
                credentials, they won't be able to access your account without
                the secondary verification code.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="bg-white shadow-lg rounded-[24.69px] p-6"
              style={{
                boxShadow: " 13.99px 17.28px 37.04px 9.05px #00000024",
              }}
            >
              <h3 className="text-[21px] font-bold font-spaceGrotesk text-[#032170]">
                We promote user data privacy, we do not sell your data
              </h3>
              <p className="text-[#000000] font-[400] font-spaceGrotesk leading-[19.13px] text-[15px] mt-4">
                We are committed to maintaining the confidentiality and security
                of the information you entrust to us. We want you to feel
                confident that your personal data is protected and will not be
                sold or shared with any third parties without your explicit
                consent.
              </p>
            </div>

            {/* Card 4 */}
            <div
              className="bg-white shadow-lg rounded-[24.69px] p-6"
              style={{
                boxShadow: " 13.99px 17.28px 37.04px 9.05px #00000024",
              }}
            >
              <h3 className="text-[21px] font-bold font-spaceGrotesk text-[#032170]">
                All our partner platforms have top-level security
              </h3>
              <p className="text-[#000000] font-[400] font-spaceGrotesk leading-[19.13px] text-[15px] mt-4">
                We prioritize the security of our users’ data not only within
                our platform but also with our partner platforms. We understand
                the importance of maintaining a secure environment throughout
                the entire recruitment process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* end section */}
      <section
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/home/end_bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay for better contrast */}
        <div className="absolute inset-0 bg-black opacity-10 z-0"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 sm:px-8">
          <h1 className="text-[40px] sm:text-[50px] md:text-[55px] lg:text-[70px] font-spaceGrotesk font-bold mb-4 leading-[70px]">
            Recruit with Ease
          </h1>
          <p className="text-[20px] sm:text-[25px] md:text-[30px] lg:text-[38px] my-8 font-[400] font-spaceGrotesk leading-[37.85px]">
            Our platform is designed to streamline and <br /> simplify your
            hiring journey, allowing you to <br /> recruit with ease.
          </p>
          <button className="mt-3 w-[293px] h-[65px] justify-center space-x-10 text-white bg-transparent font-medium rounded-md flex items-center transition border-2 border-white hover:bg-white hover:text-blue-900 text-[25px]">
            <span className=" font-bold font-spaceGrotesk">Get Started</span>
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </section>

      {/* footer */}
      {/* <Footer /> */}
    </div>
  );
}
