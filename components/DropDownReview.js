import React, { useState } from "react";

export default function DropDownReview() {
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
          className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-[#615e59] rounded-md border border-1 border-[#615e59] hover:bg-[#e6e0d3]  "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            />
          </svg>
          Note Izta
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
