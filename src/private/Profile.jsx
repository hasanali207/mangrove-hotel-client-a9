import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import { AuthContext } from "../Providers/AuthProvider";

import toast from "react-hot-toast";
import  bannerImageUrl  from "../assets/img-38.jpg";
import Footer from "../components/Footer";

const Profile = () => {

  const {updateUserData, user } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  console.log(user);
  
  const handleUpdate = (e) => {
    e.preventDefault();

    updateUserData(name, photo)
      .then(() => {
        setName('')
        setPhoto('')
        toast.success("User data updated successfully.");
      })
      .catch((error) => {
        
      });
  };

  return (
    <>
   
      <Navbar />
      <div className="relative h-[90vh] overflow-hidden flex justify-center items-center rounded-3xl" style={{
    background: `linear-gradient(0.00deg, rgba(21, 11, 43, 0.9), rgba(21, 11, 43, 0) 70%), url(${bannerImageUrl})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',               
      }}>


        <div className="card shadow-2xl bg-base-100 w-full md:w-1/2 lg:w-1/3">
          <h1 className="text-center text-2xl text-black font-semibold mt-6">
            Update Your Profile
          </h1>
          <h2 className="text-center">Email: {user?.email}</h2>
          <form onSubmit={handleUpdate} className="card-body p-6">
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                className="input input-bordered"
                required
                onChange={(e) => setName(e.target.value)}
                placeholder={user?.displayName || "Enter your name"}

              />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                required
                name="photo"
                onChange={(e) => setPhoto(e.target.value)}
                placeholder={user.photoURL || "Enter photo URL"}
              />
            </div>

            <div className="form-control">
              <button
                className="btn bg-black hover:bg-gray-dark hover:text-black text-white"
                                
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>

      
<Footer></Footer>
      
    </>
  );
};

export default Profile;
