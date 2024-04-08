import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Navbar></Navbar>

    
        <div className="hero-content bg-blue rounded-2xl min-h-[85vh]">
          <div className="card shadow-2xl bg-base-100 w-full md:w-1/2 lg:w-1/3">
            <form className="card-body">
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
                <button className="btn bg-black hover:bg-gray-dark hover:text-black text-white">Login</button>
              </div>
              <div className=" flex justify-between">
                <button className="btn btn-outline hover:bg-opacity-0 hover:text-black ">Login With Facebook </button>
                <button className="btn btn-outline hover:bg-opacity-0 hover:text-black ">Login With Github</button>

                </div>

                <p>Create An Account? <Link  className="text-black" to='/register'>Register</Link></p>
            </form>
            
          </div>
        </div>
      </>
   
  );
};

export default Login;
