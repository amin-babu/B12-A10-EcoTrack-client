import React from 'react';
import { MdCategory } from 'react-icons/md';
import { Link, useLoaderData } from 'react-router';

const Challenges = () => {
  const challengeData = useLoaderData();
  console.log(challengeData);
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

        <div className='grid mt-9 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {
            challengeData.map(data => (
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