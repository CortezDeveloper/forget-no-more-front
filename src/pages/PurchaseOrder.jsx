import React from 'react'
import { Link } from "react-router-dom"
import NavBar from "./../components/NavBar"

function Purchase() {
  return (
    <div>
      <NavBar />
      <h1>PurchaseOrder</h1>
      <Link to={`/`}>
        <button>Need more presents ?</button>
      </Link>
    </div>
  )
}

export default Purchase;