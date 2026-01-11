import { Element } from "react-scroll";
import React from 'react'
import TicTacToe from './TicTacToe' // TicTacToe imported only here

function About() {
  return (
    <Element name="about">
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-16">
      <h1 className="text-3xl semi-bold mb-5">About</h1>
      <p>
        Hey, I am <span className="text-blue-800 font-medium">Moksh Sheokand</span> Computer Science undergraduate working with Java and the MERN stack to build practical web applications.
        Comfortable developing clean, efficient solutions while continuously improving problem-solving skills.
        Seeking a software development internship to apply my knowledge, contribute meaningfully, and grow in a professional environment.
      </p>
      <br />

      {/* ---------------- FLEX WRAPPER FOR EDUCATION + TIC-TAC-TOE + SKILLS ---------------- */}
      <div className="flex flex-col lg:flex-row items-start justify-center gap-8">
        
        {/* ---------------- LEFT SIDE: Education + Skills ---------------- */}
        <div className="flex-1 space-y-6">
          {/* Education */}
          <h2 className="text-3xl font-semibold mb-8">Education</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium">B.Tech in Computer Science</h3>
              <p className="text-gray-400 transition-all duration-300 hover:text-sky-400 hover:underline underline-offset-4 cursor-default">
                Manav Rachna International University
              </p>
              <p className="text-sm text-gray-500">2023 – Present</p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Senior Secondary (Class XII)</h3>
              <p className="text-gray-400 transition-all duration-300 hover:text-sky-400 hover:underline underline-offset-4 cursor-default">
                Manav Rachna International School
              </p>
              <p className="text-sm text-gray-500">CBSE Board</p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Secondary (Class X)</h3>
              <p className="text-gray-400 transition-all duration-300 hover:text-sky-400 hover:underline underline-offset-4 cursor-default">
                Manav Rachna International School
              </p>
              <p className="text-sm text-gray-500">CBSE Board</p>
            </div>
          </div>

          {/* ---------------- TIC-TAC-TOE FOR MOBILE ONLY ---------------- */}
          <div className="block lg:hidden mt-6">
            <TicTacToe />
          </div>

          {/* Skills */}
          <h1 className="text-3xl font-semibold mb-8 cursor-default">Skills</h1>
          <div className="space-y-6 text-gray-900">
            {/* Languages */}
            <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-4">
              <p className="md:w-40 text-sm uppercase tracking-wider transition-colors duration-300 hover:text-purple-400 cursor-default">
                Languages
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <span className="hover:text-sky-400 transition-colors cursor-default">Java</span>
                <span className="hover:text-sky-400 transition-colors cursor-default">JavaScript</span>
              </div>
            </div>

            {/* Frontend */}
            <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-4">
              <p className="md:w-40 text-sm uppercase tracking-wider transition-colors duration-300 hover:text-green-400 cursor-default">
                Frontend
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <span className="hover:text-sky-400 transition-colors cursor-default">HTML</span>
                <span className="hover:text-sky-400 transition-colors cursor-default">CSS</span>
                <span className="hover:text-sky-400 transition-colors cursor-default">Tailwind CSS</span>
                <span className="hover:text-sky-400 transition-colors cursor-default">React</span>
              </div>
            </div>

            {/* Backend */}
            <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-4">
              <p className="md:w-40 text-sm uppercase tracking-wider transition-colors duration-300 hover:text-orange-400 cursor-default">
                Backend
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <span className="hover:text-sky-400 transition-colors cursor-default">Node.js</span>
                <span className="hover:text-sky-400 transition-colors cursor-default">Express.js</span>
              </div>
            </div>

            {/* Database */}
            <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-4">
              <p className="md:w-40 text-sm uppercase tracking-wider transition-colors duration-300 hover:text-pink-400 cursor-default">
                Database
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <span className="hover:text-sky-400 transition-colors cursor-default">MongoDB</span>
              </div>
            </div>

            {/* Tools & Concepts */}
            <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-4">
              <p className="md:w-40 text-sm uppercase tracking-wider transition-colors duration-300 hover:text-yellow-400 cursor-default">
                Tools & Concepts
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <span className="hover:text-sky-400 transition-colors cursor-default">DSA</span>
                <span className="hover:text-sky-400 transition-colors cursor-default">Git</span>
                <span className="hover:text-sky-400 transition-colors cursor-default">GitHub</span>
                <span className="hover:text-sky-400 transition-colors cursor-default">VS Code</span>
                <span className="hover:text-sky-400 transition-colors cursor-default">REST APIs</span>
                <span className="hover:text-sky-400 transition-colors cursor-default">OOP</span>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------- RIGHT SIDE: Tic-Tac-Toe FOR DESKTOP ---------------- */}
        <div className="hidden lg:flex flex-shrink-0 justify-center items-center mt-20 mr-30">
          <TicTacToe />
        </div>
      </div>

      {/* ---------------- EXPERIENCE SECTION ---------------- */}
      <h1 className="w-full text-2xl font-semibold mt-12 mb-4 cursor-default text-gray-950">
        Professional Experience
      </h1>
      <h2 className="mb-5">Freelance/Independent Client</h2>
      <a
        href="https://aggarwalrubberudyog.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-900 text-sm hover:text-sky-500 transition-colors duration-300 underline-offset-4 hover:underline"
      >
        Aggarwal Rubbers — Website
      </a>
      <ul className="list-disc ml-5 mt-3 text-gray-900 space-y-1">
        <li>Worked on building and refining dynamic web interfaces with a focus on component-based layouts and reusable UI sections.</li>
        <li>Improved user experience by structuring pages for better state flow, visual consistency, and smooth user interactions.</li>
        <li>Implemented responsive, mobile-first designs ensuring seamless performance across devices and browsers.</li>
        <li>Optimized front-end workflows by organizing page components and improving load behavior.</li>
        <li>Collaborated to translate business requirements into functional, scalable web interfaces.</li>
      </ul>
    </div>
    </Element>
  )
}

export default About
