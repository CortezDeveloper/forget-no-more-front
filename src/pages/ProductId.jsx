import { useParams, useNavigate } from "react-router-dom";
import NavBar from "./../components/NavBar";
import Footer from "./../components/Footer";
import myApi from "../api/service";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/AuthContext";
import "./../style/Productid.css";

function ProductId({ handleClick }) {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const { user } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    myApi
      .get(`/api/products/${id}`)
      .then((res) => {
        console.log("====>", res);
        setProduct(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  if (!product) {
    return <div className="loading">Especific product data not received</div>;
  }

  const handleEditClick = () => {
    navigate(`/product/${id}/edit`); // Navigate to the edit page
  };

  return (
    <div>
      <NavBar />
      <div className="productDetails">
        <div className="details" key={product.id}>
          <h1>{product.name}</h1>
          <img className="image" src={product.image} alt={product.name} />
          <h2>Description</h2>
          <p> {product.description}</p>
          <h2>Price</h2>
          <p>$ {product.price}</p>
        </div>
        <br />
        <br />
        <div className="buttons-container">
          <button className="button" onClick={() => handleClick(product)}>
            Add to bag
          </button>
          {user?.admin && (
            <button className="button" onClick={handleEditClick}>
              Edit
            </button>
          )}
        </div>
        <br />
        <br />
      </div>
      <Footer />
    </div>
  );
}

export default ProductId;
