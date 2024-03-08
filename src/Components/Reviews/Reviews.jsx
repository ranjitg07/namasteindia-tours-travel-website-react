import React from 'react'
import './Reviews.css'

//imported icons
import { AiFillStar } from "react-icons/ai";

//imported images
import client1 from '../../assets/client1.jpg'
import client2 from '../../assets/client2.jpg'
import client3 from '../../assets/client3.jpg'
import client4 from '../../assets/client4.jpg'
import client5 from '../../assets/client5.jpg'


const Reviews = () => {
  return (
    <div className='review section container'>
      <div className="secContainer grid">
        <div className="textDiv">
          <span className="redText">FROM OUR CLIENTS</span>
          <h3>Real Travel History Our Beloved Clients</h3>
          <p>
            By choosing us as their tour agency, customers can expect an enriching and enjoyable travel experience, filled with unforgettable memories that will last a lifetime.
          </p>

          <span className="stars flex">
            <AiFillStar className='icon'/>
            <AiFillStar className='icon'/>
            <AiFillStar className='icon'/>
            <AiFillStar className='icon'/>
            <AiFillStar className='icon'/>
            </span>

            <div className="clientsImg flex">
              <img src={client1} alt="Client Image" />
              <img src={client2} alt="Client Image" />
              <img src={client3} alt="Client Image" />
              <img src={client4} alt="Client Image" />
            </div>
        </div>

        <div className="imgDiv">
          <img src={client5} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Reviews
