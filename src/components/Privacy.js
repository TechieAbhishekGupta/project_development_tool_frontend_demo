import React from "react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg max-w-3xl w-full p-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Last Updated: February 2025
        </p>

        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
            <p>
              This project management tool is a hobby project showcasing my
              skills in the MERN stack. It is not a full-fledged
              production-ready product. Your privacy is important, but no
              guarantees can be made regarding data security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              2. Information Collected
            </h2>
            <p>
              This tool does not intentionally collect, store, or process any
              sensitive personal data. Any information entered may be
              temporarily stored but is not guaranteed to be secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              3. How We Use Your Information
            </h2>
            <p>
              Since this is a hobby project, any data you provide is solely used
              for testing and demonstration purposes. No data is shared with
              third parties or used for commercial purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              4. Cookies & Tracking
            </h2>
            <p>
              This tool does not currently use cookies or tracking technologies.
              However, future updates may include them for better functionality.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">5. Data Security</h2>
            <p>
              While efforts are made to keep the tool secure, there are no
              guarantees regarding data protection. Users should avoid entering
              sensitive information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              6. Changes to This Policy
            </h2>
            <p>
              As this tool evolves, this privacy policy may be updated. Any
              changes will be reflected on this page.
            </p>
          </section>

          <section className="text-center mt-6">
            <p className="text-gray-600">
              If you have any questions, feel free to{" "}
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

export default Privacy;
