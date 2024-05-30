import React from "react";
import ArrowLeftSVGIcons from "./iconsSVG/ArrowLeftSVGIcons";
import { useRouter } from "next/router";

function TopCompaniesModal({ imageSrc, title, description, companyId }) {
  const router = useRouter();

  const handleCompanyPage = () => {
    router.push(`/company/${companyId}`);
  };

  return (
    <div className="p-6 bg-white rounded-md flex flex-col items-start w-full sm:w-1/3 md:w-1/4 m-4 md:min-h-[400px] border hover:shadow-lg hover:border-[#003761] cursor-pointer transition ease-in-out 000ms hover-slide-up">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-[170px] object-cover rounded-md"
      />
      <h2 className="text-xl font-semibold mt-4">{title}</h2>
      <p className="mt-2">{description}</p>
      <button
        onClick={handleCompanyPage}
        className="mt-4 md:mt-auto self-end text-[#003761] hover:underline-[#003761]"
      >
        En savoir plus
      </button>
    </div>
  );
}

export default TopCompaniesModal;
