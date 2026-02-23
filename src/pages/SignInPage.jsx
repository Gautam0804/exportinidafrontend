import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

export default function SignInPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("All fields are required");
      return;
    }

    if (email === "admin@gmail.com" && password === "123456") {
      navigate("/");
    } else {
      setError("Invalid Email or Password");
    }
  };

  return (
    <div className="min-h-screen flex">

      {/* Left Side */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-br from-blue-600 to-indigo-700 text-white items-center justify-center p-12">
        <div>
          <h1 className="text-4xl font-bold mb-6">
            Welcome Back 👋
          </h1>
          <p className="text-lg opacity-90 leading-relaxed max-w-md">
            Sign in to continue managing your buying requirements,
            suppliers, and quotations seamlessly.
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex w-full md:w-1/2 items-center justify-center bg-gray-50 px-6">

        <form
          onSubmit={handleLogin}
          className="bg-white w-full max-w-md p-10 rounded-2xl shadow-xl border border-gray-200"
        >
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-2">
            Sign In
          </h2>
          <p className="text-gray-500 text-center mb-8">
            Access your account
          </p>

          {error && (
            <div className="bg-red-100 text-red-600 text-sm p-3 mb-6 rounded-lg text-center">
              {error}
            </div>
          )}

          {/* Email */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Email Address
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition pr-12"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              {/* Properly Centered Icon */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between mb-8 text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" className="accent-blue-600" />
              Remember me
            </label>

            <span className="text-blue-600 hover:underline cursor-pointer">
              Forgot Password?
            </span>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition duration-200"
          >
            Sign In
          </button>

          {/* Signup */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Don't have an account?{" "}
            <span
              onClick={() => navigate("/signup")}
              className="text-blue-600 font-medium hover:underline cursor-pointer"
            >
              Create one
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}