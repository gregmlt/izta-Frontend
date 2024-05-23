import React from "react";
import Navbar from "@/components/Navbar";
import TopCompaniesContainer from "./TopCompaniesContainer";
import ContactContainer from "./ContactContainer";
import FiltersBlock from "../FiltersBlock";

export default function HomeContainer() {
  return (
    <>
      <Navbar />
      <div className="py-[100px]">
        <div
          className="w-full h-[100vh] flex flex-col items-center justify-center bg-[#f7f5f1] bg-[url('/Logo/backgground.png')] bg-cover bg-center bg-no-repeat">
            <div className="flex w-[70%] h-[50%] justify-center">
              <h1 className="w-[50%] text-[70px] font-bold  tracking-wide text-[#00477D]">C'est quoi IZTA?</h1>
              <p className="text-balance w-[50%]">Bienvenue sur IZTA, la plateforme qui vous permet de trouver les entreprises avec les engagements sociaux et environnementaux les plus forts en France. Notre mission principale est de mettre en avant ces sociétés et de vous permettre de trouver l’entreprise qui vous correspond en fonction des critères qui comptent pour vous. Filtrez les entreprises selon vos critères. Laissez-vous guider et likez vos entreprises préférées.</p>
            </div>
            <FiltersBlock />
        </div>
        <div className="w-[100%] h-[250px] bg-[linear-gradient(to_left_bottom,rgba(206,100,38,0.7),rgba(16,34,93,1))] flex justify-evenly">
          <div className="flex flex-col justify-center items-center text-white">
            <p className="font-bold text-5xl">+50 000€</p>
            <p className="font- text-xl">de promesse de dons</p>
          </div>

          <div className="flex flex-col justify-center items-center text-white">
            <p className="font-bold text-5xl">50</p>
            <p className="font- text-xl">associations partenaires</p>
          </div>

          <div className="flex flex-col justify-center items-center text-white">
            <p className="font-bold text-5xl">10</p>
            <p className="font- text-xl">entreprises</p>
          </div>

          <div className="flex flex-col justify-center items-center text-white">
            <p className="font-bold text-5xl">6000</p>
            <p className="font- text-xl">employés à mobiliser</p>
          </div>
        </div>
      </div>
      <TopCompaniesContainer />
      <ContactContainer />
    </>
  );
}
