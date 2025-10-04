import "./Projects.css"
import store from "../../assets/store_img.webp"
import xplora from "../../assets/xplora_img.webp"
import artech from "../../assets/artech_img.webp"

const Projects = () => {
  return (
    <div className="proj_container">
      <h1>PROJECTS</h1>
      <h2>Over the past two years, I've meticulously crafted a diverse array of personal projects, each showcasing my expertise and dedication.</h2>
      {/* first proj */}
      <div className="proj_ecommerce">
        <div className="proj_ecommerce_text">
          <h1>ARTECH-AGENCY</h1>

          <p>Designed and developed the Artech-Agency website from scratch, including image selection, color palette, site mapping for conversions, and section structure based on design principles. Currently working part-time on improving SEO and performance.</p>
          <a className="proj_bnt_to_proj" href="https://rafatabian.github.io/artech/">EXPLORE PROJECT</a>

        </div>
        <div className="proj_ecommerce_image">
          <a href="https://rafatabian.github.io/artech/">
            <img src={artech} alt="store" />
          </a>
        </div>
      </div>
      {/* second proj */}
      <div className="proj_ai">
        <div className="proj_ai_text">
          <h1>E-COMMERCE PLATFORM</h1>

          <p>Built a high-performance e-commerce website using React, inspired by emag.ro. Optimized for SEO, accessibility, and performance through code splitting, lazy loading of components, and compressed images.</p>
          <a className="proj_bnt_to_proj" href="https://rafatabian.github.io/store/">EXPLORE PROJECT</a>
        </div>
        <div className="proj_ai_image">
          <a href="https://rafatabian.github.io/store/">
            <img src={store} alt="ai" />
          </a>
        </div>
      </div>
      {/* third proj */}
      <div className="proj_music">
        <div className="proj_music_text">
          <h1>XPLORA WEBSITE</h1>

          <p>Rapidly developed and deployed a promotional website for the Xplora app in a single day using Vite, ensuring speed and performance.</p>
          <a className="proj_bnt_to_proj" href="https://rafatabian.github.io/xplora/">EXPLORE PROJECT</a>
        </div>
        <div className="proj_music_image">
          <a href="https://rafatabian.github.io/xplora/">
            <img src={xplora} alt="music" />
          </a>
        </div>
      </div>


    </div>
  )
}

export default Projects