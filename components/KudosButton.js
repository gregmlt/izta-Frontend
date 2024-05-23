import React from 'react'
import ClapSVGIcons from './iconsSVG/ClapSVGIcons'

function KudosButton() {
  return (
    <div className='cursor-pointer h-[40px] w-[130px] bg-[#004E89] text-white rounded-lg flex justify-center items-center'>
        Kudos
        <ClapSVGIcons />
    </div>
  )
}

export default KudosButton