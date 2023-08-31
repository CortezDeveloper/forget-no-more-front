import React from 'react'
import { useState, useEffect, useContext} from "react"
import { useNavigate } from "react-router-dom"

import { UserContext } from "./../context/AuthContext"
import service from "./../api/service"
import NavBar from "../components/NavBar"
import "./../style/CreateProduct.css"



function CreateProduct() {
  const navigate = useNavigate()

  const { authenticateUser } = useContext(UserContext)

  const [productData, setProductData] = useState({
    image: "",
    productName: "",
    price: "",
    description: "",
  })
  console.log(productData)

  const [error, setError] = useState(null)

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await service.post(
        "/api/products",
        productData
      )
      navigate("/products")
      
    } catch (error) {
      console.log(error)
      setError(error.response.data.message)
    }
  }


  return (
    <div>
      <NavBar />
      <h1>Create Product</h1><br></br>
      <form className="form-container" onSubmit={handleSubmit}>
        <label className="label">Product Image URL</label>
        <input
          className="input-field"
          type="url"
          placeholder="Insert image url"
          value={productData.image}
          onChange={(event) =>
            setProductData({...productData, image: event.target.value})
          }
        />  

        <label>Product Name</label>
        <input 
          className="input-field"
          type="text"
          placeholder="Insert product name.."
          value={productData.productName}
          onChange={(event) =>
              setProductData({...productData, productName: event.target.value})
          } />

        <label>Product Price</label>
        <input 
          className="input-field"
          type="number"
          placeholder="Insert product price.."
          value={productData.price}
          onChange={(event) =>
              setProductData({...productData, price: event.target.value})
          } />

    

        <label>Product Description</label>
        <input 
          className="input-field"
          type="text"
          placeholder="Insert product description.."
          value={productData.description}
          onChange={(event) =>
              setProductData({...productData, description: event.target.value})
          } />
        <button className="button">Create Product</button> 
       

      </form>
      
    </div>
  )
}

export default CreateProduct