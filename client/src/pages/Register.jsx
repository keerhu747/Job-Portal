import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Register() {
   const navigate = useNavigate();
   const [formData, setFormData] = useState({
     firstName: "",
     lastName: "",
     email: "",
     password: ""
   });
   const handleChange = (e) => {
     setFormData({
       ...formData,
       [e.target.name]: e.target.value
    });
   };
   const handleSubmit = async () => {
     try {

      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
         formData
      );

      console.log(res.data);

      alert("Account Created Successfully");

      navigate("/Profile");

     } catch (error) {

       console.error(error);

       alert("Registration Failed");

     }
   };
  return (
    <div className="min-h-screen bg-[#f4f6fb] flex items-center justify-center px-4">
      {/* Card */}
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">

        {/* LEFT – FORM */}
        <div className="p-8">
          {/* Logo / Title */}
          <h2 className="text-2xl font-semibold text-center">
            Create an account
          </h2>
          <p className="text-center text-gray-500 mt-1 mb-6">
            Join Talentpoint to unlock new opportunities
          </p>

          {/* Role Toggle */}
          <div className="flex border rounded-md overflow-hidden mb-5">
            <button className="flex-1 py-2 text-sm font-medium bg-blue-600 text-white">
              Student
            </button>
            <button
              onClick={() => navigate("/emplogin")}
              className="flex-1 py-2 text-sm font-medium bg-white text-gray-600">
              Employer
            </button>
          </div>

        <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}> {/* Name */}
          <div className="flex gap-3 mb-4">
            <input
              name="firstName"
              onChange={handleChange}
              className="w-full p-2 border rounded-md text-sm"
              placeholder="First Name"
            />
            <input
              name="lastName"
              onChange={handleChange}
              className="w-full p-2 border rounded-md text-sm"
              placeholder="Last Name"
            />
          </div>

          {/* Email */}
          <input
            name="email"
            onChange={handleChange}
            className="w-full p-2 border rounded-md text-sm mb-4"
            placeholder="Email Address"
          />

          {/* Password */}
          <div className="flex gap-3 mb-4">
            <input
              type="password"
              name="password"
              onChange={handleChange}
              className="w-full p-2 border rounded-md text-sm"
              placeholder="Password"
            />
            <input
              type="password"
              name="confirmpassword"
              onChange={handleChange}
              className="w-full p-2 border rounded-md text-sm"
              placeholder="Confirm Password"
            />
          </div>

          {/* Terms */}
          <label className="flex items-center text-sm mb-5">
            <input type="checkbox" className="mr-2" />
            I agree to the
            <span className="text-blue-600 mx-1 cursor-pointer">
              Terms of Service
            </span>
            and
            <span className="text-blue-600 ml-1 cursor-pointer">
              Privacy Policy
            </span>
          </label>

          {/* Submit */}
          <button
          onClick={handleSubmit}
          className="w-full py-3 bg-blue-600 text-white rounded-md font-medium">
            Create Account
          </button>
      </form>

          {/* Login */}
          <p className="text-center text-sm mt-4">
            Already have an account?
            <span 
            onClick={() => navigate("/")}
            className="text-blue-600 ml-1 cursor-pointer">Log in</span>
          </p>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-gray-300" />
            <span className="px-3 text-sm text-gray-500">
              Or sign up with
            </span>
            <div className="flex-1 h-px bg-gray-300" />
          </div>

          {/* Social */}
          <div className="flex gap-3">
            <button className="flex items-center justify-center gap-2 w-full border rounded-md py-2 text-sm">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                className="w-5 h-5"
              />
              Google
            </button>

            <button className="flex items-center justify-center gap-2 w-full border rounded-md py-2 text-sm">
              <img
                src="https://www.svgrepo.com/show/475661/linkedin-color.svg"
                className="w-5 h-5"
              />
              LinkedIn
            </button>
          </div>
        </div>

        {/* RIGHT – IMAGE PANEL */}
        <div className="hidden md:block relative">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="Career"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-6 left-6 right-6 bg-black/50 text-white p-4 rounded-lg">
            <h3 className="font-semibold text-lg">
              Start Your Career Journey
            </h3>
            <p className="text-sm mt-1">
              Connect with top employers and find the perfect role.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}