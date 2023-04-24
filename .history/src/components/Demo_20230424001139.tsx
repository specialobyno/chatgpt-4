import { useState } from "react"
import copy from "../assets/copy.svg"
import linkIcon from "../assets/link.svg"
import loader from "../assets/loader.svg"
import tick from "../assets/tick.svg"
const Demo = () => {
  const [article, setArticle] = useState({
    url: '',
    summary: ''
  })
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  return (
    <section className="mt-16 w-full max-w-xl">
      <div className="flex flex-col w-full gap-2">
        <form onSubmit={handleSubmit} className="relative flex justify-center items-center">
          <img src={linkIcon} alt="link" className="absolute left-0 my-2 ml-3 w-5" />
          <input type="url" placeholder="Enter a url" value=""
          onChange={() => {}}
          required
          className="url_input peer"
          />
          <button type="submit"
          className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700"
          >
            ⏎
          </button>
        </form>
        { /* Browse URL history */}
      </div>
      { /* Display result */}
    </section>
  )
}

export default Demo
