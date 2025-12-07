import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

function AuthPage({ children }) {
  const { user, loading } = useContext(AuthContext);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-gray-600 text-lg animate-pulse">
          Loading, please wait...
        </p>
      </div>
    );

  if (user) return children;

  return <Navigate to={"/"} />;
}

export default AuthPage;
