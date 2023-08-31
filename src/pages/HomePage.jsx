import React from 'react'
import NavBar from './../components/NavBar'
import Footer from './../components/Footer'
import Bannerimg from "./../assets/images/fnmbanner.jpg"
// import Banner from './../components/Banner'



function HomePage() {
  return (
    <div>
      <NavBar />
      {/* <Banner /> */}
      <img className="img-banner" src={Bannerimg} />
      <Footer />
    </div>
 
  )
}

export default HomePage