import "./Navbar.css"
import { GoHome, GoHomeFill } from "react-icons/go"
import { BsInfoCircle, BsInfoCircleFill } from "react-icons/bs"
import { IoDesktopOutline, IoDesktop, IoMenu, IoClose } from "react-icons/io5"
import { FaRegLightbulb, FaLightbulb, FaGithub, FaLinkedin } from "react-icons/fa6"
import { useEffect, useState } from "react"

const Navbar = ({ scrollToSection }) => {
  const [homeIco, setHomeIco] = useState(false)
  const [infoIco, setInfoIco] = useState(false)
  const [skillsIco, setSkillsIco] = useState(false)
  const [projIco, setProjIco] = useState(false)
  const [mobile, setMobile] = useState(false)
  const [toggleMenu, setToggleMenu] = useState(false)

  // check for mobile version
  useEffect(() => {
    const width = window.innerWidth
    if (width < 600) {
      // setMobile(true)
    }
  }, [])

  // clicking the buttons in the nav
  const handleClick = (sectionName) => {
    setToggleMenu(false)
    scrollToSection(sectionName)
  }

  // disable scroll
  useEffect(() => {
    if (toggleMenu) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [toggleMenu])

  // clicking mobile menu
  const toggleMobileMenu = () => {
    setToggleMenu(true)
  }

  return (
    <div className="navbar_container">
      <div className="navbar_logo">
        <h1>F</h1>
        <a href="https://github.com/rafatabian" aria-label="github"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/fabian-george-rata-781389281/" aria-label="linkedin"><FaLinkedin /></a>
      </div>

      {!toggleMenu ? <div className="navbar_mobile_menu"><IoMenu onClick={() => toggleMobileMenu()} /></div> : null}

      <div className={` ${toggleMenu ? "showNavMenu" : "navbar_buttons"}`}>
        {toggleMenu ? <IoClose onClick={() => setToggleMenu(false)} className="navbar_close_menu" /> : null}
        <div className="navbar_buttons_home" onMouseEnter={() => setHomeIco(true)} onMouseLeave={() => setHomeIco(false)} onClick={() => handleClick("home")}>
          {homeIco ? < GoHomeFill /> : <GoHome />}
          <h2 className="navbar_buttons_text">HOME</h2>
        </div>
        <div className="navbar_buttons_about" onMouseEnter={() => setInfoIco(true)} onMouseLeave={() => setInfoIco(false)} onClick={() => handleClick("about")}>
          {infoIco ? <BsInfoCircleFill /> : <BsInfoCircle />}
          <h2 className="navbar_buttons_text">ABOUT</h2>
        </div>
        <div className="navbar_buttons_skills" onMouseEnter={() => setSkillsIco(true)} onMouseLeave={() => setSkillsIco(false)} onClick={() => handleClick("skills")}>
          {skillsIco ? <IoDesktop /> : <IoDesktopOutline />}
          <h2 className="navbar_buttons_text">SKILLS</h2>
        </div>
        <div className="navbar_buttons_projects" onMouseEnter={() => setProjIco(true)} onMouseLeave={() => setProjIco(false)} onClick={() => handleClick("projects")}>
          {projIco ? <FaLightbulb /> : <FaRegLightbulb />}
          <h2 className="navbar_buttons_text">PROJECTS</h2>
        </div>
      </div>
    </div>
  )
}

export default Navbar