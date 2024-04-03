import React, {useEffect} from 'react'
import './Subscribe.css'
import callUs from '../../assets/callUs.webp'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Subscribe = () => {

  useEffect(() => {
    Aos.init({duration: 1000})
  },[])

  return (
    <div className='subscribe section container'>
      <div className="secContainer grid">
        <img src={callUs} alt="Div Image"  data-aos="zoom-in-right"/>

        <div className="textDiv">
          <h4 data-aos='fade-up'>Best Way To Start Your Journey!</h4>
          <p data-aos='fade-up'>
            We offer personalised itineraries tailored to individual preferences and interests. 
          </p>
          <button className="btn" data-aos='fade-up'>Start Here</button>
        </div>
      </div>
      
    </div>
  )
}

export default Subscribe
