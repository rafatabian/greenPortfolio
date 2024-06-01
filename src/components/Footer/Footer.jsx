import { useState } from "react";
import "./Footer.css"
import { FaSquareCheck, FaCopy, FaGithub, FaLinkedin, FaHeart } from "react-icons/fa6"

const Footer = ({ scrollToSection }) => {
  const [showMail, setShowMail] = useState(false)
  const [email, setEmail] = useState("fabianrwork@gmail.com")
  const [succes, setSucces] = useState(0)

  const openMail = () => {
    window.location.href = 'mailto:fabianrwork@gmail.com';
    setShowMail(true)
  }


  const copyEmail = () => {
    navigator.clipboard.writeText(email)
      .then(() => {
        setSucces(1)
        setTimeout(() => setSucces(0), [1000])
      })
      .catch(() => {
        console.error('Failed to copy');
      });
  }

  return (
    <div className="footer_container">
      <div className="footer_question">
        <h1>Have any project in your mind?</h1>
        {showMail
          ? <>
            <p className="footer_mail">fabianrwork@gmail.com
              {succes === 0
                ? <FaCopy className="email_copy_icon" onClick={() => copyEmail()} /> :
                succes === 1 ? <FaSquareCheck className="email_copied_check_icon" />
                  : null}
            </p>

          </>
          : <button onClick={() => openMail()} >GET IN TOUCH</button>}
      </div>

      <div className="footer_links_and_text">
        <div>
          <a href="https://github.com/rafatabian"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/fabian-rata-781389281/"><FaLinkedin /></a>
        </div>
        <div>
          <p onClick={() => scrollToSection("home")}>HOME</p>
          <p onClick={() => scrollToSection("about")}>ABOUT</p>
          <p onClick={() => scrollToSection("skills")}>SKILLS</p>
          <p onClick={() => scrollToSection("projects")}>PROJECTS</p>
        </div>
        <div>
          <p>Designed with <FaHeart /></p>
          <p>&#169; 2024 copyright by Fabian</p>
        </div>
      </div>

    </div>
  )
}

export default Footer