import React from "react";
import CompagniesMiniCard from "./CompagniesMiniCard";

export default function CompaniesLikedContainer() {
  return (
    <>
      <div className="flex flex-col w-[100%] h-[auto] bg-white py-4 px-3 ">
        <p className="text-3xl font-medium">Mes entreprises likées</p>
        <p className="mt-4 w-[85%] mb-10">
        Voici les entreprises que vous avez ajoutées à vos favoris.
        </p>
        <CompagniesMiniCard />
      </div>
    </>
  );
}
