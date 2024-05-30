import React from "react"
import { CgPlayButtonO } from "react-icons/cg"
import { FaThumbsUp } from "react-icons/fa"
import { HiHeart } from "react-icons/hi"

type Trailer = {
  id: number
  thumbnail: string
  title: string
  likes: number
  rating: number
  overview: string
}

const TrailerList = ({ trailers }: { trailers: Trailer[] }) => {
  return (
    <div className="mx-auto w-full">
      <h2 className="text-xl font-bold mb-4 text-yellow-500">Up next</h2>
      {trailers.map((trailer, index) => (
        <div key={index} className="mb-6 flex">
          <div className="relative">
            <img
              src={trailer.thumbnail}
              alt={trailer.title}
              className="w-20 h-32"
            />
          </div>

          <div className="ml-4 pr-4">
            <div className="flex items-center gap-2 text-white">
              <CgPlayButtonO /> {trailer.rating}
            </div>
            <h3 className="text-lg  mt-2 text-white">{trailer.title}</h3>
            <p className="text-gray-400">{trailer.overview}</p>
            <div className="flex items-center mt-2">
              <span className="flex gap-2 mr-4 text-gray-400">
                <FaThumbsUp /> {trailer.likes}
              </span>
              <span className="flex items-center gap-1 text-gray-400">
                <HiHeart /> {trailer.overview}
              </span>
            </div>
          </div>
        </div>
      ))}
      <a
        href="#"
        className="text-white font-bold text-xl hover:text-yellow-500"
      >
        Browse trailers &gt;
      </a>
    </div>
  )
}

export default TrailerList
