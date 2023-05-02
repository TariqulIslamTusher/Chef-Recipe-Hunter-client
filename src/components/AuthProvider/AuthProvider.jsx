import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser]= useState('')
    const [loader, useLoader] = useState(false)

    const createAcctWithEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const LoginWithEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser = () => {
        return signOut(auth);
    }

   


    const authInfo = {
        user, setUser,loader, useLoader,
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