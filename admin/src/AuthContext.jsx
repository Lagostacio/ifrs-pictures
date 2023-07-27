import { useState } from "react";
import { createContext, useContext } from "react";

const AuthContext = createContext('')

const useAuthSource = () => {
    const [token, setToken] = useState('')
    return { token, setToken }
}

export const AuthProvider = ({ children }) => {
    return (

        <AuthContext.Provider value={useAuthSource()}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}