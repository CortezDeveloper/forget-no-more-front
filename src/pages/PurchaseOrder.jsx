import React from 'react'
import { Link } from "react-router-dom"

function Purchase() {
  return (
    <div>
      <h1>PurchaseOrder</h1>
      <Link to={`/`}>
        <button>Need more presents ?</button>
      </Link>
    </div>
  )
}

export default Purchase;