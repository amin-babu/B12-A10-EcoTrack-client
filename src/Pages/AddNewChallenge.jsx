import { use, useState } from "react";
import { FaPlus } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../Contexts/AuthContext";

const AddNewChallenge = () => {
  const {user} = use(AuthContext);
  const [challenge, setChallenge] = useState({
    title: "",
    category: "",
    description: "",
    duration: "",
    target: "",
    impactMetric: "",
    imageUrl: "",
    startDate: "",
    endDate: "",
    createdBy: user?.email
  });

  const handleChange = (e) => {
    setChallenge({ ...challenge, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(challenge);

    fetch('http://localhost:3000/api/challanges', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(challenge)
    })
      .then(res => res.json())
      .then(data => {
        console.log('Data after creating challenge', data);
        Swal.fire({
          title: "Challenge created successfull.",
          icon: "success",
          draggable: true
        });
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="min-h-screen bg-[#f8f6f6] py-10">
      <div className="w-11/12 md:w-3/5 mx-auto bg-white shadow-lg border border-gray-200 rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <FaPlus className="text-[#7E59D3]" /> Add New Challenge
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Title */}
          <div>
            <label className="block font-semibold mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={challenge.title}
              onChange={handleChange}
              required
              className="input input-bordered w-full"
              placeholder="Enter challenge title"
            />
          </div>

          {/* Category (Dropdown) */}
          <div>
            <label className="block font-semibold mb-1">Category</label>
            <select
              name="category"
              value={challenge.category}
              onChange={handleChange}
              required
              className="select select-bordered w-full"
            >
              <option value="">-- Select Category --</option>
              <option value="Waste Reduction">Waste Reduction</option>
              <option value="Energy Conservation">Energy Conservation</option>
              <option value="Water Conservation">Water Conservation</option>
              <option value="Sustainable Transport">Sustainable Transport</option>
              <option value="Green Living">Green Living</option>
              <option value="Recycling & Upcycling">Recycling & Upcycling</option>
            </select>
          </div>


          {/* Description */}
          <div>
            <label className="block font-semibold mb-1">Description</label>
            <textarea
              name="description"
              value={challenge.description}
              onChange={handleChange}
              required
              className="textarea textarea-bordered w-full"
              placeholder="Write a short challenge description..."
            />
          </div>

          {/* Duration & Target */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block font-semibold mb-1">Duration (days)</label>
              <input
                type="number"
                name="duration"
                value={challenge.duration}
                onChange={handleChange}
                required
                className="input input-bordered w-full"
                placeholder="e.g. 15"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Target</label>
              <input
                type="text"
                name="target"
                value={challenge.target}
                onChange={handleChange}
                required
                className="input input-bordered w-full"
                placeholder="e.g. Improve design thinking"
              />
            </div>
          </div>

          {/* Impact Metric & Image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block font-semibold mb-1">Impact Metric</label>
              <input
                type="text"
                name="impactMetric"
                value={challenge.impactMetric}
                onChange={handleChange}
                required
                className="input input-bordered w-full"
                placeholder="e.g. projects submitted"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Image URL</label>
              <input
                type="text"
                name="imageUrl"
                value={challenge.imageUrl}
                onChange={handleChange}
                required
                className="input input-bordered w-full"
                placeholder="Paste image link"
              />
            </div>
          </div>

          {/* Start & End Dates */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block font-semibold mb-1">Start Date</label>
              <input
                type="date"
                name="startDate"
                value={challenge.startDate}
                onChange={handleChange}
                required
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">End Date</label>
              <input
                type="date"
                name="endDate"
                value={challenge.endDate}
                onChange={handleChange}
                required
                className="input input-bordered w-full"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn bg-[#7E59D3] hover:bg-[#6740b5] text-white font-semibold w-full mt-4"
          >
            Add Challenge
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNewChallenge;
