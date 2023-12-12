
import './App.css'
import Navbar from './Shared/Navbar/Navbar'
import Hero from './pages/Hero/Hero'
import About from './pages/About/About'
import Skills from './pages/Skills/Skills'
import Hobbies from './pages/Hobbies/Hobbies'
import Portfolio from './pages/Portfolio/Portfolio'
import Contact from './pages/Contact/Contact'
import Footer from './Shared/Footer/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

function App() {

  AOS.init();
  useEffect(() => {
    AOS.refresh();
  }, [])

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Hobbies></Hobbies>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <Footer></Footer>

    </>
  )
}

export default App
