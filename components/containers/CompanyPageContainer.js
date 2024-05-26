import React, { useEffect, useState } from 'react'
import ArrowLeftSVGIcons from '../iconsSVG/ArrowLeftSVGIcons'
import CompanyInfoModal from '../CompanyInfoModal'
import Navbar from '../Navbar'
import FiltersBlock from "../FiltersBlock";
import { useRouter } from 'next/router';


function CompanyPageContainer({ companyId }) {
  const [companyInfo, setCompanyInfo] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchCompanyInfo = async () => {
      try {
        const response = await fetch(`http://localhost:3000/companies/${companyId}`);
        const data = await response.json();
        console.log(data)
        setCompanyInfo(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des informations de l'entreprise:", error);
      }
    };

    if (companyId) {
      fetchCompanyInfo();
    }
  }, [companyId]);
  return (
    <div>
       <Navbar />
    <div className="w-full h-[450px] bg-gradient-to-r from-[#ECB19B] via-[#E8A187] to-[#003761]/60 flex justify-center items-center">
      <FiltersBlock />
    </div>
    <div className='px-[120px] py-[100px]'> 
        <ArrowLeftSVGIcons />
        <CompanyInfoModal />
    </div>
    </div>
  )
}

export default CompanyPageContainer