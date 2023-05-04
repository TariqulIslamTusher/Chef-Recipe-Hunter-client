import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext)
    const location = useLocation()
    
    
    if(!user){
       return <Navigate to='/login' state={location}></Navigate>
    }

    return children
};

export default PrivateRoute;