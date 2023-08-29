import React from 'react'
import { useState, useEffect, useContext} from "react"
import { useNavigate } from "react-router-dom"

import { UserContext } from "./../context/AuthContext"
import service from "./../api/service"
// import { toFormData } from 'axios'


function CreateProduct() {
  const navigate = useNavigate()

  const { authenticateUser } = useContext(UserContext)

  const [productData, setProductData] = useState({
    image: "",
    name: "",
    price: "",
    brand: "",
    description: "",
  })
  console.log(productData)

  const [error, setError] = useState(null)

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await service.post(
        "http://localhost:5005/api/products",
        productData
      )

      if(response.data) {
        await authenticateUser();
        navigate("/")
      } else {
        setError(response.status)
      }
    } catch (error) {
      console.log(error)
      setError(error.response.data.message)
    }
  }


  return (
    <div>
      <h1>Create Product</h1>
      <form onSubmit={handleSubmit}>
        <label>Product Image URL</label>
        <input
          type="url"
          placeholder="Insert image url"
          value={productData.image}
          onChange={(event) =>
            setProductData({...productData, image: event.target.value})
          }
        />  

        <label>Product Name</label>
        <input 
          type="text"
          placeholder="Insert product name.."
          value={productData.name}
          onChange={(event) =>
              setProductData({...productData, name: event.target.value})
          } />

        <label>Product Price</label>
        <input 
          type="number"
          placeholder="Insert product price.."
          value={productData.price}
          onChange={(event) =>
              setProductData({...productData, price: event.target.value})
          } />

        <label>Product Brand</label>
        <input 
          type="text"
          placeholder="Insert product brand.."
          value={productData.brand}
          onChange={(event) =>
              setProductData({...productData, brand: event.target.value})
          } />

        <label>Product Description</label>
        <input 
          type="text"
          placeholder="Insert product description.."
          value={productData.description}
          onChange={(event) =>
              setProductData({...productData, description: event.target.value})
          } />
        <button onClick ={() => handleSubmit}>Create Product</button> 

      </form>
    </div>
  )
}

export default CreateProduct