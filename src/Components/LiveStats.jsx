import React from 'react';
import { FaLeaf, FaRecycle, FaRunning, FaUsers } from "react-icons/fa";

const LiveStats = () => {
  const defaultStats = [
    { id: 1, icon: <FaLeaf />, label: "CO₂ Saved", value: "12,450 kg" },
    { id: 2, icon: <FaRecycle />, label: "Plastic Reduced", value: "8,730 kg" },
    { id: 3, icon: <FaRunning />, label: "Challenges Completed", value: "5,300" },
    { id: 4, icon: <FaUsers />, label: "Active Participants", value: "1,240" },
  ];

  const displayStats = defaultStats;

  return (
    <section className="py-16 bg-base-200 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-[#041735]">
          Community Impact
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {displayStats.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center bg-base-100 rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl text-secondary mb-3">{item.icon}</div>
              <p className="text-2xl font-bold text-primary">{item.value}</p>
              <p className="text-sm opacity-80">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveStats;
