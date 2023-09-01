import React from "react"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "./../context/AuthContext"
import NavBar from "./../components/NavBar"
import "./../style/Login.css"
import Footer from "../components/Footer";
import myApi from "./../api/service"

function LoginPage({ storeUser }) {
	const [user, setUser] = useState({ email: "", password: "" })
	const [error, setError] = useState("")
	const navigate = useNavigate()
	const { authenticateUser } = useContext(UserContext)


async function handleSubmit(e) {
	e.preventDefault()
	const userLogin = {email: user.email, password: user.password}
	myApi.post("/auth/login", userLogin).then((response) => { 
		console.log(response.data)
		localStorage.setItem("authToken", response.data.authToken)
		authenticateUser()
		navigate("/")
	 })
	.catch(e => {
		console.log(e)
		if(e.response) {
			setError(e.response.data.authToken)
			setTimeout(() => {
				setError("")
			}, 3000)
		}

	 })

	}

	return (
		<div>
			<NavBar />
			<h2>Login</h2>
			<br></br>
			<br></br>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="email" className="mail">E-mail: </label>
					<input
						type="email"
						id="email"
						value={user.email}
						onChange={(e) =>
							setUser({ ...user, [e.target.id]: e.target.value })
							// setUser({ ...user, email: e.target.value })
						}
					/>
				</div>
				<br></br>
				<br></br>
				<div>
					<label htmlFor="password" className="mail">Password: </label>
					<input
						type="password"
						id="password"
						value={user.password}
						onChange={(e) =>
							setUser({ ...user, [e.target.id]: e.target.value })
							// setUser({ ...user, password: e.target.value })
						}
					/>
				</div>
				{error && <p>{error}</p>}
				<br></br>
				<br></br>
				<button>Login</button>
			</form>
			<Footer/>
		</div>
	)
	}
	
	export default LoginPage;


