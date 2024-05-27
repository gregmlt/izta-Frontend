import React from "react";
import H2Button from "./ButtonWithUnderline";
import LinkedinSVGIcons from "./iconsSVG/LinkedinSVGIcons";
import TwitterSVGIcons from "./iconsSVG/TwitterSVGIcons";

function Footer() {
  return (
    <div className="flex flex-col justify-center px-[120px] bg-[#f4f1eb]">
      <div className="w-full flex flex-col items-center mt-16 ">
        <div className="w-[100px]">
          <img src="../Logo/Logomark.svg" />
        </div>
        <div className="pt-3">
          <h3 className="w-full text-lg font-semibold text-[#003761]">
            Mettre en avant les entreprises engagées
          </h3>
        </div>
        <div className="flex items-center mt-8">
          
          <div className="pr-4">
            <LinkedinSVGIcons />
          </div>
          <TwitterSVGIcons />
        </div>
      </div>
      <div className="w-[100%] h-[1px] bg-gray-300 mt-14"></div>




      <div className="flex justify-between items-center">
        <p className="pb-1 ">Tous droits réservés © 2024 IZTA</p>
        <div className="flex items-center md:mb-1">
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

export default Footer;
