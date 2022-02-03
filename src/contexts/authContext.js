import axios from "axios";
import { createContext, useContext, useState } from "react";

import { baseUrl } from "../hooks/baseUrl"

const authContext = createContext();

export const useAuth = () => useContext(authContext);

export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [currentUser, setCurrentUser] = useState(null);

    const userLogin = async (userId, userName) => {
        try{
            setLoading(true);
            const resolve = await axios.get(baseUrl + `/users/${userId}`);
            if(resolve.data.username === userName) {
                setCurrentUser(resolve.data);
                setError("");
                setLoading(false);
            }
        } catch(error) {
            setError(error)
            setLoading(false)
        }
    }

    const userLogout = () => {
        setCurrentUser(null);
    }

    const value = {
        error,
        currentUser,
        userLogin,
        userLogout,
    }
    
    return (
        <authContext.Provider value={value}>{!loading && children}</authContext.Provider>
    )
}