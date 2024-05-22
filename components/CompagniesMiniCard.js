import React from "react";

export default function CompagniesMiniCard() {
  return (
    <div className="w-[70%] h-[auto] flex items-center py-4 px-3 border rounded-lg mb-10 g-white">
      <div className="bg-[url('/images/Team-building.jpg')] w-[100px] h-[100px] border border-2 bg-cover bg-center no-repeat rounded-full">
      </div>

      <div className="pl-8">
        <p className="text-3xl font-medium">Safran</p>
        <p className="text-gray-500">Industrie aéronautique</p>
      </div>
    </div>
  );
}
