import "./App.css"
import { Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
// import Favoriting from "./pages/Favoriting"
import IsLoggedIn from "./components/IsLoggedIn"
// import { useState } from "react"
import CreateProduct from "./pages/CreateProduct"

function App() {



	return (
		<>
		<Routes>
				<Route element={<NavBar />} />
				<Route path="/" element={<HomePage />} />
				<Route path="/login" element={<LoginPage  />} />
				<Route path="/signup" element={<SignupPage />} />
				<Route path="/createproduct" element={<CreateProduct />} />
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
