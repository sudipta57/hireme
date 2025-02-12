import LandingTestimonial from "../Component/LandingTestimonial";

const Home = () => {
  return (
    <>
      <div className="relative min-h-[400px]">
        {/* Video background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src="/landing/bg_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Background image overlay */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/landing/bg-0.png')",
            opacity: 0.5, // Adjust this value to control the visibility of the image
          }}
        ></div>

        {/* Blue gradient overlay */}
        {/* <div
                    className="absolute top-0 left-0 w-full h-full"
                    style={{
                        background: 'linear-gradient(to right, rgba(13, 60, 140, 0.9), rgba(13, 60, 140, 0.5), rgba(13, 60, 140, 0))',
                    }}
                ></div> */}

        {/* Content on top of video, background image, and overlay */}
        <div className="relative z-10 text-white md:p-24 sm:p-12 p-6 pt-28">
          <span className="bg-white text-xs font-bold px-3 py-2 rounded-full inline-block">
            <span className="text-[#E31837] text-[16px] font-[500] font-Roboto">
              INDIA'S #1 JOB PLATFORM
            </span>
          </span>
          <h1 className="text-[36px] font-[600] mt-4 font-Roboto leading-[50px]">
            Global Consultancy Specializing In <br />
            Recruiting And Empowering Leaders
          </h1>
          <p className="mt-4 text-[16px] font-[300] font-Roboto max-w-[590px] leading-[30px]">
            Connecting businesses with visionary leaders who innovate and build
            a brighter, more prosperous future together.
          </p>
          <button className="bg-[#E31837] w-[194px] h-[46px] text-white font-semibold rounded-[10px] mt-6">
            Get Started
          </button>
        </div>
      </div>

      <div className="bg-[#FFEEF1]">
        <div className="container mx-auto text-center py-8 md:max-w-[1350px]">
          {/* Stats */}
          <div className="bg-[#FFFFFF] border border-b-2 border-[#D7D7D7] rounded-[20px] h-auto md:h-[119px] py-6 md:py-0">
            <div className="grid grid-cols-1 md:grid-cols-3 py-6 text-left h-full gap-6 md:gap-0">
              {/* Total Projects */}
              <div className="border-b md:border-b-0 border-r-0 md:border-r-2 border-[#D7D7D7] flex justify-center items-center md:items-start px-4 h-full">
                <div className="flex items-center gap-2">
                  <img src="/landing/icons/Server.png" alt="" />

                  <div>
                    <h3 className="text-[30px] sm:text-[18px] md:text-[30px] text-[#E31837] font-[600] font-Roboto">
                      10,000+
                    </h3>
                    <p className="text-[16px] text-[#64748B] font-[300] font-Roboto">
                      jobs
                    </p>
                  </div>
                </div>
              </div>

              {/* Total Clients */}
              <div className="border-b md:border-b-0 border-r-0 md:border-r-2 border-[#D7D7D7] flex flex-col justify-center items-center md:items-start px-4 h-full">
                <div className="flex items-center gap-2">
                  <img src="/landing/icons/user.png" alt="" />
                  <div>
                    <h3 className="text-[30px] sm:text-[18px] md:text-[30px] text-[#E31837] font-[600] font-Roboto">
                      5,000+
                    </h3>
                    <p className="text-[16px] text-[#64748B] font-[300] font-Roboto">
                      Candidates
                    </p>
                  </div>
                </div>
              </div>

              {/* Customer Satisfaction Rate */}
              <div className="flex flex-col justify-center items-center md:items-start px-4 h-full">
                <div className="flex items-center gap-2">
                  <img src="/landing/icons/location.png" alt="" />

                  <div>
                    <h3 className="text-[30px] sm:text-[18px] md:text-[30px] text-[#E31837] font-[600] font-Roboto">
                      100+
                    </h3>
                    <p className="text-[16px] text-[#64748B] font-[300] font-Roboto">
                      Companies
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* our expertise */}
      <div class="flex items-center justify-center bg-[#FFFFFF]">
        <div class="max-w-[1300px] w-full mx-auto px-4 lg:px-20 py-10 lg:flex lg:items-center lg:space-x-20">
          {/* <!-- Left Section --> */}
          <div class="lg:w-1/2 space-y-4 mb-10 lg:mb-0">
            <h2 class="text-[45px] font-[600] text-[#012169] font-Roboto">
              Our Expertise
            </h2>
            <p class="text-[#546E7A] text-[20px] font-[300] font-Roboto">
              showcases our specialized skills in delivering tailored solutions
            </p>
            <button className="bg-[#E31837] w-[194px] h-[46px] text-white font-semibold rounded-[10px] mt-6">
              Register Now
            </button>
          </div>

          {/* <!-- Right Section --> */}
          <div class="lg:w-1/2 space-y-8">
            {/* <!-- First Item --> */}
            <div class="flex items-start space-x-8">
              <div class="relative">
                <div class="rounded-full flex items-center justify-center">
                  <img src="/landing/icons/icon-1.png" alt="Interview Icon" />
                </div>
                <div class="absolute top-16 left-1/2 transform -translate-x-1/2 w-px h-12 border-dashed border-2 border-blue-300"></div>
              </div>
              <div>
                <h3 class="text-[24px] font-semibold text-[#012169] font-Roboto">
                  Conduct an Interview
                </h3>
                <p class="text-[#7E7A7A] text-[20px] font-[300] font-Roboto mt-1">
                  Asking questions to collect information.
                </p>
              </div>
            </div>

            {/* <!-- Second Item --> */}
            <div class="flex items-start space-x-8">
              <div class="relative">
                <div class="rounded-full flex items-center justify-center">
                  <img src="/landing/icons/icon-2.png" alt="Test Icon" />
                </div>
                <div class="absolute top-16 left-1/2 transform -translate-x-1/2 w-px h-12 border-dashed border-2 border-blue-300"></div>
              </div>
              <div>
                <h3 class="text-[24px] font-semibold text-[#012169] font-Roboto">
                  Interactive Test
                </h3>
                <p class="text-[#7E7A7A] text-[20px] font-[300] font-Roboto mt-1">
                  Engages users with real-time feedback.
                </p>
              </div>
            </div>

            {/* <!-- Third Item --> */}
            <div class="flex items-start space-x-8">
              <div class="relative">
                <div class="rounded-full flex items-center justify-center">
                  <img src="/landing/icons/icon-3.png" alt="Report Icon" />
                </div>
              </div>
              <div>
                <h3 class="text-[24px] font-semibold text-[#012169] font-Roboto">
                  Performance Report
                </h3>
                <p class="text-[#7E7A7A] text-[20px] font-[300] font-Roboto mt-1">
                  Summarizes achievements and improvements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* why choose us */}
      <div className="py-20 relative bg-[url('/landing/bg-2.png')] bg-cover bg-no-repeat">
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 lg:px-8 flex flex-col items-center text-center lg:text-left lg:items-start">
          {/* Text Section */}
          <div className="lg:w-1/2 space-y-3">
            <h2 className="text-[45px] font-semibold text-[#012169] font-Roboto">
              Why Choose Us?
            </h2>
            <p className="text-[#546E7A] font-Roboto leading-[32px] text-[16px] font-light">
              At Maposer, with 12 years of experience in hiring and placement,
              we ensure client satisfaction by consistently meeting expectations
              and addressing concerns at no extra cost, delivering results that
              drive your business success.
            </p>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-10">
            {/* Feature Item */}
            <div className="text-center flex flex-col items-center space-y-2">
              <img
                src="/landing/circle-1.png"
                alt="Experience Icon"
                className=" mx-auto lg:mx-0 rounded-full object-cover"
              />
              <h3 className="text-[20px] font-[500] font-Roboto text-[#1C1C1C]">
                12 Years <br /> of Experience
              </h3>
            </div>

            {/* Feature Item */}
            <div className="text-center flex flex-col items-center space-y-2">
              <img
                src="/landing/circle-2.png"
                alt="Solutions Icon"
                className=" mx-auto lg:mx-0 rounded-full object-cover"
              />
              <h3 className="text-[20px] font-[500] font-Roboto text-[#1C1C1C]">
                Fast & <br /> Effective Solutions
              </h3>
            </div>

            {/* Feature Item */}
            <div className="text-center flex flex-col items-center space-y-2">
              <img
                src="/landing/circle-3.png"
                alt="Experts Icon"
                className=" mx-auto lg:mx-0 rounded-full object-cover"
              />
              <h3 className="text-[20px] font-[500] font-Roboto text-[#1C1C1C]">
                Best <br /> Industry Experts
              </h3>
            </div>

            {/* Feature Item */}
            <div className="text-center flex flex-col items-center space-y-2">
              <img
                src="/landing/circle-4.png"
                alt="Flexible Working Model Icon"
                className=" mx-auto lg:mx-0 rounded-full object-cover"
              />
              <h3 className="text-[20px] font-[500] font-Roboto text-[#1C1C1C]">
                Flexible <br /> Working Model
              </h3>
            </div>
          </div>
        </div>
      </div>
      {/* plans */}
      <div className="py-20 px-4">
        <div className="max-w-5xl mx-auto text-center mb-10">
          <h2 className="text-center text-[40px] font-[600] font-Roboto text-[#012169] leading-[45px]">
            Tailored Plans to Meet Your <br /> Unique Requirements
          </h2>
          <p className="text-[16px] font-[300] font-Roboto text-[#546E7A] mt-8">
            Choose a plan that’s right for you
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto ">
          {/* Free Plan */}
          <div className="bg-white rounded-lg border border-[#E1E1E1] p-8 w-[300px] min-h-[446px]">
            <h3 className="text-[#1C1C1C] text-[16px] font-[600] font-Roboto">
              Free
            </h3>
            <p className="text-[#546E7A] text-[12px] font-[400] font-Roboto mt-2">
              Ideal for individuals who need quick access to basic features.
            </p>
            <p className="text-[#1C1C1C] text-[40px] font-[600] font-Roboto mt-6">
              ₹199{" "}
              <span className="text-[#546E7A] text-[12px] font-[300] font-Roboto ">
                / Monthly
              </span>
            </p>
            <button className="mt-6 w-full text-[12px] font-[600] font-Roboto text-[#1C1C1C] py-2 rounded-[2px] border-2 border-[#1C1C1C]">
              Get Start Now
            </button>
            <ul className="mt-8 space-y-4 text-left">
              <li className="flex items-center text-gray-600">
                <img
                  src="/landing/icons/tick.png"
                  alt="img"
                  className="me-3 w-[24px] h-[24px]"
                />
                <p className="text-[#546E7A] text-[10px] font-[400] font-Roboto leading-[11.72px]">
                  <strong className="text-[#1C1C1C] text-[10px] font-[500]">
                    Who’s Viewed Your Profile:{"  "}
                  </strong>
                  Explore 5 most recent viewers in the last 90 days.
                </p>
              </li>
              <li className="flex items-center text-gray-600">
                <img
                  src="/landing/icons/tick.png"
                  className="me-3 w-[24px] h-[24px]"
                  alt="img"
                />
                <p className="text-[#546E7A] text-[10px] font-[400] font-Roboto leading-[11.72px]">
                  <strong className="text-[#1C1C1C] text-[10px] font-[500]">
                    Insights:
                  </strong>{" "}
                  Find and connect with colleagues, classmates, and companies.
                </p>
              </li>
              <li className="flex items-center text-gray-600">
                <img
                  src="/landing/icons/tick.png"
                  className="me-3 w-[24px] h-[24px]"
                  alt="img"
                />
                <p className="text-[#546E7A] text-[10px] font-[400] font-Roboto leading-[11.72px]">
                  <strong className="text-[#1C1C1C] text-[10px] font-[500]">
                    Search:
                  </strong>{" "}
                  Find and view profiles of other LinkedIn members.
                </p>
              </li>
              <li className="flex items-center text-gray-600">
                <img
                  src="/landing/icons/tick.png"
                  className="me-3 w-[24px] h-[24px]"
                  alt="img"
                />
                <p className="text-[#546E7A] text-[10px] font-[400] font-Roboto leading-[11.72px]">
                  <strong className="text-[#1C1C1C] text-[10px] font-[500]">
                    {" "}
                    Profile:{" "}
                  </strong>
                  Build a Maposer profile to showcase yourself or your company.
                </p>
              </li>
            </ul>
          </div>

          {/* Professional Plan */}
          <div className="bg-[#E31837] text-white rounded-[10px] border p-5 w-[280px] min-h-[466px]">
            <h3 className="text-white text-[16px] font-[600] font-Roboto">
              Professional
            </h3>
            <p className="mt-2 text-[12px] font-[400] font-Roboto">
              Ideal for individuals who need advanced features and tools for
              client work.
            </p>
            <p className="text-4xl mt-6 text-[40px] font-[600] font-Roboto">
              ₹599{" "}
              <span className="text-white text-[12px] font-[300] font-Roboto ">
                / Quarterly
              </span>
            </p>
            <button className="mt-3 w-full bg-white text-black font-semibold py-2 rounded-[2px]">
              Get Start Now
            </button>
            <ul className="mt-8 space-y-4 text-left">
              <li className="flex items-center">
                <img
                  src="/landing/icons/tick.png"
                  className="me-3 w-[24px] h-[24px]"
                />
                <p className="text-white text-[10px] font-[400] font-Roboto leading-[11.72px]">
                  <strong className="font-[500]">
                    Who’s Viewed Your Profile:
                  </strong>{" "}
                  Explore all viewers, trends, and insights in the past 365
                  days. Browse profiles anonymously.
                </p>
              </li>
              <li className="flex items-center">
                <img
                  src="/landing/icons/tick.png"
                  className="me-3 w-[24px] h-[24px]"
                />
                <p className="text-white text-[10px] font-[400] font-Roboto leading-[11.72px]">
                  <strong className="font-[500]">InMail:</strong>  Message
                  anyone outside your network with 5 InMails per month. 
                </p>
              </li>
              <li className="flex items-center">
                <img
                  src="/landing/icons/tick.png"
                  className="me-3 w-[24px] h-[24px]"
                />
                <p className="text-white text-[10px] font-[400] font-Roboto leading-[11.72px]">
                  <strong className="font-[500]"> Insights: </strong>Get
                  competitive insights about other applicants and companies. 
                </p>
              </li>{" "}
              <li className="flex items-center">
                <img
                  src="/landing/icons/tick.png"
                  className="me-3 w-[24px] h-[24px]"
                />
                <p className="text-white text-[10px] font-[400] font-Roboto leading-[11.72px]">
                  <strong className="font-[500]"> Search: </strong>Find the
                  right people with advanced search filters. 
                </p>
              </li>{" "}
              <li className="flex items-center">
                <img
                  src="/landing/icons/tick.png"
                  className="me-3 w-[24px] h-[24px]"
                />
                <p className="text-white text-[10px] font-[400] font-Roboto leading-[11.72px]">
                  <strong className="font-[500]"> Profile:</strong> Stand out
                  for more opportunities with AI profile writing assistant.
                </p>
              </li>
            </ul>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white rounded-lg border border-[#E1E1E1] p-8 w-[300px] min-h-[466px]">
            <h3 className="text-[#1C1C1C] text-[16px] font-[600] font-Roboto">
              Enterprise
            </h3>
            <p className="text-[#546E7A] text-[12px] font-[400] font-Roboto mt-2">
              Ideal for businesses who need personalized services and security
              for large teams.{" "}
            </p>
            <p className="text-[#1C1C1C] text-[40px] font-[600] font-Roboto mt-6">
              ₹999{" "}
              <span className="text-[#546E7A] text-[12px] font-[300] font-Roboto ">
                / Yearly
              </span>
            </p>
            <button className="mt-6 w-full text-[12px] font-[600] font-Roboto text-[#1C1C1C] py-2 rounded-[2px] border-2 border-[#1C1C1C]">
              Get Start Now
            </button>
            <ul className="mt-8 space-y-4 text-left">
              <li className="flex items-center text-gray-600">
                <img
                  src="/landing/icons/tick.png"
                  alt="img"
                  className="me-3 w-[24px] h-[24px]"
                />
                <p className="text-[#546E7A] text-[10px] font-[400] font-Roboto leading-[11.72px]">
                  <strong className="text-[#1C1C1C] text-[10px] font-[500]">
                    Who’s Viewed Your Profile:{"  "}
                  </strong>
                   Explore all viewers, trends, and insights in the past 365
                  days. Browse profiles anonymously.
                </p>
              </li>
              <li className="flex items-center text-gray-600">
                <img
                  src="/landing/icons/tick.png"
                  className="me-3 w-[24px] h-[24px]"
                  alt="img"
                />
                <p className="text-[#546E7A] text-[10px] font-[400] font-Roboto leading-[11.72px]">
                  <strong className="text-[#1C1C1C] text-[10px] font-[500]">
                    InMail: 
                  </strong>{" "}
                  Message anyone outside your network with 15 InMails per
                  month. 
                </p>
              </li>
              <li className="flex items-center text-gray-600">
                <img
                  src="/landing/icons/tick.png"
                  className="me-3 w-[24px] h-[24px]"
                  alt="img"
                />
                <p className="text-[#546E7A] text-[10px] font-[400] font-Roboto leading-[11.72px]">
                  <strong className="text-[#1C1C1C] text-[10px] font-[500]">
                    Insights:
                  </strong>{" "}
                  Get information on companies relevant to your business and
                  industry. 
                </p>
              </li>
              <li className="flex items-center text-gray-600">
                <img
                  src="/landing/icons/tick.png"
                  className="me-3 w-[24px] h-[24px]"
                  alt="img"
                />
                <p className="text-[#546E7A] text-[10px] font-[400] font-Roboto leading-[11.72px]">
                  <strong className="text-[#1C1C1C] text-[10px] font-[500]">
                    Search:
                  </strong>{" "}
                  Find the right people with unlimited browsing and advanced
                  search filters. 
                </p>
              </li>
              <li className="flex items-center text-gray-600">
                <img
                  src="/landing/icons/tick.png"
                  className="me-3 w-[24px] h-[24px]"
                  alt="img"
                />
                <p className="text-[#546E7A] text-[10px] font-[400] font-Roboto leading-[11.72px]">
                  <strong className="text-[#1C1C1C] text-[10px] font-[500]">
                    {" "}
                    Profile:{" "}
                  </strong>
                  Stand out and build credibility with AI profile writing
                  assistant, custom button, and featured profile content
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* want to hire */}
      <div
        className="md:max-h-[394px] py-12 md:py-0"
        style={{
          background: " linear-gradient(90deg, #F9FBFF 0%, #F1F6FF 100%)",
        }}
      >
        <div className="flex justify-between items-end max-w-[960px] mx-auto flex-col md:flex-row">
          <div>
            <img src="/landing/two-people.png" alt="two-people" />
          </div>
          <div className="flex flex-col justify-between items-start mx-3 md:mx-0 md:mb-10">
            <img src="/landing/secweb.png" alt="img" className="md:mb-12" />
            <div>
              <h2 className="text-[#012169] text-[24px] font-[600] font-Roboto">
                Want to hire ?
              </h2>
              <p className="text-[16px] font-[400] text-[#1C1C1C] font-Roboto">
                Find the best candidate from 5 crore+ active job seekers!
              </p>
              <button className="border border-[#E31837] mt-10 text-[#E31837] text-[16px] font-[600] rounded-[5px] bg-white w-[182px] h-[46px]">
                Post job &gt;
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* testimonial */}
      <LandingTestimonial />
    </>
  );
};

export default Home;
