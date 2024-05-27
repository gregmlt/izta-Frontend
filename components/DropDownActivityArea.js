import React, { useState, useEffect, useRef } from "react";

export default function DropDownSectors() {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState({
    AdministrationPublique: false,
    AgricultureSylvicultureEtPêche: false,
    ArtsSpectaclesEtActivitésRécréatives: false,
    Commerce: false,
    ConstructionEtImmobilier: false,
    ÉducationEtFormation: false,
    Énergie: false,
    Industrie: false,
    InformationEtCommunication: false,
    RechercheEtDéveloppement: false,
    SantéEtActionSociale: false,
    ServicesFinanciers: false,
    TransportsEtLogistique: false,
    TourismeEtHôtellerie: false,
  });

  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.checked,
    });
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);


  return (
    <div className="relative inline-block text-left z-10" ref={dropdownRef}>
      <div>
        <button
          type="button"
          onClick={toggleDropdown}
          className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-[#615e59] rounded-md outline outline-1 hover:bg-[#e6e0d3]"
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
          Secteurs
        </button>
      </div>

      {isOpen && (
        <div className="absolute right-0 w-[400px] mt-2 py-3 px-2 origin-top-right bg-white border border-gray-200 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <p className="py-1 px-4 font-semibold">Sélectionner les secteurs</p>
            <div className="w-[100%] h-[1px] bg-gray-300 mt-2 mb-3"></div>
            {Object.keys(filters).map((sector) => (
              <div key={sector} className="px-4 py-2">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name={sector}
                    checked={filters[sector]}
                    onChange={handleCheckboxChange}
                    className="form-checkbox h-4 w-4 accent-[#003761] border-gray-300 rounded ring-[#003761] hover:ring-2 hover:ring-offset-2 cursor-pointer transition ease-in-out 700ms"
                  />
                  <span className="ml-2">{sector.replace(/([A-Z])/g, ' $1').trim()}</span>
                </label>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
