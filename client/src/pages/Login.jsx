import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import google from "../assets/google.png";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const login = async () => {
    try {
      await axios.post("http://localhost:5000/api/auth/login", form);
      alert("Login success");
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen bg-blue-50">

      {/* Top Right */}
      <div className="flex justify-end items-center p-6">
        <span className="text-sm text-gray-600 mr-2">
          Don’t have an account?
        </span>
        <Link
          to="/register"
          className="px-4 py-2 text-sm border border-blue-600 text-blue-600 rounded-md"
        >
          Sign up
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">

        {/* LEFT IMAGE */}
        <div className="hidden md:flex items-center justify-center bg-gray-100">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="login"
            className="w-3/4"
          />
        </div>

        {/* RIGHT LOGIN */}
        <div className="flex items-center justify-center">
          <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">

            <h2 className="text-2xl font-bold text-center mb-2">
              WELCOME BACK
            </h2>

            <p className="text-center text-gray-500 mb-6">
              Login to find your next opportunity
            </p>

            <button className="w-full border py-2 rounded-md flex justify-center gap-2 mb-4">
              <img src={google} className="w-5" alt="Google" />
              Continue with Google
            </button>

            <div className="text-center text-sm text-gray-400 mb-4">
              OR LOGIN WITH EMAIL
            </div>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
              className="w-full border p-2 rounded-md mb-3"
            />

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={handleChange}
              className="w-full border p-2 rounded-md mb-3"
            />

            <div className="text-right text-sm text-blue-600 mb-4 cursor-pointer">
              Forgot password?
            </div>

            <button
              onClick={login}
              className="w-full bg-blue-600 text-white py-2 rounded-md"
            >
              LOG IN
            </button>

            <p className="text-xs text-center text-gray-400 mt-4">
              By clicking Log In, you agree to our Terms & Privacy Policy
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}
