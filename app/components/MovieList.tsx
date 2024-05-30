import * as https from "https"

interface Options {
  method: string
  hostname: string
  port: null
  path: string
  headers: {
    accept: string
    Authorization: string
  }
}

interface Movie {
  id: number
  thumbnail: string
  title: string
  likes: number
  rating: number
  overview: string
}

export async function getMovies() {
  const options: Options = {
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

        return movies
      })
    })
    req.end()
  } catch (error) {
    console.error(`Error in getMovies: ${error}`)
  }
}
