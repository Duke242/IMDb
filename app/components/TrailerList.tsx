import React from "react"
import { CgPlayButtonO } from "react-icons/cg"
import { FaThumbsUp } from "react-icons/fa"
import { HiHeart } from "react-icons/hi"

const TrailerList = () => {
  const trailers = [
    {
      title: "5 Summer Movies We Can't Wait For",
      subtitle: "Deadpool & Wolverine and More",
      duration: "0:59",
      likes: 244,
      comments: 122,
      thumbnail: "moana.jpeg",
    },
    {
      title: "Brad Pitt & George Clooney Are 'Wolfs'",
      subtitle: "Watch the Trailer",
      duration: "2:37",
      likes: 31,
      comments: 23,
      thumbnail: "moana.jpeg",
    },
    {
      title: "IMDb Top 100 Most Viewed Indian Stars",
      subtitle: "A Look Back at the Last Decade",
      duration: "2:40",
      likes: 14,
      comments: 12,
      thumbnail: "moana.jpeg",
    },
  ]

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
              <CgPlayButtonO /> {trailer.duration}
            </div>
            <h3 className="text-lg  mt-2 text-white">{trailer.title}</h3>
            <p className="text-gray-400">{trailer.subtitle}</p>
            <div className="flex items-center mt-2">
              <span className="flex gap-2 mr-4 text-gray-400">
                <FaThumbsUp /> {trailer.likes}
              </span>
              <span className="flex items-center gap-1 text-gray-400">
                <HiHeart /> {trailer.comments}
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
