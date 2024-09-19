import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar/Navbar'
import Hero from './component/Hero/Hero'
import AboutMe from './component/AboutMe/AboutMe'
import Experience from './component/Experience/Experience'
import Education from './component/Education/Education'
import Try from './component/Try/Try'
import Projects from './component/Projects/Projects'
import Contact from './component/Contact/Contact'
import Footer from './component/Footer/Footer'

function App() {

  const [theme, seTheme] = useState('light')
  
  return (
    <>
      <Navbar seTheme={seTheme} theme={theme} />
      <Hero theme={theme} />
      <AboutMe theme={theme} />
      <Experience theme={theme} />
      <Education theme={theme} />
      <Try theme={theme} />
      <Projects theme={theme} />
      <Contact theme={theme} />
      <Footer theme={theme} />
    </>
  )
}

export default App
