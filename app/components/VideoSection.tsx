"use client"
import { getMovies } from "@/libs/getMovies"
import { useQuery } from "@tanstack/react-query"
import React, { useState } from "react"
import { CgPlayButtonO } from "react-icons/cg"
import { FaRegThumbsUp, FaHeart } from "react-icons/fa"
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi"

const VideoSection: React.FC = () => {
  const { data } = useQuery({ queryKey: ["movies"], queryFn: getMovies })
  const [showMovieInfo, setShowMovieInfo] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  if (!data) {
    return <div>Loading...</div>
  }

  const { thumbnail, title, rating, likes, overview } = data[0]

  return (
    <div
      className={`relative w-full h-auto hover:cursor-pointer ${
        isHovered && !showMovieInfo ? "opacity-75" : ""
      }`}
      onClick={() => setShowMovieInfo(!showMovieInfo)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={thumbnail}
        alt="Video Thumbnail"
        className="w-full"
        style={{ height: "550px" }}
      />
      <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black via-transparent bg-opacity-50">
        <div className="relative flex justify-center w-full mb-4 px-4">
          <img
            src={thumbnail}
            className="w-24 h-32 sm:w-32 sm:h-44 lg:w-44 lg:h-64 absolute left-2 bottom-0"
            alt={title}
          />
          <div className="relative w-full flex text-left text-white py-2 rounded-lg bg-opacity-70 transition-colors duration-300 ease-in-out hover:bg-opacity-90 cursor-pointer">
            <div className="flex items-center w-full">
              <div className="ml-28 lg:ml-48 xl:ml-52">
                <CgPlayButtonO
                  size={80}
                  color={isHovered ? "yellow" : "white"}
                  className="transition-colors duration-300 ease-in-out"
                />
              </div>
              <div className="ml-4">
                <div className="text-2xl flex items-center">
                  <h2>{title}</h2>
                  <span className="ml-2 text-sm text-gray-300">{rating}</span>
                </div>
                <div className="text-lg text-gray-400">
                  Watch the Teaser Trailer
                </div>
                <div className="flex items-center gap-2 text-sm mt-2">
                  <FaRegThumbsUp /> {likes}{" "}
                  <span className="flex items-center gap-2 ml-4">
                    <FaHeart color="red" />{" "}
                    {overview.length > 50
                      ? `${overview.substring(0, 50)}...`
                      : overview}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showMovieInfo && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg relative">
            <h2 className="text-2xl mb-4">{title}</h2>
            <p className="mb-4">{overview}</p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="font-bold">Rating:</span>
                <span>{rating}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaRegThumbsUp />
                <span>{likes} likes</span>
              </div>
            </div>
            <button
              className="absolute top-2 right-2 p-2 bg-gray-200 rounded-full hover:bg-gray-300"
              onClick={() => setShowMovieInfo(false)}
            >
              <FiX size={20} />
            </button>
          </div>
        </div>
      )}
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
