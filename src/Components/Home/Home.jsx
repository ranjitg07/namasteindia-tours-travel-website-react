import React, {useEffect} from 'react'
import './Home.css'

// Imported Assests
import Video from '../../assets/mainBg.webm'
import image1 from "../../assets/image1.webp"
import image2 from "../../assets/image2.webp"
import image3 from "../../assets/image3.webp"
import image4 from "../../assets/image4.webp"
import { AiOutlineSwapRight } from "react-icons/ai";

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

  useEffect(() => {
    Aos.init({duration: 1000})
  },[])

  return (
    <div className='Home'>
      <div className="videoBg">
        <video src={Video} autoPlay loop muted></video>
      </div>

      <div className="sectionText">
        <h1 data-aos='fade-up'>Incredible <span id='orange'>In</span><span id='blue'>d</span><span id='green'>ia</span>!</h1>
        <p data-aos='fade-up'>Discover the India's most adventurous nature, life is short for a trip.</p>
        <a href="#destination"><button data-aos ='fade-up' className ='btn flex'>GET STARTED <AiOutlineSwapRight className='icon' /></button></a>
      </div>

      <div className="popularPlaces">
        <div className="content">
          <h3 data-aos='fade-up'>Popular Places</h3>
          <div className="slider">
            <div className="images flex slide-track" data-aos ='fade-up'>
              <div className="slide">
                <img src={image1} alt="PopularPlace1" />
              </div>
              <div className="slide">
                <img src={image2} alt="PopularPlace1" />
              </div>
              <div className="slide">
                <img src={image3} alt="PopularPlace1" />
              </div>
              <div className="slide">
                <img src={image4} alt="PopularPlace1" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home