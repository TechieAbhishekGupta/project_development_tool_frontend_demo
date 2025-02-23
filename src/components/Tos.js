import React from "react";

const Tos = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg max-w-3xl w-full p-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">
          Terms of Service
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Last Updated: February 2025
        </p>

        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
            <p>
              This is a hobby project showcasing my skills in the MERN stack. It
              is not a full-fledged production-ready product. Use this tool at
              your own discretion.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">2. No Liability</h2>
            <p>
              As this project is for demonstration purposes only, I do not
              guarantee uptime, security, or data storage. Any information
              entered is not permanently stored and may be lost at any time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              3. User Responsibilities
            </h2>
            <p>
              By using this tool, you agree not to misuse it, attempt
              unauthorized access, or use it for any illegal activities.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">4. Data Usage</h2>
            <p>
              Any data entered into this tool is temporary and might not be
              stored securely. Please avoid entering sensitive or personal
              information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">5. Changes to Terms</h2>
            <p>
              Since this is an evolving project, the terms might change from
              time to time. Updates will be reflected on this page.
            </p>
          </section>

          <section className="text-center mt-6">
            <p className="text-gray-600">
              If you have any questions or concerns, feel free to{" "}
              <a href="/contact" className="text-blue-500 hover:underline">
                contact me
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Tos;
