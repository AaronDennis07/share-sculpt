"use client"

import { useState, createContext, useContext, useEffect } from "react";

const AuthContext = createContext({})

export const useAuth = ()=>{
    return useContext(AuthContext)
}

const AuthProvider = ({ children }) => {
    let defaultState = null
if (typeof window !== 'undefined') {
  
  const item =JSON.parse( localStorage.getItem('auth'))
  if(item ) defaultState = item
  else defaultState =  {
    username: "",
    token: "",
    isAuthenticated: false,
    profile_img:""
}
}

    const [auth, setAuth] = useState(defaultState )

    

    const [redirect,setRedirect] = useState(null)
    const logout = ()=>{
        setAuth(
            {
                username: '',
                token: '',
                isAuthenticated: false
            }
        )
       localStorage.removeItem('auth')
    }
    return (
        <AuthContext.Provider value={{auth,setAuth,redirect,setRedirect,logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider