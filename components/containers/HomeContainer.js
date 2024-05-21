import React from "react";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import DropdownAllFilter from "@/components/DropdownAllFilter";
import DropDownDistrict from "@/components/DropDownDistrict";
import DropDownActivityArea from "@/components/DropDownActivityArea";
import DropDownReview from "@/components/DropDownReview";
import TopCompaniesContainer from "./TopCompaniesContainer";
import ContactContainer from "../ContactContainer";

export default function HomeContainer() {
  return (
    <>
      <div>
        <div
          className="px-[120px] h-[860px] grid grid-cols-12 
        grid-rows-[50px_80px_100px_100px_100px_100px_100px_100px]
        gap-x-4 bg-[#f7f5f1] bg-[url('/Logo/backgground.png')] bg-cover bg-center bg-no-repeat"
        >
          <div className="col-start-1 col-end-13 mt-6">
            <Navbar />
          </div>
          <div className="col-start-3 col-end-7 row-start-3 row-end-4 mt-6">
            <p className="text-8xl font-semibold text-[#003761] leading-[8rem]">
              C’est quoi <span className="text-[175px] ">Izta ?</span>
            </p>
          </div>
          <div className="col-start-7 col-end-11 row-start-3 row-end-4 mt-[95px] ">
            <p>
              Bienvenue sur IZTA, la plateforme qui vous permet de trouver les
              entreprises avec les engagements sociaux et environnementaux les
              plus forts en France. Notre mission principale est de mettre en
              avant ces sociétés et de vous permettre de trouver l’entreprise
              qui vous correspond en fonction des critères qui comptent pour
              vous. Filtrez les entreprises selon vos critères. Laissez-vous
              guider et likez vos entreprises préférées.
            </p>
          </div>
          <div className="col-start-1 col-end-13 row-start-6 row-end-7 text-center mt-20">
            <p className="text-3xl font-semibold text-[#003761]">
              Renseignez-vous sur l’engagement d’une entreprise.
            </p>
          </div>
          <div className="col-start-1 col-end-13 row-start-7 row-end-8 place-self-center mt-7">
            <SearchBar width="w-[570px]" />
          </div>
          <div className="col-start-4 col-end-7 row-start-8 row-end-9">
            <div className="flex justify-between w-[530px]">
              <DropDownDistrict />
              <DropDownActivityArea />
              <DropDownReview />
              <DropdownAllFilter />
            </div>
          </div>
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
