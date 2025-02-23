import React from "react";

const featuresData = [
  {
    title: "Task Management",
    description:
      "Organize and prioritize your tasks efficiently with our intuitive task management system.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    imageUrl: "./image/Task-Management.avif",
    icon: "📌",
  },
  {
    title: "Collaboration Tools",
    description:
      "Enhance team collaboration with real-time chat, file sharing, and discussion boards.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    imageUrl: "./image/collaboration.png",
    icon: "🤝",
  },
  {
    title: "Project Timeline",
    description:
      "Visualize project progress with interactive Gantt charts and milestone tracking.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    imageUrl: "./image/timeline.jpg",
    icon: "📅",
  },
  {
    title: "Team Management",
    description:
      "Assign roles, manage permissions, and streamline workflows for efficient team coordination.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    imageUrl: "./image/teamwork.svg",
    icon: "👥",
  },
];

const Features = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center py-16 bg-blue-600 text-white px-6 md:px-16">
        <h1 className="text-3xl md:text-4xl font-bold">
          Powerful Features to Streamline Your Projects
        </h1>
        <p className="text-lg mt-2 max-w-2xl">
          From task tracking to collaboration, our tool helps you stay on top of
          your projects effortlessly.
        </p>
      </section>

      {/* Features Section */}
      <div className="max-w-5xl mx-auto py-10 px-6 md:px-16">
        {featuresData.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-8 py-10 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Text Content */}
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <span className="text-4xl">{feature.icon}</span> {feature.title}
              </h2>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </div>

            {/* Video Section */}
            {/* <div className="md:w-1/2">
              <iframe
                className="w-full aspect-video rounded-lg shadow-md"
                src={feature.videoUrl}
                title={feature.title}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div> */}
            {/* Image Section */}
            <div className="md:w-1/2 flex justify-center">
              <img
                src={feature.imageUrl}
                alt={feature.title}
                className="w-48 md:w-64"
              />
            </div>
          </div>
        ))}
      </div>

     
    </div>
  );
};

export default Features;
