import { FormEvent, useEffect, useState } from "react"
import copy from "../assets/copy.svg"
import linkIcon from "../assets/link.svg"
import loader from "../assets/loader.svg"
import tick from "../assets/tick.svg"
import { useLazyGetSummaryQuery } from "../services/article"
import { SerializedError } from "@reduxjs/toolkit"
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query"
interface GetSummaryResponse {
  error: FetchBaseQueryError | SerializedError | undefined,
  isFetching: boolean
}
const Demo = () => {
  const [article, setArticle] = useState<{
    url: string
    summary: string
  }>({
    url: "",
    summary: "",
  })
  const [getSummary, {error, isFetching}] = useLazyGetSummaryQuery()
  const [allArticles, setAllArticles] = useState<{ summary: any; url: string; }[]>([])
  useEffect(()=> {
    const unParsedArticlesFromLocalStorage = localStorage.getItem('articles')
    const articlesFromLocalStorage = unParsedArticlesFromLocalStorage ? JSON.parse(unParsedArticlesFromLocalStorage) : []
    setAllArticles(articlesFromLocalStorage)
  }, [])
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { data } = await getSummary({articleUrl: article.url})
    if(data?.summary){
      const newArticle = {...article, summary: data.summary}
      const updatedAllArticles = [newArticle, ...allArticles]
      setArticle(newArticle)
      setAllArticles(updatedAllArticles)
      localStorage.setItem('articles', JSON.stringify(updatedAllArticles))  
    }
  }
  return (
    <section className="mt-16 w-full max-w-xl">
      <div className="flex flex-col w-full gap-2">
        <form onSubmit={handleSubmit} className="relative flex justify-center items-center">
          <img src={linkIcon} alt="link" className="absolute left-0 my-2 ml-3 w-5" />
          <input
            type="url"
            placeholder="Enter a url"
            value={article.url}
            onChange={(e) => setArticle({ ...article, url: e.target.value })}
            required
            className="url_input peer text-green-900"  
          />
          <button type="submit" className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700">
            ⏎
          </button>
        </form>
        <div className="flex flex-col gap-1 max-h-60 overflow-y-auto">
          {allArticles.map((item, index) =>(
            <div
            key={`link-${index}`}
            onClick={() => setArticle(item)}
            className="link_card"
            >
              <div className="copy_btn">
                <img src={copy} alt="copy_icon" className="w-[40%] h-[40%] object-contain" />
              </div>
              p
            </div>
          ))}
        </div>
      </div>
      {/* Display result */}
    </section>
  )
}

export default Demo
