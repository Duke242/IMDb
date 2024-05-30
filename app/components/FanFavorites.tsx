import React from "react"
import { CgPlayButton, CgChevronLeft, CgChevronRight } from "react-icons/cg"
import { FiChevronRight } from "react-icons/fi"

type Movie = {
  id: number
  ranking: number
  title: string
  subtitle: string
  imageUrl: string
  rating: number
  trailerUrl: string
}

const FanFavorites = ({ movies }: { movies: Movie[] }) => {
  return (
    <div className="flex flex-col w-screen">
      <div>
        <h1 className="text-white text-xl font-bold border-l-4 border-yellow-500 pl-2 ml-14 h-fit mb-2">
          Fan Favorites
        </h1>
        <p className="text-gray-400 mb-4 ml-14">
          This week's top TV and movies
        </p>
      </div>
      <div className="flex ml-14 bg-black">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="bg-gray-900 shadow-md rounded-md overflow-hidden w-48 ml-4"
          >
            <img
              src={movie.imageUrl}
              alt={movie.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <span className="text-yellow-500 text-lg">{movie.rating}</span>
              <h2 className="text-lg mb-2 text-white">
                {movie.ranking}.{" "}
                {movie.title.length > 10
                  ? `${movie.title.substring(0, 10)}...`
                  : movie.title}
              </h2>
              <p className="text-blue-500 text-sm mb-4 bg-gray-800 p-2 rounded text-center">
                {movie.subtitle}
              </p>
              <div className="flex items-center justify-center">
                <a
                  href={movie.trailerUrl}
                  className="text-white rounded-md flex items-center text-center"
                >
                  <CgPlayButton size={40} />
                  <span className="font-bold">Trailer</span>
                </a>
              </div>
            </div>
          </div>
        ))}
        <button className="flex border border-white h-fit my-auto">
          <FiChevronRight size={30} color="white" />
        </button>
      </div>
    </div>
  )
}

export default FanFavorites
