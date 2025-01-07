"use client";

import React from "react";
import ProductCardWrapper from "@/components/reusable/ProductCardWrapper";

import { useSearchParams } from "next/navigation";
import SearchBar from "@/components/reusable/SearchBar";

function page() {
  const searchParams = useSearchParams();

  const query = searchParams.get("search");

  return (
    <section
      id="allProduct"
      className="container pt-[72px] max-w-[1130px] mx-auto mb-[102px] flex flex-col gap-8 px-5"
    >
      <h2 className="font-semibold text-[36px] md:text-[48px] mt-5 px-2">
        All Product
      </h2>
      <SearchBar />
      <ProductCardWrapper searchQuery={query || ""} />
    </section>
  );
}

export default page;
