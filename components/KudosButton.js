import React from "react";
import ClapSVGIcons from "./iconsSVG/ClapSVGIcons";

function KudosButton({hoverColor}) {
  return (
    <div
      className={`cursor-pointer px-4 py-3 w-[130px] bg-[#003761] text-white rounded-lg flex justify-center items-center ${hoverColor}`}
    >
      Kudos
      <ClapSVGIcons />
    </div>
  );
}

export default KudosButton;
