import React from "react"
import { BsBookmarkPlusFill } from "react-icons/bs"

function WhatToWatch() {
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
      </div>
    </div>
  )
}

export default WhatToWatch
