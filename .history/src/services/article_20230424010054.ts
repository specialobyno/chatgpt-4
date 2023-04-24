import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const options = {
    method: 'GET',
    url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
    params: {
      url: 'https://time.com/6266679/musk-ai-open-letter/',
      length: '3'
    },
    headers: {
      'content-type': 'application/octet-stream',
      'X-RapidAPI-Key': '37d8af1f21mshd3a3ad4de508bbap1b6963jsn178e001a7aa9',
      'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
    }
  };
export const articleApi = createApi({
    reducerPath: "articleApi",
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key')
        }
    }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            query: (params) => 'test'
        })
    })

})