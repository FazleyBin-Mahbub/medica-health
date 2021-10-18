import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  //    google sign in
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  //   logout function

  const logout = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };

  //   if user state change
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);
  return {
    user,
    signInWithGoogle,
    logout,
  };
};

export default useFirebase;
