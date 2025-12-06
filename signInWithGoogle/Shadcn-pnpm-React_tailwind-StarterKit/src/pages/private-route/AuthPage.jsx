import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

function AuthPage({children}) {
    const {user,loading} = useContext(AuthContext);
    if(user) return children;
    if(loading) return <p>Loading please wait....</p>
    return <Navigate to={"/"}/>
}

export default AuthPage;