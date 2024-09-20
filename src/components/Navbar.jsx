// Purpose: Navbar component for the website
import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-screen h-[80px] flex justify-between items-center px-4 bg-[#08192F] text-gray-300 z-20">
      <div>
        <img src={logo} alt="logo" className="w-[60px]" />
      </div>
      {/* Menu */}
      <ul className="hidden md:flex">
        <li className="hover:text-[#2097F3] px-4 cursor-pointer">
          <Link activeClass="active" to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        {/* <li className="hover:text-[#2097F3] px-4 cursor-pointer">
          <Link activeClass="active" to="about" smooth={true} duration={500}>
            About
          </Link>
        </li> */}
        <li className="hover:text-[#2097F3] px-4 cursor-pointer">
          <Link activeClass="active" to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="hover:text-[#2097F3] px-4 cursor-pointer">
          <Link activeClass="active" to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="hover:text-[#2097F3] px-4 cursor-pointer">
          <Link activeClass="active" to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div className="md:hidden z-10 cursor-pointer" onClick={handleNav}>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#08192F] flex flex-col justify-center items-center"
        }
      >
        <li className="py-4 text-4xl">
          <Link onClick={handleNav} activeClass="active" to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-4 text-4xl">
          <Link onClick={handleNav} activeClass="active" to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-4 text-4xl">
          <Link onClick={handleNav} activeClass="active" to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-4 text-4xl">
          <Link onClick={handleNav} activeClass="active" to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="py-4 text-4xl">
          <Link onClick={handleNav} activeClass="active" to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0 items-center">
        <ul className="space-y-8">
          <li className="flex justify-between px-4 cursor-pointer text-3xl text-gray-300 hover:text-blue-500 transition duration-300 ease-in-out">
            <a
              href="https://www.linkedin.com/in/kgotso-makhalimele/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </li>
          <li className="text-3xl text-gray-300 px-4 cursor-pointer hover:text-yellow-300 transition duration-300 ease-in-out">
            <a
              href="https://github.com/kgotsosm"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
