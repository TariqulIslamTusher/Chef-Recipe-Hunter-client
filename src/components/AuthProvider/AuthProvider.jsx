import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser]= useState('')
    const [loader, useLoader] = useState(true)

    // controlled form making state
    const [password, setPassword] = useState("")
    const [passwordError, setPError] = useState("")
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")
    const [eor, setError] = useState("")

    const createAcctWithEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const LoginWithEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser = () => {
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currUser)=>{
            setUser(currUser)
            
        })
        return()=>{
            return unsubscribe()
        }
    },[])
   


    const authInfo = {
        user, setUser,loader, useLoader,password, setPassword,passwordError, setPError,emailError, setEmailError,email, setEmail, eor, setError,
        createAcctWithEmail,
        LoginWithEmail,
        signOutUser
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;