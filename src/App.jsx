
import './App.css'
import AboutMe from './Components/AboutMe'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Skills from './Components/Skills'

function App() {

  return (
    <div >
    <div>
    <Navbar></Navbar>

    </div>
      <div className='mx-28'>
      <Hero></Hero>

      </div>
      <div>
        <AboutMe></AboutMe>
      </div>
      <div>
        <Skills></Skills>
      </div>
    </div>
  )
}

export default App
