import React, {useEffect} from 'react'
import './Home.css'

// Imported Assests
import Video from '../../assets/bgVideo.mp4'
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
        <h1 data-aos='fade-up'>Unlock Your Travel Dreams With Us!</h1>
        <p data-aos='fade-up'>Discover the world's most adventurous nature, life is a short for a trip.</p>
        <a href="#destination"><button data-aos ='fade-up' className ='btn flex'>GET STARTED <AiOutlineSwapRight className='icon' /></button></a>
      </div>

      <div className="popularPlaces">
        <div className="content">
          <h3 data-aos='fade-up'>Popular Places</h3>
          <div className="images flex" data-aos ='fade-up'>
             <img src={image1} alt="PopularPlace1" />
             <img src={image2} alt="PopularPlace2" />
             <img src={image3} alt="PopularPlace3" />
             <img src={image4} alt="PopularPlace4" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home