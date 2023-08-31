import "./style/App.css"
import { Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
import Products from "./pages/Products"
import CartPage from "./pages/Cartpage"
import ProductId from "./pages/ProductId"
import EditProduct from "./pages/EditProductPage"
import { useState } from "react"
import CreateProduct from "./pages/CreateProduct"

function App() {
	const [cart, setCart] = useState([])

	const handleClick = (item) => {
		console.log(item)
		// const cartCopy = structuredClone(cart);
		// const foundProduct = cartCopy.find((product) => product.id === item.id)
		// if(!foundProduct) {
		// 	item.quantity = 1
		// 	setCart([...cartCopy, item])
		// 	console.log(item)
		// } else {
		// 	foundProduct.quantity++
		// 	console.log(item)
		// 	setCart(cartCopy)
		// }
		// console.log(cart, cart.length)
	}



	return (
		<>
		<Routes>
				<Route element={<NavBar />} />
				<Route path="/" element={<HomePage />} />
				<Route path="/login" element={<LoginPage  />} />
				<Route path="/signup" element={<SignupPage />} />
				<Route path="/products" element={<Products handle={handleClick} cart={cart}/>} />
				<Route path="/product/:id" element={<ProductId handle={handleClick} cart={cart}/>} />
				<Route path="/createproduct" element={<CreateProduct />} />
				<Route path="/product/:id/edit" element={<EditProduct />} />
 				<Route path="/cart" element={<CartPage handle={handleClick} cart={cart} setCart={setCart}/>} />
				{/* Added a Route protection, see IsLoggedIn component for more info */}
				{/* <Route
					path="/favorites"
					element={
						<IsLoggedIn user={user}>
							<Favoriting user={user} />
						</IsLoggedIn>
					}
				/> */}
			</Routes>
		</>
	)
}

export default App
