import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import { AuthContext } from "../Providers/AuthProvider";

const Profile = () => {
  const { updateUserData, user } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");

  const handleUpdate = (e) => {
    e.preventDefault();

    updateUserData(name, photo)
      .then(() => {
        localStorage.setItem("updatedName", name);
        localStorage.setItem("updatedPhoto", photo);

        window.location.reload();
        // or navigate('/profile');
      })
      .catch((error) => {
        console.error("Error updating user data:", error.message);
      });
    setName("");
    setPhoto("");
  };

  return (
    <>
      <Navbar />
      <div className="hero-content bg-blue rounded-2xl min-h-[calc(100vh-80px)]">
        <div className="card shadow-2xl bg-base-100 w-full md:w-1/2 lg:w-1/3">
          <h1 className="text-center text-2xl text-black font-semibold mt-6">
            Please Login
          </h1>
          <form onSubmit={handleUpdate} className="card-body p-6">
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="name"
                className="input input-bordered"
                required
                onChange={(e) => setName(e.target.value)}
                placeholder={name||user?.displayName || "Enter your name"}
              />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                required
                id="photo"
                name="photo"
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
                placeholder={user?.photoURL || "Enter photo URL"}
              />
            </div>
           
            
            <div className="form-control">
            <button className="btn bg-black hover:bg-gray-dark hover:text-black text-white" type="submit">Update</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Profile;
