import { useEffect, useState } from "react"
import "./About.css"
import cv from "../../assets/fabian-rata.pdf"
import me from "../../assets/me_portfolio.webp"


const About = ({ scrollToSection }) => {
  const [type, setType] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setType(!type)
    }, 500)
  }, [type])


  return (
    <div className="about_main_container">
      <div className="about_img_container">
        <img src={me} alt="Fabian" />
      </div>
    <div className="about_conatiner">
      <h1>ABOUT ME</h1>
      <div>
        <p>I’m a frontend developer specializing in React and JavaScript. I have a passion for building engaging, responsive websites for both desktop and mobile.</p>
        <p>With solid experience in React, I can confidently start projects from scratch and deliver clean, efficient code. While frontend is my main focus, I’m eager to expand my skills across the broader field of software development.</p>
        <p>Currently, I volunteer at XPROLA, collaborating with developers and designers to create mobile apps and websites that empower individuals and businesses.</p>
        <p>Beyond coding, I stay active at the gym, sharpen my mind with chess, and enjoy meeting new people. I’m also an avid traveler, always seeking fresh perspectives and experiences <span id="about_type_effect" style={{ color: type ? "#002D18" : "transparent" }}>|</span></p>
      </div>

      <div className="about_btn_container">
        <button onClick={() => scrollToSection("projects")}>VIEW WORKS</button>
        <a href={cv} download="fabian-cv.pdf">DOWNLOAD CV</a>
      </div>
    </div>
      </div>
  )
}

export default About