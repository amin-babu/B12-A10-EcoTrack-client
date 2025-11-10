import React from "react";
import { MdForest } from "react-icons/md";
import { GiRecycle, GiSolarPower } from "react-icons/gi";

const WhyGoGreen = () => {
  return (
    <section className="py-16 bg-[#F7FDF9] text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#041735]">
        Why Go Green?
      </h2>
      <p className="text-lg text-center md:text-xl font-semibold mt-4 text-[#041735]/50">
        Every small step towards sustainability helps create a better tomorrow.
      </p>

      <div className="grid md:grid-cols-3 mt-10 gap-8 w-11/12 mx-auto">

        <div className="p-8 bg-white rounded-2xl shadow hover:shadow-lg transition flex flex-col items-center text-center">
          <MdForest className="text-[#5EC57E] text-5xl mb-4" />
          <h3 className="font-semibold text-lg">Protect Forests</h3>
          <p className="text-gray-500 mt-2">
            Preserve trees and green spaces that keep our planet alive and breathing.
          </p>
        </div>

        <div className="p-8 bg-white rounded-2xl shadow hover:shadow-lg transition flex flex-col items-center text-center">
          <GiRecycle className="text-[#5EC57E] text-5xl mb-4" />
          <h3 className="font-semibold text-lg">Reduce Waste</h3>
          <p className="text-gray-500 mt-2">
            Embrace recycling and reuse to cut down on harmful landfill pollution.
          </p>
        </div>

        <div className="p-8 bg-white rounded-2xl shadow hover:shadow-lg transition flex flex-col items-center text-center">
          <GiSolarPower className="text-[#5EC57E] text-5xl mb-4" />
          <h3 className="font-semibold text-lg">Use Clean Energy</h3>
          <p className="text-gray-500 mt-2">
            Switch to renewable power and build a sustainable future for all.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyGoGreen;
