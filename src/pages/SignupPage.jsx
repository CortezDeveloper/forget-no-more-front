import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import NavBar from "./../components/NavBar"
import "./../style/Signup.css"
import Footer from "./../components/Footer"

function SignupPage() {
	const [user, setUser] = useState({ userName: "", email: "", password: "" })
	const [error, setError] = useState("")
	const navigate = useNavigate()

	/**
	 * In this handlesubmit, we create a new user in the backend by doing a post request.
	 * Then we navigate the user to the /login page
	 */
	async function handleSubmit(e) {
		e.preventDefault()
		try {
			// const createdUser = {
			// 	username: user.username,
			// 	password: user.password,
			// 	email: user.email,
			// }
			await axios.post("http://localhost:5005/auth/signup", user)
			navigate("/login")
		} catch (error) {
			setError(error.message)
			setTimeout(() => {
				setError("")
			}, 4000)
		}
	}
	return (
		<div>
			<NavBar /> 
			<h2>Signup</h2><br></br>
			<br></br>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="username" className="userName">Username: </label><br></br>
					<input
						type="text"
						value={user.userName}
						id="userName"
						onChange={(e) =>
							setUser({ ...user, [e.target.id]: e.target.value })
						}
					/>
				</div>
				<br></br>
				<br></br>
				<div>
					<label htmlFor="email" className="userName">E-mail: </label>
					<input
						type="email"
						id="email"
						value={user.email}
						onChange={(e) =>
							setUser({ ...user, [e.target.id]: e.target.value })
						}
					/>
				</div>
				<br></br>
				<br></br>
				<div>
					<label htmlFor="password" className="userName">Password: </label>
					<input
						type="password"
						id="password"
						value={user.password}
						onChange={(e) =>
							setUser({ ...user, [e.target.id]: e.target.value })
						}
					/>
				</div>
				<p className="error">{error}</p><br></br>
				<br></br>
				<button>Signup</button>
			</form>
			<Footer />
		</div>
	)
}

export default SignupPage
