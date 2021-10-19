import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
  //  handle the user
  const [user, setUser] = useState({});
  const auth = getAuth();
  // error state
  const [error, setError] = useState("");
  // email state change
  const [email, setEmail] = useState("");
  // password state change
  const [password, setPassword] = useState("");
  // name state change
  const [name, setName] = useState("");
  // blood group state change
  const [blood, setBlood] = useState("");
  // google auth provider
  const googleProvider = new GoogleAuthProvider();

  //    google sign in
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  //  registraion
  const handleRegistration = (e) => {
    e.preventDefault();
    if (password < 6) {
      setError("Password Should be 6 Characters");
    }
    if (!/(?=.*[A-Z].*[A-Z]) /.test(password)) {
      setError("Ensure string has two uppercase letters.");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // sign in with email and password
  const handleSignInWithEmailAndPassword = () => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // email change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // pass change
  const handlePassChange = (e) => {
    setPassword(e.target.value);
  };
  // name change
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  // blood group change
  const handleBloodGroupChange = (e) => {
    setBlood(e.target.value);
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
    name,
    blood,
    error,
    setError,
    signInWithGoogle,
    handleRegistration,
    handleEmailChange,
    handlePassChange,
    handleNameChange,
    handleBloodGroupChange,
    handleSignInWithEmailAndPassword,
    logout,
  };
};

export default useFirebase;
