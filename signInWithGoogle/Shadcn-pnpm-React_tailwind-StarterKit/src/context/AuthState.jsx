import { useState } from "react";
import { AuthContext } from "./AuthContext";

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

    return ( 
        <AuthContext.Provider value={{loginFormData, setLoginFormData,registerFormData,setRegisterFormData}}>
             {
                children
             }
        </AuthContext.Provider>
     );
}

export default AuthState;