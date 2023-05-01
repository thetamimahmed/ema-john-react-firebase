import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../components/Providers/AuthProviders';
import { Navigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';


const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <div>Loading..........</div>
    }
    if(user){
        return children
    }
    return (
        <Navigate to='/login' replace={true} state={{from: location}}></Navigate>
    );
};

export default PrivateRoutes;