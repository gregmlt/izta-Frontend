import React from "react";

const DropDownDiploma = ({ filters, onFilterChange }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
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
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {Object.keys(filters).map((filterKey) => (
              <div className="px-4 py-2" key={filterKey}>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name={filterKey}
                    checked={filters[filterKey]}
                    onChange={onFilterChange}
                    className="form-checkbox h-4 w-4 accent-[#003761] border-gray-300 rounded ring-[#003761] hover:ring-2 hover:ring-offset-2 cursor-pointer transition ease-in-out 700ms"
                  />
                  <span className="ml-2">{filterKey}</span>
                </label>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDownDiploma;
