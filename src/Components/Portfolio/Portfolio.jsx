import React, {useEffect} from 'react'
import './Portfolio.css'

//Imported assets
import icon1 from '../../assets/protection.webp'
import icon2 from '../../assets/destination.webp'
import icon3 from '../../assets/online-chat.webp'
import image from '../../assets/imageSticker.webp'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Portfolio = () => {

  useEffect(() => {
    Aos.init({duration: 1000})
  },[])

  return (
    <div className='portfolio section container' id='aboutUs'>
      <div className="secContainer grid">
        <div className="leftContent">
          <div className="secHeading">
            <h3 data-aos='fade-up'>Why Should You Choose Us</h3>
            <p data-aos='fade-up'>
              We have extensive knowledge and experience in the travel industry.
            </p>
          </div>

          <div className="grid">
            <div className="singlePortfolio flex">
              <div className="iconDiv" data-aos='fade-up'>
                <img src={icon1} alt="Icon Image" />
              </div>

              <div className="info" data-aos='fade-up'>
                <h4 >Safety and support</h4>
                <p >
                  Our top priority is the safety and well-being of our clients. We maintain high safety standards and have emergency support available during the trip.
                </p>
              </div>
            </div>

            <div className="singlePortfolio flex" data-aos='fade-up'>
              <div className="iconDiv">
                <img src={icon2} alt="Icon Image" />
              </div>

              <div className="info">
                <h4>Diverse Range of Destinations</h4>
                <p>
                  Whether it's domestic tour or an international adventure, we cover a wide range of destinations to cater to different interests and preferences.
                </p>
              </div>
            </div>

            <div className="singlePortfolio flex" data-aos='fade-up'>
              <div className="iconDiv">
                <img src={icon3} alt="Icon Image" />
              </div>

              <div className="info">
                <h4>24/7 Customer Support</h4>
                <p>
                  Our dedicated customer support team is available round the clock to address any queries or concerns before, during, and after the trip.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rightContent" data-aos='zoom-in'>
          <img src={image} alt="Image" />
        </div>
      </div>
    </div>
  )
}

export default Portfolio
