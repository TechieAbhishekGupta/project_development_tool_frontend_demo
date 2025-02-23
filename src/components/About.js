import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 text-gray-900 px-6 py-12 md:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto">
        {/* About Heading */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-blue-700 mb-4">
          About Our Project Management Tool
        </h1>
        <hr></hr>
        <p className="text-lg md:text-xl text-center mt-4">
          Welcome to <span className="font-bold">Project Management Tool</span>,
          your go-to project management solution designed to help teams
          collaborate efficiently, track progress, and achieve goals with ease.
        </p>

        {/* Why We Built This Tool */}
        <div className="mt-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-600">
            🚀 Why We Built This Tool
          </h2>
          <p className="mt-3 text-lg">
            Managing projects can be overwhelming—lost emails, missed deadlines,
            and miscommunication can slow down productivity. Our goal is to
            simplify project management by offering an intuitive and powerful
            platform that helps teams:
          </p>
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>✔ Plan projects effortlessly</li>
            <li>✔ Assign tasks and collaborate seamlessly</li>
            <li>✔ Track progress with real-time updates</li>
            <li>✔ Meet deadlines with automated reminders</li>
          </ul>
        </div>

        {/* Key Features */}
        <div className="mt-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-600">
            🔥 Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {[
              "Intuitive Dashboard: Get a bird’s-eye view of all your projects.",
              "Task Management: Create, assign, and track tasks efficiently.",
              "Team Collaboration: Share files, leave comments, and stay updated.",
              "Project Tracking: Visualize progress with Kanban and Gantt charts.",
              "Notifications & Alerts: Never miss a deadline with real-time alerts.",
              "Role-Based Access: Define user roles for better security.",
              "Secure & Scalable: Data is protected with top-notch security.",
            ].map((feature, index) => (
              <div
                key={index}
                className="p-4 bg-white shadow-md rounded-lg border-l-4 border-blue-600"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Who Can Use This Tool */}
        <div className="mt-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-600">
            👥 Who Can Use This Tool?
          </h2>
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>✅ Startups & Businesses – Keep projects organized.</li>
            <li>
              ✅ Freelancers & Agencies – Manage multiple clients effortlessly.
            </li>
            <li>
              ✅ Educational Institutions – Collaborate on research and
              assignments.
            </li>
            <li>✅ Nonprofits & Communities – Plan and execute initiatives.</li>
          </ul>
        </div>

        {/* How It Works */}
        <div className="mt-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-600">
            💡 How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-4">
            {[
              "Create a Project – Set up a new project and invite team members.",
              "Add Tasks & Assign Roles – Define tasks and set deadlines.",
              "Track Progress – Use dashboards, Kanban, or Gantt charts.",
              "Collaborate – Share files, leave comments, and stay updated.",
              "Complete & Review – Mark tasks as done and review reports.",
            ].map((step, index) => (
              <div
                key={index}
                className="p-4 bg-white shadow-md rounded-lg border-l-4 border-blue-600"
              >
                {step}
              </div>
            ))}
          </div>
        </div>

        {/* Our Mission */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-600">
            🎯 Our Mission
          </h2>
          <p className="mt-3 text-lg max-w-2xl mx-auto">
            We strive to create a simple yet powerful project management tool
            that makes teamwork effortless and execution flawless. Our mission
            is to help teams focus on what matters most—getting things done!
          </p>
        </div>

        {/* Get in Touch */}
        <div className="mt-12 text-center bg-blue-600 text-white py-6 rounded-lg">
          <h2 className="text-2xl md:text-3xl font-semibold">
            📞 Get in Touch
          </h2>
          <p className="mt-3 text-lg">
            We’re constantly evolving and improving. Have feedback or questions?
            We’d love to hear from you!
          </p>
          <p className="mt-2">📧 Email: support@example.com</p>
          <p className="mt-1">🌐 Website: www.example.com</p>
          <p className="mt-1 font-bold">
            Let’s redefine project management together! 🚀
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
