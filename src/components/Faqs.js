import React, { useState } from "react";

const faqsData = [
  {
    question: "What is a Project Management Tool?",
    answer:
      "A project management tool helps teams collaborate, track tasks, and manage projects efficiently in one platform.",
  },
  {
    question: "How do I create a new project?",
    answer:
      "Go to the 'Projects' section, click 'New Project', enter details, and save.",
  },
  {
    question: "What is a task, and how do I create one?",
    answer:
      "Tasks are individual work items. Create one inside a project by clicking 'Add Task'.",
  },
  {
    question: "What is a team, and how do I add members?",
    answer:
      "Teams are groups of collaborators. Add members via 'Teams' by inviting users via email.",
  },
  {
    question: "Who are collaborators, and what can they do?",
    answer:
      "Collaborators work on projects. They can create, assign, and track tasks based on their roles.",
  },
  {
    question: "How do I track task progress?",
    answer:
      "Each task has a status (To-Do, In Progress, Completed). Update the status from the task dashboard.",
  },
  {
    question: "Can I assign multiple users to a task?",
    answer:
      "Yes, you can assign multiple users when creating or editing a task.",
  },
  {
    question: "How do I set deadlines for tasks?",
    answer:
      "When creating a task, specify a due date. The system sends reminders as deadlines approach.",
  },
  {
    question: "Is there a way to view all tasks in one place?",
    answer:
      "Yes, the 'Tasks' section displays all tasks across projects, with filters for better organization.",
  },
  {
    question: "How can I delete or archive a project?",
    answer:
      "Archive a project to hide it from active view, or delete it permanently in project settings.",
  },
  {
    question: "Can I customize roles and permissions?",
    answer:
      "Yes, admins can define roles and set permissions to control user access levels.",
  },
  {
    question: "How do notifications work?",
    answer:
      "Notifications alert you about task updates, deadlines, and mentions. Customize them in settings.",
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-6">
        Frequently Asked Questions
      </h1>
      <div className="space-y-4">
        {faqsData.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg p-4 transition-all duration-300"
          >
            <button
              className="w-full text-left flex justify-between items-center font-medium"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="text-xl">{openIndex === index ? "▲" : "▼"}</span>
            </button>
            <div
              className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
                openIndex === index ? "max-h-40" : "max-h-0"
              }`}
            >
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
