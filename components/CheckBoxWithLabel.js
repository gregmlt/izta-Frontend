import React, { useState } from 'react';

const CheckboxWithLabel = ({text}) => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="flex items-center space-x-2 mt-3">
      <input
        type="checkbox"
        id="my-checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
        className="form-checkbox h-4 w-4 accent-[#003761] border-gray-300 rounded ring-[#003761] hover:ring-2 hover:ring-offset-2 cursor-pointer transition ease-in-out 700ms"
      />
      <label htmlFor="my-checkbox">
        {text}
      </label>
    </div>
  );
};

export default CheckboxWithLabel;