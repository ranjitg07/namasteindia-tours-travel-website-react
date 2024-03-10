import React, {useEffect} from "react";

//imported icons
import { BsArrowDownCircle } from "react-icons/bs";
import { BsArrowUpCircle } from "react-icons/bs";

import Aos from 'aos'
import 'aos/dist/aos.css'

const Accordion = ({ title, desc, active, setActive }) => {

  useEffect(() => {
    Aos.init({duration: 1000})
  },[])

  return (
    <div className="accordianContainer" data-aos='fade-up'>
      <span
        className={(active === title ? "activeTitle" : "") + " title" + " flex"}
      >
        {title}
        <span onClick={() => setActive(title)}>
          {active === title ? (
            <BsArrowDownCircle className="icon" />
          ) : (
            <BsArrowUpCircle className="icon" />
          )}
        </span>
      </span>
      <p className={(active === title ? "show" : "") + " description"}>
        {desc}
      </p>
    </div>
  );
};

export default Accordion;
