import React from 'react'
import ContactModal from './ContactModal'

function ContactContainer() {
  return (
    <div className="px-[120px] flex justify-center items-center h-auto py-11 bg-[url('/images/background-section-contact.png')] bg-cover bg-center bg-no-repeat">
        <div className='w-[50%] h-[70%] pl-11 py-6'>
            <h1 className='font-bold text-[48px] text-[#003761] leading-6 pb-3'>Contactez-nous</h1>
            <h3 className='font-medium text-[24px] text-[#003761]'>Nous sommes là pour vous aider !</h3>
            <p className='text-balance text-[20px] leading-7 tracking-wide pt-[100px]'>Que vous ayez des questions, des commentaires ou que vous souhaitiez en savoir plus sur nos produits et services, n'hésitez pas à nous contacter. Notre équipe est prête à vous assister et à répondre à vos besoins.</p>
        </div>
        <div className='w-[50%] h-[70%] '>   
        <ContactModal />
        </div>
    </div>
  )
}

export default ContactContainer