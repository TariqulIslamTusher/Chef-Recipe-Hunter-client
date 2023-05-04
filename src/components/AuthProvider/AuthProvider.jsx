import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { ToastContainer } from 'react-toastify';

export const AuthContext = createContext(null)
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('')
    const [loader, useLoader] = useState(true)

    // controlled form making state
    const [password, setPassword] = useState("")
    const [passwordError, setPError] = useState("")
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")
    const [rootErr, setRootError] = useState("")

    const createAcctWithEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const LoginWithEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currUser) => {
            setUser(currUser)

        })
        return () => {
            return unsubscribe()
        }
    }, [])

       


    const authInfo = {
        user, setUser, loader, useLoader, password, setPassword, passwordError, setPError, emailError, setEmailError, email, setEmail, rootErr, setRootError,
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