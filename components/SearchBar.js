import React, { useState } from "react";
import { useEffect } from "react";
import { useSocket } from "../pages/SocketProvider";
import Router from "next/router";

export default function SearchBar({ width }) {
  const socket = useSocket();
  const [searchValue, setSearchValue] = useState("");

  const search = () => {
    socket.emit("searchQuery", { query: searchValue });
    Router.push("/results");
  };

  return (
    <div className="flex">
      <input
        type="text"
        placeholder="Rechercher une entreprise ..."
        className={`${width} px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none out-of-range:border-[#003761] focus:ring-1 focus:border-[#003761]`}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />

      <button
        onClick={() => search()}
        className="px-4 flex flex-row-reverse py-3 text-sm font-semibold text-white bg-[#003761] rounded-r-md hover:bg-[#3371a1] focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5 ml-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
        Rechercher
      </button>
    </div>
  );
}
