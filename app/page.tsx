import FanFavorites from "./components/FanFavorites"
import FeaturedToday from "./components/FeaturedToday"
import Header from "./components/Header"
import MovieList from "./components/MovieList"
import TrailerList from "./components/TrailerList"
import VideoSection from "./components/VideoSection"
import WhatToWatch from "./components/WhatToWatch"

export default function Home() {
  const movies = [
    {
      id: 1,
      ranking: 1,
      title: "Bridgerton",
      subtitle: "Watch on Netflix",
      imageUrl: "moana.jpeg",
      rating: 7.4,
      trailerUrl: "...",
    },
    {
      id: 2,
      ranking: 2,
      title: "The Crown",
      subtitle: "Watch on Netflix",
      imageUrl: "moana.jpeg",
      rating: 8.2,
      trailerUrl: "...",
    },
    {
      id: 3,
      ranking: 3,
      title: "Stranger Things",
      subtitle: "Watch on Netflix",
      imageUrl: "moana.jpeg",
      rating: 8.7,
      trailerUrl: "...",
    },
    {
      id: 4,
      ranking: 4,
      title: "The Queen's Gambit",
      subtitle: "Watch on Netflix",
      imageUrl: "moana.jpeg",
      rating: 8.6,
      trailerUrl: "...",
    },
    {
      id: 5,
      ranking: 5,
      title: "The Witcher",
      subtitle: "Watch on Netflix",
      imageUrl: "moana.jpeg",
      rating: 8.2,
      trailerUrl: "...",
    },
    {
      id: 6,
      ranking: 6,
      title: "Black Mirror",
      subtitle: "Watch on Netflix",
      imageUrl: "moana.jpeg",
      rating: 8.8,
      trailerUrl: "...",
    },
  ]
  return (
    <div className="min-h-screen w-full flex flex-col bg-black">
      <Header />
      <main className="py-8">
        <section className="flex justify-around space-x-8">
          <div className="w-2/3 ml-14 flex-grow">
            <VideoSection />
          </div>
          <div className="w-1/3">
            <TrailerList />
          </div>
        </section>
        <section>
          <section>
            <FeaturedToday />
          </section>
          <section>
            <WhatToWatch />
          </section>
          <section className="mb-14">
            <MovieList movies={movies} />
          </section>
          <section>
            <FanFavorites movies={movies} />
          </section>
        </section>
      </main>
    </div>
  )
}
