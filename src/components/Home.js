import React from "react";
import { useNavigate } from "react-router-dom";
import { FaTasks, FaUsers, FaChartBar, FaClock } from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between text-center md:text-left py-16 bg-blue-600 text-white px-6 md:px-16">
        {/* Left Side - Text */}
        <div className="md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold">
            Welcome to Project Management Tool
          </h1>
          <p className="text-lg mt-2">
            Streamline your project workflows and enhance team collaboration
            with ease.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
          <img
            src="./image/welcome.svg"
            className="w-48 md:w-64"
            alt="Welcome"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 md:px-16 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center">
            <FaTasks size={40} className="text-blue-600" />
            <h3 className="text-lg font-semibold mt-4">Task Management</h3>
            <p className="text-gray-600">
              Organize and track tasks efficiently.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FaUsers size={40} className="text-green-500" />
            <h3 className="text-lg font-semibold mt-4">Team Collaboration</h3>
            <p className="text-gray-600">Work together seamlessly.</p>
          </div>
          <div className="flex flex-col items-center">
            <FaChartBar size={40} className="text-purple-500" />
            <h3 className="text-lg font-semibold mt-4">Analytics & Reports</h3>
            <p className="text-gray-600">Gain insights from project data.</p>
          </div>
          <div className="flex flex-col items-center">
            <FaClock size={40} className="text-red-500" />
            <h3 className="text-lg font-semibold mt-4">Time Tracking</h3>
            <p className="text-gray-600">Monitor time spent on tasks.</p>
          </div>
        </div>
        <div className="text-center mt-10">
          <button
            onClick={() => navigate("/features")}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
          >
            Explore Features
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 md:px-16 bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Why Choose Us?
            </h2>
            <p className="text-gray-600">
              Our project management tool is designed to boost productivity and
              simplify complex workflows. Whether you're managing small tasks or
              large-scale projects, our platform helps you stay on top of
              everything.
            </p>
          </div>
          <img
            src="./image/teamwork.svg"
            className="w-full max-w-sm mx-auto"
            alt="Team Collaboration"
          />
        </div>
      </section>

    </div>
  );
};

export default Home;
