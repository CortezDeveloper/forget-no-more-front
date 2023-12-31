import { createContext, useEffect, useState } from "react"
export const UserContext = createContext()
import myApi from "../api/service.js"

function AuthContextWrapper({ children }) {
    const [user, setUser] = useState (null)
    const [isLoggedIn, setIsLoggedIn] = useState (false)
    const [isLoading, setIsLoading] = useState (true)

    function authenticateUser() {
        console.log('authenticateUser function running')
        myApi
            .verifyUser()
            .then((res) => {
                setIsLoggedIn(true)
                setIsLoading(false)
                setUser(res.data)
            })
            .catch((e)=> {
                setUser(null)
                setIsLoggedIn(false)
                setIsLoading(false)
            })
    }

    useEffect (() => {
        authenticateUser()
    },[])

    return(
        <UserContext.Provider
            value={{ user, authenticateUser, isLoggedIn, isLoading}}>
            {children}
        </UserContext.Provider>
    )

}

export default AuthContextWrapper;