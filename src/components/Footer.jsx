import React from 'react'
import "./../style/Footer.css"
import { Link } from "react-router-dom";


function Footer() {
  return (
    <>
    <div className="footer">
      {/* <div className="image-footer">
      <a href='#'>
          <img src={imageFooter}></img>
      </a>
      </div> */}
       <Link to="/products" className="nav-link">
            Create a Memory 
       </Link>
     
      <div className="footermail">
        <p><a className="p-a" href="mailto:info@example.com">amour@forgetnomore.com</a></p>
      </div >
      <div className="footercity">
        <address>📍 Paris 
        </address>
      </div>
      {/* <h3></h3>
      <h3></h3> */}
      <div className="footerdev">
        <p> ©️ Developer: Jose Cortez </p>
      </div>
      {/* <h3>_</h3> */}
      <div>
        {/* <h3>_</h3> */}
      </div>
    </div>
    </>
   
  )
}

export default Footer;