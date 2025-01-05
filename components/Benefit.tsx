import { benefitData } from "@/lib/data";
import React from "react";

function Benefit() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 justify-center gap-2 p-3 md:gap-6 md:p-6">
      {benefitData.map((benefit) => (
        <div
          key={benefit.id}
          className="flex flex-col items-center max-w-sm p-4 bg-[#181818] rounded-lg shadow-md hover:shadow-lg transform transition-transform hover:scale-105"
        >
          <div className="bg-purple-500 p-3 mb-4 rounded-md justify-center flex items-center px-3">
            <benefit.icon className="text-white" size={24} />
          </div>
          <h3 className="md:text-base text-xs font-semibold text-white mb-2 text-center">
            {benefit.title}
          </h3>
          <p className="text-gray-400 text-xs text-center">
            {benefit.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Benefit;
