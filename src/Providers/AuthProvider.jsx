import { createContext, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { auth } from "../firebase/firebase.config";


import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged, 
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
  updateProfile
} from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();


  const googleLogin = () =>{
    return signInWithPopup(auth, googleProvider)
  }
  const githubLogin = () =>{
    return signInWithPopup(auth, githubProvider)
  }


  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        return result.user;
      })
      .catch((error) => {
        console.error("Error creating user:", error.message);
        throw error;
      });
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        return result.user;
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
    return updateProfile(auth.currentUser, {
      displayName: name, photoURL: photo
    })
    .then(() => {
      setUser((user) => ({
        ...user,
        displayName: name,
        photoURL: photo
      }));
      
    }).catch((error) => {
      
    });


  
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      console.log("this is current User", user);
      setUser(user); // Update setUser with currentUser instead of user
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
    updateUserData,
    googleLogin,
    githubLogin
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
      <Toaster position="top-right" reverseOrder={false} />
    </AuthContext.Provider>
  );
};

export default AuthProvider;
