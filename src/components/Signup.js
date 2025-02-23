import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    setError("");
    console.log("Signing up:", { name, email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-600">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        {/* Header */}
        <h2 className="text-3xl font-bold text-center text-purple-700">
          Create Your Account
        </h2>
        <p className="text-gray-600 text-center mt-2">
          Sign up to manage your projects effortlessly! 🚀
        </p>

        {/* OAuth Signup Button */}
        <div className="mt-6">
          <button
            className="flex items-center justify-center w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-md shadow-md hover:bg-gray-200 transition duration-300"
            onClick={() => alert("OAuth signup to be implemented!")}
          >
            <FcGoogle className="mr-2 text-xl" /> Sign up with Google
          </button>
        </div>

        <div className="flex items-center my-6">
          <div className="border-b w-full"></div>
          <p className="px-3 text-gray-500 text-sm">or</p>
          <div className="border-b w-full"></div>
        </div>

        {/* Signup Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-gray-700 font-semibold">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              required
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none mt-1"
            />
          </div>

          <div>
            <label className="text-gray-700 font-semibold">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none mt-1"
            />
          </div>

          <div>
            <label className="text-gray-700 font-semibold">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
              required
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none mt-1"
            />
          </div>

          <div>
            <label className="text-gray-700 font-semibold">
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              required
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none mt-1"
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white font-semibold py-2 rounded-md hover:bg-purple-700 transition duration-300"
          >
            Sign Up
          </button>
        </form>

        {/* Already Have an Account */}
        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-purple-600 font-semibold hover:underline"
          >
            Login here
          </Link>
        </p>

        {/* Welcome Message */}
        <div className="mt-6 bg-gray-100 text-gray-700 text-center p-3 rounded-lg">
          <p>🎉 Join us and experience hassle-free project management! 🎉</p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
