// Purpose: Hero component for the portfolio website.
import React from 'react';
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="mt-16 text-[#2097F3] lg:text-xl font-bold">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Kgotso Makhalimele
        </h1>
        <p className="text-gray-300 py-4 max-w-[700px] lg:text-xl">
           Combining my knowledge of data management and
          software development, I have a passion for creating products that
          provide value to the end-user.
        </p>
        <div>
        <Link activeClass="active" to="about" smooth={true} duration={500}>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#2097F3] hover:border-[#2097F3]">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
