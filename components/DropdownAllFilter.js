import React, { useState } from "react";

export default function DropdownAllFilter() {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState({
    filter1: false,
    filter2: false,
    filter3: false,
  });

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.checked,
    });
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          onClick={toggleDropdown}
          className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-[#615e59] rounded-md border border-1 border-[#615e59] hover:bg-[#7F7B74] hover:border-[#7F7B74]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 mr-2 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
            />
          </svg>
          Tous les filtres
        </button>
      </div>

      {isOpen && (
        <div className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div className="px-4 py-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="filter1"
                  checked={filters.filter1}
                  onChange={handleCheckboxChange}
                  className="form-checkbox"
                />
                <span className="ml-2">Auvergne</span>
              </label>
            </div>
            <div className="px-4 py-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="filter2"
                  checked={filters.filter2}
                  onChange={handleCheckboxChange}
                  className="form-checkbox"
                />
                <span className="ml-2">Filtre 2</span>
              </label>
            </div>
            <div className="px-4 py-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="filter3"
                  checked={filters.filter3}
                  onChange={handleCheckboxChange}
                  className="form-checkbox"
                />
                <span className="ml-2">Filtre 3</span>
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
