import React from "react";
import ArrowRightSVGIcons from "./iconsSVG/ArrowRightSVGIcons";

export default function CompagniesMiniCard() {
  return (
    <div className="h-[auto] flex items-center justify-between py-4 px-3 border rounded-lg mb-5 g-white">
      <div className="flex items-center">
      <div className="bg-[url('/images/Team-building.jpg')] w-[100px] h-[100px] border-2 bg-cover bg-center no-repeat rounded-full">
      </div>
      <div className="pl-8">
        <p className="text-3xl font-medium">Safran</p>
        <p className="text-gray-500">Industrie aéronautique</p>
      </div>
      </div>
      <div className="text-blue-500">
      <ArrowRightSVGIcons />
      </div>
    </div>
  );
}
