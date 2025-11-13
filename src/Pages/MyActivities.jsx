import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const MyActivities = () => {
  const userInfo = useLoaderData();
  const [challengeData, setChallengeData] = useState([]);
  const [mergedData, setMergedData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/challanges")
      .then((res) => res.json())
      .then((data) => setChallengeData(data));
  }, []);

  useEffect(() => {
    if (userInfo && challengeData.length > 0) {
      const merged = userInfo.map((userItem) => {
        const match = challengeData.find(
          (ch) => ch._id === userItem.challengeId
        );
        return {
          ...userItem,
          challengeTitle: match?.title || "Unknown",
          category: match?.category || "N/A",
          imageUrl: match?.imageUrl || "",
        };
      });
      setMergedData(merged);
    }
  }, [userInfo, challengeData]);

  const handleUpdate = (id) => {
    const updatedItem = mergedData.find((item) => item._id === id);
    const currentProgress = parseInt(updatedItem.progress);
    const newProgress = Math.min(currentProgress + 10, 100);

    fetch(`http://localhost:3000/userChallenges/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ progress: `${newProgress}%` }),
    })
      .then((res) => res.json())
      .then(() => {
        
        const updated = mergedData.map((item) =>
          item._id === id ? { ...item, progress: `${newProgress}%` } : item
        );
        setMergedData(updated);

        Swal.fire({
          title: "Progress Updated!",
          text: "Your challenge progress has been updated successfully.",
          icon: "success",
          confirmButtonColor: "#7E59D3",
        });
      });
  };

  return (
    <div className="max-w-11/12 mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl">
      <h2 className="text-2xl font-bold mb-6 text-center text-[#7E59D3]">
        My Activities
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full border">
          <thead className="bg-[#7E59D3] text-white text-sm">
            <tr>
              <th>#</th>
              <th>Challenge</th>
              <th>Progress</th>
              <th>Last Updated</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {mergedData.map((item, index) => (
              <tr
                key={item.id}
                className="hover:bg-[#f8f5ff] transition border-b"
              >
                <td>{index + 1}</td>
                <td className="font-semibold text-gray-800">
                  {item.challengeTitle}
                </td>
                <td>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-[#5EC57E] h-2.5 rounded-full"
                      style={{ width: item.progress }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-500">{item.progress}</span>
                </td>
                <td className="text-gray-600 text-sm">{item.joinDate}</td>
                <td className="text-center">
                  <button
                    onClick={() => handleUpdate(item._id)}
                    className="bg-[#7E59D3] text-white px-3 py-1 rounded-lg hover:bg-[#6a46c4] transition text-sm">
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyActivities;
