import { useContext } from "react";
import CommonForm from "../../components/form/CommonForm";
import { loginFormControls } from "../../FormControls";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const {
    loginFormData,
    setLoginFormData,
    loginWithFirebase,
    setLoading,
    handleSignInWithGoogle,
  } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleOnLogin = (event) => {
    event.preventDefault();
    loginWithFirebase().then((results) => {
      console.log(results, "Signin Data");
      if (results) {
        setLoading(false);
        navigate("/profile");
      }
    });
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg">
          {/* Heading */}
          <p className="text-3xl font-bold text-center text-gray-800">
            Welcome Back
          </p>

          <p className="text-center text-gray-500 mt-1">
            Enter your email and password to access your account.
          </p>

          <p className="mt-6 mb-4 text-xl font-semibold text-gray-700">Login</p>

          {/* Form */}
          <CommonForm
            formControls={loginFormControls}
            setFormData={setLoginFormData}
            buttonText={"Login"}
            formData={loginFormData}
            onSubmit={handleOnLogin}
          />

          {/* Google Button */}
          <button
            onClick={handleSignInWithGoogle}
            className="mt-4 w-full flex items-center justify-center gap-3 py-3 border border-gray-300 rounded-xl hover:bg-gray-100 transition font-medium"
          >
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Continue with Google
          </button>

          {/* Signup Link */}
          <div className="text-center mt-6">
            <p className="text-gray-600">Don't have an account?</p>
            <button
              onClick={() => navigate("/register")}
              className="text-blue-600 font-semibold hover:underline mt-1"
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
