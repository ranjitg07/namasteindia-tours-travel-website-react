import React from 'react'
import './Subscribe.css'
import image from '../../assets/callUser1.png'

const Subscribe = () => {
  return (
    <div className='subscribe section container'>
      <div className="secContainer grid">
        <img src={image} alt="Div Image" />

        <div className="textDiv">
          <h4>Best Way To Start Your Journey!</h4>
          <p>
            We offer personalised itineraries tailored to individual preferences and interests. 
          </p>
          <button className="btn">Start Here</button>
        </div>
      </div>
      
    </div>
  )
}

export default Subscribe
