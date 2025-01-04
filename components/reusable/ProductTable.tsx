"use client";

import { trpc } from "@/app/_trpc/client";
import React from "react";
import EditProductButton from "./EditProductButton";
import DeleteProductButton from "./DeleteProductButton";

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
          <th>Price</th>
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
            <td>{d.price}</td>
            <td className="flex items-center gap-4">
              <EditProductButton />
              <DeleteProductButton id={d.id} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProductTable;
