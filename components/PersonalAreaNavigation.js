import React, { useState, useEffect } from "react";
import PrimaryButton from "./PrimaryButton";
import ClapSVGIcons from "./iconsSVG/ClapSVGIcons";
import { useDispatch, useSelector } from "react-redux";
import { deleteCompanyFromUser, putCompanyToUser } from "@/reducers/companies";

export default function PersonalAreaNavigation({ setActiveTab, onLogout }) {
  const dispatch = useDispatch;
  const token = useSelector((state) => state.users.value.token);
  const hasACompany = useSelector((state) => state.company.hasACompany);

  useEffect(() => {
    fetch(`http://localhost:3000/users/infos/${token}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          if (data.data.company.length != 0) {
            dispatch(putCompanyToUser());
          }
        }
      });
  }, [hasACompany]);

  return (
    <div className="w-[32%] h-[100%] bg-white rounded-lg flex flex-col py-7 px-8">
      <div className="flex flex-col w-[100%]">
        <button
          onClick={() => setActiveTab("entreprises")}
          type="button"
          className="flex items-center py-4 px-3 mt-2 text-md font-medium bg-[F7F5F1] rounded hover:bg-[#f2c9ba] transition ease-in-out 800ms focus:outline-none focus:ring-2 focus:ring-[#f2c9ba]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
          Ma liste d'entreprises likées
        </button>

        <button
          onClick={() => setActiveTab("recherches")}
          type="button"
          className="flex items-center py-4 px-3 mt-2 text-md font-medium bg-[F7F5F1] rounded hover:bg-[#f2c9ba] transition ease-in-out 800ms  focus:outline-none focus:ring-2 focus:ring-[#f2c9ba]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          Mes recherches précédentes
        </button>
        <button
          onClick={() => setActiveTab("infos-perso")}
          type="button"
          className="flex items-center py-4 px-3 text-md mt-2 font-medium bg-[F7F5F1] rounded hover:bg-[#f2c9ba] transition ease-in-out 800ms  focus:outline-none focus:ring-2 focus:ring-[#f2c9ba]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"
            />
          </svg>
          Mes informations personnelles
        </button>

        {/* notifications button  */}

        <button
          onClick={() => setActiveTab("statistiques")}
          type="button"
          className="flex items-center py-4 px-3 text-md mt-2 font-medium bg-[F7F5F1] rounded hover:bg-[#f2c9ba] transition ease-in-out 800ms focus:outline-none focus:ring-2 focus:ring-[#f2c9ba]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
            />
          </svg>
          Mes statistiques
        </button>

        {/* mes kudos */}
        <button
          onClick={() => setActiveTab("kudos-liste")}
          type="button"
          className="flex items-center py-4 px-3 text-md mt-2 font-medium bg-[F7F5F1] rounded hover:bg-[#f2c9ba] transition ease-in-out 800ms focus:outline-none focus:ring-2 focus:ring-[#f2c9ba]"
        >
          <div className="mr-3 ml-[-8px]">
            <ClapSVGIcons color="black" />
          </div>
          Mes Kudos reçues
        </button>
      </div>

      {/* Modal se connecter à l'entreprise  */}

      <div className="flex flex-col mt-5">
        {!hasACompany && (
          <div className="w-[80%] h-[auto] flex flex-col px-4 py-5 border rounded-lg mb-10">
            <p className="mb-5">
              Vous avez été désigner comme administrateur de votre entreprise{" "}
            </p>
            <PrimaryButton
              text="Connecter mon entreprise"
              bgColor="bg-[#003761]"
              hoverColor="hover:bg-[#3371a1]"
            />
          </div>
        )}

        <button
          onClick={onLogout}
          type="button"
          className="flex items-center py-4 px-3 text-md mt-2 bg-[F7F5F1] rounded hover:text-[#ce7e60] transition ease-in-out 800ms focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
            />
          </svg>
          Se déconnecter
        </button>
      </div>
    </div>
  );
}
