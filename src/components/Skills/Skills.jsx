import "./Skills.css"
import { FaHtml5, FaCss3, FaReact, FaBootstrap, FaGitAlt, FaGithub } from "react-icons/fa6"
import { IoLogoJavascript } from "react-icons/io5"
import { SiVite, SiHeroku } from "react-icons/si"

const Skills = () => {

  // to do
  // add icons
  // fininsh style in css
  //  add UI/UX if not added
  return (
    <div className="skills_container">
      <h1>SKILLS</h1>
      <h2>Demonstrating proficiency across various technologies and methodologies to deliver clean, efficient, and maintainable code.</h2>

      <div className="skills_first_squares_container">
        <div className="skills_first_square">
          <div className="skills_html_icons">
            <FaHtml5 />
            <FaCss3 />
          </div>
          <h1>HTML5 & CSS3</h1>
          <p>Crafting visually appealing websites by keeping UI/UX principles in mind.</p>
        </div>
        <div className="skills_second_square">
          <div className="skills_js_icons">
            <IoLogoJavascript />
          </div>
          <h1>JAVASCRIPT</h1>
          <p>Utilizing modern JavaScript and ES6 to efficiently handle APIs while prioritizing clean and efficient code.</p>
        </div>
      </div>

      <div className="skills_second_squares_container">
        <div className="skills_third_square">
          <div className="skills_react_icons">
            <FaReact />
          </div>
          <h1>REACT</h1>
          <p>Building dynamic user interfaces with React.js and JSX for seamless web development.</p>
        </div>
        <div className="skills_forth_square">
          <div className="skills_other_icons">
            <SiVite />
            <FaBootstrap />
            <FaGitAlt />
            <FaGithub />
            <SiHeroku />
          </div>
          <h1>OTHER TECHNOLOGIES</h1>
          <p>Leveraging a suite of tools including Heroku, Git/GitHub, Vite, and Bootstrap for streamlined development workflows.</p>
        </div>
      </div>

    </div>
  )
}

export default Skills