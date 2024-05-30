import React, { useEffect, useState } from "react";
import StarsSVGIcons from "./iconsSVG/StarsSVGIcons";
import HeartSVGIcons from "./iconsSVG/HeartSVGIcons";
import MedalSVGIcons from "./iconsSVG/MedalSVGIcons";
import KudosButton from "./KudosButton";
import InfoSVGIcon from "./iconsSVG/InfoSVGIcon";
import { useSelector, useDispatch } from "react-redux";
import {addLikedCompany, addKudo, removeLikedCompany, removeKudo} from '../reducers/users'

function CompanyInfoModal({ companyName, taille, companyId, starsCount }) {
  const [isLiked, setIsLiked] = useState(true);
  const [hasKudo, setHasKudo] = useState(false);
  const [showPopover, setShowPopover] = useState(false);
  const { token, kudos, likedCompanies } = useSelector(
    (state) => state.users.value
  );
  const dispatch = useDispatch()

useEffect(() => {
  fetch(`http://localhost:3000/companies/get/company/${companyId}`)
  .then(response => response.json())
  .then((data) => {
    console.log(data)
  })
}, [token])
  
  const handleLikeToggle = async() => {
    const url = `http://localhost:3000/users/like/${token}/${companyId}`;
    const response = await fetch(url, { method: "POST" });
    const data = await response.json();

    if(data.result && token) {
      if (isLiked) {
        dispatch(removeLikedCompany(companyId));
      } else {
        dispatch(addLikedCompany(companyId));
      }
      setIsLiked(!isLiked);
    } else {
      console.error("Error liking/disliking company:", data.message);
    }
  };
  
  const handleKudoToggle = async() => {
  
  
  };

  const capitalizeFirstLetter = (str) => {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  const renderStars = (count) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          fill={i < count ? "#CE7E60" : "none"}
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke={i < count ? "#c26d5c" : "#cbd5e0"}
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
          />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="h-auto w-[80%] mx-auto my-[70px] flex flex-col">
      <div className="bg-white p-5 rounded-lg border  w-[100%] min-h-[480px] flex flex-col my-5">
        <div className="w-full flex h-[330px] object-cover rounded-md bg-[linear-gradient(to_right_top,rgba(206,100,38,0.2),rgba(16,34,93,0.8)),url('/images/campain-asso.jpg')] bg-cover">
          <div className="flex items-start w-full p-5">
            <div className="ml-auto z-10" onClick={handleLikeToggle}>
              <HeartSVGIcons stroke="stroke-white" fill={isLiked ? "red" : "lightgray"}/>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between px-5">
            <h1 className="text-7xl text-[#003761] font-semibold pt-5">
              {companyName}
            </h1>
            <div className="flex mt-5">{renderStars(starsCount)}</div>
          </div>
        </div>
      </div>
      <div className="p-3 flex flex-col w-[100%]">
        <div className="h-[50%] flex justify-between items-center">
          <div className="mt-[-60px]"></div>
        </div>
      </div>

      <div className="grid grid-cols-3 grid-rows-6 gap-6 h-[100%]">
        <div className="col-start-1 col-end-3 row-start-1 row-end-3 h-auto   w-full py-4 px-8 bg-white rounded-md border flex flex-col">
          <h3 className="border-b leading-6 font-semibold text-[20px] pb-4">
            Présentation
          </h3>
          <p className="text-balance pt-7">
            Deuxième entreprise mondiale des métiers des concessions et de la
            construction, employant 275 000 salariés à travers le monde.Vinci,
            anciennement Société générale d'entreprises (SGE), est la deuxième
            entreprise mondiale des métiers des concessions et de la
            construction, employant 275 000 salariés à travers le monde.
          </p>
        </div>
        <div className="col-start-1 col-end-2 row-start-3 row-end-5 h-auto w-full py-4 px-8  bg-white rounded-md border flex flex-col">
          <h3 className="border-b leading-6 font-semibold text-[20px] pb-4">
            Leur Vision
          </h3>
          <p className="text-balance pt-7">
            Chez Orange, nous croyons fermement que chaque entreprise a la
            responsabilité de protéger notre planète. Notre vision écologique
            est de devenir un leader mondial dans la création de technologies
            qui non seulement respectent l'environnement mais aussi restaurent
            les écosystèmes. Nous intégrons la durabilité dans toutes nos
            opérations, de la conception de produits à la gestion des
            ressources, en passant par nos processus de fabrication. Notre
            objectif est de créer un impact positif mesurable sur
            l'environnement, en développant des solutions qui réduisent les
            émissions de gaz à effet de serre, préservent les ressources
            naturelles et favorisent la biodiversité.
          </p>
        </div>
        <div className="col-start-2 col-end-3 row-start-1 row-end-2 self-end flex items-center mt-3 relative cursor-pointer">
          <div className="h-[100%]  w-full pl-3 bg-white rounded-md border  flex flex-col">
            <h3 className="py-3 border-b font-semibold text-[20px]">
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
          <div
            className="mr-4"
            onMouseEnter={() => setShowPopover(true)}
            onMouseLeave={() => setShowPopover(false)}
          >
            <InfoSVGIcon />
            {showPopover && (
              <div className="absolute top-7 right-[calc(100%+10px)] w-64 p-3 text-sm text-black bg-[#B0C8DA] rounded-lg shadow-lg">
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
          <div onClick={handleKudoToggle}>
          <KudosButton hoverColor="hover:bg-[#3371a1]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyInfoModal;

{
  /* <div className="w-[23%] p-4 relative">
  <div className="absolute top-[-89%]">
    <MedalSVGIcons />
  </div>
  <img
    alt="photo"
    src="https://images.unsplash.com/photo-1512403754473-27835f7b9984?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    className="rounded-sm h-[100%] object-cover"
  />
</div> */
}
