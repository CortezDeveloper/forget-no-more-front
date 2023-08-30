import myApi from "../api/service";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom"
import {useState, useEffect} from 'react'
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
      <div className="productDetails">
        {products.map((product) => (
          <div className="details" key={product._id}>
            <Link to={`/product/${product._id}`}>
              <img
                    className="productPicture"
                    src={`${product.image}`}
                    alt=""
                    width={200}
                  />
            </Link> 
            {/* <img src={product.image} alt={product.name} /> */}
            <h1>{product.name}</h1>
            <h2>Description:</h2>
            <p>{product.description}</p>
            <h2>Price</h2>
            <p>$ {product.price}</p>
            <button className="button" onClick={() => handleClick(product)}>
              Add to bag
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;




