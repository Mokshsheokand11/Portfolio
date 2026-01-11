import { Element } from "react-scroll"; 
import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <Element name="footer">
    <hr className="my-20 border-gray-300 " />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-16">

          {/* Social Icons */}
          <div className="flex gap-6 text-3xl justify-center">

            <a
              href="https://www.linkedin.com/in/moksh-sheokand-46a8532b6/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer transition-transform duration-200 hover:scale-125 hover:text-[#0A66C2]"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mokshsheokand11@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer transition-transform duration-200 hover:scale-125 hover:text-red-500"
            >
              <FaEnvelope />
            </a>

            <ul>
              <li className="transition-transform duration-200 hover:scale-125 hover:text-gray-800 cursor-pointer">
                <a href="https://github.com/Mokshsheokand11" target="_blank">
                  <FaGithub />
                </a>
              </li>
            </ul>
          </div>

          {/* Small horizontal line */}
          <hr className="w-80 border-t border-gray-700 my-6 mx-auto" />

          {/* Copyright text */}
          <div className="flex flex-col items-center text-center">
            <p className="text-sm">
              &copy; 2026 Moksh Sheokand. All rights reserved.
            </p>
            <p className="text-sm">Build With Passion & Code !</p>
          </div>

        </div>
      </footer>
    </Element>
  );
}

export default Footer;
