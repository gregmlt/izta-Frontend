import React from "react";

const CheckboxWithLabel = ({ text, checked, onCheckboxChange, name }) => {
  const id = `radio-${name}`;

  return (
    <div className="flex items-center space-x-2 mt-3 ">
      <input
        type="radio"
        id={id}
        name={name}
        checked={checked}
        onChange={onCheckboxChange}
        className="form-radio h-4 w-4 accent-[#003761] border-gray-300 rounded-full transition ease-in-out 700ms cursor-pointer"
      />
      <label htmlFor={id}>{text}</label>
    </div>
  );
};

export default CheckboxWithLabel;
