import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom"; // Assuming React Router is used

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Logging in with:", email, password);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        {/* Header */}
        <h2 className="text-3xl font-bold text-center text-blue-700">
          Welcome Back!
        </h2>
        <p className="text-gray-600 text-center mt-2">
          Login to continue managing your projects 🚀
        </p>

        {/* OAuth Login Buttons */}
        <div className="mt-6">
          <button
            className="flex items-center justify-center w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-md shadow-md hover:bg-gray-200 transition duration-300"
            onClick={() => alert("OAuth to be implemented!")}
          >
            <FcGoogle className="mr-2 text-xl" /> Sign in with Google
          </button>
        </div>

        <div className="flex items-center my-6">
          <div className="border-b w-full"></div>
          <p className="px-3 text-gray-500 text-sm">or</p>
          <div className="border-b w-full"></div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-gray-700 font-semibold">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none mt-1"
            />
          </div>

          <div>
            <label className="text-gray-700 font-semibold">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none mt-1"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Sign-up Link */}
        <p className="text-center text-gray-600 mt-4">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-600 font-semibold hover:underline"
          >
            Create one here
          </Link>
        </p>

        {/* Welcome Message */}
        <div className="mt-6 bg-gray-100 text-gray-700 text-center p-3 rounded-lg">
          <p>✨ Explore a new way to manage your projects efficiently! ✨</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
