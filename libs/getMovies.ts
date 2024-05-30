import * as https from "https"

interface Movie {
  id: number
  thumbnail: string
  title: string
  likes: number
  rating: number
  overview: string
}

export async function getMovies(): Promise<Movie[]> {
  const options = {
    method: "GET",
    hostname: "api.themoviedb.org",
    port: null,
    path: "/3/trending/movie/day?language=en-US",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMjE3NDJhNDg4MjU4MmI0ODI4NWUzYjNhNmYxMDY4YiIsInN1YiI6IjY2NTc4OGZkMDdhYmFkOTAzZmE4YjkyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GpXhIk3RKM_Nbli0MV8OKm10Jq6k66abp5dbhRGMBSA",
    },
  }

  return new Promise((resolve, reject) => {
    try {
      const req = https.request(options, function (res) {
        const chunks: Buffer[] = []
        res.on("data", function (chunk: Buffer) {
          chunks.push(chunk)
        })
        res.on("end", function () {
          const body = Buffer.concat(chunks)
          const jsonResponse = JSON.parse(body.toString())
          const movies: Movie[] = jsonResponse.results
            .slice(0, 5)
            .map((movie: any) => ({
              id: movie.id,
              thumbnail: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
              title: movie.title,
              likes: movie.vote_count,
              rating: movie.vote_average,
              overview: movie.overview,
            }))
          // console.log({ movies })
          resolve(movies) // Resolve the Promise with the movies array
        })
      })
      req.end()
    } catch (error) {
      console.error(`Error in getMovies: ${error}`)
      reject(error) // Reject the Promise if an error occurs
    }
  })
}
