import { useState } from "react";
import CommonForm from "../CommonForm/CommonForm";
import { Signupcontrols } from "../../formData";
import { Link } from "react-router-dom";
import { UserPlus } from "lucide-react";

function Register() {
  const [registerFormData, setRegisterFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    "confirm-password": "",
  });

  // Live password-match check
  const passwordMismatch =
    registerFormData["confirm-password"] !== "" &&
    registerFormData.password !== registerFormData["confirm-password"];

  // Build the errors object passed to CommonForm
  const formErrors = {
    ...(passwordMismatch
      ? { "confirm-password": "Passwords do not match." }
      : {}),
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (passwordMismatch) return; // block submit if mismatch
    console.log("Register submitted:", registerFormData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 px-4 py-10">
      {/* Glow orbs */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full max-w-md">
        {/* Card */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl shadow-black/40">
          {/* Header */}
          <div className="mb-8 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 shadow-lg shadow-violet-500/30 mb-4">
              <UserPlus size={26} className="text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white tracking-tight">
              Create an account
            </h1>
            <p className="text-slate-200 text-sm mt-1">
              Sign up to start shopping today
            </p>
          </div>

          <CommonForm
            formControls={Signupcontrols}
            formData={registerFormData}
            setFormData={setRegisterFormData}
            buttonText="Create Account"
            onSubmit={onSubmit}
            errors={formErrors}
          />

          {/* Footer */}
          <p className="text-center text-slate-200 text-sm mt-6">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-violet-400 font-medium hover:text-violet-300 transition-colors"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
