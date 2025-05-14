import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="p-4 sm:p-8 flex flex-col lg:flex-row max-w-7xl mx-auto gap-6">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">
            Contact Us
          </h1>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            We would love to hear from you! Please reach out to us through the
            following channels:
          </p>
        </div>
      </div>
    </div>
  );
};
export default Contact;
