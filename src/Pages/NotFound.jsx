import React from "react";
import { Link } from "react-router";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center bg-base-200 text-gray-800 px-4">
      <FaExclamationTriangle className="text-[#7E59D3] text-6xl mb-4" />

      <h1 className="text-5xl font-extrabold mb-2">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-gray-600 text-center max-w-md mb-6">
        Sorry, the page you’re looking for doesn’t exist or has been moved.
      </p>

      <Link
        to="/"
        className="bg-[#7E59D3] hover:bg-[#6b46c1] text-white font-medium px-6 py-2.5 rounded-lg transition duration-200"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
