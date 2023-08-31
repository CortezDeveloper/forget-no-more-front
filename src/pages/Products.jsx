import myApi from "../api/service";
import Navbar from "../components/NavBar";
import { Link } from "react-router-dom"
import {useState, useEffect} from 'react'
import "./../style/NavBar.css"
import "./../style/Products.css"
import "./../components/Footer"
import Footer from "./../components/Footer";


function Products() {
  const [products, setProducts] = useState([]); 
  const [cart, setCart] = useState([])
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

 
 
  const handleClick = (item) => {
    console.log(item._id)
    const stringifiedCart = JSON.stringify(cart);
    localStorage.setItem("cart", stringifiedCart);
		const cartCopy = structuredClone(cart);
		const foundProduct = cartCopy.find((product) => product._id === item._id)
		if(!foundProduct) {
			item.quantity = 1
			setCart([...cartCopy, item])
			console.log(item)
		} else {
			foundProduct.quantity++
			console.log(item)
			setCart(cartCopy)
		}
		console.log(cart, cart.length)
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
            <div className="cardDetail"> <br></br> 
              <h1>{product.name}</h1>
              {/* <h2 className="titleName">Description:</h2> */}
              <p className = "description">{product.description}</p><br></br>
              <h2>Price</h2>
              <p className="description">$ {product.price}</p><br></br>
              <button className="button" onClick={() => handleClick(product)}>
                Add to bag
             </button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Products;




