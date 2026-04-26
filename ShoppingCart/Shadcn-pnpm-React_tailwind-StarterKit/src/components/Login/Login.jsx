import { useState } from "react";
import CommonForm from "../CommonForm/CommonForm";
import { Logincontrols } from "../../formData";
import { Link } from "react-router-dom";
import { LogIn } from "lucide-react";

function Login() {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted:", loginFormData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 px-4">
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full max-w-md">
        {/* Card */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl shadow-black/40">
          {/* Header */}
          <div className="mb-8 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 shadow-lg shadow-violet-500/30 mb-4">
              <LogIn size={26} className="text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white tracking-tight">Welcome back</h1>
            <p className="text-slate-200 text-sm mt-1">Sign in to your account to continue</p>
          </div>

          <CommonForm
            formControls={Logincontrols}
            formData={loginFormData}
            setFormData={setLoginFormData}
            buttonText="Sign In"
            onSubmit={onSubmit}
          />

          {/* Footer */}
          <p className="text-center text-slate-200 text-sm mt-6">
            Don&apos;t have an account?{" "}
            <Link
              to="/Register"
              className="text-violet-400 font-medium hover:text-violet-300 transition-colors"
            >
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
