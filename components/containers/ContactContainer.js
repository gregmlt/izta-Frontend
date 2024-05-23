import React from "react";
import ContactModal from "../ContactModal";

function ContactContainer() {
  return (
    <div className="px-4 md:px-[120px] flex flex-col md:flex-row justify-center items-center h-auto md:h-[741px] py-11 bg-white">
      <div className="w-full md:w-[50%] h-auto md:h-[70%] pl-4 md:pl-11 py-6">
        <h1 className="font-bold text-[32px] md:text-[48px] text-[#003761] leading-6 pb-3">
          Contactez-nous
        </h1>
        <h3 className="font-medium text-[20px] md:text-[24px] text-[#003761]">
          Nous sommes là pour vous aider !
        </h3>
        <p className="text-balance text-[16px] md:text-[20px] leading-7 tracking-wide pt-8 md:pt-[100px]">
          Que vous ayez des questions, des commentaires ou que vous souhaitiez
          en savoir plus sur nos produits et services, n'hésitez pas à nous
          contacter. Notre équipe est prête à vous assister et à répondre à vos
          besoins.
        </p>
      </div>
      <div className="w-full md:w-[50%] h-auto md:h-[70%] mt-8 md:mt-0">
        <ContactModal />
      </div>
    </div>
  );
}

export default ContactContainer;
