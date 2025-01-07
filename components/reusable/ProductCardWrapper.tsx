"use client";
import React from "react";
import ProductCard from "./ProductCard";
import { trpc } from "@/app/_trpc/client";

interface ProductCardWrapperProps {
  searchQuery?: string;
}

function ProductCardWrapper({ searchQuery }: ProductCardWrapperProps) {
  const { data, isLoading } = trpc.product.getAllProducts.useQuery({
    query: searchQuery || "",
  });

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
