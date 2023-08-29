import React from "react"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "./../context/AuthContext"

function LoginPage({ storeUser }) {
	const [user, setUser] = useState({ email: "", password: "" })
	const [error, setError] = useState("")
	const navigate = useNavigate()
	const { authenticateUser } = useContext(UserContext)


async function handleSubmit(e) {
	e.preventDefault()
	const userLogin = {email: user.email, password: user.password}
	axios.post("http://localhost:5005/auth/login", userLogin).then((response) => { 
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






	
// 		await authenticateUser(user.userName, user.email, user.password);
		
// 		navigate("/"); 
// 	  } catch (err) {
// 		setError('Invalid credentials. Please try again.'); // Handle authentication error
// 	  }
// }
	  
	// async function handleSubmit(e) {
	// 	e.preventDefault()
	// 	try {
	// 		const response = await axios.post(
	// 			`http://localhost:5005/auth/login`, user
	// 		)
	// 		localStorage.setItem(response.data.authToken)

		   
		 
	 
		   // Navigate to a different page after successful login
	 
	// 	 } catch (error) {
	// 	   console.log(error.response.data); 
	// 	   setError("Login failed. Please check your credentials."); 
	// 	 }
	//    }
			
			
	// 		console.log(response)
			
	// 	} catch (error) {
	// 		console.log(error)
	// 	}
	// }

	return (
		<div>
			<h2>Login</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="email">E-mail: </label>
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
				<div>
					<label htmlFor="password">Password: </label>
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
				<button>Login</button>
			</form>
		</div>
	)
}

export default LoginPage;
