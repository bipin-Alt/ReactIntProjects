import { useContext } from "react";
import CommonForm from "../../components/form/CommonForm";
import { registerFormControls } from "../../FormControls";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import auth from "../../firebaseConfig";

function Register() {
  const {
    registerFormData,
    setRegisterFormData,
    registerWithFirebase,
    setLoading,
  } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleOnRegister = (event) => {
    event.preventDefault();
    registerWithFirebase().then((result) => {
      console.log("registerData", result);
      if (result.user) {
        updateProfile(result.user, {
          displayName: registerFormData.name,
        }).then(() => {
          if (auth.currentUser.displayName) {
            setLoading(false);
            navigate("/profile");
          }
        });
      }
    });
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg">
          {/* Heading */}
          <p className="text-3xl font-bold text-center text-gray-800">
            Welcome
          </p>

          <p className="text-center text-gray-500 mt-1">
            Enter your name, email and password to create an account.
          </p>

          <p className="mt-6 mb-4 text-xl font-semibold text-gray-700">
            Signup
          </p>

          {/* Form */}
          <CommonForm
            formControls={registerFormControls}
            setFormData={setRegisterFormData}
            buttonText={"Register"}
            formData={registerFormData}
            onSubmit={handleOnRegister}
          />

          {/* Already have account */}
          <div className="text-center mt-6">
            <p className="text-gray-600">Already have an account?</p>
            <button
              onClick={() => navigate("/")}
              className="text-blue-600 font-semibold hover:underline mt-1"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
