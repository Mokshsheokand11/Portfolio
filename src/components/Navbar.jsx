import React, { useState } from 'react';
import pic from "../../public/up.jpeg";
import { IoMdMenu } from "react-icons/io";   
import { MdCloseFullscreen } from "react-icons/md";
import { Link } from "react-scroll";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItemClass =
    "hover:text-blue-500 hover:underline transition-transform duration-200 hover:scale-110";

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 "></div>

      {/* Navbar */}
      <div className="flex justify-between items-center py-4 shadow fixed top-0 left-0 right-0 z-50 bg-white">

        <div className="flex items-center space-x-2">
          <img src={pic} className="h-12 w-12 rounded-full ml-20 mr-[10px]" alt="" />
          <h1 className="font-bold text-xl cursor-pointer">
            MOKS<span className="text-blue-500 text-xl">H</span>
            <p className="text-sm">Web Developer</p>
          </h1>
        </div>

        {/* Desktop Navbar */}
        <ul className="hidden md:flex space-x-6 mr-20 font-semibold cursor-pointer">
          <li className={navItemClass}>
            <Link to="home" smooth duration={500} offset={-80}>Home</Link>
          </li>
          <li className={navItemClass}>
            <Link to="about" smooth duration={500} offset={-80}>About</Link>
          </li>
          <li className={navItemClass}>
            <Link to="portfolio" smooth duration={500} offset={-80}>Portfolio</Link>
          </li>
          <li className={navItemClass}>
            <Link to="experience" smooth duration={500} offset={-80}>Experience</Link>
          </li>
          <li className={navItemClass}>
            <Link to="contact" smooth duration={500} offset={-80}>Contact</Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div
          className="md:hidden mr-8 text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <MdCloseFullscreen /> : <IoMdMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 flex items-center justify-center md:hidden bg-white z-40">
          <ul className="flex flex-col items-center gap-6 font-semibold text-xl">
            <li className={navItemClass}>
              <Link to="home" smooth duration={500} offset={-80} onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li className={navItemClass}>
              <Link to="about" smooth duration={500} offset={-80} onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>
            <li className={navItemClass}>
              <Link to="portfolio" smooth duration={500} offset={-80} onClick={() => setMenuOpen(false)}>
                Portfolio
              </Link>
            </li>
            <li className={navItemClass}>
              <Link to="experience" smooth duration={500} offset={-80} onClick={() => setMenuOpen(false)}>
                Experience
              </Link>
            </li>
            <li className={navItemClass}>
              <Link to="contact" smooth duration={500} offset={-80} onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
