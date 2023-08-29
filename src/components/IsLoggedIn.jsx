import React from "react"
import { Navigate } from "react-router-dom"

function IsLoggedIn({ user, children }) {
	
	if (!user) {
		return <Navigate to={"/"} />
	}
	return children
}

export default IsLoggedIn
