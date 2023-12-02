"use client"

import { useState, createContext, useContext } from "react";

const AuthContext = createContext({})

export const useAuth = ()=>{
    return useContext(AuthContext)
}

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        username: '',
        token: '',
        isAuthenticated: false
    })
    const [redirect,setRedirect] = useState(null)
    const logout = ()=>{
        setAuth(
            {
                username: '',
                token: '',
                isAuthenticated: false
            }
        )
    }
    return (
        <AuthContext.Provider value={{auth,setAuth,redirect,setRedirect,logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider