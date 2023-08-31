import React from 'react';
import { useNavigate } from "react-router-dom"
import "./../style/Logout.css"
import { useContext } from "react"
import { UserContext } from '../context/AuthContext';

const LogoutButton = () => {
    const navigate = useNavigate()
    const {authenticateUser} = useContext(UserContext)
    const handleLogout = () => {
        localStorage.removeItem("authToken")
        authenticateUser()
        navigate("/")
    }
  return <button className="logout" onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
