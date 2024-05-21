import React, { useState } from 'react'
import StarsSVGIcons from './iconsSVG/StarsSVGIcons'
import HeartSVGIcons from './iconsSVG/HeartSVGIcons'
import H2Button from './ButtonWithUnderline'

function CompanySearchResultsModal() {
  return (
    <div className='bg-white rounded-md shadow-lg w-[75%] min-h-[200px] mx-auto flex my-5'>
        <div className='w-[23%] p-4'>
            <svg className='absolute top-[28px]' width="25" height="25" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_150_1894)">
<path d="M0.280273 2.61133C0.0957031 2.33789 0 2.00977 0 1.68164C0 0.751953 0.751953 0 1.68164 0H9.15332C9.91895 0 10.6367 0.40332 11.0264 1.05957L15.709 8.85938C12.4141 9.27637 9.46777 10.8145 7.27344 13.0908L0.280273 2.61133ZM34.7129 2.61133L27.7266 13.0908C25.5322 10.8145 22.5859 9.27637 19.291 8.85938L23.9736 1.05957C24.3701 0.40332 25.0811 0 25.8467 0H33.3184C34.248 0 35 0.751953 35 1.68164C35 2.00977 34.9043 2.33789 34.7197 2.61133H34.7129ZM5.46875 22.9688C5.46875 19.7779 6.73632 16.7177 8.99262 14.4614C11.2489 12.2051 14.3091 10.9375 17.5 10.9375C20.6909 10.9375 23.7511 12.2051 26.0074 14.4614C28.2637 16.7177 29.5312 19.7779 29.5312 22.9688C29.5312 26.1596 28.2637 29.2198 26.0074 31.4761C23.7511 33.7324 20.6909 35 17.5 35C14.3091 35 11.2489 33.7324 8.99262 31.4761C6.73632 29.2198 5.46875 26.1596 5.46875 22.9688ZM18.0742 16.4814C17.8418 16.0029 17.165 16.0029 16.9258 16.4814L15.3945 19.585C15.2988 19.7764 15.1211 19.9062 14.916 19.9336L11.4844 20.4326C10.958 20.5078 10.7529 21.1504 11.1289 21.5264L13.6104 23.9463C13.7607 24.0967 13.8291 24.3018 13.7949 24.5137L13.207 27.9248C13.1182 28.4443 13.665 28.8477 14.1367 28.6016L17.1992 26.9883C17.3838 26.8926 17.6094 26.8926 17.7939 26.9883L20.8564 28.6016C21.3281 28.8477 21.875 28.4512 21.7861 27.9248L21.1982 24.5137C21.1641 24.3086 21.2324 24.0967 21.3828 23.9463L23.8643 21.5264C24.2471 21.1572 24.0352 20.5146 23.5088 20.4326L20.084 19.9336C19.8789 19.9062 19.6943 19.7695 19.6055 19.585L18.0742 16.4814Z" fill="#FFD600"/>
</g>
<defs>
<clipPath id="clip0_150_1894">
<rect width="35" height="35" fill="white"/>
</clipPath>
</defs>
</svg>
            
            <img alt="photo" src="https://images.unsplash.com/photo-1512403754473-27835f7b9984?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            className='rounded-sm h-[100%] object-cover'
            />
        </div>
        <div className='p-3 flex flex-col w-[100%]'>
            <div className=' h-[50%] flex justify-between items-center'>
                <div>
                <h1 className='text-4xl font-bold'>Vinci</h1>
                <StarsSVGIcons />
                </div>
                <div className='ml-7'>
                    <p className='text-sm'><span className='font-semibold'>Secteur:</span> Industrie énergétique et de la construction</p>
                    <p className='text-sm'><span className='font-semibold'>Taille:</span> 10 000 salariés et plus</p>
                </div>
                    <div className='mt-[-60px]'>

                    <HeartSVGIcons />
                    </div>
            </div>
            <div className='h-[50%] flex justify-between items-end'>
                <p className='text-xs w-[75%]'>Deuxième entreprise mondiale des métiers des concessions et de la construction, employant 275 000 salariés à travers le monde.Vinci, anciennement Société générale d'entreprises (SGE), est la deuxième entreprise mondiale des métiers des concessions et de la construction, employant 275 000 salariés à travers le monde.</p>
                <div className='mb-[-22px] text-[#003761] flex justify-center items-center'>
                <H2Button text="En savoir plus" underlineColor="bg-[#003761]" type="button"/>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" 
    
  />
</svg>

                </div>
            </div>
        </div>
    </div>
  )
}

export default CompanySearchResultsModal