import "./Home.css"
import Lottie from "lottie-react"
import animationData from "../../assets/home_animation.json"
import { useEffect, useState } from "react"
import { FaSquareCheck, FaCopy } from "react-icons/fa6"

const Home = () => {
  const [showEmail, setShowEmail] = useState(false)
  const [email, setEmail] = useState("fabianrwork@gmail.com")
  const [succes, setSucces] = useState(0)
  const [inputValue, setInputValue] = useState("London")
  const [inputAnimation, setInputAnimation] = useState(null)

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
        setTimeout(() => setSucces(0), [1000])
      })
      .catch(() => {
        console.error('Failed to copy');
      });
  }

  // auto click the input to make it ready to type
  useEffect(() => {
    if (!navigator.userAgent.match(/(iPad|iPhone|iPod|Android|webOS|BlackBerry|Windows Phone)/i)) {
      document.getElementById("london").focus()
    }
  }, [])

  // check input value length and trugger fall down
  useEffect(() => {
    if (inputValue.length === 10 || inputValue.length === 0) {
      handleEnter({ key: "Enter" })
    }
  }, [inputValue])

  // handle input enter
  const handleEnter = (key) => {
    if (key.key === "Enter" || key.key === " ") {
      setInputAnimation(true)
      setTimeout(() => {
        setInputAnimation(false)
        setInputValue("London")
      }, [3000])
    }
  }

  return (
    <div className="home_container">
      <div>
        <div className="home_text_btn">
          <div className="home_text">
            <p>Hello</p>
            <h1>I'm Fabian</h1>
            <h2>Front-end developer</h2>
            <h2>based in <input type="text" spellCheck="false" value={inputValue} id="london" onChange={(e) => setInputValue(e.target.value)} maxLength="10" onKeyDown={(key) => handleEnter(key)} style={{ animation: inputAnimation ? "inputAnim 3s ease-in-out" : "" }} aria-label="inceractive input"/></h2>
          </div>
          <div className="home_btn_and_email">
            {!showEmail ? <button onClick={() => goToMail()} className="home_hire_btn">HIRE ME</button>
              : <p className="home_email">fabianrwork@gmail.com {succes === 0 ? <FaCopy onClick={() => copyEmail()} /> : <FaSquareCheck />}</p>
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