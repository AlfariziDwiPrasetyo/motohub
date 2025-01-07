"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  console.log(query);

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      router.push(`/produk?search=${query}`);
    }
  };

  return (
    <div className="flex w-full justify-center mb-[34px] z-10">
      <div className="group/search-bar p-[14px_18px] bg-belibang-darker-grey ring-1 ring-[#414141] hover:ring-[#888888] max-w-full md:max-w-[560px] w-full rounded-full transition-all duration-300">
        <div className="relative text-left">
          <button
            onClick={() => router.push(`/produk?search=${query}`)}
            className="absolute inset-y-0 left-0 flex items-center"
          >
            <img src="/assets/images/icons/search-normal.svg" alt="icon" />
          </button>
          <input
            type="text"
            id="searchInput"
            className="w-full pl-[36px] focus:outline-none placeholder:text-[#595959] pr-9 bg-belibang-darker-grey"
            placeholder="Type anything to search..."
            value={query || ""}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyPress}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
