import React from 'react';
import Navbar from '../components/Navbar';
import { NavLink } from 'react-router-dom';

const Register = () => {
    const handleRegister= (e) =>{
        e.preventDefault(); 
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')

        console.log(email, password);
        

    }

    return (
        <>
      <Navbar></Navbar>

    
        <div className="hero-content bg-blue rounded-2xl min-h-[calc(100vh-80px)]">
          <div className="card shadow-2xl bg-base-100 w-full md:w-1/2 lg:w-1/3">
            <h1 className="text-center text-2xl text-black font-semibold mt-6">Please Register</h1>
            <form onSubmit={handleRegister} className="card-body p-6">
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
                <button className="btn bg-black hover:bg-gray-dark hover:text-black text-white">Login</button>
              </div>
              <div className=" flex justify-between">
                <button className="btn btn-outline hover:bg-opacity-0 hover:text-black ">Login With Facebook </button>
                <button className="btn btn-outline hover:bg-opacity-0 hover:text-black ">Login With Github</button>

                </div>

                <p>Already Have An Account? <NavLink  className="text-black" to='/login'>Login</NavLink></p>
            </form>
            
          </div>
        </div>
      </>
    );
};

export default Register;