import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    const location = useLocation();
    
    if (user) {
        // Render the children if the user is authenticated
        return <React.Fragment>{children}</React.Fragment>;
    }

    // Redirect to the login page with the current pathname in the state
    return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
