/* eslint-disable react/jsx-no-target-blank */
import { useState } from "react";
import logo from "../assets/logo.png";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
import resume from "../assets/resume.pdf";

const Navabr = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full z-50 fixed flex justify-between items-center px-10 h-[80px] bg-[#1C2833] text-gray-300">
      <div className="flex items-center ">
        <img src={logo} style={{ width: "35px" }} alt="logo" />
        <span className="text-lg leading-6">Natnael D</span>
      </div>

      {/* Desktop mobile menu */}
      <ul className="hidden md:flex">
        <li className="cursor-pointer">
          <Link to="hero" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div className="md:hidden z-10" onClick={handleNav}>
        {nav ? <CgClose size={27} /> : <CgMenuRight size={27} />}
      </div>

      {/* Mobile menu */}

      {nav && (
        <div className="absolute top-0 left-0 flex flex-col justify-center items-center w-full h-screen bg-[#0a192f] md:hidden">
          <ul>
            <li className="py-6">
              <Link onClick={handleNav} to="hero" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li className="py-6">
              <Link onClick={handleNav} to="about" smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li className="py-6">
              <Link
                onClick={handleNav}
                to="skills"
                smooth={true}
                duration={500}
              >
                Skills
              </Link>
            </li>
            <li className="py-6">
              <Link onClick={handleNav} to="work" smooth={true} duration={500}>
                Work
              </Link>
            </li>
            <li className="py-6">
              <Link
                onClick={handleNav}
                to="contact"
                smooth={true}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0 text-white font-medium">
        <ul>
          <li className="flex w-[160px] h-[45px]  justify-between items-center bg-[#0072b1] ml-[-100px] duration-300 hover:ml-[-7px]">
            <a
              href="https://www.linkedin.com/in/natnael-demelash-20835b1bb/"
              target="_blank"
              className=" flex justify-around items-center w-full"
            >
              LinkedIn
              <FaLinkedin size={20} />
            </a>
          </li>
          <li className="flex w-[160px] h-[45px] justify-between items-center bg-slate-700 ml-[-100px] duration-300 hover:ml-[-7px]">
            <a
              href="https://github.com/NatnaelDemelash"
              target="_blank"
              className=" flex justify-around items-center w-full"
            >
              GitHub
              <FaGithub size={20} />
            </a>
          </li>
          <li className="flex w-[160px] h-[45px] justify-between items-center bg-[#0097B2] ml-[-100px] duration-300 hover:ml-[-7px]">
            <a
              href={resume}
              className=" flex justify-around items-center w-full"
            >
              Resume
              <BsPersonLinesFill size={20} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navabr;
