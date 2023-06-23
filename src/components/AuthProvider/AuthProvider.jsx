import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AuthContext = createContext(null)
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    // central user which is setted in diff places
    const [user, setUser] = useState('')

    // controlled form making state
    const [password, setPassword] = useState("")
    const [passwordError, setPError] = useState("")
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")
    const [rootErr, setRootError] = useState("")

    // Loading spinner
    const [loader, setLoader] = useState(true)

    const createAcctWithEmail = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const LoginWithEmail = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser = () => {
        return signOut(auth);
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (remainingLoggedUser)=>{
            setLoader(false)
            setUser(remainingLoggedUser)
        })
        return ()=>{
            return unsubscribe()
        }
    },[])

    // object that travelling through context api
    const authInfo = {
        user, setUser, loader, setLoader, password, setPassword, passwordError, setPError, emailError, setEmailError, email, setEmail, rootErr, setRootError,
        createAcctWithEmail,
        LoginWithEmail,
        signOutUser,
        updatePhotoAndUrl
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;