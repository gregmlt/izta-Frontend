import React, { useState } from 'react';

const DropdownFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState({
    filter1: false,
    filter2: false,
    filter3: false,
    bac: false,
    bac2: false,
    bac3: false,
    bac45: false,
    bac8: false,
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
          className="inline-flex justify-center w-full px-4 py-3 text-sm font-semibold rounded-md bg-gray-200 hover:bg-[#f2c9ba]"
        >
          Séléctionner votre diplôme
          <svg
            className="w-5 h-5 ml-2 -mr-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="absolute left-0 w-[440px] mt-2 origin-top-right bg-white border border-gray-200 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <div className="px-4 py-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="filter1"
                  checked={filters.filter1}
                  onChange={handleCheckboxChange}
                  className="form-checkbox h-4 w-4 accent-[#003761] border-gray-300 rounded ring-[#003761] hover:ring-2 hover:ring-offset-2 cursor-pointer transition ease-in-out 700ms"
                />
                <span className="ml-2">DNB (Diplôme National du Brevet)</span>
              </label>
            </div>
            <div className="px-4 py-2">
              <label className="inline-flex items-center ">
                <input
                  type="checkbox"
                  name="filter2"
                  checked={filters.filter2}
                  onChange={handleCheckboxChange}
                  className="form-checkbox h-4 w-4 accent-[#003761] border-gray-300 rounded ring-[#003761] hover:ring-2 hover:ring-offset-2 cursor-pointer transition ease-in-out 700ms"
                />
                <span className="ml-2">CAP (Certificat d'Aptitude Professionnelle)</span>
              </label>
            </div>
            <div className="px-4 py-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="filter3"
                  checked={filters.filter3}
                  onChange={handleCheckboxChange}
                  className="form-checkbox h-4 w-4 accent-[#003761] border-gray-300 rounded ring-[#003761] hover:ring-2 hover:ring-offset-2 cursor-pointer transition ease-in-out 700ms"
                />
                <span className="ml-2">BEP (Brevet d'Études Professionnelles)</span>
              </label>
            </div>
            <div className="px-4 py-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="bac"
                  checked={filters.bac}
                  onChange={handleCheckboxChange}
                  className="form-checkbox h-4 w-4 accent-[#003761] border-gray-300 rounded ring-[#003761] hover:ring-2 hover:ring-offset-2 cursor-pointer transition ease-in-out 700ms"
                />
                <span className="ml-2">Baccalauréat</span>
              </label>
            </div>
            <div className="px-4 py-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="bac2"
                  checked={filters.bac2}
                  onChange={handleCheckboxChange}
                  className="form-checkbox h-4 w-4 accent-[#003761] border-gray-300 rounded ring-[#003761] hover:ring-2 hover:ring-offset-2 cursor-pointer transition ease-in-out 700ms"
                />
                <span className="ml-2">Bac +2 (BTS, DUT, DEUG ...)</span>
              </label>
            </div>
            <div className="px-4 py-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="bac3"
                  checked={filters.bac3}
                  onChange={handleCheckboxChange}
                  className="form-checkbox h-4 w-4 accent-[#003761] border-gray-300 rounded ring-[#003761] hover:ring-2 hover:ring-offset-2 cursor-pointer transition ease-in-out 700ms"
                />
                <span className="ml-2">Bac +3 (Licence, BUT ...)</span>
              </label>
            </div>
            <div className="px-4 py-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="bac45"
                  checked={filters.bac45}
                  onChange={handleCheckboxChange}
                  className="form-checkbox h-4 w-4 accent-[#003761] border-gray-300 rounded ring-[#003761] hover:ring-2 hover:ring-offset-2 cursor-pointer transition ease-in-out 700ms"
                />
                <span className="ml-2">Bac +5 (Master, Diplôme d'ingénieur ... )</span>
              </label>
            </div>
            <div className="px-4 py-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="bac8"
                  checked={filters.bac8}
                  onChange={handleCheckboxChange}
                  className="form-checkbox h-4 w-4 accent-[#003761] border-gray-300 rounded ring-[#003761] hover:ring-2 hover:ring-offset-2 cursor-pointer transition ease-in-out 700ms"
                />
                <span className="ml-2">Bac +8 (Doctorat)</span>
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownFilter;