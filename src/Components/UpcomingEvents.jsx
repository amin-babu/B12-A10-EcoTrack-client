import React, { useState, useEffect } from "react";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { useLoaderData } from "react-router";

const UpcomingEvents = () => {
  const { events } = useLoaderData();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="pb-16 bg-linear-to-b from-base-200 to-[#F7FDF9]">
      <div className="w-11/12 mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#041735]">
            Upcoming Events
          </h2>
          <p className="text-lg text-center md:text-xl font-semibold mt-2 text-[#041735]/50">
            Join our next eco-friendly activities near you 🌱
          </p>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {loading
            ? 
              Array(4)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={i}
                    className="card bg-base-100 border border-gray-200 shadow-md rounded-2xl p-5 animate-pulse"
                  >
                    <div className="h-4 w-24 bg-gray-300 rounded mb-3"></div>
                    <div className="h-6 w-3/4 bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 w-1/2 bg-gray-200 rounded mb-2"></div>
                    <div className="h-16 w-full bg-gray-200 rounded"></div>
                    <div className="mt-4 h-8 w-20 bg-gray-300 rounded"></div>
                  </div>
                ))
            : 
              events.map((event, index) => (
                <div
                  key={index}
                  className="card bg-base-100 border border-gray-200 shadow-md hover:shadow-xl transition rounded-2xl p-5"
                >
                  <div className="flex items-center gap-2 text-green-700 font-medium mb-2">
                    <FaCalendarAlt className="text-green-600" />
                    <span>{event.date}</span>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {event.title}
                  </h3>

                  <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
                    <FaMapMarkerAlt />
                    <span>{event.location}</span>
                  </div>

                  <p className="text-gray-700 text-sm">{event.description}</p>

                  <div className="mt-4">
                    <button className="btn btn-sm bg-[#5EC57E] hover:bg-[#4AAE6A] text-white">
                      Join Now
                    </button>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
