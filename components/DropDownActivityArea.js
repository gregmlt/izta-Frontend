import React, { useState } from "react";

export default function DropDownActivityArea() {
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
              d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
            />
          </svg>
          Secteur
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
