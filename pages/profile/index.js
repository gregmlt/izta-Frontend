import CompaniesLikedContainer from "@/components/CompaniesLikedContainer";
import Navbar from "@/components/Navbar";
import PersonalAreaNavigation from "@/components/PersonalAreaNavigation";
import UserDataModal from "@/components/UserDataModal.js";
import CompagnyProfileModal from "@/components/CompanyProfileModal";
import StatisticsModal from "@/components/StatisticsModal";
import KudosListModal from "@/components/KudosListModal";
import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { logout } from "@/reducers/users";


export default function Profile() {
  const [activeTab, setActiveTab] = useState(null);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    // Effacer le token dans le store Redux
    dispatch(logout());
    // Rediriger vers la page d'accueil
    router.push('/');
  };

  return (
    <>
      <div className="w-[100%] flex flex-col h-[auto] pb-[20%] px-[120px] pt-[30px] bg-[linear-gradient(to_right_bottom,rgba(206,100,38,0.5),rgba(16,34,93,0.9))]">
        <Navbar background="bg-[#f7f5f1]/60" />
        <div className="w-[40%] mt-[15%] mb-[3%]">
          <p className="font-semibold text-5xl">Bienvenue Mélanie</p>
          <p className="mt-[4%]">
            Bienvenue dans votre espace personnel. Ici, vous pouvez gérer
            l'ensemble de vos paramètres, personnaliser vos préférences, suivre
            vos activités et accéder à vos informations personnelles. Utilisez
            les différentes sections pour ajuster vos réglages de compte,
            consulter vos notifications, et optimiser votre expérience sur notre
            plateforme."
          </p>
        </div>

        {/* Modal personal navigation & display  */}

          <div className="flex justify-between">
        <PersonalAreaNavigation setActiveTab={setActiveTab} onLogout={handleLogout}/>
        <div className="w-[67%] h-[100%] bg-white rounded-lg flex flex-col py-10 p-10 ">
          {activeTab === "entreprises" && <CompaniesLikedContainer />}
          {activeTab === "statistiques" && <StatisticsModal />}
          {activeTab === "infos-perso" && <UserDataModal />}
          {activeTab === "kudos-liste" && <KudosListModal />}
          
          {/* <CompagnyProfileModal /> */}
          </div>
        </div>
      </div>
    </>
  );
}
