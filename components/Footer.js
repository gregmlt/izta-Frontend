import React from 'react'
import H2Button from './ButtonWithUnderline'
import LinkedinSVGIcons from './iconsSVG/LinkedinSVGIcons';
import TwitterSVGIcons from './iconsSVG/TwitterSVGIcons';

function Footer() {
  return (
    <div className="px-4 md:px-[120px] bg-gradient-to-r from-[rgba(206,100,38,0.7)] to-[rgba(16,34,93,1)]/70">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
        <div className="h-auto md:h-[280px] w-full md:w-[40%] flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className='text-white text-[32px] md:text-[64px] font-bold tracking-wide'>IZTA</h1>
          <h3 className='w-full md:w-[50%] text-white font-semibold'>Mettre en avant les entreprises engagées</h3>
          <div className='flex justify-around w-[12%] md:w-[19%] md:justify-between mt-8'>
           <LinkedinSVGIcons />
           <TwitterSVGIcons />
          </div>
        </div>
        <div className="h-auto md:h-[280px] w-full md:w-[40%] pt-6 text-center md:text-left">
          <h3 className='text-white font-semibold text-base pb-3'>Recevez les nouveautés IZTA</h3>
          <input type='text' placeholder='Votre email...' className="w-[80%] md:w-auto p-2 rounded-md" />
        </div>
      </div>
      <div className='h-[1px] w-full bg-[#8E98A8] my-6'/>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="pb-1 text-white">Tous droits réservés © 2024 IZTA</p>
        <div className='flex flex-col md:flex-row items-center text-white md:mb-1'>
          <H2Button
            text="Qui sommes-nous ?"
            underlineColor="bg-[#003761]"
            type="button"
          />
          <H2Button
            text="Mentions légales"
            underlineColor="bg-[#003761]"
            type="button"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer