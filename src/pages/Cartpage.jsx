import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import NavBar from "./../components/NavBar"
import Footer from "./../components/Footer"
import Cartpage from "./../style/Cartpage.css"

function Cart() {
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart]=useState([]);
  useState(() => {
    const stringifiedCart = localStorage.getItem("cart");
    setCart(JSON.parse(stringifiedCart)) ;
    
  });
  
  const handleChange = (product) => {
    console.log(product);
    setQuantity(() => (product.quantity + 1));
  };
  const handleDecrement = (product) => {
    console.log(product);
    if (quantity > 0) {
      setQuantity(() => (product.quantity - 1));
    }
  };
  const handleDelete = (product) => {
    const cartCopy = structuredClone(cart);
    cartCopy.splice(product, 1);
    setCart(cartCopy);
  };
  console.log(cart)

  if (!cart) {
    return <div className="loading">Shopping Cart</div>;
  }
  return (
    <div>
      <NavBar />
      <h1 className="cart">Cart</h1>
      <h3>Total price</h3>
      <p>
        ${" "}
        {cart
          .reduce((acc, item) => acc + item.price * item.quantity, 0)
          .toFixed(2)}
      </p>
      <Link to={`/PurchaseOrderPage`}>
        <button className="button" onClick={() => setCart([])}>
          Finish and pay
        </button>
      </Link>
      {cart.map((product) => {
        return (
          <div className="cartSingleItem">
            <div className="moreOrLess" key={product._id}>
              <img
                className="cartProductPicture"
                src={`${product.image}`}
                alt=""
                width={200}
              />
              <div className="nameAndQuantity">
                <h2>{product.name}</h2>

                <div className="buttonCart">
                  {" "}
                  <button
                    className="buttonCart"
                    onClick={() => handleChange(product)}
                  >
                    {" "}
                    +{" "}
                  </button>{" "}
                  <p className="productQuantity">{product.quantity}</p>
                  <button
                    className="buttonCart"
                    onClick={() => handleDecrement(product)}
                  >
                    {" "}
                    -{" "}
                  </button>{" "}
                  <button
                    className="buttonCart deleteButton"
                    onClick={() => handleDelete(product)}
                  >
                    {" "}
                    Delete{" "}
                  </button>{" "}
                </div>
              </div>
            </div>
            <div className="priceCart">
              {/* <h3>Price</h3> */}
              <p>$ {product.currentPrice}</p>
            </div>
          </div>
        );
      })}
      <Footer />
    </div>
  );
}

export default Cart;
