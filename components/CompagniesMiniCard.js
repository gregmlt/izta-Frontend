import React from "react";
import ArrowRightSVGIcons from "./iconsSVG/ArrowRightSVGIcons";
import { useRouter } from "next/router";


const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export default function CompagniesMiniCard({companyId,companyName

}) {
  const router = useRouter();
  const handleRedirect = () => {
    
    router.push(`/company/${companyId}`);
  };


  return (
    <div className="h-[auto] flex items-center justify-between py-4 px-3 border rounded-lg mb-5 g-white">
      <div className="flex items-center">
      <div className="bg-[url('/images/Team-building.jpg')] w-[100px] h-[100px] border-2 bg-cover bg-center no-repeat rounded-full">
      </div>
      <div className="pl-8">
        <p className="text-3xl font-medium">{capitalizeFirstLetter(companyName)}</p>
        <p className="text-gray-500">Industrie catégorie...</p>
      </div>
      </div>
      <div className="text-blue-500">
      <div onClick={handleRedirect}>
      <ArrowRightSVGIcons />
      </div>
      </div>
    </div>
  );
}
