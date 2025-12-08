import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Profile() {
  const { handleLogout, user } = useContext(AuthContext);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg text-center">
            
        {
          user.photoURL? <img
          src={user.photoURL}
          alt={`${user.displayName}'s photo`}
          className="w-28 h-28 rounded-full mx-auto shadow-md object-cover"
        /> : <div></div>
        }
        
        {/* Profile Picture */}
        

        {/* Name */}
        <h1 className="text-3xl font-bold text-gray-800 mt-4">
          Welcome, {user.displayName}
        </h1>

        {/* Details */}
        <div className="mt-6 space-y-3 text-left">
          <p className="text-lg text-gray-700">
            <span className="font-semibold">Name:</span> {user.displayName}
          </p>
          <p className="text-lg text-gray-700">
            <span className="font-semibold">Email:</span> {user.email}
          </p>
          <p className="text-lg text-gray-700">
            <span className="font-semibold">Last Sign-in:</span> {user.metadata.lastSignInTime}
          </p>
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="mt-8 w-full py-3 bg-red-500 text-white rounded-xl font-semibold hover:bg-red-600 transition"
        >
          Logout
        </button>

      </div>
    </div>
  );
}

export default Profile;
