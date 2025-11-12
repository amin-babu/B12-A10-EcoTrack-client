import React from 'react';
import { MdCategory } from 'react-icons/md';
import { Link, useLoaderData } from 'react-router';

const ActiveChallenges = () => {
  const { activeChallenges } = useLoaderData();
  return (
    <section className='pb-16'>
      <h2 className="text-3xl text-center md:text-4xl font-bold text-[#041735]">Active Challenges</h2>
      <p className='text-lg text-center md:text-xl font-semibold mt-2 text-[#041735]/50'>Explore ongoing missions and join the movement!</p>
      <div className='grid w-11/12 mt-5 mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {
          activeChallenges.map(data => (
            <div key={data._id} className="card bg-base-100 border border-gray-200 shadow-lg hover:shadow-2xl transition">
              <div className='p-4'>
                <img className='rounded-md border w-full h-52 object-cover border-gray-300' src={data.imageUrl} alt="Challenge" />
              </div>
              <div className="card-body p-4 pt-0">
                <div className='flex items-center justify-between'>
                  <div className='space-y-1'>
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

      <div className='flex justify-center mt-10'>
        <Link to='/challenges' className='btn-main'>See All Challenges</Link>
      </div>
    </section>
  );
};

export default ActiveChallenges;