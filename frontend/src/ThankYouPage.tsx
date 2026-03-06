import React from "react";
import Header from "../src/components/Header";
import { Link } from "react-router-dom";

const ThankYouPage = () => {
  return (
    <div className="flex flex-col min-h-screen items-center font-[Raveo_Display]">
      <Header />

      <main className="flex flex-col items-center justify-center text-center w-full max-w-[1200px] px-6 lg:px-8 py-4 gap-4">

        {/* Success Icon */}
        <div className="flex items-center justify-center w-24 h-24 md:w-20 md:h-20 rounded-full bg-[#A0D8B3]">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="36" viewBox="0 0 79 57" fill="none">
            <path d="M77.1108 1.64795C79.3081 3.84521 79.3081 7.41357 77.1108 9.61084L32.1108 54.6108C29.9136 56.8081 26.3452 56.8081 24.1479 54.6108L1.64795 32.1108C-0.549316 29.9136 -0.549316 26.3452 1.64795 24.1479C3.84521 21.9507 7.41357 21.9507 9.61084 24.1479L28.1382 42.6577L69.1655 1.64795C71.3628 -0.549316 74.9312 -0.549316 77.1284 1.64795H77.1108Z" fill="white"/>
          </svg>
        </div>

        {/* Heading */}
        <div className="flex flex-col gap-4 max-w-[800px]">
          <h1 className="text-2xl md:text-4xl lg:text-[3rem] font-semibold leading-tight">
            Your information has been received.
          </h1>

          <p className="text-base md:text-xl lg:text-[1.5rem] text-[#333] leading-relaxed">
            Our counsellor will contact you shortly to guide you about TEF preparation for Canada PR.
          </p>
        </div>

        {/* Blue Container */}
        <div className="flex flex-col items-center gap-4 w-full max-w-[900px] p-4 md:p-7 rounded-[2rem] bg-[#E4F1FE]">

          {/* Container Text */}
          <div className="flex flex-col gap-3">
            <h2 className="text-xl md:text-2xl font-semibold">
              Do not wait for the call. <br />
              Start with a ₹99 TEF Demo Session.
            </h2>

            <p className="text-sm md:text-base text-[#333] max-w-[600px]">
              This short live session helps you understand exactly how to prepare for TEF
              and what score you need for Canada PR before enrolling in the full course.
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">

            <div>
              <h3 className="text-[#0D7CC1] text-lg font-semibold">
                500+ students
              </h3>
              <p className="text-[#464646] text-sm">
                enrolled last month
              </p>
            </div>

            <div>
              <h3 className="text-[#0D7CC1] text-lg font-semibold">
                Rated 4.9
              </h3>
              <p className="text-[#464646] text-sm">
                by learners
              </p>
            </div>

            <div>
              <h3 className="text-[#0D7CC1] text-lg font-semibold">
                Save up to 50%
              </h3>
              <p className="text-[#464646] text-sm">
                on course fees
              </p>
            </div>

          </div>

          {/* Payment Button */}
          <a
            href="https://rzp.io/rzp/tef-india"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full bg-[#6346FA] text-white text-sm md:text-base font-semibold hover:opacity-90 transition"
          >
            Book Your ₹99 Demo Session
          </a>

          {/* Back Link */}
          <Link
            to="/"
            className="text-[#808080] text-sm underline hover:text-black transition"
          >
            No thanks, I will wait for the counsellor
          </Link>

        </div>

      </main>
    </div>
  );
};

export default ThankYouPage;