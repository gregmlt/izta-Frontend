import React from "react";
import Navbar from "@/components/Navbar";
import TopCompaniesContainer from "./TopCompaniesContainer";
import ContactContainer from "./ContactContainer";
import FiltersBlock from "../FiltersBlock";
import Footer from "../Footer";

export default function HomeContainer() {
  return (
    <div className=" w-full h-[100vh] bg-[#f7f5f1] bg-[url('/Logo/backgground.png')] bg-cover bg-center bg-no-repeat">
      <div className="w-full flex justify-center pt-8">
        <Navbar />
      </div>
      <div className="w-full h-[95%] px-[120px] flex flex-col items-center justify-center pb-9 m">
        <div className="flex justify-center w-[100%]">
          <div className="w-[50%] text-end text-[#003761] content-end pr-5 ">
            <h1 className="text-8xl font-bold ">
              C'est quoi
              <p className="text-[140px]"> IZTA ?</p>
            </h1>
          </div>
          <div className="w-[50%] content-end pl-5">
            <p className="pr-[150px]">
              Bienvenue sur IZTA, la plateforme qui vous permet de trouver les
              entreprises avec les engagements sociaux et environnementaux les
              plus forts en France. Notre mission principale est de mettre en
              avant ces sociétés et de vous permettre de trouver l’entreprise
              qui vous correspond en fonction des critères qui comptent pour
              vous. Filtrez les entreprises selon vos critères. Laissez-vous
              guider et likez vos entreprises préférées.
            </p>
          </div>
        </div>
        <div className="pt-10">
          <FiltersBlock />
        </div>
      </div>
      <div></div>

      <div>
        <div className="w-[100%] h-[300px] bg-[linear-gradient(to_left_bottom,rgba(206,100,38,0.7),rgba(16,34,93,1))] flex justify-evenly">
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
      <Footer />
    </div>
  );
}
