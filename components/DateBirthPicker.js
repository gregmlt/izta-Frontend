import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateBirthPicker = ({ editing }) => {
  const [dateOfBirth, setDateOfBirth] = useState(null);

  const handleDateChange = (date) => {
    setDateOfBirth(date);
  };

  return (
    <div className="w-full ">
      <label>Date de Naissance:</label>
      <DatePicker
        selected={dateOfBirth}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy"
        className="rounded-md border-0 px-4 py-3 mt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
        placeholderText="Sélectionnez votre date de naissance"
        maxDate={new Date()}
        disabled={editing}
      />
    </div>
  );
};

export default DateBirthPicker;
