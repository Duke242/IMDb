"use client"
import React, { useState } from "react"
import { CgPlayButtonO } from "react-icons/cg"
import { FaThumbsUp } from "react-icons/fa"
import { HiHeart } from "react-icons/hi"
import { FiX } from "react-icons/fi"
import { useQuery } from "@tanstack/react-query"
import { getMovies } from "@/libs/getMovies"

type Movie = {
  id: number
  thumbnail: string
  title: string
  likes: number
  rating: number
  overview: string
}

const TrailerList = () => {
  const {
    data: movies,
    isLoading,
    isError,
  } = useQuery<Movie[]>({
    queryKey: ["movies"],
    queryFn: getMovies,
  })

  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError || !movies || movies.length === 0) {
    return <div>No movies available.</div>
  }

  const limitedMovies = movies.slice(0, 3)

  return (
    <div className="mx-auto w-full">
      <h2 className="text-xl font-bold mb-4 text-yellow-500">Up next</h2>
      {limitedMovies.map((movie) => (
        <div
          key={movie.id}
          className="mb-6 flex cursor-pointer hover:opacity-75"
          onClick={() => setSelectedMovie(movie)}
        >
          <div className="relative">
            <img
              src={movie.thumbnail}
              alt={movie.title}
              className="w-20 h-32"
            />
          </div>
          <div className="ml-4 pr-4">
            <div className="flex items-center gap-2 text-white">
              <CgPlayButtonO /> {movie.rating}
            </div>
            <h3 className="text-lg mt-2 text-white">{movie.title}</h3>
            <p className="text-gray-400">
              {movie.overview.split(" ").slice(0, 10).join(" ")}...
            </p>
            <div className="flex items-center mt-2">
              <span className="flex gap-2 mr-4 text-gray-400">
                <FaThumbsUp /> {movie.likes}
              </span>
              <span className="flex items-center gap-1 text-gray-400">
                <HiHeart />
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
      {selectedMovie && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg relative">
            <h2 className="text-2xl mb-4">{selectedMovie.title}</h2>
            <p className="mb-4">{selectedMovie.overview}</p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="font-bold">Rating:</span>
                <span>{selectedMovie.rating}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaThumbsUp />
                <span>{selectedMovie.likes} likes</span>
              </div>
            </div>
            <button
              className="absolute top-2 right-2 p-2 bg-gray-200 rounded-full hover:bg-gray-300"
              onClick={() => setSelectedMovie(null)}
            >
              <FiX size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default TrailerList
