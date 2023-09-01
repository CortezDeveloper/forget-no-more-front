import React from 'react'
import NavBar from './../components/NavBar'
import Footer from './../components/Footer'
import Bannerimg from "./../assets/images/fnmbanner.jpg"
// import Banner2 from "./../assets/images/banner2.png"
import Banner2 from "./../assets/images/bannercinco.jpg"
import "./../style/Homepage.css"
// import Banner from './../components/Banner'



function HomePage() {
  return (
    <div className="homepage">
      <NavBar />
      {/* <Banner /> */}
      <div className="image-container">
        <img className="img-banner" src={Bannerimg} />
        {/* <img className="img-banner2" src={Banner2} /> */}
        <img className="img-banner" src={Banner2} />
      </div>
     <Footer />
    </div>
 
  )
}

export default HomePage