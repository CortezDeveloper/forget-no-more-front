import React from 'react'
import { Link } from "react-router-dom"
import LogoutButton from "./LogOut"
import "./../style/NavBar.css"
// import Search from "./Search"
// import logoFnm from "./../"


function NavBar() {
  return (
    <>
      <nav>
        <div className="links-to-pages">
          <p className="logo-forget-no-more">
            <span className="sm:block hidden"> FORGET NO MORE </span>
          </p>

          <Link to="/" className="nav-link">
            Home
          </Link>
          
          <Link to="/products" className="nav-link">
            Gifts
          </Link>
          <Link to="/login" className="nav-link">
            Login
          </Link>
          <Link to="/signup" className="nav-link">
            Signup
          </Link>
          <Link to="/cart" className="nav-link">
            Cart
          </Link>
          <LogoutButton />
          {/* <Link to="/cart" className="nav-link">
            <CartCountBadge/>
          </Link> */}
          {/* <Search></Search> */}


        </div>
      </nav>
    
    </>
  )
}

export default NavBar