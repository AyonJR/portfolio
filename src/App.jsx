// src/App.jsx
import React from 'react';
import './App.css';
import AboutMe from './Components/AboutMe';
import ContactMe from './Components/ContactMe';
import Education from './Components/Education';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import ParticlesBackground from './Components/ParticlesBackground';

function App() {
  return (
    <div className=" bg-gray-900">
      <ParticlesBackground />
      <div className="relative z-10">
        <Navbar />
        <div className="lg:mx-28 mx-5">
          <Hero />
        </div>
        <AboutMe />
        <Skills />
        <Projects />
        <Education />
        <ContactMe />
        <Footer />
      </div>
    </div>
  );
}

export default App;
