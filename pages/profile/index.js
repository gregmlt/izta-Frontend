import CompaniesLikedContainer from "@/components/CompaniesLikedContainer";
import NavbarProfile from "@/components/NavBarProfile";
import PersonalAreaNavigation from "@/components/PersonalAreaNavigation";
import UserDataModal from "@/components/UserDataModal.js";
import CompagnyProfileModal from "@/components/CompanyProfileModal";
import StatisticsModal from "@/components/StatisticsModal";
import KudosListModal from "@/components/KudosListModal";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { logout } from "@/reducers/users";
import FindACompany from "@/components/FindACompany";
import Footer from "@/components/Footer";
import { deleteCompanyFromUser } from "@/reducers/companies";
import ContactContainer from "@/components/containers/ContactContainer";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("entreprises");
  const [userFirstName, setUserFirstName] = useState("");
  const [hasACompany, setHasCompany] = useState(false);
  const [data, setData] = useState("");
  const { token } = useSelector((state) => state.users.value);

  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    fetch(`http://localhost:3000/users/infos/${token}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          console.log(data.data);
          setHasCompany(data.data.company.length === 0);
          setUserFirstName(data.data.firstname);
        } else {
          console.error("Utilisateur non connecté");
        }
      });
  }, [token]);

  const handleLogout = () => {
    // Effacer le token dans le store Redux
    router.push("/");
    dispatch(logout());
    // Rediriger vers la page d'accueil
    dispatch(deleteCompanyFromUser());
  };

  const handlePushToLogin = () => {
    router.push("/login");
  };

  return (
    <>
      <div className="w-[100%] flex flex-col h-[auto] pb-[20%] px-[120px] pt-[30px] bg-[linear-gradient(to_right_bottom,rgba(206,100,38,0.5),rgba(16,34,93,0.9))]">
        <NavbarProfile background="bg-[#f7f5f1]/60" />
        <div className="w-[40%] mt-[15%] mb-[3%]">
          <p className="font-semibold text-5xl">Bienvenue {userFirstName}</p>
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
          <PersonalAreaNavigation
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            onLogout={handleLogout}
          />
          <div className="w-[67%] h-[100%] bg-white rounded-lg flex flex-col py-10 p-10 ">
            {activeTab === "entreprises" && <CompaniesLikedContainer />}
            {activeTab === "statistiques" && <StatisticsModal />}
            {activeTab === "infos-perso" && <UserDataModal />}
            {activeTab === "kudos-liste" && <KudosListModal />}
            {activeTab === "mes-infos-entreprise" && <CompagnyProfileModal />}
            {activeTab === "trouver-entreprise" && <FindACompany />}
          </div>
        </div>
      </div>
      <ContactContainer />
      <Footer />
    </>
  );
}
