import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const SocialLogin = () => {
    const { googleLogin, githubLogin } = useContext(AuthContext);

    const location = useLocation()
    const navigate = useNavigate()
    const getState = location?.state || '/'

    const handleSocialLogin = socialProvider =>{
        socialProvider()
        .then((result) => {    
          if(result){
            navigate(getState);
          }
          
          toast.success("Successfully Logged In");
          
        })
        .catch(() => {
          toast.error("Email & Password Don't Match");
        });
      }

    return (
        <>
            <div className=" flex justify-between">
              <button onClick={()=>handleSocialLogin(googleLogin)} className="btn btn-outline hover:bg-opacity-0 hover:text-black ">
                Login With Google{" "}
              </button>
              <button onClick={() => handleSocialLogin(githubLogin)} className="btn btn-outline hover:bg-opacity-0 hover:text-black ">
                Login With Github
              </button>
            </div>
        </>
    );
};

export default SocialLogin;