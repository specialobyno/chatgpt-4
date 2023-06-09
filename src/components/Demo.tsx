import { FormEvent, useEffect, useState } from "react"
import copy from "../assets/copy.svg"
import linkIcon from "../assets/link.svg"
import loader from "../assets/loader.svg"
import tick from "../assets/tick.svg"
import { useLazyGetSummaryQuery } from "../services/article"

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
  const [copied1, setCopied1] = useState("")
  const [copied2, setCopied2] = useState("")
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
  const handleCopy = (text: string, setFunc: (arg0: string) => any) => {
    navigator.clipboard.writeText(text)
    setFunc(text)
    setTimeout(() => setFunc(''), 3000)
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
            className="link_card"
            >
              <div className="copy_btn" onClick={() => handleCopy(item.url, setCopied1)}>
                <img src={copied1 === item.url ? tick : copy} alt="copy_icon" className="w-[40%] h-[40%] object-contain " />
              </div>
              <p 
              onClick={() => setArticle(item)}
              className="flex-1 font-satoshi text-blue-700 font-medium text-sm truncate">
                {item.url}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="my-10 max-w-full flex justify-center">
            {isFetching ? (
              <img src={loader} alt="loader" className="w-20 h-20 object-contain" />
            ) : (
              error ? (
                <p className="font-inter font-bold text-black text-center">
                  Ops! That wasn't supposed to happen
                  <br />
                  <span className="font-satoshi font-normal text-gray-700">
                    {(error as any).data.message}
                  </span>
                </p>
              ) : (
                article.summary && (
                  <div className="flex flex-col gap3">
                    <h2 className="font-satoshi font-bold text-gray-600 text-xl">
                      Article <span className="blue_gradient">Summary</span>
                    </h2>
                    <div className="summary_box">
                      <p className="text-justify font-inter font-medium text-sm text-gray-700">{article.summary}</p>
                    </div>
                    <div className="flex  justify-end p-2 w-full" >
                      <button 
                      disabled={copied2 === article.summary}
                      type="button" 
                      className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 text-white text-sm font-bold py-2 px-4 rounded-full" 
                      onClick={()=> handleCopy(article.summary, setCopied2)}
                      >
                        {copied2 === article.summary ? (
                          <small>Copied</small>
                        ): (
                          <small>Copy Summary</small>
                        )}
                      </button>
                    </div>
                  </div>
                  
                )
              )
            ) }
      </div>
    </section>
  )
}

export default Demo
