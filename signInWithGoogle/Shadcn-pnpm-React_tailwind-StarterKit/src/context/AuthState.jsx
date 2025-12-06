import { useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from "../firebaseConfig";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AuthState({ children }) {
   //react-router-dom  useNavigate to navigate//
  const navigate = useNavigate();
  // useState to save login form data
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  //use state to save register form data
  const [registerFormData, setRegisterFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  //loading state//
  const [loading, setLoading] = useState(false);
  //user info after register or login//
  const [user, setUser] = useState(null);
  
  //logout function//
  const handleLogout = ()=>{
   return signOut(auth);
  }


  useEffect(() => {
    const checkAuthState = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      checkAuthState();
    };
  }, []);

  useEffect(() => {
    if (user) {
      navigate("/profile");
    }
  }, [user]);

  const loginWithFirebase = () => {
    // login with firebase
    const { email, password } = loginFormData;
    return signInWithEmailAndPassword(auth, email, password);
  };

  const registerWithFirebase = () => {
    // register with firebase
    const { email, password } = registerFormData;
    return createUserWithEmailAndPassword(auth, email, password);
  };

  return (
    <AuthContext.Provider
      value={{
        loginFormData,
        setLoginFormData,
        registerFormData,
        setRegisterFormData,
        loginWithFirebase,
        registerWithFirebase,
        loading,
        setLoading,
        user,
        handleLogout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthState;
