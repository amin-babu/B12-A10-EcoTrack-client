import { useLoaderData } from "react-router";
import {
  FaCalendarAlt,
  FaUsers,
  FaEnvelope,
  FaClock,
  FaBullseye,
  FaListUl,
  FaRegFlag,
} from "react-icons/fa";
import { use, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../Contexts/AuthContext";

const ChallengeDetails = () => {
  const { user } = use(AuthContext);
  const challenge = useLoaderData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isJoined, setIsJoined] = useState(false);

  const handleJoin = () => {
    fetch(`http://localhost:3000/challanges/join/${challenge._id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: user.email,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log('Data after user save', data);
        setIsJoined(true);
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="bg-[#f8f6f6] pt-10">
      <div className="w-11/12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white border border-gray-200 rounded-xl shadow-md p-6">
          {/* Left: Image */}
          <img
            src={challenge.imageUrl}
            alt={challenge.title}
            className="w-full h-[350px] md:h-[400px] object-cover rounded-lg border border-gray-300"
          />

          {/* Right: Details */}
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                {challenge.title}
              </h1>

              <div className="flex flex-wrap gap-3 mb-4">
                <span className="flex items-center gap-2 bg-[#e3d2ff] text-[#4728e0] px-3 py-2 rounded-md border border-[#4728e0]/40">
                  <FaListUl /> {challenge.category}
                </span>

                <span className="flex items-center gap-2 bg-[#C6F6D5] text-[#0a7100] px-3 py-2 rounded-md border border-[#046C4E]/40">
                  <FaUsers /> {challenge.participants} participants
                </span>

                <span className="flex items-center gap-2 bg-[#FFEEDB] text-[#FF7A00] px-3 py-2 rounded-md border border-[#FF7A00]/40">
                  <FaRegFlag /> {challenge.impactMetric}
                </span>
              </div>

              <p className="text-gray-700 text-[17px] mb-3">
                {challenge.description}
              </p>

              <div className="mt-3 space-y-2 text-gray-700">
                <p className="flex items-center gap-2">
                  <FaBullseye className="text-[#7E59D3]" />{" "}
                  <span>
                    <b>Target:</b> {challenge.target}
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <FaClock className="text-[#5EC57E]" />{" "}
                  <span>
                    <b>Duration:</b> {challenge.duration} days
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <FaCalendarAlt className="text-[#E80B28]" />{" "}
                  <span>
                    <b>Start:</b> {challenge.startDate} &nbsp; | &nbsp;{" "}
                    <b>End:</b> {challenge.endDate}
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <FaEnvelope className="text-[#7E59D3]" />{" "}
                  <span>
                    <b>Created by:</b> {challenge.createdBy}
                  </span>
                </p>
              </div>

              {
                isJoined ?
                  <button
                    className="btn mt-6 flex items-center gap-2 bg-[#E80B28] hover:bg-[#c90b22] text-white font-semibold rounded-md px-5 py-3 w-fit shadow-md"
                  >
                    Joined
                  </button> :
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="btn mt-6 flex items-center gap-2 bg-[#E80B28] hover:bg-[#c90b22] text-white font-semibold rounded-md px-5 py-3 w-fit shadow-md"
                  >
                    Join Challenge
                  </button>
              }
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-1/3">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Join This Challenge?
            </h2>
            <p className="text-gray-600 mb-6">
              You’re about to join <b>{challenge.title}</b>. Once you join, you
              can track your progress and compete with others!
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-100 cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  toast.success("Challenge joined successfully! 🚀");
                  handleJoin();
                }}
                className="px-5 py-2 bg-[#E80B28] text-white font-semibold rounded-md hover:bg-[#c90b22]"
              >
                Confirm Join
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChallengeDetails;
