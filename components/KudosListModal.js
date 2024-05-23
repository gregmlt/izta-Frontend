import React from 'react'
import ArrowLeftSVGIcons from './iconsSVG/ArrowLeftSVGIcons'
import ClapSVGIcons from './iconsSVG/ClapSVGIcons'
import LinkedinSVGIcons from './iconsSVG/LinkedinSVGIcons'

function KudosListModal() {
  return (
    <div>
        <p className="text-3xl font-medium mb-5">Mes statistiques</p>
        <div className='shadow-lg'>
            <div className='flex justify-between items-center border-b-2 p-5 mb-[100px]'>
                <ArrowLeftSVGIcons />
                <div className='flex justify-between'>
                    <ClapSVGIcons />
                    <p className='ml-3 text-[#004E89]'>Mes kudos reçus</p>
                </div>
            </div>
            <div className='p-5 flex justify-between border-b-2 mb-2'>
                <p className='text-[20px] font-semibold'>Monnier Stephane</p>
                <div>
                <LinkedinSVGIcons color="#004E89"/>
                </div>
            </div>
            <div className='p-5 flex justify-between border-b-2 mb-2'>
                <p className='text-[20px] font-semibold'>Monnier Stephane</p>
                <div>
                <LinkedinSVGIcons color="#004E89"/>
                </div>
            </div>
            <div className='px-5  py-7 flex justify-between border-b-2 mb-2'>
                <p className='text-[20px] font-semibold'>Monnier Stephane</p>
                <div>
                <LinkedinSVGIcons color="#004E89"/>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default KudosListModal