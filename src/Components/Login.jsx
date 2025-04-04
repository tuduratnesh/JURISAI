import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate(); 
  const goToHomePage = () => {
      navigate("/"); 
    };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-2xl w-96">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Log in</h2>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <div className="text-right">
            <a href="#" className="text-blue-600 hover:underline text-sm">Forgot password?</a>
          </div>
          <button
          onClick={goToHomePage}
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Log In
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Don&apos;t have an account? <a href="/signup" className="text-blue-600 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
