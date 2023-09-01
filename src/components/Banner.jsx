import React from 'react'
import "./../style/App.css"
import Bannerimg from "./../assets/images/fnmbanner.jpg"
// import Banner2 from "./../assets/images/banner2.jpg"

function Banner() {
  return (
    <div>
      <img className="img-banner" src={Bannerimg} />    
      
    </div>
  )
}

export default Banner 