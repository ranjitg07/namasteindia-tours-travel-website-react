import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Namaste from './Components/Namaste/Namaste'
import Middle from './Components/Middle/Middle'
import Destinations from './Components/Destinations/Destinations'
import Portfolio from './Components/Portfolio/Portfolio'
import Reviews from './Components/Reviews/Reviews'
import Questions from './Components/Questions/Questions'
import Subscribe from './Components/Subscribe/Subscribe'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <div>
      <Navbar />
      <Home/>
      <Namaste/>
      <Middle/>
      <Destinations/>
      <Portfolio/>
      <Reviews/>
      <Questions/>
      <Subscribe/>
      <Footer/>
    </div>
  )
}

export default App
