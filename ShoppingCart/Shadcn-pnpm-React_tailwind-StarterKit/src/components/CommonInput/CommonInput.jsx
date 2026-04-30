import { useState } from "react";
import { Eye, EyeOff, AlertCircle } from "lucide-react";

function CommonInput({ name, label, id, placeholder, value, type, onChange, error,required }) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label
        htmlFor={id}
        className="text-sm font-medium text-slate-300 tracking-wide"
      >
        {label}
      </label>

      <div className="relative">
        <input
          id={id}
          name={name}
          placeholder={placeholder}
          type={inputType}
          onChange={onChange}
          value={value}
          required={required}
          className={`
            w-full px-4 py-3 rounded-xl
            bg-white/5 border
            text-white placeholder-slate-500
            text-sm outline-none
            transition-all duration-200
            hover:border-white/25
            ${error
              ? "border-red-500/70 focus:border-red-500 focus:ring-2 focus:ring-red-500/30"
              : "border-white/10 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30"
            }
            ${isPassword ? "pr-12" : ""}
          `}
        />

        {/* Show / Hide password toggle */}
        {isPassword && (
          <button
            type="button"
            tabIndex={-1}
            onClick={() => setShowPassword((prev) => !prev)}
            aria-label={showPassword ? "Hide password" : "Show password"}
            className="absolute inset-y-0 right-0 flex items-center px-3 text-slate-400 hover:text-violet-400 transition-colors duration-150 focus:outline-none"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>

      {/* Validation error message */}
      {error && (
        <p className="flex items-center gap-1.5 text-xs text-red-400 mt-0.5">
          <AlertCircle size={13} className="shrink-0" />
          {error}
        </p>
      )}
    </div>
  );
}

export default CommonInput;
