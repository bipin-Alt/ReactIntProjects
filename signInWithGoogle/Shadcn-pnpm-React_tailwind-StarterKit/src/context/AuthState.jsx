import { AuthContext } from "./AuthContext";

function AuthState({children}) {


    return ( 
        <AuthContext.Provider>
             {
                children
             }
        </AuthContext.Provider>
     );
}

export default AuthState;