"use client"
import { IoMdSearch, IoMdArrowDropdown } from "react-icons/io"
import { BsBookmarkPlusFill } from "react-icons/bs"
import { IoMenu } from "react-icons/io5"

function Header() {
  return (
    <header className="bg-black py-3">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center flex-grow">
          <div
            className="mr-10 cursor-pointer"
            onClick={() => (window.location.href = "#")}
          >
            <img src="imdb.png" alt="IMDb" className="h-8" />
          </div>
          <nav className="flex-grow">
            <ul className="flex items-center space-x-6 text-white">
              <li className="flex items-center text-sm font-semibold">
                <IoMenu color="white" size={25} /> Menu
              </li>
              <li className="flex-grow">
                <div className="flex h-fit bg-white rounded">
                  <a className="text-black bg-white py-auto px-3 rounded-l border-r border-gray-300 flex items-center transition duration-500 ease-in-out">
                    All <IoMdArrowDropdown />
                  </a>
                  <form className="flex flex-grow">
                    <input
                      type="text"
                      name="search"
                      placeholder="Search IMDb"
                      className="px-3 flex-grow py-1 focus:outline-none text-sm"
                    />
                    <button
                      type="submit"
                      className="px-4 py-1 bg-white text-black h-full rounded-r"
                    >
                      <IoMdSearch size={20} color="gray" />
                    </button>
                  </form>
                </div>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center">
          <div className="mr-6 ml-3 border-r border-gray-400">
            <img
              src="imdbpro.png"
              alt="IMDbPro"
              className="h-8 cursor-pointer"
            />
          </div>
          <div className="flex items-center space-x-4">
            <a className="flex text-white hover:bg-gray-800 p-2 transition gap-2 rounded cursor-pointer items-center">
              <BsBookmarkPlusFill size={20} /> Watchlist
            </a>
            <a className="text-white hover:bg-gray-800 p-2 transition rounded cursor-pointer">
              Sign In
            </a>
            <select className="px-2 py-1 rounded-md focus:outline-none text-white bg-black">
              <option value="en">EN</option>
              <option value="es">ES</option>
              <option value="fr">FR</option>
              <IoMdArrowDropdown />
            </select>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
