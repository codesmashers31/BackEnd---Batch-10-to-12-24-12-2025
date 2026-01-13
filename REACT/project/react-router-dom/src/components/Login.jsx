import React from "react";
import { FaVoicemail , FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";






const Login = () => {
 const navication = useNavigate()

  const movetolink = (e)=>{
 
  e.preventDefault()
  navication("/about")

}
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      
      <div className="w-full max-w-sm bg-white p-8 rounded-xl shadow-lg">
        
        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Login
        </h2>

        <form className="space-y-5">

          {/* Username */}
          <div className="relative">
            <FaVoicemail className="absolute left-3 top-3.5 text-gray-400" />
            <input
              type="text"
              placeholder="Username"
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <FaLock className="absolute left-3 top-3.5 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Button */}
          <button onClick={movetolink}
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Login
          </button>

        </form>

        {/* Footer text */}
        <p className="text-sm text-center text-gray-500 mt-6">
          Don’t have an account? <span className="text-blue-600 font-medium cursor-pointer">Sign up</span>
        </p>
      </div>

    </div>
  );
};

export default Login;
