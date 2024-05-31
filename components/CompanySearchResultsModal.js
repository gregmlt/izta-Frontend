import React from "react";
import HeartSVGIcons from "./iconsSVG/HeartSVGIcons";
import ButtonWithUnderline from "./ButtonWithUnderline";
import ArrowRightSVGIcons from "./iconsSVG/ArrowRightSVGIcons";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";


function CompanySearchResultsModal({
  name,
  taille,
  starsCount,
  imageSrc,
  companyId,
}) {
  const { token, likedCompanies } = useSelector(
    (state) => state.users.value)
  
  

  const capitalizeFirstLetter = (str) => {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  const router = useRouter();
  const handleCompanyPage = () => {
    router.push(`/company/${companyId}`);
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
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + "...";
  };

  return (
    <div
      className="p-6 bg-white mt-10 h-auto rounded-md flex flex-col items-start w-[95%] m-4 border hover:shadow-lg hover:border-[#003761] cursor-pointer transition ease-in-out 000ms hover-slide-up"
      onClick={handleCompanyPage}
    >
      <div className="w-full flex h-[190px] object-cover rounded-md bg-[linear-gradient(to_right_top,rgba(206,100,38,0.2),rgba(16,34,93,0.8)),url('/images/campain-asso.jpg')] bg-cover">
        <div className="flex items-start w-full p-3">
          <div className="ml-auto z-10">
            <HeartSVGIcons   fill={(likedCompanies.includes(companyId) && token) ? "red" : "transparent"}/>
          </div>
        </div>
      </div>
      {/* <img
        src="https://images.unsplash.com/photo-1512403754473-27835f7b9984?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt={name}
        className="w-full h-[170px] object-cover rounded-md"
      /> */}
      <div className="flex flex-col w-full mt-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-[#003761] mb-3">
            {truncateText(capitalizeFirstLetter(name), 25)}
          </h2>
        </div>
        <div className="flex">{renderStars(starsCount)}</div>
        <p className="text-sm mt-5">
          <span className="font-semibold">Secteur :</span> Industrie énergétique
          et de la construction
        </p>
        <p className="text-sm mt-1">
          <span className="font-semibold">Taille :</span> {taille}
        </p>
        <p className="text-sm mt-4">
          Le Lorem Ipsum est simplement du faux texte employé dans la
          composition et la mise en page avant impression. Le Lorem Ipsum est le
          faux texte standard de l'imprimerie depuis les années 1500, quand un
          imprimeur anonyme assembla ensemble des morceaux de texte pour
          réaliser un livre spécimen de polices de texte.
        </p>
        <div className="mt-4 md:mt-auto self-end flex items-center text-[#003761]">
          <ButtonWithUnderline
            text="En savoir plus"
            underlineColor="bg-[#003761]"
            type="button"
          />
          <ArrowRightSVGIcons />
        </div>
      </div>
    </div>
  );
}

export default CompanySearchResultsModal;
