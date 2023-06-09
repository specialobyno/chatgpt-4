import logo from "../assets/logo.svg"

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="Logo" className="w-28 object-contain" />
        <button type="button" onClick={() => window.open("https://github.com/specialobyno")} className="black_btn">
          Github
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with Summize, an open-source article summarizer that transforms lengthy articles into
        clear and concise summaries
      </h2>

      <h3>
        <blockquote className="text-xl italic font-semibold text-gray-900 ">
          <p>"Just built out of boredom, don't get too serious! 😂"</p>
          <p className="">...Ben Obi</p>
        </blockquote>
      </h3>
    </header>
  )
}

export default Hero
