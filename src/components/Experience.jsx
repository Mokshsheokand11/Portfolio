import { Element } from "react-scroll";
import React from 'react'
import Html from "../../public/Html.jpg"
import Css from "../../public/Css.png"
import Js from "../../public/Js.png"
import Mongodb from "../../public/Mongodb.png"
import Nodejs from "../../public/Node.png"
import Reactjs from "../../public/React.png"
import python from "../../public/python.jpeg"
import Java from "../../public/Java.jpg"

function Experience() {
  const cardItems = [
    { id: 1, logo: Html, name: "Html" },
    { id: 2, logo: Css, name: "Css" },
    { id: 3, logo: Js, name: "Java Script" },
    { id: 4, logo: Reactjs, name: "Reactjs" },
    { id: 5, logo: Mongodb, name: "Mongodb" },
    { id: 6, logo: Nodejs, name: "Nodejs" },
  ]

  return (
    <Element name="experience">
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-16">
      <div>
        <h1 className="w-full text-2xl font-semibold mt-12 mb-4 cursor-default text-gray-950">
          Experience
        </h1>

        <span className=" cursor-default">
          Created scalable and maintainable applications using modern web development practices.
Emphasized clean code, modular design, and seamless integration of frontend and backend.
        </span>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 mt-8 mb-12">
          {cardItems.map(({ id, logo, name }) => (
            <div
              key={id}
              className="flex flex-col items-center justify-center
                border-[2px] rounded-full
                md:w-[200px] md:h-[200px]
                p-1 cursor-pointer
                hover:scale-110 hover:bg-blue-50
                transition-all duration-300
                gap-2
                overflow-hidden"
            >
              <img
                src={logo}
                alt={name}
                className="w-[120px] h-[120px] rounded-full object-cover"
              />

              {/*  THIS IS THE IMPORTANT PART */}
              <p className="text-sm font-medium text-gray-800">
                {name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </Element>
  )
}

export default Experience
