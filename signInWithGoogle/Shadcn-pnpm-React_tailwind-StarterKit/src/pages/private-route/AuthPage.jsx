import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function AuthPage({children}) {
    const {loading} = useContext(AuthContext);

    if(loading) return <p>Loading please wait....</p>
    return (  
        <>
         
        </>
    );
}

export default AuthPage;