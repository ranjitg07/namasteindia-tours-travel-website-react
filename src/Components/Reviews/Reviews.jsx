import React, {useEffect} from "react";
import "./Reviews.css";

//imported icons
import { AiFillStar } from "react-icons/ai";

//imported images
import client1 from "../../assets/client1.webp";
import client2 from "../../assets/client2.webp";
import client3 from "../../assets/client3.webp";
import client4 from "../../assets/client4.webp";
import client5 from "../../assets/ladySticker.webp";

import Aos from 'aos'
import 'aos/dist/aos.css'

const Reviews = () => {

  useEffect(() => {
    Aos.init({duration: 1000})
  },[])
  
  return (
    <div className="review section container">
      <div className="secContainer grid">
        <div className="textDiv">
          <span className="redText" data-aos='fade-up'>FROM OUR CLIENTS</span>
          <h3 data-aos='fade-up'>Real Travel History From Our Beloved Clients</h3>
          <p data-aos='fade-up'>
            By choosing us as their tour agency, customers can expect an
            enriching and enjoyable travel experience, filled with unforgettable
            memories that will last a lifetime.
          </p>

          <span className="stars flex" data-aos='fade-up'>
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
          </span>

          <div className="clientsImg flex" data-aos='fade-up'>
            <img src={client1} alt="Client Image" />
            <img src={client2} alt="Client Image" />
            <img src={client3} alt="Client Image" />
            <img src={client4} alt="Client Image" />
          </div>
        </div>

        <div className="imgDiv">
          <img src={client5} alt="Image" data-aos='zoom-in'/>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
