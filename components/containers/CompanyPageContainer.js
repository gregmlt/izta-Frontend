import React, { useEffect, useState } from 'react'
import ArrowLeftSVGIcons from '../iconsSVG/ArrowLeftSVGIcons'
import CompanyInfoModal from '../CompanyInfoModal'
import Navbar from '../Navbar'
import FiltersBlock from "../FiltersBlock";
import { useRouter } from 'next/router';
import { useParams } from 'next/navigation';
import { useSelector } from "react-redux";
import ContactContainer from '../containers/ContactContainer';



function CompanyPageContainer() {
   // État local pour stocker les informations de l'entreprise
  const [companyInfo, setCompanyInfo] = useState({});

  // Récupérer les paramètres de l'URL, y compris l'ID de l'entreprise
  const params = useParams()
  const router = useRouter();

  // Extraire l'ID de l'entreprise des paramètres
  const companyIdx = params.id;


  
// Récupérer le token utilisateur depuis le store Redux
  const token = useSelector((state) => state.users.value.token);


  useEffect(() => {
    // Fonction asynchrone pour récupérer les informations de l'entreprise depuis l'API

    const fetchCompanyInfo = async () => {
      try {
        // Faire une requête pour récupérer les informations de l'utilisateur
        const response = await fetch(`http://localhost:3000/users/infos/${token}`);
        const data = await response.json();
        
         // Filtrer les entreprises likées pour trouver celle qui correspond à l'ID
         const newCompanyInfoData = data.data.likedCompanies.filter(el => el._id === companyIdx)
         const newCompanyInfoDataObject = newCompanyInfoData[0];

         // Mettre à jour l'état local avec les informations de l'entreprise trouvée
         setCompanyInfo(newCompanyInfoDataObject)
      } catch (error) {
        console.error("Erreur lors de la récupération des informations de l'entreprise:", error);
      }
    };


    // Si l'ID de l'entreprise est présent, récupérer les informations
    if (companyIdx) {
      fetchCompanyInfo();
    }
  }, [companyIdx, token]); // Ajouter token dans les dépendances pour éviter un avertissement


  // Fonction pour naviguer vers la page de profil
  const previewPage = () => {
    router.push("/profile");
  }
  return (
    <div>
        {/* Barre de navigation */}
       <Navbar />

    <div className="w-full h-[450px] bg-gradient-to-r from-[#ECB19B] via-[#E8A187] to-[#003761]/60 flex justify-center items-center">
      <FiltersBlock />
    </div>

    {/* Section principale avec les informations de l'entreprise */}
    <div className='px-[120px] py-[100px]'> 
        <div onClick={() => previewPage()}>
        <ArrowLeftSVGIcons />
        </div>

        {/* Modal avec les informations de l'entreprise */}
        <CompanyInfoModal companyName={companyInfo.companyName}/>
    </div>
    <div id="contact">
      <ContactContainer />
    </div>
    </div>
  )
}

export default CompanyPageContainer