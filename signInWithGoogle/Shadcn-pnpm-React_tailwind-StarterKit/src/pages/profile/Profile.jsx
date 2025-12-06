import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Profile() {
    const{handleLogout, user} = useContext(AuthContext);

    return ( 
       <>
        <h1>Welcome  {user.displayName}</h1>
          <h2>Name:{user.displayName}</h2>
          <p>Email : {user.email}</p>
          <p>Last Sigin : {user.metadata.lastSignInTime}</p>
          <button onClick={handleLogout}>Logout</button>
        </>
     );
}

export default Profile;