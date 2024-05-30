"use client"
import React from "react"
import { BsBookmarkPlusFill } from "react-icons/bs"
import { CgPlayButton } from "react-icons/cg"

interface User {
  name: string
  email: string
  image: string
}

interface Session {
  user: User | null
}

function isUserLoggedIn(session: Session | null): boolean {
  return session?.user !== undefined
}

function WhatToWatch({ session }: { session: Session }) {
  const savedMovies = JSON.parse(localStorage.getItem("movieData") || "[]")

  return (
    <div className="bg-black py-8 h-fit ml-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-yellow-500 font-bold text-4xl">What to watch</h2>
        <button className="text-blue-500 font-bold hover:underline mr-8">
          Get more recommendations &gt;
        </button>
      </div>
      <h3 className="text-white text-xl mb-4 font-bold border-l-4 border-yellow-500 pl-2 ml-2">
        From your Watchlist &gt;
      </h3>
      <div className="flex justify-center">
        {isUserLoggedIn(session) ? (
          savedMovies.length > 0 ? (
            <div className="flex ml-6 bg-black">
              {savedMovies.map((movie: any, index: any) => (
                <div
                  key={index}
                  className="bg-black shadow-md rounded-md overflow-hidden"
                >
                  <img
                    src={movie.thumbnail}
                    alt={movie.title}
                    className="w-64 h-64 object-cover"
                  />
                  <div className="p-4">
                    <span className="text-yellow-500 text-lg">
                      {movie.rating}
                    </span>
                    <h2 className="text-lg mb-2 text-white">{movie.title}</h2>
                    <p className="text-blue-500 text-sm mb-4 bg-gray-800 p-2 rounded text-center">
                      {movie?.overview
                        ? movie.overview.split(" ").slice(0, 10).join(" ") +
                          "..."
                        : ""}
                    </p>
                    <div className="flex flex-col items-center justify-between">
                      <a
                        href="#"
                        className="text-white px-4 py-2 rounded-md flex items-center text-center"
                      >
                        <CgPlayButton size={30} /> Watch Trailer
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center mb-2">
              <div className="text-gray-600 text-6xl mr-4 mb-2">
                <BsBookmarkPlusFill />
              </div>
              <p className="text-white font-bold">
                Movies you've bookmarked will appear here
              </p>
            </div>
          )
        ) : (
          <div className="flex flex-col items-center mb-2">
            <div className="text-gray-600 text-6xl mr-4 mb-2">
              <BsBookmarkPlusFill />
            </div>
            <p className="text-white font-bold">
              Sign in to access your Watchlist
            </p>
            <p className="text-white mb-6">
              Save shows and movies to keep track of what you want to watch.
            </p>
            <button className="bg-gray-900 text-blue-500 text-sm font-bold py-2 px-8 rounded-md">
              Sign in to IMDb
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default WhatToWatch
