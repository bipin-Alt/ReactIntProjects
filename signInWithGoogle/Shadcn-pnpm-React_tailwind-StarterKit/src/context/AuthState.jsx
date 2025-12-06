import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebaseConfig";

function AuthState({children}) {

   const[loginFormData, setLoginFormData] = useState({
      email:"",
      password:""
   })
   const [registerFormData, setRegisterFormData] = useState({
      name:"",
      email:"",
      password:"",
      confirmPassword:"",
   })
  const[loading,setLoading] = useState(false);
                                                                                                                  
   const loginWithFirebase =()=>{
      const{email,password} = loginFormData;
      return signInWithEmailAndPassword(auth, email, password);
   }
   const registerWithFirebase = ()=>{
      const{email,password} = registerFormData;
      return createUserWithEmailAndPassword(auth, email, password);
   }

    return ( 
        <AuthContext.Provider value={{loginFormData, setLoginFormData,registerFormData,setRegisterFormData,loginWithFirebase, registerWithFirebase, loading, setLoading}}>
             {
                children
             }
        </AuthContext.Provider>
     );
}

export default AuthState;