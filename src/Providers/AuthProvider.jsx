import { createContext, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { auth } from "../firebase/firebase.config";


import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged 
} from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        return userCredential.user;
      })
      .catch((error) => {
        console.error("Error creating user:", error.message);
        throw error;
      });
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        return userCredential.user;
      })
      .catch((error) => {
        console.error("Error signing in:", error.message);
        throw error;
      });
  };

  const logOut = () => {
    return signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.error("Error signing out:", error.message);
        throw error;
      });
  };

  const updateUserData = (name, photo) => {
    setUser((user) => ({
      ...user,
      displayName: name,
      photoURL: photo
    }));
    // Return a resolved Promise
    return Promise.resolve();
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("this is current User", currentUser);
      setUser(user);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  

  const authInfo = {
    user,
    createUser,
    logOut,
    signInUser,
    updateUserData
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
      <Toaster position="top-right" reverseOrder={false} />
    </AuthContext.Provider>
  );
};

export default AuthProvider;
