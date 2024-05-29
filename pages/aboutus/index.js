import React from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import Navbar from "@/components/Navbar";

export default function index() {
  return (
    <div>
      <div className="w-full h-full px-[120px]">
        <div className="w-[100%] h-[50px] mt-4 flex">
          <Navbar />
          {/* <Link href="./">
            <img src="/Logo/Logomark.svg" className="w-[100%] h-[100%]" />
          </Link> */}
        </div>
      </div>
      <div className="flex flex-col justify-center bg-[linear-gradient(to_left_bottom,rgba(206,100,38,0.9),rgba(16,34,93,1)),url('/images/campain-asso.jpg')] bg-cover h-[700px] px-[120px] mt-10">
        <h1 className="text-5xl text-white font-semibold w-[50%] mb-10">
          Transformons la Transition Écologique Ensemble avec IZTA
        </h1>
        <p className="text-white w-[50%]">
          IZTA est un projet novateur visant à mettre en avant les entreprises
          les plus engagées dans la transition écologique. Nous nous adressons
          particulièrement aux entreprises ayant un chiffre d'affaires inférieur
          à 40 millions d'euros, confrontées à une réglementation accrue,
          notamment la CSRD (Corporate Sustainability Reporting Directive).
          Notre mission est de transformer ces contraintes réglementaires en
          opportunités tangibles.
        </p>
      </div>
      <div className="flex flex-row justify-center w-[100%] h-[700px] px-[120px] mt-5">
        <div className="w-[50%] mr-20 place-self-center">
          <h1 className="text-5xl text-black font-semibold mb-10 mt-10 ">
            Notre Mission
          </h1>
          <p className="text-black mb-6">
            Chez IZTA, nous croyons que chaque entreprise a le potentiel de
            devenir un acteur clé dans la transition écologique. Notre objectif
            est de faciliter cette transformation en offrant une plateforme
            innovante et accessible qui aide les entreprises à mettre en valeur
            leurs efforts et leurs engagements environnementaux. Voici comment
            nous y parvenons :
          </p>
          <ul className="list-disc list-inside ml-5">
            <li className="mb-3">
              Met en avant les entreprises les plus engagées en matière de
              responsabilité sociétale et environnementale.
            </li>
            <li className="mb-3">
              Permet des comparaisons sectorielles pour évaluer les performances
              écologiques des entreprises.
            </li>
            <li className="mb-3">
              Simplifie la compréhension des rapports RSE (Responsabilité
              Sociétale des Entreprises) souvent complexes et difficilement
              comparables.
            </li>
            <li className="mb-3">
              Améliore la communication des initiatives écologiques des
              entreprises, souvent négligée.
            </li>
          </ul>
        </div>

        <div className="w-[50%] m-10 bg-[url('/images/Team2.jpg')] bg-cover bg-center bg-no-repeat rounded-md">
          {/* <img src="./images/Team2.jpg"/> */}
        </div>
      </div>

      <div className="flex flex-row justify-center w-[100%] h-[700px] px-[120px] mt-5 mb-20">
        <div className="w-[15%] m-5 bg-[url('/images/foret.jpg')] bg-cover bg-center bg-no-repeat rounded-md"></div>
        <div className="w-[15%] m-5 bg-[url('/images/ampoule.jpg')] bg-cover bg-center bg-no-repeat rounded-md"></div>
        <div className="w-[15%] m-5 bg-[url('/images/people.jpg')] bg-cover bg-center bg-no-repeat rounded-md"></div>

        <div className="w-[50%] ml-20 place-self-center">
          <h1 className="text-5xl text-black font-semibold mb-10 mt-10 ">
            Nos Valeurs
          </h1>

          <ul className="list-disc list-inside ml-5">
            <li className="mb-3">
              <span className="font-semibold">Engagement écologique</span> :
              Nous valorisons les entreprises qui prennent des mesures concrètes
              pour réduire leur impact environnemental.
            </li>
            <li className="mb-3">
              <span className="font-semibold">Innovation</span> : Nous utilisons
              des technologies avancées comme la géolocalisation, des connexions
              API avec des bases de données telles que SIRENE, et l'intelligence
              artificielle pour optimiser la présentation des engagements RSE
              des entreprises.
            </li>
            <li className="mb-3">
              <span className="font-semibold">Transparence et Sécurité</span> :
              La sécurité des données personnelles est primordiale pour nous,
              tout comme la transparence dans la communication des performances
              écologiques des entreprises.
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-[100%] h-[700px] px-[120px] mt-5 bg-[#eeeae2]">
        <h1 className="text-5xl text-black font-semibold mb-20 mt-20 ">
          Pourquoi choisir IZTA
        </h1>

        <div className="flex justify-center">
          <div className="flex flex-col w-[300px] h-[300px] mr-5">
            <div className="flex items-center mb-8">
              <img src="/Logo/Logo.svg" className="w-[30px] " />
              <p className="text-xl font-semibold">Une stratégie sur mesure</p>
            </div>
            <p className="text-lg ml-6">
              Stratégie 360°, alignée avec vos objectifs et conforme avec la
              certification RSE
            </p>
          </div>
          <div className="flex flex-col w-[350px] h-[300px] mr-5">
            <div className="flex items-center mb-8">
              <img src="/Logo/Logo.svg" className="w-[30px] " />
              <p className="text-xl font-semibold">
                Gestion administrative de A à Z
              </p>
            </div>
            <p className="text-lg ml-6">
              Nous vous offrons des conseils pour une gestion claire et
              performante de vos démarches de mécénat
            </p>
          </div>
          <div className="flex flex-col w-[350px] h-[300px] mr-5">
            <div className="flex items-center mb-8">
              <img src="/Logo/Logo.svg" className="w-[30px] " />
              <p className="text-xl font-semibold">
                Suivi des actions de contrepartie
              </p>
            </div>
            <p className="text-lg ml-6">
              Impliquez vos équipes et communiquez vos valeurs avec impact au
              sein de votre organisation
            </p>
          </div>
          <div className="flex flex-col w-[350px] h-[300px] mr-5">
            <div className="flex items-center mb-8">
              <img src="/Logo/Logo.svg" className="w-[30px] " />
              <p className="text-xl font-semibold">Garant de la confiance</p>
            </div>
            <p className="text-lg ml-6">
              Nous sélectionnons les associations selon des critères stricts
              pour avancer en toute confiance
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
