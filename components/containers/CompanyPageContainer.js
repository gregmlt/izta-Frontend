import React, { useEffect, useState } from 'react'
import ArrowLeftSVGIcons from '../iconsSVG/ArrowLeftSVGIcons'
import CompanyInfoModal from '../CompanyInfoModal'
import Navbar from '../Navbar'
import { useRouter } from 'next/router';
import { useParams } from 'next/navigation';
import SearchBar from '../SearchBar';
import ContactContainer from '../containers/ContactContainer';
import Footer from '../Footer';


function CompanyPageContainer({companyId}) {
   // État local pour stocker les informations de l'entreprise
  const [companyInfo, setCompanyInfo] = useState({});

  // Récupérer les paramètres de l'URL, y compris l'ID de l'entreprise
  const params = useParams()
  const router = useRouter();

  // Extraire l'ID de l'entreprise des paramètres
  
 

  



  useEffect(() => {
    // Fonction asynchrone pour récupérer les informations de l'entreprise depuis l'API

    const fetchCompanyInfo = async () => {
      try {
        // Faire une requête pour récupérer les informations de l'utilisateur
        const response = await fetch(`http://localhost:3000/companies/get/company/${companyId}`);
        const data = await response.json();
        console.log(data)
        setCompanyInfo(data.company)
         // Filtrer les entreprises likées pour trouver celle qui correspond à l'ID

        //  const newCompanyInfoData = data.data.likedCompanies.filter(el => el._id === companyIdx)
        //  const newCompanyInfoDataObject = newCompanyInfoData[0];

         // Mettre à jour l'état local avec les informations de l'entreprise trouvée
        //  setCompanyInfo(data)
      } catch (error) {
        console.error("Erreur lors de la récupération des informations de l'entreprise:", error);
      }
    };


    // Si l'ID de l'entreprise est présent, récupérer les informations
    
    if (companyId) {
      fetchCompanyInfo();
    }
    
  }, [companyId]); // Ajouter token dans les dépendances pour éviter un avertissement


  // Fonction pour naviguer vers la page de profil
  const previewPage = () => {
    router.back();
  }
  return (
    <div>
       <div className=" w-full h-[600px] bg-[linear-gradient(to_left_bottom,rgba(206,100,38,0.7),rgba(16,34,93,1)),url('/Logo/backgground.png')] bg-cover bg-bottom">
      <div className="w-full flex justify-center pt-8">
        <Navbar />
      </div>
      <div className="w-full flex flex-col justify-center items-center my-10 mt-20">
          <div>
            <p className="text-3xl mt-[25%] font-semibold text-white mb-10">
              Renseignez-vous sur l’engagement d’une entreprise.
            </p>
          </div>
          <div className="w-[50%] justify-center items-center">
            <SearchBar width="w-full" />
          </div>
        </div>
      </div>


    {/* Section principale avec les informations de l'entreprise */}
    <div className='px-[120px] py-[100px]'> 
        <div onClick={() => previewPage()}>
        <ArrowLeftSVGIcons />
        </div>

        {/* Modal avec les informations de l'entreprise */}
        <CompanyInfoModal companyName={companyInfo.companyName} taille={companyInfo.employeeNumber}/>
    </div>
    {/* <div id="contact">
      <ContactContainer />
    </div> */}
    <ContactContainer />
    <Footer />
    </div>
  )
}

export default CompanyPageContainer