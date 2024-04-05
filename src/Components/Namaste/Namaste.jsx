import React, {useEffect} from 'react'
import './Namaste.css'
import welcome from '../../assets/namaste.webp'
import wheelUpper from '../../assets/wheelUpper.gif'
import wheelLower from '../../assets/wheelLower.gif'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Welcome = () => {

    useEffect(() => {
        Aos.init({duration: 1000})
      },[])

  return (
    <div className='welcome section container'>
      <div className="secContainer grid" data-aos="zoom-in">
        <div className="wheelLower">
          <img src={wheelLower} alt="wheel" />
        </div>
        <div className="namasteDiv">
        <img src={welcome} alt="Div Image"  data-aos="zoom-in"/>
        </div>
        <div className="wheelUpper">
          <img src={wheelUpper} alt="wheel" />
        </div>
      </div>
    </div>
  )
}

export default Welcome
