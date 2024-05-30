"use client"
import React from "react"
import { CgPlayButtonO } from "react-icons/cg"
import { FaThumbsUp } from "react-icons/fa"
import { HiHeart } from "react-icons/hi"
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
        <div key={movie.id} className="mb-6 flex">
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
    </div>
  )
}

export default TrailerList
