import "./Projects.css"
import store from "../../assets/store_img.png"
import ai from "../../assets/ai_img.png"
import music from "../../assets/music_img.png"

const Projects = () => {
  return (
    <div className="proj_container">
      <h1>PROJECTS</h1>
      <h2>Over the past two years, I've meticulously crafted a diverse array of personal projects, each showcasing my expertise and dedication.</h2>
     {/* first proj */}
      <div className="proj_ecommerce">
        <div className="proj_ecommerce_text">
          <h1>E-COMMERCE PLATFORM</h1>
          
          <p>This project stands as one of my proudest achievements. I invested significant effort into its design and functionality, leveraging React to ensure an intuitive user experience with a focus on aesthetics.</p>
          <a className="proj_bnt_to_proj" href="https://rafatabian.github.io/store/">EXPLORE PROJECT</a>
          
        </div>
        <div className="proj_ecommerce_image">
          <a href="https://rafatabian.github.io/store/">
            <img src={store} alt="store"/>
          </a>
        </div>
      </div>
  {/* second proj */}
  <div className="proj_ai">
    <div className="proj_ai_text">
      <h1>AI ASSISTANT</h1>
     
      <p>Utilizing the power of the OpenAI API, I engineered a personal assistant capable of efficiently handling a variety of tasks through a user-friendly interface.</p>
      <a className="proj_bnt_to_proj" href="https://rafatabian.github.io/AI-assistant/">EXPLORE PROJECT</a>
    </div>
    <div className="proj_ai_image">
      <a href="https://rafatabian.github.io/AI-assistant/">
        <img src={ai} alt="ai" />
      </a>
      </div>
  </div>
  {/* third proj */}
  <div className="proj_music">
    <div className="proj_music_text">
      <h1>MUSIC APP</h1>
       
      <p>Through integration with the Spotify API, I developed an music application enabling users to seamlessly discover and enjoy their favorite tracks from a vast catalog.</p>
      <a className="proj_bnt_to_proj" href="https://rafatabian.github.io/music/">EXPLORE PROJECT</a>
    </div>
   <div className="proj_music_image">
      <a href="https://rafatabian.github.io/music/">
         <img src={music} alt="music" />
      </a>
    </div>
  </div>
      

    </div>
  )
}

export default Projects