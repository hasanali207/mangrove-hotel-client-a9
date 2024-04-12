import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    const location = useLocation();
    
    if (user) {
        // Set the desired pathname in the state object
        return {children};
    }

    return <Navigate to='/login' state={location?.pathname}></Navigate>
};

export default PrivateRoute;
