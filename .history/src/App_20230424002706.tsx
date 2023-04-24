

import Demo from './components/Demo'
import Hero from './components/Hero'

import './App.css'
const App = () => {

  return (
    <main>
        <div className='main'>
            <div className="gradient" />
            <div className="app">
                <Hero />
                <Demo />
                <input type="text" name="" id="" placeholder='yeyy' />
            </div>
        </div>
    </main>
  )
}

export default App