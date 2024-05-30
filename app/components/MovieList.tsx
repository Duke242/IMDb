import React from "react"
import { CgPlayButton } from "react-icons/cg"

const movies = [
  {
    id: 1,
    ranking: 1,
    title: "Bridgerton",
    subtitle: "Watch on Netflix",
    imageUrl: "bridgerton.jpg",
    rating: 7.4,
    trailerUrl: "moana.jpeg",
  },
  // ... other movie objects
]

const MovieList = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-white text-xl font-bold border-l-4 border-yellow-500 pl-2 ml-12 h-fit mb-4">
        Top 10 on IMDb this week
      </h1>
      <div className="flex ml-12 bg-black">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="bg-black shadow-md rounded-md overflow-hidden"
          >
            <img
              src={movie.imageUrl}
              alt={movie.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <span className="text-yellow-500 text-lg">{movie.rating}</span>
              <h2 className="text-lg mb-2 text-white">
                {movie.ranking}. {movie.title}
              </h2>
              <p className="text-blue-500 text-sm mb-4 bg-gray-800 p-2 rounded text-center">
                {movie.subtitle}
              </p>
              <div className="flex flex-col items-center justify-between">
                <a
                  href={movie.trailerUrl}
                  className="text-white px-4 py-2 rounded-md flex items-center text-center"
                >
                  <CgPlayButton size={30} /> Watch Trailer
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MovieList
