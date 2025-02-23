import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="bg-gray-100 text-gray-900 px-6 py-12 md:py-16 lg:py-20">
      <div className="max-w-5xl mx-auto bg-white p-8 shadow-md rounded-lg">
        {/* Contact Header */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-700">
          📞 Get in Touch
        </h1>
        <p className="text-lg md:text-xl text-center mt-4">
          Have questions, feedback, or need assistance? Reach out to us, and
          we’ll be happy to help!
        </p>

        {/* Contact Info Section */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-4 border border-blue-300 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-blue-600">📍 Address</h2>
            <p className="mt-2 text-gray-700">
              123 Project St, Tech City, 45678, USA
            </p>
          </div>
          <div className="p-4 border border-blue-300 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-blue-600">📧 Email</h2>
            <p className="mt-2 text-gray-700">support@[yourtoolname].com</p>
          </div>
          <div className="p-4 border border-blue-300 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-blue-600">📞 Phone</h2>
            <p className="mt-2 text-gray-700">+1 234 567 8900</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 text-center">
            ✉️ Send Us a Message
          </h2>
          <p className="text-lg text-center mt-2">
            Fill out the form below, and we’ll get back to you as soon as
            possible.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-6 max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Name Field */}
            <div className="col-span-1">
              <label className="block text-gray-700 font-semibold">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="mt-2 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Email Field */}
            <div className="col-span-1">
              <label className="block text-gray-700 font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="mt-2 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Subject Field */}
            <div className="col-span-2">
              <label className="block text-gray-700 font-semibold">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter the subject"
                required
                className="mt-2 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Message Field */}
            <div className="col-span-2">
              <label className="block text-gray-700 font-semibold">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                required
                rows="4"
                className="mt-2 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="col-span-2 text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
