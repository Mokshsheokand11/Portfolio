import { Element } from "react-scroll";
import React from 'react'
import picu from "../../public/up.jpeg"
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { SiMongodb, SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <Element name="home">
      <div className=" pt-24 max-w-screen-2xl container mx-auto px-4 md:px-20">

        <div className="flex flex-col md:flex-row">

          {/* IMAGE */}
          <div className="md:w-1/2 
                          flex justify-center items-center 
                          order-first md:order-last 
                          mt-[10px] md:mt-30">
            <img
              src={picu}
              alt=""
              className="rounded-full 
                         w-[220px] h-[220px]       
                         md:w-[400px] md:h-[400px]  
                         object-cover"
            />
          </div>

          {/* LEFT SECTION / Text */}
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-3">

            <span className="text-xl ">Welcome To My Feed</span>
            <div className="space-y-">
            <div className="flex space-x-1 text-2xl md:text-4xl mb-4 md:mb-6">
              <h1 >Hey, I'm a</h1>
              <ReactTyped
                className="text-blue-700 font-bold"
                strings={["Web Developer", "MERN Devloper", "Java Devloper", "System Thinker"]}
                typeSpeed={40}
                backSpeed={40}
                loop 
              />
            </div>
            </div>

            <p className="text-md md:text-lg text-justify  mt-10 mb-15 md:mb 16">
              Motivated Computer Science undergraduate with working knowledge of Java and hands-on experience in modern web application development. Skilled in building responsive user interfaces using HTML, CSS, JavaScript, and React.js, and implementing server-side logic using JavaScript-based runtime environments with database-driven functionality. Eager to apply problem-solving skills and learn industry best practices through a software development internship.
            </p>

            {/* SOCIAL + STACK */}
            <div className="flex flex-col items-center sm:flex-row justify-between space-y-6 md:space-y-0">

              {/* SOCIAL */}
              <div className="space-y-2 flex flex-col items-center">
                <h1 className="font-semibold"> Available on</h1>
                <ul className="flex space-x-6 text-3xl cursor-pointer">
                  <li className="transition-transform duration-200 hover:scale-125 hover:text-pink-500">
                    <a href="https://www.instagram.com/mokshsheokand11/" target="_blank" >
                    <FaInstagram />
                    </a>
                    </li>
                  <li className="transition-transform duration-200 hover:scale-125 hover:text-blue-600">
                    <a href="https://www.linkedin.com/in/moksh-sheokand-46a8532b6/" target="_blank" >
                    <FaLinkedin />
                    </a>
                    </li>
                  <li className="transition-transform duration-200 hover:scale-125 hover:text-red-500">
                   <a
                   href="https://mail.google.com/mail/?view=cm&fs=1&to=mokshsheokand11@gmail.com"
                   target="_blank" rel="noopener noreferrer"
    
  >
                    <CiMail />
                    </a>
                    </li>
                  <li className="transition-transform duration-200 hover:scale-125 hover:text-gray-800">
                    
                    <a href="https://github.com/Mokshsheokand11" target="_blank"> 
                    <FaGithub />
                    </a>
                    </li>
                </ul>
              </div>

              {/* TECH STACK */}
              <div className="space-y-2">
                <h1 className="font-semibold flex flex-col items-center ">Worked on</h1>
                <div className="flex space-x-5">
                  <SiMongodb className="text-xl md:text-3xl transition-transform duration-200 hover:scale-125 hover:text-green-600" />
                  <SiExpress className="text-xl md:text-3xl transition-transform duration-200 hover:scale-125 hover:text-gray-700" />
                  <FaReact className="text-xl md:text-3xl transition-transform duration-200 hover:scale-125 hover:text-blue-500" />
                  <FaNodeJs className="text-xl md:text-3xl transition-transform duration-200 hover:scale-125 hover:text-green-500" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
      <hr className="my-30 border-gray-300" />
    </Element>
  );
}

export default Home;

