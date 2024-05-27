import React, { useState, useEffect, useRef } from "react";
import InfoSVGIicon from "../components/iconsSVG/InfoSVGIcon";

export default function DropDownReview() {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState({
    oneStar: false,
    twoStars: false,
    threeStars: false,
    fourStars: false,
    fiveStars: false,
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




  const renderStars = (count) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          fill={i < count ? "#CE7E60" : "none"}
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke={i < count ? "#c26d5c" : "#cbd5e0"}
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
          />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="relative inline-block text-left z-10"ref={dropdownRef}>
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
          Filtrer par note
        </button>
      </div>

      {isOpen && (
        <div className="absolute right-0 w-80 mt-2 py-3 px-2 origin-top-right bg-white border border-gray-200 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <p className="py-1 px-4 font-semibold">Filtrer par note</p>
            <div className="w-[100%] h-[1px] bg-gray-300 mt-2 mb-3"></div>
            {Object.keys(filters).map((key, index) => (
              <div key={key} className="px-4 py-2 flex items-center">
                <input
                  type="checkbox"
                  name={key}
                  checked={filters[key]}
                  onChange={handleCheckboxChange}
                  className="form-checkbox h-4 w-4 accent-[#003761] border-gray-300 rounded ring-[#003761] hover:ring-2 hover:ring-offset-2 cursor-pointer transition ease-in-out 700ms"
                />
                <span className="ml-2 flex">{renderStars(index + 1)}</span>
              </div>
            ))}
            <div className="mt-4 flex px-4 py-2 text-sm text-gray-600">
              <InfoSVGIicon />
              <p className="pl-3 text-md ">
              Nous évaluons l'engagement des entreprises dans leur mécénat, en
              tenant compte de l'impact social, de la transparence des actions
              et de la durée des engagements, 5 étant le niveau d'engagement le
              plus élevé.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
