import React, { useState, useEffect } from 'react';
import service from '../api/service';
import { useNavigate, useParams } from "react-router-dom"
import "./../style/EditPage.css"
// import { UserContext } from "./../context/AuthContext";
import myApi from '../api/service';
import NavBar from '../components/NavBar';

function EditProduct() {
    const navigate = useNavigate()
    console.log("hello")
    const {id} = useParams()
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({
  
  });

  async function fetchOneProduct(){

    try {
        const response = await myApi.get('/api/products/' + id)
        setEditedData(response.data)
console.log(response.data)
    } catch (error) {
        console.log(error)
    }
}
  useEffect(() => {
    fetchOneProduct()
  }, [])
  
  const handleEditToggle = () => {
      setIsEditing(!isEditing);
  };

  const handleEditSubmit = async () => {
    try {
      const response = await service.put(
        `/api/products/` + id, //FLORIAN
        editedData
      );
      
      navigate("/products"); //ASK FLORIAN

    } catch (error) {
      console.log(error)
      setError(error.response.data.message)
    }
  };

  const handleDelete = async(productId) => {
    try{
        const response = await service.delete(`/api/products/` + id)
        navigate("/products")
    } catch (error) {
        console.log(error)
        setError(error.response.data.message)
    }
  }

  return (
    <>
      <div>
          <NavBar />
      </div>
      <div>
          <h3>ImageURL</h3>
          <input
          className="input-field"
            type="url"
            value={editedData.image}
            onChange={(e) =>
              setEditedData({ ...editedData, image: e.target.value })
            }
          />
          <h3>Product Name</h3>
          <input
          className="input-field"
            type="string"
            value={editedData.productName}
            onChange={(e) =>
              setEditedData({ ...editedData, productName: e.target.value })
            }
          />
          <h3>Price</h3>
          <input
          className="input-field"
            type="number"
            value={editedData.price}
            onChange={(e) =>
              setEditedData({ ...editedData, price: e.target.value })
            }
          />
          <h3>Description</h3>
          <input
          className="input-field"
            type="string"
            value={editedData.description}
            onChange={(e) =>
              setEditedData({ ...editedData, description: e.target.value })
            }
          />
         <br></br>
         {isEditing ? (
            <>
                <button onClick={handleEditSubmit}>Save</button>
                <button onClick={handleEditToggle}>Cancel</button>
            </>
         ) : (
            <>
                <button onClick={handleEditToggle}>Edit</button>
                <button onClick={() => handleDelete(id)}>Delete</button>
            </>
         )}
         {/* {error && <p>{error}</p>} */}
        </div>
    </>
      
  );
}

export default EditProduct;
