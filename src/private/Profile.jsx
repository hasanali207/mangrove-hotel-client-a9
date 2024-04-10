import React, { useContext, useState } from 'react';
import Navbar from '../components/Navbar';
import { AuthContext } from '../Providers/AuthProvider';

const Profile = () => {
  const { updateUserData, user } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('');

  const handleUpdate = (e) => {
    e.preventDefault();
    
    updateUserData(name, photo);
    
    // Clear inputs
    setName('');
    setPhoto('');
  };

  return (
    <>
      <Navbar />
      <form onSubmit={handleUpdate}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={user?.displayName || "Enter your name"}
          />
        </div>
        <div>
          <label htmlFor="photo">Photo URL:</label>
          <input
            type="text"
            id="photo"
            name="photo"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            placeholder={user?.photoURL || "Enter photo URL"}
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </>
  );
};

export default Profile;
