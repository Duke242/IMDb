import FeaturedToday from "./components/FeaturedToday"
import Header from "./components/Header"
import TrailerList from "./components/TrailerList"
import VideoSection from "./components/VideoSection"
import WhatToWatch from "./components/WhatToWatch"

export default function Home() {
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
          <FeaturedToday />
          <WhatToWatch />
        </section>
      </main>
    </div>
  )
}
