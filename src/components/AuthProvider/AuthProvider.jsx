import React, { useContext } from 'react';

const AuthContext = useContext(null)

const AuthProvider = ({children}) => {



    const authInfo = {

    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;