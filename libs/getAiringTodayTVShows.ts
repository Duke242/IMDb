import * as https from "https"

interface TVShowResult {
  page: number
  results: TVShow[]
  total_pages: number
  total_results: number
}

interface TVShow {
  id: number
  name: string
  // Add other properties as needed
}

export function getAiringTodayTVShows(): Promise<TVShowResult> {
  const options = {
    method: "GET",
    hostname: "api.themoviedb.org",
    port: null,
    path: "/3/tv/airing_today?language=en-US&page=1&limit=2",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMjE3NDJhNDg4MjU4MmI0ODI4NWUzYjNhNmYxMDY4YiIsInN1YiI6IjY2NTc4OGZkMDdhYmFkOTAzZmE4YjkyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GpXhIk3RKM_Nbli0MV8OKm10Jq6k66abp5dbhRGMBSA",
    },
  }

  return new Promise<TVShowResult>((resolve, reject) => {
    const req = https.request(options, (res) => {
      const chunks: any[] = []

      res.on("data", (chunk) => {
        chunks.push(chunk)
      })

      res.on("end", () => {
        const body = Buffer.concat(chunks)
        const result: TVShowResult = JSON.parse(body.toString())
        resolve(result)
      })
    })

    req.on("error", (error) => {
      reject(error)
    })

    req.end()
  })
}
