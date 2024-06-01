import React, { lazy, Suspense, useRef } from "react"
import "./App.css"
import Home from "./components/Home/Home"
import Navbar from "./components/Navbar/Navbar"

const App = () => {
  // const Home = lazy(() => import("./components/Home/Home"))
  // const Navbar = lazy(() => import("./components/Navbar/Navbar"))
  const About = lazy(() => import("./components/About/About"))
  const Skills = lazy(() => import("./components/Skills/Skills"))
  const Projects = lazy(() => import("./components/Projects/Projects"))
  const Footer = lazy(() => import("./components/Footer/Footer"))
  
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    projects: useRef(null)
  }

const scrollToSection = (id) => {
   const sectionRef = sectionRefs[id]
   if(sectionRef && sectionRef.current){
    sectionRef.current.scrollIntoView({behavior: 'smooth'})
   }
}


  return (
    <div>
      <Suspense fallback={<h1 id="loading">LOADING...</h1>}>
        <Navbar scrollToSection={scrollToSection}/>
         <section ref={sectionRefs.home} id="home">
          <Home />
        </section>
        <section ref={sectionRefs.about} id="about">
          {/* <About scrollToSection={scrollToSection}/> */}
        </section>
        <section ref={sectionRefs.skills} id="skills">
          {/* <Skills/> */}
        </section>
        <section ref={sectionRefs.projects} id="projects">
          {/* <Projects/> */}
        </section>
        <section id="footer">
          {/* <Footer scrollToSection={scrollToSection}/> */}
        </section>
      </Suspense>
    </div>
  )
}

export default App
