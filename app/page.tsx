import Header from "./components/Header"
import TrailerList from "./components/TrailerList"
import VideoSection from "./components/VideoSection"

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
      </main>
      <footer className="bg-gray-100 py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 My Website. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
