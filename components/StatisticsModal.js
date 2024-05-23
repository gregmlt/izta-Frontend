import React from "react";
import ClapSVGIcons from "./iconsSVG/ClapSVGIcons";
import PrimaryButton from "./PrimaryButton";

function StatisticsModal() {
  return (
    <div>
      <p className="text-3xl font-medium">Mes statistiques</p>
      <p className="mt-4 w-[85%] mb-5">
        Les détails que vous fournissez sur cette page seront accessibles au
        public. Assurez-vous de ne partager que les incformations que vous êtes
        à l'aise de rendre publiques.
      </p>
      <div className="flex">
        <div className="w-[30%] mr-10 shadow-lg rounded-md flex flex-col items-center justify-between p-3">
          <div className="text-[#003761]">
            <ClapSVGIcons />
          </div>
          <h3 className="py-2 font-semibold text-[20px]">Mes Kudos reçus</h3>
          <p className="p-8 border-2 rounded-md text-4xl font-extrabold mb-4">
            7
          </p>
          <PrimaryButton text="Voir mes kudos" bgColor="bg-[#003761]" />
        </div>

        <div className="w-[30%] mr-10 shadow-lg rounded-md flex flex-col items-center p-3">
          <div className="text-[#003761]">
            <ClapSVGIcons />
          </div>
          <h3 className="py-2 font-semibold text-[20px]">Mes Likes reçus</h3>
          <p className="p-8 border-2 rounded-md text-4xl font-extrabold mb-4">
            155
          </p>
        </div>
      </div>
    </div>
  );
}

export default StatisticsModal;
