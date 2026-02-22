import { Element } from "react-scroll";
import React from "react";
import Java from "../../public/Java.jpg";
import Mongodb from "../../public/Mongodb.png";
import Nodejs from "../../public/Node.png";
import Reactjs from "../../public/React.png";
import express from "../../public/express.png";
import python from "../../public/python.jpeg";

function Portfolio() {
  const cardItems = [
    { id: 1, logo: Java, name: "Java" },
    { id: 2, logo: Mongodb, name: "Mongodb" },
    { id: 3, logo: Nodejs, name: "Nodejs" },
    { id: 4, logo: Reactjs, name: "Reactjs" },
    { id: 5, logo: express, name: "Expressjs" },
    { id: 6, logo: python, name: "Python" },
  ];

  return (
    <Element name="portfolio">
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-16">
        <div>
          <h1 className="w-full text-2xl font-semibold mt-12 mb-4 cursor-default text-gray-950">
            My Portfolio
          </h1>

          <span className="underline font-semibold cursor-default">
            Featured Project's
          </span>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8 mb-12">
            {cardItems.map(({ id, logo, name }) => (
              <div
                key={id}
                className="md:w-[300px] border-[2px] rounded-lg shadow-lg 
                           p-4 cursor-pointer 
                           hover:scale-110 hover:bg-blue-50
                           transition-all duration-300
                           flex flex-col gap-4"
              >
                <img
                  src={logo}
                  alt={name}
                  className="w-[120px] h-[120px] p-1 rounded-full border-[2px] mx-auto"
                />

                <div className="px-2 text-center">
                  <div className="font-semibold text-xl mb-2">{name}</div>

                  <p className="text-gray-700 text-sm leading-relaxed">
                    {name === "Java"
                      ? "Developed a Java-based supermarket billing system featuring real-time invoice generation, product management, and efficient transaction processing."
                      : "Developed a full-stack application focusing on modular components, seamless data flow, and performance-oriented design."}
                  </p>
                </div>

                <div className="px-6 py-4 flex justify-around">
                  
                  {name === "Java" ? (
                    <a
                      href="https://the-daily-grocer.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="bg-green-500 hover:bg-green-800 text-white font-semibold px-4 py-2 rounded">
                        Preview
                      </button>
                    </a>
                  ) : (
                    <button className="bg-green-500 hover:bg-green-800 text-white font-semibold px-4 py-2 rounded">
                      Preview
                    </button>
                  )}

                  {name === "Java" ? (
                    <a
                      href="https://github.com/Mokshsheokand11/The-Daily_Grocer"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="bg-blue-500 hover:bg-blue-800 text-white font-semibold px-4 py-2 rounded">
                        Source code
                      </button>
                    </a>
                  ) : name === "Mongodb" ? (
                    <a
                      href="https://github.com/Mokshsheokand11/runhost"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="bg-blue-500 hover:bg-blue-800 text-white font-semibold px-4 py-2 rounded">
                        Source code
                      </button>
                    </a>
                  ) : (
                    <button className="bg-blue-500 hover:bg-blue-800 text-white font-semibold px-4 py-2 rounded">
                      Source code
                    </button>
                  )}

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Portfolio;