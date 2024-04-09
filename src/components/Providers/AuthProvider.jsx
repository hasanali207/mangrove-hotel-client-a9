import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import toast, { Toaster } from 'react-hot-toast';


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = () =>{
    return signOut(auth)
  }
  useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('this is current User', currentUser);
            setUser(currentUser)
        })

        return () =>{
            unSubscribe()
        }
  }, [])


  const authInfo = { 
    user, 
    createUser,
    logOut, 
    signInUser };

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
        
        <Toaster position="top-right"
  reverseOrder={false} ></Toaster>
        </AuthContext.Provider>
  );
};

export default AuthProvider;
