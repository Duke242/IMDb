import React from "react"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import { AiOutlineFileText, AiOutlinePicture } from "react-icons/ai"

const FeaturedToday = () => {
  return (
    <div className="bg-black text-white p-6">
      <h2 className="text-yellow-500 text-3xl font-bold mb-4">
        Featured today
      </h2>
      <div className="relative flex items-center space-x-4">
        {/* Arrow left */}
        <button className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75">
          <FiChevronLeft size={30} color="white" />
        </button>

        {/* Content */}
        <div className="flex space-x-4 overflow-hidden">
          <div className="relative w-96 h-48">
            <img src="moana.jpeg" alt="Mandy" className="w-full h-auto " />

            <p className="mt-2 w-96">
              5 Movies to Watch While Gearing Up for 'Furiosa'
            </p>
            <a href="#" className="text-blue-400">
              See the list
            </a>
          </div>
          <div className="relative w-96">
            <img
              src="moana.jpeg"
              alt="Hottest Stars"
              className="w-full h-auto"
            />
            <p className="mt-2">
              5 Movies to Watch While Gearing Up for 'Furiosa'
            </p>
            <a href="#" className="text-blue-400">
              See the gallery
            </a>

            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 -mr-4 border border-white hover:bg-opacity-75 ">
              <FiChevronRight size={30} color="white" />
            </button>
          </div>
        </div>
      </div>
      <div className="mt-4 text-right mr-14">
        <a href="#" className="text-blue-400 text-sm font-bold">
          Get more recommendations {">"}
        </a>
      </div>
    </div>
  )
}

export default FeaturedToday
