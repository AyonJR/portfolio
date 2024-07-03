
import './App.css'
import AboutMe from './Components/AboutMe'
import Education from './Components/Education'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Projects from './Components/Projects'
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
      <div>
        <Projects></Projects>
      </div>
      <div>
        <Education></Education>
      </div>
    </div>
  )
}

export default App
