

import Demo from './components/Demo'
import Hero from './components/Hero'

import './App.css'
const App = () => {

  return (
    <main>
        <div className=''>
            <div className="gradient" />
            <div className="app">
                <Hero />
                <Demo />
            </div>
        </div>
    </main>
  )
}

export default App