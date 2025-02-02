import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
   const location = useLocation()
    
    if(loading){
        return <div className='flex justify-center items-center h-[100vh]'>
            
<span className="loading loading-bars loading-lg"></span>
        </div>
    }
    if (!user) {
        return <Navigate to='/login' state={location?.pathname || '/'}></Navigate>
    }

    return (
    <div>   
        {children}
    </div>
    );
};

export default PrivateRoute;
