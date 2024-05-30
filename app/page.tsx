import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
  useQuery,
} from "@tanstack/react-query"
import FanFavorites from "./components/FanFavorites"
import FeaturedToday from "./components/FeaturedToday"
import Header from "./components/Header"
// import MovieList from "./components/MovieList"
import TrailerList from "./components/TrailerList"
import VideoSection from "./components/VideoSection"
import WhatToWatch from "./components/WhatToWatch"
import { getMovies } from "@/libs/getMovies"
import { getServerSession } from "next-auth"

interface User {
  name: string
  email: string
  image: string
}

interface Session {
  user: User | null
}

export default async function Home({ dehydratedState }: any) {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ["posts"],
    queryFn: getMovies,
  })

  const session = await getServerSession()

  return (
    <HydrationBoundary state={dehydratedState}>
      <div className="min-h-screen w-full flex flex-col bg-black">
        <Header session={session as Session} />
        <main className="py-8">
          <section className="flex justify-around space-x-8">
            <div className="w-2/3 ml-14 flex-grow">
              <VideoSection />
            </div>
            <div className="w-1/3">{/* <TrailerList /> */}</div>
          </section>
          <section>
            <section>
              <FeaturedToday />
            </section>
            <section>
              <WhatToWatch />
            </section>
            <section className="mb-14">
              {/* <MovieList movies={movies} /> */}
            </section>
            <section>{/* <FanFavorites movies={movies} /> */}</section>
          </section>
        </main>
      </div>
    </HydrationBoundary>
  )
}
