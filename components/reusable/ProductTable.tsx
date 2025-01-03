"use client";

import { trpc } from "@/app/_trpc/client";
import React from "react";
import { BsPencilFill } from "react-icons/bs";
import { TbTrashFilled } from "react-icons/tb";

function ProductTable() {
  const { data, isLoading } = trpc.product.getAllProducts.useQuery();

  if (isLoading) {
    return <div>is loading ....</div>;
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Category</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((d, id) => (
          <tr key={id}>
            <th>{d.id}</th>
            <td>{d.name}</td>
            <td>{d.category}</td>
            <td>{d.description}</td>
            <td className="flex items-center gap-4">
              <button className="bg-yellow-500  p-4 rounded-md ">
                <BsPencilFill />
              </button>
              <button className="bg-red-500  p-4 rounded-md">
                <TbTrashFilled />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProductTable;
