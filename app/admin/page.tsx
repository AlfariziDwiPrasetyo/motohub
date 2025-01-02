import ProductTable from "@/components/reusable/ProductTable";
import React from "react";

function Page() {
  return (
    <div className="pt-[90px] px-5 ">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold mb-4">Admin Page</h2>
        <button className="border border-gray-400 hover:border-white text-gray-400  hover:text-white px-2 py-2 rounded-md transition-all font-semibold">
          Add Data
        </button>
      </div>

      <div className="overflow-x-auto py-14">
        <ProductTable />
      </div>
    </div>
  );
}

export default Page;
