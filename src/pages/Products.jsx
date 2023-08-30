import myApi from "../api/service";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom"
import {useState, useEffect} from 'react'
import "./../style/NavBar.css"
import "./../style/Products.css"


function Products({ handleClick }) {
  const [products, setProducts] = useState([]); 
  useEffect(() => {
    myApi
      .get(`/api/products`)
      .then((res) => {
        console.log("====>>>>>>", res);
        setProducts(res.data); 
      })
      .catch((e) => console.log(e));
  }, []);

  if (products.length === 0) {
    return <div className="loading">Data is being loaded...</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="card">
        {products.map((product) => (
          <div className="itemCard" key={product._id}>
            <Link to={`/product/${product._id}`}>
              <img
                    className="productPicture"
                    src={`${product.image}`}
                    alt=""
                    width={200}
                  />
            </Link> 
            {/* <img src={product.image} alt={product.name} /> */}
            <div className="cardDetail">  
              <h1>{product.name}</h1>
              <h2 className="titleName">Description:</h2>
              <p className = "description">{product.description}</p>
              <h2>Price</h2>
              <p className="description">$ {product.price}</p>
              <button className="button" onClick={() => handleClick(product)}>
                Add to bag
             </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;




