import React from 'react'
import { Link } from "react-router-dom"
import NavBar from "./../components/NavBar"

function Purchase() {
  return (
    <div>
      <NavBar />
      <h1>Order placed successfully 🎉 🥳 🎊</h1><br></br>
      <Link to={`/products`}>
        <button>Need more presents ? Click here 🕺</button>
      </Link>
    </div>
  )
}

export default Purchase;