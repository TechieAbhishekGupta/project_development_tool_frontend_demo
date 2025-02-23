import { useState } from "react";
import { FaCamera, FaLock } from "react-icons/fa";

const Profile = () => {
  const [user, setUser] = useState({
    name: "Abhishek Gupta",
    email: "hello@example.com",
    role: "MERN Developer",
    department: "Engineering",
    teams: ["UI/UX Design", "Frontend Team", "Backend Team"],
    projects: ["Project Management App", "E-commerce Dashboard"],
    profilePicture: "./image/profile.png",
    // backgroundPicture: "./image/profile_background.png",
  });

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      {/* Background Image */}
      {/* <div
        className="w-full h-60 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${user.backgroundPicture})` }}
      >
        <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
          <FaCamera className="text-gray-600 text-lg" />
        </button>
      </div> */}

      {/* Profile Card */}
      <div className="bg-white shadow-lg rounded-lg w-full max-w-4xl p-6 m-4 relative">
        {/* Profile Picture */}
        <div className="flex flex-col items-center">
          <div className="relative">
            <img
              src={user.profilePicture}
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-white"
            />
            <button className="absolute bottom-1 right-1 bg-gray-200 p-1 rounded-full shadow-md">
              <FaCamera className="text-gray-600 text-lg" />
            </button>
          </div>
          <h2 className="text-2xl font-semibold mt-3">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-purple-600 font-medium">
            {user.role} - {user.department}
          </p>
        </div>

        {/* Profile Details */}
        <div className="mt-6 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold text-gray-700">Teams</h3>
            <button className="text-purple-600 hover:underline">Edit</button>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            {user.teams.map((team, index) => (
              <p key={index} className="text-gray-700">
                ✅ {team}
              </p>
            ))}
          </div>

          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold text-gray-700">Projects</h3>
            <button className="text-purple-600 hover:underline">Edit</button>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            {user.projects.map((project, index) => (
              <p key={index} className="text-gray-700">
                📌 {project}
              </p>
            ))}
          </div>

          {/* Change Password */}
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold text-gray-700">Security</h3>
            <button className="text-red-500 hover:underline">
              Change Password
            </button>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-between">
            <p className="text-gray-700 flex items-center">
              <FaLock className="mr-2" /> Last changed: 3 months ago
            </p>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
              Update Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
