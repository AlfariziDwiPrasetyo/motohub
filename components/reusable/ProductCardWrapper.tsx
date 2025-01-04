"use client";
import React from "react";
import ProductCard from "./ProductCard";
import { trpc } from "@/app/_trpc/client";

function ProductCardWrapper() {
  const { data, isLoading } = trpc.product.getAllProducts.useQuery();
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 px-2 gap-[22px]">
      {isLoading ? (
        <>
          <div className="skeleton h-[180px] w-full"></div>
          <div className="skeleton h-[180px] w-full"></div>
          <div className="skeleton h-[180px] w-full"></div>
        </>
      ) : (
        data?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </div>
  );
}

export default ProductCardWrapper;
