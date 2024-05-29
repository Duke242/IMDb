import React from "react"
import { CgPlayButtonO } from "react-icons/cg"
import { FaRegThumbsUp, FaHeart } from "react-icons/fa"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"

const VideoSection = () => {
  return (
    <div className="relative w-full h-auto">
      <img src="moana.jpeg" alt="Video Thumbnail" className="w-full h-auto" />
      <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black via-transparent bg-opacity-50">
        <div className="relative flex justify-center w-full mb-4 px-4">
          <img
            src="moana.jpeg"
            className="w-24 h-32 sm:w-32 sm:h-44 lg:w-44 lg:h-64 absolute left-2 bottom-0"
            alt="Moana 2 Poster"
          />
          <div className="relative w-full flex text-left text-white py-2 rounded-lg bg-opacity-70">
            <div className="flex items-center w-full">
              <div className="ml-28 lg:ml-48 xl:ml-52">
                <CgPlayButtonO
                  size={80}
                  color="white"
                  className="hover:text-yellow-500"
                />
              </div>
              <div className="ml-4">
                <div className="text-2xl flex items-center">
                  <h2>'Moana 2'</h2>
                  <span className="ml-2 text-sm text-gray-300">1:44</span>
                </div>
                <div className="text-lg text-gray-400">
                  Watch the Teaser Trailer
                </div>
                <div className="flex items-center gap-2 text-sm mt-2">
                  <FaRegThumbsUp /> 77
                  <span className="flex items-center gap-2 ml-4">
                    <FaHeart color="red" /> 57
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 hover:bg-opacity-75 ml-4">
        <FiChevronLeft size={40} color="white" />
      </button>

      <button className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 hover:bg-opacity-75 mr-4">
        <FiChevronRight size={40} color="white" />
      </button>
    </div>
  )
}

export default VideoSection
