import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios" ;
import { useEffect } from "react";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


const handleLogin = async (e) => {
  e.preventDefault();

  console.log("Login button clicked");

  if (!email || !password) {
    setError("Please enter email and password");
    return;
  }
  try {
    const res = await axios.post(
      "http://localhost:5000/api/admin/login",
      {
        email,
        password
      }
    );
    if (res.data) {

      alert("Login successful");
      localStorage.setItem("admin", JSON.stringify(res.data.admin));
      navigate("/admindashboard");

    }

  } catch (error) {

    alert("Invalid credentials");

  }
};
 
 useEffect(() => {

    if (!localStorage.getItem("admin")) {
      navigate("/adminlogin");
    }

  }, []);


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[400px] bg-white p-10 rounded-xl shadow-lg">
        
        <h2 className="text-2xl font-semibold text-center mb-2">
          Admin Portal View
        </h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Enter Your Credentials to manage the talent ecosystem
        </p>

        <form onSubmit={handleLogin} className="space-y-5">
          
          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Admin Email / Username
            </label>
            <input
              type="text"
              placeholder="Director@talentpoint.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-sm font-medium">Password</label>
              <span className="text-xs text-blue-600 cursor-pointer">
                Forget Password ?
              </span>
            </div>

            <input
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 ${
                error
                  ? "border-red-500 focus:ring-red-500"
                  : "focus:ring-blue-500"
              }`}
            />
          </div>

          {/* Error Message */}
          {error && (
            <div className="text-red-500 text-sm">
              {error}
            </div>
          )}

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-md text-sm font-medium transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}