
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import React from "react";
import ClapSVGIcons from "./iconsSVG/ClapSVGIcons";
import PrimaryButton from "./PrimaryButton";
import KudosListModal from "./KudosListModal";

function StatisticsModal() {
  const [kudos, setKudos] = useState([]);
  const [likedCompanies, setLikedCompanies] = useState([]);
  const [isKudosModalVisible, setIsKudosModalVisible] = useState(false);
  const token = useSelector((state) => state.users.value.token);

  useEffect(() => {
    // Get kudos and likes from users
    fetch(`http://localhost:3000/companies/get/statistics/${token}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          setKudos(data.nbrKudos);
          setLikedCompanies(data.nbrLike);
        } else {
          console.error(
            "Erreur lors de la récupération des statistiques :",
            data.message
          );
        }
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des statistiques :",
          error
        );
      });
  }, [token]);

  const handleViewKudos = () => {
    setIsKudosModalVisible(true); // Ouvrir la modale
  };

  const handleCloseKudosModal = () => {
    setIsKudosModalVisible(false); // Fermer la modale
  };

  return (
    <div>
      {isKudosModalVisible ? (
        <KudosListModal close={handleCloseKudosModal} />
      ) : (
        <>
          <p className="text-3xl font-medium">Mes statistiques</p>
          <p className="mt-4 w-[85%] mb-5">
            Mesurez l'attractivité et l'image qu'à votre entreprise auprès des candidats grâce au nombre de likes et kudos reçus. Découvrez qui salue l'engagement de votre entreprise en cliquant sur "Voir mes kudos". 
          </p>
          <div className="flex">
            <div className="w-[30%] mr-10 shadow-lg rounded-md flex flex-col items-center justify-between p-3">
              <div className="text-[#003761]">
                <ClapSVGIcons />
              </div>
              <h3 className="py-2 font-semibold text-[20px]">
                Mes Kudos reçus
              </h3>
              <p className="p-8 border-2 rounded-md text-4xl font-extrabold mb-4">
                {kudos}
              </p>
              <PrimaryButton
                text="Voir mes kudos"
                bgColor="bg-[#003761]"
                clickFunc={handleViewKudos}
              />
            </div>

            <div className="w-[30%] mr-10 shadow-lg rounded-md flex flex-col items-center p-3">
              <div className="text-[#003761]">
                <ClapSVGIcons />
              </div>
              <h3 className="py-2 font-semibold text-[20px]">
                Mes Likes reçus
              </h3>
              <p className="p-8 border-2 rounded-md text-4xl font-extrabold mb-4">
                {likedCompanies}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default StatisticsModal;
