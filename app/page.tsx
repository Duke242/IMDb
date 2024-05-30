import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
  useQuery,
} from "@tanstack/react-query"
import FanFavorites from "./components/FanFavorites"
import FeaturedToday from "./components/FeaturedToday"
import Header from "./components/Header"
import TrailerList from "./components/TrailerList"
import VideoSection from "./components/VideoSection"
import WhatToWatch from "./components/WhatToWatch"
import { getMovies } from "@/libs/getMovies"
import { getServerSession } from "next-auth"
import { getAiringTodayTVShows } from "@/libs/getAiringTodayTVShows"
import MovieList from "./components/MovieList"

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
    queryKey: ["movies"],
    queryFn: getMovies,
  })

  await queryClient.prefetchQuery({
    queryKey: ["today"],
    queryFn: getAiringTodayTVShows,
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
            <div className="w-1/3">
              <TrailerList />
            </div>
          </section>
          <section>
            <section>
              <FeaturedToday />
            </section>
            <section>
              <WhatToWatch session={session as Session} />
            </section>
            <section className="mb-14">
              <MovieList />
            </section>
            <section>
              <FanFavorites />
            </section>
          </section>
        </main>
      </div>
    </HydrationBoundary>
  )
}
