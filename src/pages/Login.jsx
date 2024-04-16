import { useContext, useState } from "react";
import {NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';

import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SocialLogin from "../components/SocialLogin";

const Login = () => {
  const { signInUser} = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  
  const location = useLocation()
  const navigate = useNavigate()
  const getState = location?.state || '/'
  
   
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");


    
  signInUser(email, password)
  .then((result) => {    
    if(result){
      navigate(getState);
    }
    
    toast.success("Successfully Logged In");
    
  })
  .catch(() => {
    toast.error("Email & Password Don't Match");
  });


 

  };

  return (
    <>
   
      <Navbar />
      <div className="hero-content bg-blue rounded-2xl min-h-[calc(100vh-80px)]">
        <div className="card shadow-2xl  bg-base-100 w-full md:w-1/2 lg:w-1/3">
          <h1 className="text-center text-2xl text-black font-semibold mt-6">
            Please Login
          </h1>

          <form onSubmit={handleLogin} className="card-body p-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPass ? "text" : "password"}
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
              <span
                onClick={() => setShowPass(!showPass)}
                className="absolute bottom-4 right-2 cursor-pointer"
              >
                {showPass ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
            <div className="form-control">
              <button className="btn bg-black hover:bg-gray-dark hover:text-black text-white">
                Log In
              </button>
            </div>
          </form>
          <div className="px-6">
            <SocialLogin></SocialLogin>

            <p className="my-4">
              Create An Account?{" "}
              <NavLink className="text-black" to="/register">
                Register
              </NavLink>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Login;
