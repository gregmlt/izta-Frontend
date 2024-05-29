import React from "react";
import Navbar from "@/components/Navbar";
import TopCompaniesContainer from "./TopCompaniesContainer";
import ContactContainer from "./ContactContainer";
import FiltersBlock from "../FiltersBlock";
import Footer from "../Footer";
import SearchBar from "../SearchBar";

export default function HomeContainer() {
  return (
    <div className="w-full h-[100vh] bg-[#f7f5f1] bg-[url('/Logo/backgground.png')] bg-cover bg-center bg-no-repeat">
      <div className="w-full flex justify-center pt-8">
        <Navbar />
      </div>
      <div className="w-full h-[95%] px-[120px] flex flex-col items-center justify-center pb-9 m">
        <div className="flex justify-center w-[100%]">
          <div className="w-[50%] text-end  text-[#003761] pt-6 pr-5">
            <h1 className="text-8xl font-bold place-content-end">
              C'est quoi
              <p className="text-[140px]"> IZTA ?</p>
            </h1>
          </div>
          <div className="w-[50%] content-end pl-5 pb-3">
            <p className="pr-[150px]">
              Bienvenue sur IZTA, la plateforme qui vous permet de trouver les
              entreprises avec les engagements sociaux et environnementaux les
              plus forts en France. Notre mission principale est de mettre en
              avant ces sociétés et de vous permettre de trouver l’entreprise
              qui vous correspond en fonction des critères qui comptent pour
              vous et likez vos entreprises préférées.
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col justify-center items-center my-10 mt-20">
          <div>
            <p className="text-3xl font-semibold text-[#003761] mb-10">
              Renseignez-vous sur l’engagement d’une entreprise.
            </p>
          </div>
          <div className="w-[50%] justify-center items-center">
            <SearchBar width="w-full" />
          </div>
        </div>
      </div>

      <div>
        <div className="w-[100%] h-[300px] bg-[linear-gradient(to_left_bottom,rgba(206,100,38,0.7),rgba(16,34,93,1))] flex justify-evenly">
          <div className="flex flex-col justify-center items-center text-white">
            <p className="font-bold text-5xl">+590</p>
            <p className="font- text-xl">entreprises évaluées</p>
          </div>

          <div className="flex flex-col justify-center items-center text-white">
            <p className="font-bold text-5xl">5</p>
            <p className="font- text-xl">labels </p>
          </div>

          <div className="flex flex-col justify-center items-center text-white">
            <p className="font-bold text-5xl">10</p>
            <p className="font- text-xl">entreprises partenaires</p>
          </div>

          <div className="flex flex-col justify-center items-center text-white">
            <p className="font-bold text-5xl">+1M</p>
            <p className="font- text-xl">employés concernés</p>
          </div>
        </div>
      </div>
      <TopCompaniesContainer />
      <div id="contact">
        <ContactContainer />
      </div>
      <Footer />
    </div>
  );
}
