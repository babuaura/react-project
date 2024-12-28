import { createContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    // signOut,
  } from "firebase/auth";
import { auth } from "../firebase.config";
import { Navigate } from 'react-router-dom'

export const GlobalContext = createContext(null);

export const GlobalContextProvider = ({children}) =>{

    const [registerFormData, setRegisterFormData] = useState({
        name : '',
        email : '',
        password : ''
    });
    const [loginFormData, setLoginFormData] = useState({
        email : '',
        password : ''
    });
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const RegisterWithFirebase = () => {

        const {email, password} = registerFormData;
        setIsLoading(true)

        return createUserWithEmailAndPassword(auth, email, password);
     }

     const LoginWithFirebase = () => {

        const {email, password} = registerFormData;
        setIsLoading(true)

        return signInWithEmailAndPassword(auth, email, password);
     }

     useEffect(()=>{
        const checkAuthState = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
            setIsLoading(false)
        });

        return ()=>{
            checkAuthState();
        };
     });

     useEffect(()=>{
        if(user) <Navigate to = '/profile'/>

     },[user])
     
     if(isLoading) <h2>Loading ! Please wait.....</h2>

    return <GlobalContext.Provider value = {
        {
            registerFormData, 
            setRegisterFormData, 
            RegisterWithFirebase, 
            user, 
            isLoading,
            loginFormData, 
            setLoginFormData,
            LoginWithFirebase
        }
    }>{children}</GlobalContext.Provider>
}