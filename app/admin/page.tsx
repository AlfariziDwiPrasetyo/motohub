import AddProductButton from "@/components/reusable/AddProductButton";
import ProductTable from "@/components/reusable/ProductTable";
import React from "react";

function Page() {
  return (
    <div className="pt-[120px] px-[50px] ">
      <h2 className="md:text-4xl text-3xl font-semibold text-center mb-4">
        Admin Page
      </h2>
      <div className="flex items-center justify-end">
        <AddProductButton />
      </div>

      <div className="overflow-x-auto py-14">
        <ProductTable />
      </div>
    </div>
  );
}

export default Page;
