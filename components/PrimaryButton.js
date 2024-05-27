import React from "react";

export default function PrimaryButton({ textColor="text-white",
  bgColor,
  clickFunc,
  text,
  hoverColor,
  width,
  border,
}) {
  return (
    <div>
      <button
        onClick={clickFunc}
        className={`rounded-md ${bgColor} px-4 ${width} ${border} py-3 text-sm font-semibold ${textColor} shadow-sm ${hoverColor} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition ease-in-out 900ms`}
      >
        {text}
      </button>
    </div>
  );
}
