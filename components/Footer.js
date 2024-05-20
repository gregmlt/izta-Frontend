import React from 'react'
import H2Button from './ButtonWithUnderline'

function Footer() {
  return (
    <div className="px-[120px] bg-gradient-to-r from-[rgba(206,100,38,0.7)] to-[rgba(16,34,93,1)]/70">
      <div className="flex justify-between">
        <div className="h-[280px] w-[40%] flex flex-col">
          <h1 className='text-white text-[64px] font-bold tracking-wide'>IZTA</h1>
          <h3 className='w-[50%] text-white font-semibold'>Mettre en avant les entreprises engagées</h3>
          <div className='flex w-[12%] justify-between mt-8'>
          <svg className='fill-current' width="20" height="20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">

<path d="M76.3596 7.93292H90.4158L59.7072 43.0308L95.8334 90.7911H67.5469L45.3919 61.8247L20.0415 90.7911H5.97688L38.8227 53.25L4.16675 7.93292H33.1714L53.1976 34.4093L76.3596 7.93292ZM71.4264 82.3778H79.215L28.9392 15.9043H20.5812L71.4264 82.3778Z" fill="white"/>
</svg>

<svg width="20" height="20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_268_1858)">
<path d="M92.618 0H7.38195C5.42413 0 3.54651 0.77774 2.16212 2.16212C0.77774 3.54651 0 5.42413 0 7.38195V92.618C0 94.5759 0.77774 96.4535 2.16212 97.8379C3.54651 99.2223 5.42413 100 7.38195 100H92.618C94.5759 100 96.4535 99.2223 97.8379 97.8379C99.2223 96.4535 100 94.5759 100 92.618V7.38195C100 5.42413 99.2223 3.54651 97.8379 2.16212C96.4535 0.77774 94.5759 0 92.618 0ZM29.8056 85.1875H14.7708V37.4306H29.8056V85.1875ZM22.2778 30.8125C20.5723 30.8029 18.908 30.2883 17.4947 29.3337C16.0815 28.3791 14.9827 27.0272 14.337 25.4487C13.6913 23.8702 13.5277 22.1358 13.8668 20.4644C14.2059 18.793 15.0325 17.2595 16.2423 16.0574C17.4521 14.8554 18.9909 14.0386 20.6644 13.7103C22.338 13.3819 24.0713 13.5566 25.6456 14.2124C27.22 14.8682 28.5647 15.9757 29.5103 17.3951C30.4558 18.8144 30.9597 20.482 30.9583 22.1875C30.9744 23.3293 30.7605 24.4627 30.3292 25.52C29.898 26.5774 29.2583 27.5371 28.4482 28.3419C27.6382 29.1468 26.6744 29.7803 25.6143 30.2048C24.5542 30.6292 23.4195 30.8359 22.2778 30.8125ZM85.2222 85.2292H70.1944V59.1389C70.1944 51.4444 66.9236 49.0694 62.7014 49.0694C58.2431 49.0694 53.8681 52.4306 53.8681 59.3333V85.2292H38.8333V37.4653H53.2917V44.0833H53.4861C54.9375 41.1458 60.0208 36.125 67.7778 36.125C76.1667 36.125 85.2292 41.1042 85.2292 55.6875L85.2222 85.2292Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_268_1858">
<rect width="100" height="100" fill="white"/>
</clipPath>
</defs>
</svg>


      </div>
    </div>
    <div className="h-[280px] w-[40%]  pt-6">
        <h3 className='text-white font-semibold text-base pb-3'>Recevez les nouveautés IZTA
</h3>
        <input type='text' placeholder='Votre email...'/>
        </div>
      </div>
      <div className='h-[1px] w-[100%] bg-[#8E98A8] absolute left-0'/>
      <div className="flex justify-between items-center">
        <p className="pb-1 text-white">Tous droits réservés © 2024 IZTA</p>
        <div className='text-white'>
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