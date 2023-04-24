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
      <p className="">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </p>
      <p className="">
        Simplify your reading with Summize, an open-source article summarizer that transforms lengthy articles into
        clear and concise summaries
      </p>

      <h3>
        <blockquote className="text-xl italic font-semibold text-gray-900 ">
          <p><small>"Just built out of boredom, don't get too serious! 😂"</small></p>
          <p className=""><small>...Ben Obi</small></p>
        </blockquote>
      </h3>
    </header>
  )
}

export default Hero
