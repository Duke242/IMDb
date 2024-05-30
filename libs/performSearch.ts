import * as https from "https"

export const fetchData = (query: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const options = {
      method: "GET",
      hostname: "api.themoviedb.org",
      port: null,
      path: `/3/search/keyword?query=${encodeURIComponent(query)}&page=1`,
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMjE3NDJhNDg4MjU4MmI0ODI4NWUzYjNhNmYxMDY4YiIsInN1YiI6IjY2NTc4OGZkMDdhYmFkOTAzZmE4YjkyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GpXhIk3RKM_Nbli0MV8OKm10Jq6k66abp5dbhRGMBSA",
      },
    }

    const req = https.request(options, (res) => {
      const chunks: Buffer[] = []

      res.on("data", (chunk) => {
        chunks.push(chunk)
      })

      res.on("end", () => {
        const body = Buffer.concat(chunks)
        resolve(body.toString())
      })

      res.on("error", (error) => {
        reject(error)
      })
    })

    req.on("error", (error) => {
      reject(error)
    })

    req.end()
  })
}
