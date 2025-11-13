import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { FaRegClock, FaTag, FaUser } from "react-icons/fa";
import Loading from "../Components/Loading";
import Swal from "sweetalert2";

const EditChallenge = () => {
  const { id } = useParams();
  const [challenge, setChallenge] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://eco-track-server-rho.vercel.app/challanges/${id}`)
      .then(res => res.json())
      .then(data => setChallenge(data));
  }, [id]);

  if (!challenge) return <Loading />;

  const handleUpdate = e => {
    e.preventDefault();
    const form = e.target;

    const updatedChallenge = {
      title: form.title.value,
      category: form.category.value,
      description: form.description.value,
      duration: form.duration.value,
      target: form.target.value,
      impactMetric: form.impactMetric.value,
      imageUrl: form.imageUrl.value,
      startDate: form.startDate.value,
      endDate: form.endDate.value,
    };

    fetch(`https://eco-track-server-rho.vercel.app/challanges/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedChallenge),
    })
      .then(res => res.json())
      .then(data => {
        console.log('Updated Successfully:', data);
        Swal.fire({
          title: "Challenge Updated successfully.",
          icon: "success",
          draggable: true
        });
      });
  };

  return (
    <div className="bg-gray-50 py-10 flex justify-center items-center">
      <div className="card bg-white max-w-3xl w-11/12 border border-gray-200 shadow-lg p-8 rounded-2xl">
        <h2 className="text-3xl font-bold text-center text-[#041735] mb-6">
          Edit Challenge
        </h2>
        <form onSubmit={handleUpdate} className="space-y-5">

          {/* Title */}
          <div>
            <label className="block font-semibold mb-1 text-gray-700">Title</label>
            <input
              type="text"
              name="title"
              defaultValue={challenge.title}
              className="input input-bordered w-full bg-gray-100"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block font-semibold mb-1 text-gray-700">Category</label>
            <input
              type="text"
              name="category"
              defaultValue={challenge.category}
              className="input input-bordered w-full bg-gray-100"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-semibold mb-1 text-gray-700">Description</label>
            <textarea
              name="description"
              rows="4"
              defaultValue={challenge.description}
              className="textarea textarea-bordered w-full bg-gray-100"
            ></textarea>
          </div>

          {/* Duration & Participants */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block font-semibold mb-1 text-gray-700">Duration</label>
              <input
                type="text"
                name="duration"
                defaultValue={challenge.duration}
                className="input input-bordered w-full bg-gray-100"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1 text-gray-700">Participants</label>
              <input
                type="number"
                name="participants"
                defaultValue={challenge.participants}
                className="input input-bordered w-full bg-gray-100"
              />
            </div>
          </div>

          {/* Impact Metric */}
          <div>
            <label className="block font-semibold mb-1 text-gray-700">Impact Metric</label>
            <input
              type="text"
              name="impactMetric"
              defaultValue={challenge.impactMetric}
              className="input input-bordered w-full bg-gray-100"
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="block font-semibold mb-1 text-gray-700">Image URL</label>
            <input
              type="url"
              name="imageUrl"
              defaultValue={challenge.imageUrl}
              className="input input-bordered w-full bg-gray-100"
            />
          </div>

          {/* Dates */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block font-semibold mb-1 text-gray-700">Start Date</label>
              <input
                type="date"
                name="startDate"
                defaultValue={challenge.startDate}
                className="input input-bordered w-full bg-gray-100"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1 text-gray-700">End Date</label>
              <input
                type="date"
                name="endDate"
                defaultValue={challenge.endDate}
                className="input input-bordered w-full bg-gray-100"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-4 mt-6">
            <button
              onClick={() => navigate(-1)}
              type="button"
              className="px-5 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 rounded-md bg-[#5EC57E] hover:bg-[#4aa76a] text-white font-semibold"
            >
              Update Challenge
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default EditChallenge;
