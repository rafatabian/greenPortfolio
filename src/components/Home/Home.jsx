import "./Home.css"
import Lottie from "lottie-react"
import animationData from "../../assets/home_animation.json"
import { useEffect, useState } from "react"
import { FaSquareCheck, FaCopy } from "react-icons/fa6"

const Home = () => {
  const[typeEffect, setTypeEffect] = useState(true)
  const[showEmail, setShowEmail] = useState(false) 
  const[email, setEmail] = useState("fabianrwork@gmail.com")
  const[succes, setSucces] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setTypeEffect(!typeEffect)
    }, 500)
  }, [typeEffect])

  //go to mail
  const goToMail = () => {
    window.location.href = 'mailto:fabianrwork@gmail.com';
    setShowEmail(true)

  }
  //copy email
  const copyEmail = () => {
    navigator.clipboard.writeText(email)
        .then(() => {
            setSucces(1)
        })
        .catch(() => {
            console.error('Failed to copy');
        });
}


  return (
    <div className="home_container">
     <div>
      <div className="home_text_btn">
        <div className="home_text">
          <p>Hello</p>
          <h1>I'm Fabian</h1>
          <h2>Front-end developer</h2>
          <h2>based in London {<span id="home_type_effect" style={{color: typeEffect ? "#002d28" : "transparent"}}>|</span>}</h2>
        </div>
        <div className="home_btn_and_email">
           {!showEmail ? <button onClick={() => goToMail()} className="home_hire_btn">HIRE ME</button>
        : <p className="home_email">fabianrwork@gmail.com {succes === 0 ? <FaCopy onClick={() => copyEmail()}/> : <FaSquareCheck />}</p>
        }
        </div>
       
      </div>

      <div className="home_anim_container">
        <Lottie loading="lazy" className="home_first-anim" animationData={animationData} />
      </div>
     </div>
    </div>
  )
}

export default Home