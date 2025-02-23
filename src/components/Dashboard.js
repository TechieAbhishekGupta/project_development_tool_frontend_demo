import React from "react";
import {
  FaTasks,
  FaProjectDiagram,
  FaUsers,
  FaBug,
  FaClipboardList,
} from "react-icons/fa";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  CartesianGrid,
} from "recharts";

const Dashboard = () => {
  // Sample Data
  const taskData = [
    { name: "To Do", value: 8 },
    { name: "In Progress", value: 5 },
    { name: "Completed", value: 12 },
  ];
  const COLORS = ["#FF8042", "#FFBB28", "#00C49F"];

  const progressData = [
    { name: "Week 1", progress: 20 },
    { name: "Week 2", progress: 50 },
    { name: "Week 3", progress: 70 },
    { name: "Week 4", progress: 90 },
  ];

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Overview Cards */}
      {[
        {
          icon: FaProjectDiagram,
          label: "Total Projects",
          value: 5,
          color: "text-blue-500",
        },
        {
          icon: FaTasks,
          label: "Tasks Completed",
          value: 32,
          color: "text-green-500",
        },
        {
          icon: FaUsers,
          label: "Team Members",
          value: 8,
          color: "text-purple-500",
        },
        { icon: FaBug, label: "Active Bugs", value: 3, color: "text-red-500" },
        {
          icon: FaClipboardList,
          label: "Stories",
          value: 10,
          color: "text-yellow-500",
        },
      ].map(({ icon: Icon, label, value, color }, index) => (
        <div
          key={index}
          className="flex items-center bg-white shadow-md rounded-lg p-4"
        >
          <Icon size={32} className={`${color} mr-4`} />
          <div>
            <p className="text-gray-600">{label}</p>
            <h2 className="text-xl font-bold">{value}</h2>
          </div>
        </div>
      ))}

      {/* Task Distribution */}
      <div className="col-span-1 md:col-span-2 bg-white shadow-md rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-4">Task Distribution</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={taskData}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={80}
            >
              {taskData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Sprint Progress */}
      <div className="col-span-1 md:col-span-2 bg-white shadow-md rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-4">Sprint Progress</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={progressData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="progress"
              stroke="#8884d8"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
