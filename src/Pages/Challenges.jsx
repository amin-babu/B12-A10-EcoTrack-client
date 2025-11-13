import React, { useState } from 'react';
import { MdCategory } from 'react-icons/md';
import { Link, useLoaderData } from 'react-router';

const Challenges = () => {
  const challengeData = useLoaderData();
  const [challenges, setChallenges] = useState(challengeData);

  const [filters, setFilters] = useState({
    category: "",
    startDate: "",
    endDate: "",
    minParticipants: "",
    maxParticipants: "",
  });

  const handleFilter = async () => {
    console.log('apply');
    const query = new URLSearchParams();

    

    if (filters.category) query.append("category", filters.category);
    if (filters.startDate) query.append("startDate", filters.startDate);
    if (filters.endDate) query.append("endDate", filters.endDate);
    if (filters.minParticipants) query.append("minParticipants", filters.minParticipants);
    if (filters.maxParticipants) query.append("maxParticipants", filters.maxParticipants);


    const res = await fetch(`https://eco-track-server-rho.vercel.app/challanges?${query.toString()}`);
    const data = await res.json();
    setChallenges(data);
  };

  const handleReset = () => {
    setFilters({
      category: "",
      startDate: "",
      endDate: "",
      minParticipants: "",
      maxParticipants: "",
    });
    setChallenges(challengeData);
  };


  return (
    <section className="text-center pt-10 md:pt-12 pb-7 bg-linear-to-r from-[#7E59D3]/10 to-[#5EC57E]/10 rounded-2xl w-[90%] md:w-11/12 mx-auto mt-8 px-4">
      <div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#041735] mb-2 leading-snug">
          🌿 Explore Sustainability Challenges
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-[#041735]/70 font-medium max-w-3xl mx-auto">
          Join eco-conscious individuals on a mission to make real environmental impact.
          Track your progress, complete green goals, and help build a cleaner planet — together.
        </p>

        {/* filtering */}
        <div className="bg-white shadow-md rounded-xl p-6 my-8 border border-gray-200">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">Filter Challenges</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Category */}
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1 text-gray-600">
                Category
              </label>
              <input
                type="text"
                placeholder="Enter Category"
                value={filters.category}
                onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                className="border border-gray-300 rounded-lg p-2 h-10 focus:outline-none focus:ring-2 focus:ring-green-500"
              />

            </div>


            {/* Date Range */}
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1 text-gray-600">Start Date</label>
              <input
                type="date"
                value={filters.startDate}
                onChange={(e) => setFilters({ ...filters, startDate: e.target.value })}
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1 text-gray-600">End Date</label>
              <input
                type="date"
                value={filters.endDate}
                onChange={(e) => setFilters({ ...filters, endDate: e.target.value })}
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Participants */}
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1 text-gray-600">Participants Range</label>
              <div className="flex gap-2">
                <input
                  type="number"
                  value={filters.minParticipants}
                  onChange={(e) => setFilters({ ...filters, minParticipants: e.target.value })}
                  placeholder="Min"
                  className="w-1/2 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                  type="number"
                  value={filters.maxParticipants}
                  onChange={(e) => setFilters({ ...filters, maxParticipants: e.target.value })}
                  placeholder="Max"
                  className="w-1/2 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-5 gap-3">
            <button onClick={handleReset} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium px-6 py-2 rounded-lg cursor-pointer transition-all duration-200">
              Reset
            </button>
            <button onClick={handleFilter} className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-2 rounded-lg cursor-pointer transition-all duration-200">
              Apply Filter
            </button>
          </div>

        </div>



        <div className='grid mt-9 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {
            challenges.map(data => (
              <div key={data._id} className="card bg-base-100 border border-gray-200 shadow-lg hover:shadow-2xl transition">
                <div className='p-4'>
                  <img className='rounded-md border w-full h-52 object-cover border-gray-300' src={data.imageUrl} alt="Challenge" />
                </div>
                <div className="card-body p-4 pt-0">
                  <div className='flex items-center justify-between'>
                    <div className='space-y-1 text-left'>
                      <h3 className="font-bold text-xl text-[#041735]">{data.title}</h3>
                      <p className="text-sm badge badge-soft badge-primary"><MdCategory /> {data.category}</p>
                    </div>
                    <div className='flex flex-col justify-end space-y-1 items-end'>
                      <Link to={`/challenges/${data._id}`} className='btn-main px-5!'>See Details</Link>
                      <p className="text-sm text-gray-500">{`${data.participants} ${data.impactMetric}`}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-left text-sm leading-relaxed">
                    {data.description}
                  </p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Challenges;