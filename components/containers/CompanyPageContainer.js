import React from 'react'
import ArrowLeftSVGIcons from '../iconsSVG/ArrowLeftSVGIcons'
import CompanyInfoModal from '../CompanyInfoModal'
import Navbar from '../Navbar'
import FiltersBlock from "../FiltersBlock";


function CompanyPageContainer() {
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