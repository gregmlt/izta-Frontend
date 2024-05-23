import React from "react";

export default function SecondaryButton({ clickFunc, text, hoverColor, margin }) {
  return (
    <div>
      <button
        onClick={clickFunc}
        className={`rounded-md border border-[#004E89] ${margin} text-[#004E89] px-4 py-3 text-sm font-semibold shadow-sm ${hoverColor} hover:border-[#B0C8DA] transition ease-in-out 900ms`}
      >
        {text}
      </button>
    </div>
  );
}
