import React from "react";
import { FaUsers, FaChartLine, FaRegLightbulb } from "react-icons/fa";

const HowItWorks = () => {
  return (
    <section className="py-20 bg-linear-to-b from-[#F7FDF9] to-[#F0F4FF]">
      <h2 className="text-3xl text-center md:text-4xl font-bold text-[#041735] mb-4">
        How It Works
      </h2>
      <p className="text-lg text-center md:text-xl font-semibold text-[#041735]/50 mb-10">
        Follow these 3 simple steps to make your green journey effortless.
      </p>

      <div className="relative w-11/12 md:w-9/12 mx-auto flex flex-col md:flex-row items-center justify-between">


        {/* Step 1 */}
        <div className="flex flex-col items-center text-center md:w-1/3 relative">
          <div className="w-16 h-16 flex items-center justify-center bg-linear-to-r from-[#7E59D3] to-[#5EC57E] rounded-full shadow-lg mb-4">
            <FaUsers className="text-white text-3xl" />
          </div>
          <h3 className="text-xl font-semibold text-[#041735] mb-2">Join a Challenge</h3>
          <p className="text-gray-600 max-w-[220px] mx-auto">
            Pick a green challenge that fits your lifestyle and goals.
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center text-center md:w-1/3 relative">
          <div className="w-16 h-16 flex items-center justify-center bg-linear-to-r from-[#7E59D3] to-[#5EC57E] rounded-full shadow-lg mb-4">
            <FaChartLine className="text-white text-3xl" />
          </div>
          <h3 className="text-xl font-semibold text-[#041735] mb-2">Track Your Progress</h3>
          <p className="text-gray-600 max-w-[220px] mx-auto">
            Monitor your daily actions & see your positive impact grow.
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center text-center md:w-1/3 relative">
          <div className="w-16 h-16 flex items-center justify-center bg-linear-to-r from-[#7E59D3] to-[#5EC57E] rounded-full shadow-lg mb-4">
            <FaRegLightbulb className="text-white text-3xl" />
          </div>
          <h3 className="text-xl font-semibold text-[#041735] mb-2">Share Your Tips</h3>
          <p className="text-gray-600 max-w-[220px] mx-auto">
            Inspire others by sharing your best eco-friendly ideas.
          </p>
        </div>

        
      </div>
    </section>
  );
};

export default HowItWorks;
