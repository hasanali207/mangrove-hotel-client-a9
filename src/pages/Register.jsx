import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Navbar from "../components/Navbar";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";

const Register = () => {
  const { createUser, logOut } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    const name = form.get("name");
    const photo = form.get("photo");

    console.log(email, password, name, photo);

    if (password.length < 6) {
      toast.error("Password Must Be 6 Character");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error("Must have an Uppercase letter");
      return;
    } else if (!/[a-z]/.test(password)) {
      toast.error("Must have an Lowercase letter");
      return;
    }

    createUser(email, password)
      .then((result) => {
        toast.success("Successfully Registered!");
        logOut()
       
      })
      .catch(() => {
        toast.error("Already Registered");
      });
      
     
  };

  return (
    <>
    <Navbar></Navbar>
      <div className="hero-content bg-blue rounded-2xl min-h-[calc(100vh-80px)]">
        <div className="card shadow-2xl bg-base-100 w-full md:w-1/2 lg:w-1/3">
          <h1 className="text-center text-2xl text-black font-semibold mt-6">
            Please Register
          </h1>
          <form onSubmit={handleRegister} className="card-body p-6">
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
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
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                className="input input-bordered"
                name="photo"
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
                {showPass ?<FaEye></FaEye>: <FaEyeSlash></FaEyeSlash> }
              </span>
            </div>
            <div className="form-control">
              <button className="btn bg-black hover:bg-gray-dark hover:text-black text-white">
                Register
              </button>
            </div>

            <p>
              Already Have An Account?{" "}
              <NavLink className="text-black" to="/login">
                Login
              </NavLink>
            </p>

            <p className="text-red-400"></p>
          </form>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};

export default Register;
