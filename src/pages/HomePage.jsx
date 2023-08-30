import React from 'react'
import NavBar from './../components/NavBar'
import Banner from './../assets/images/fnmbanner.jpg'
import "./../style/App.css"

function HomePage() {
  return (
    <div>
      <NavBar />
      <img className="img-banner" src={Banner} />
   
      
    </div>
 
  )
}

export default HomePage