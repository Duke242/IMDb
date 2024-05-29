import React from "react"
import { FaRegThumbsUp, FaHeart } from "react-icons/fa"
import { CgPlayButtonO } from "react-icons/cg"

const VideoSection: React.FC = () => {
  return (
    <div className="relative w-full h-auto">
      <img src="moana.jpeg" alt="Video Thumbnail" className="w-full h-auto" />
      <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black bg-opacity-50">
        <div className="relative flex justify-center w-full mb-4">
          <img
            src="moana.jpeg"
            className="w-44 h-64 absolute left-2 bottom-0"
          />
          <div className="relative w-70 flex text-left text-white py-2 rounded">
            <div className="flex items-center">
              <div className="ml-4">
                <CgPlayButtonO
                  size={100}
                  color="white"
                  className="hover:text-yellow-500"
                />
              </div>
              <div>
                <div className="ml-4">
                  <div className="text-2xl flex items-center">
                    <h2>'Moana 2'</h2>
                    <span className="ml-2 text-sm text-gray-300">1:44</span>
                  </div>
                  <div>Watch the Teaser Trailer</div>
                  <div className="flex items-center gap-1 text-sm">
                    <FaRegThumbsUp /> 77{" "}
                    <span className="flex items-center gap-1 ml-2">
                      <FaHeart /> 57
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoSection