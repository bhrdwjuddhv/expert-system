import React from "react";

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center px-6">
      {/* Hero Section */}
      <h1 className="text-5xl font-bold text-blue-600 mb-6">
        Welcome to Expert System
      </h1>

      <p className="text-lg text-gray-600 max-w-2xl mb-8">
        Your intelligent healthcare assistant that helps analyze drug risks,
        genetic data, and patient safety insights with accuracy and speed.
      </p>

      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg transition duration-300">
        Get Started
      </button>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-5xl w-full">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">
            Drug Analysis
          </h3>
          <p className="text-gray-600">
            Evaluate medication risks and interactions instantly.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">
            Genomic Insights
          </h3>
          <p className="text-gray-600">
            Understand patient-specific genetic factors.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">
            Risk Reports
          </h3>
          <p className="text-gray-600">
            Generate smart and accurate safety reports.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
