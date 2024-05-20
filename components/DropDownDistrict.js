import React, { useState } from "react";

export default function DropDownDistrict() {
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
          className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-[#615e59] rounded-md outline outline-1 hover:bg-[#e6e0d3]  "
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
              d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"
            />
          </svg>
          Régions
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
