import React, { useEffect, useState } from "react";
import StarsSVGIcons from "./iconsSVG/StarsSVGIcons";
import HeartSVGIcons from "./iconsSVG/HeartSVGIcons";
import MedalSVGIcons from "./iconsSVG/MedalSVGIcons";
import KudosButton from "./KudosButton";
import InfoSVGIcon from "./iconsSVG/InfoSVGIcon";

function CompanyInfoModal({ companyName, taille }) {
  const [showPopover, setShowPopover] = useState(false);

  return (
    <div className="h-[500px] w-[60%] mx-auto my-[70px] flex flex-col">
      <div className="bg-white rounded-md shadow-lg w-[100%] min-h-[200px] flex my-5">
        <div className="w-[23%] p-4 relative">
          <div className="absolute top-[-89%]">
            <MedalSVGIcons />
          </div>
          <img
            alt="photo"
            src="https://images.unsplash.com/photo-1512403754473-27835f7b9984?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="rounded-sm h-[100%] object-cover"
          />
        </div>
        <div className="p-3 flex flex-col w-[100%]">
          <div className=" h-[50%] flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold">{companyName}</h1>
              <StarsSVGIcons />
            </div>
            <div className="mt-[-60px]">
              <HeartSVGIcons />
            </div>
          </div>
          <div className="h-[50%] flex justify-between items-end">
            <p className="text-xs w-[75%]pb-">
              Deuxième entreprise mondiale des métiers des concessions et de
              la construction, employant 275 000 salariés à travers le
              monde.Vinci, anciennement Société générale d'entreprises (SGE),
              est la deuxième entreprise mondiale des métiers des concessions et
              de la construction, employant 275 000 salariés à travers le monde.
            </p>
            <div className="mb-[-22px] text-[#003761] text-sm flex justify-center items-center"></div>
          </div>
        </div>
      </div>
      <div className="flex h-[55%] justify-between">
        <div className="h-[100%] w-[57%] pl-3 bg-white rounded-lg shadow-lg">
          <h3 className="py-3 border-b leading-6 font-semibold text-[20px]">
            Description
          </h3>
          <p className="text-balance pt-7">
            Deuxième entreprise mondiale des métiers des concessions et de
            la construction, employant 275 000 salariés à travers le
            monde.Vinci, anciennement Société générale d'entreprises (SGE), est
            la deuxième entreprise mondiale des métiers des concessions et de
            la construction, employant 275 000 salariés à travers le monde.
          </p>
        </div>
        <div className="h-[100%] w-[40%] pl-3 bg-white rounded-lg shadow-lg">
          <h3
            className="py-3 border-b font-semibold text-[20px]
          "
          >
            L’entreprise
          </h3>
          <p className="text-sm pt-7 mb-3">
            <span className="font-semibold">Secteur:</span> Industrie
            énergétique et de la construction
          </p>
          <p className="text-sm mb-3">
            <span className="font-semibold">Taille:</span> {taille}
          </p>
        </div>
      </div>
      <div className="self-end flex items-center mt-3 relative cursor-pointer ">
        <div
          className="mr-4"
          onMouseEnter={() => setShowPopover(true)}
          onMouseLeave={() => setShowPopover(false)}
        >
          <InfoSVGIcon />
          {showPopover && (
            <div className="absolute top-7 right-[calc(100%+10px)] w-64 p-3 text-sm text-black bg-[#B0C8DA] rounded-lg shadow-lg ">
              <p className="font-semibold text-md mb-2">
                C'est quoi les Kudos ?
              </p>
              <p className="mb-1">
                Les Kudos sont un moyen simple et efficace de montrer votre
                appréciation pour les entreprises engagées dans la transition
                écologique.
              </p>
              <p>
                Chaque Kudo compte et aide à créer un impact positif ! Montrez
                votre soutien dès maintenant !
              </p>
            </div>
          )}
        </div>
        <KudosButton hoverColor="hover:bg-[#3371a1]" />
      </div>
    </div>
  );
}

export default CompanyInfoModal;
