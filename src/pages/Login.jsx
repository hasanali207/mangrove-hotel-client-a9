import Navbar from "../components/Navbar";
import {  NavLink } from "react-router-dom";
import { AuthContext } from "../components/Providers/AuthProvider";
import { useContext } from "react";

import toast from 'react-hot-toast';

const Login = () => {

  const { signInUser } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');

    signInUser(email, password)
        .then((result) => {
          toast.success('Successfully Logged In')


        })
        .catch(() => {
          
          toast.error("Email & Password Don't Match")

        });
    
    } 



  return (
    <>
      <Navbar></Navbar>

    
        <div className="hero-content bg-blue rounded-2xl min-h-[calc(100vh-80px)]">
          <div className="card shadow-2xl bg-base-100 w-full md:w-1/2 lg:w-1/3">
            <h1 className="text-center text-2xl text-black font-semibold mt-6">Please Login</h1>

            <form onSubmit={handleLogin} className="card-body p-6">
              <div className="form-control ">    
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
              
              </div>
              <div className="form-control">
                <button className="btn bg-black hover:bg-gray-dark hover:text-black text-white">Log In</button>
              </div>
              
            </form>
            <div className="px-6">
            <div className=" flex justify-between">
                <button className="btn btn-outline hover:bg-opacity-0 hover:text-black ">Login With Facebook </button>
                <button className="btn btn-outline hover:bg-opacity-0 hover:text-black ">Login With Github</button>

                </div>

                <p className="my-4">Create An Account? <NavLink  className="text-black" to='/register'>Register</NavLink></p>
            </div>
            
          </div>
        </div>
      </>
   
  );
};

export default Login;
