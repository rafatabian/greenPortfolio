import { useEffect, useState } from "react"
import "./About.css"
import cv from "../../assets/fabian-rata.pdf"


const About = ({ scrollToSection }) => {
  const [type, setType] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setType(!type)
    }, 500)
  }, [type])


  return (
    <div className="about_conatiner">
      <h1>ABOUT ME</h1>
      <div>
        <p>I'm a frontend developer specializing in React and JavaScript, dedicated to crafting captivating desktop and mobile websites.</p>
        <p>My proficiency in React enables me to comfortably initiate projects from the ground up. While frontend development remains my primary focus, I'm keen to broaden my horizons in software development.</p>
        <p>Currently, I contribute as a volunteer at XPROLA, where I collaborate with a team of developers and designers to develop mobile apps and websites aimed at empowering individuals and businesses.</p>
        <p>Outside of coding, I enjoy going to the gym, playing chess to keep my mind sharp, and meeting new people. I'm also passionate about travel, always seeking new experiences and perspectives <span id="about_type_effect" style={{ color: type ? "#002D18" : "transparent" }}>|</span></p>
      </div>

      <div className="about_btn_container">
        <button onClick={() => scrollToSection("projects")}>VIEW WORKS</button>
        <a href={cv} download="fabian-cv.pdf">DOWNLOAD CV</a>
      </div>
    </div>
  )
}

export default About