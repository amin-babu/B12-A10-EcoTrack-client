import React from "react";
import { FaSpinner } from "react-icons/fa";

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center">
        <FaSpinner className="text-[#7E59D3] text-5xl animate-spin mb-3" />
        <p className="text-gray-700 font-medium text-lg">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
