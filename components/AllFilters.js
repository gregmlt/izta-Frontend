import React, { useState } from "react";
import InfoSVGIcon from "./iconsSVG/InfoSVGIcon";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

export default function AllFilters() {
  //////////////////  ETAT pour les secteurs  /////////////////////

  const [filters, setFilters] = useState({
    administrationPublique: false,
    agriculture: false,
    arts: false,
    commerce: false,
    construction: false,
    education: false,
    energie: false,
    industrie: false,
    information: false,
    recherche: false,
    sante: false,
    servicesFinanciers: false,
    transports: false,
    tourisme: false,
  });

  //////////////////  ETAT pour les régions  /////////////////////

  const [filtersDistrict, setFiltersDistrict] = useState({
    AuvergneRhôneAlpes: false,
    BourgogneFrancheComte: false,
    Bretagne: false,
    CentreValDeLoire: false,
    Corse: false,
    GrandEst: false,
    HautsDeFrance: false,
    IleDeFrance: false,
    Normandie: false,
    NouvelleAquitaine: false,
    Occitanie: false,
    PaysDeLaLoire: false,
    ProvenceAlpesCoteDAzur: false,
  });

  //////////////////  ETAT pour les radio button societe en mission  /////////////////////

  const [radioFilters, setRadioFilters] = useState({
    societeMission: "",
    economieSolidaire: "",
    politiqueMecenat: "",
  });

  //////////////////  ETAT pour la nationalité /////////////////////

  const [nationalite, setNationalite] = useState({
    francais: false,
    europeen: false,
    extraEuropeen: false,
  });

  //////////////////  ETAT pour le nombres de salariés  /////////////////////

  const [taille, setTaille] = useState({
    taille1: false,
    taille2: false,
    taille3: false,
    taille4: false,
  });

  //////////////////  ETAT pour les labels /////////////////////

  const [labels, setLabels] = useState({
    rseEngage: false,
    ecovadis: false,
    bCorp: false,
    positiveCompany: false,
  });

  //////////////////  ETAT pour note Izta /////////////////////

  const [filtersStar, setFiltersStar] = useState({
    oneStar: false,
    twoStars: false,
    threeStars: false,
    fourStars: false,
    fiveStars: false,
  });
  /////////////////////// FONCTION ///////////////////////////////////////////

  //////////////////  Fonction pour le nombres d'étoiles  /////////////////////

  const renderStars = (count) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          fill={i < count ? "#CE7E60" : "none"}
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke={i < count ? "#c26d5c" : "#cbd5e0"}
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
          />
        </svg>
      );
    }
    return stars;
  };

  const handleCheckboxChange = (e, setStateFunc, state) => {
    setStateFunc({
      ...state,
      [e.target.name]: e.target.checked,
    });
  };

  const handleCheckboxChangeStar = (e) => {
    setFiltersStar({
      ...filtersStar,
      [e.target.name]: e.target.checked,
    });
  };

  const handleRadioChange = (e) => {
    setRadioFilters({
      ...radioFilters,
      [e.target.name]: e.target.value,
    });
  };

  const renderCheckbox = (name, checked, onChange) => (
    <label className="inline-flex items-center px-4 py-2 w-full">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className="form-checkbox h-4 w-4 accent-[#003761] border-gray-300 rounded ring-[#003761] hover:ring-2 hover:ring-offset-2 cursor-pointer transition ease-in-out 700ms"
      />
      <span className="ml-2 capitalize">
        {name.replace(/([A-Z])/g, " $1").trim()}
      </span>
    </label>
  );

  const renderRadio = (name, value, checked, onChange) => (
    <label className="inline-flex items-center px-4 py-2 w-full">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="form-radio h-4 w-4 accent-[#003761] border-gray-300 rounded-full transition ease-in-out 700ms cursor-pointer"
      />
      <span className="ml-2">{value}</span>
    </label>
  );

  ////////////////// Fonction mettre les filtres à 0  //////////////////////////

  const resetFilters = () => {
    setFilters({
      administrationPublique: false,
      agriculture: false,
      arts: false,
      commerce: false,
      construction: false,
      education: false,
      energie: false,
      industrie: false,
      information: false,
      recherche: false,
      sante: false,
      servicesFinanciers: false,
      transports: false,
      tourisme: false,
    });

    setFiltersDistrict({
      AuvergneRhôneAlpes: false,
      BourgogneFrancheComte: false,
      Bretagne: false,
      CentreValDeLoire: false,
      Corse: false,
      GrandEst: false,
      HautsDeFrance: false,
      IleDeFrance: false,
      Normandie: false,
      NouvelleAquitaine: false,
      Occitanie: false,
      PaysDeLaLoire: false,
      ProvenceAlpesCoteDAzur: false,
    });

    setRadioFilters({
      societeMission: "",
      economieSolidaire: "",
      politiqueMecenat: "",
    });

    setNationalite({
      francais: false,
      europeen: false,
      extraEuropeen: false,
    });

    setTaille({
      taille1: false,
      taille2: false,
      taille3: false,
      taille4: false,
    });

    setLabels({
      rseEngage: false,
      ecovadis: false,
      bCorp: false,
      positiveCompany: false,
    });

    setFiltersStar({
      oneStar: false,
      twoStars: false,
      threeStars: false,
      fourStars: false,
      fiveStars: false,
    });
  };

  /////////////// DEBUT DU COMPONENT ////////////////////

  return (
    <div className="p-4">
      <h3 className="py-1 px-4 font-bold text-lg ">Tous les filtres</h3>
      <div className="mb-4">
        <div className="w-[100%] h-[1px] bg-gray-300 mt-2 mb-3"></div>
        <div
          className="py-1"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <p className="py-1 px-4 font-semibold">Régions</p>
          <div className="w-[100%] h-[1px] bg-gray-300 mt-2 mb-3"></div>
          {Object.keys(filtersDistrict).map((region) =>
            renderCheckbox(region, filtersDistrict[region], (e) =>
              handleCheckboxChange(e, setFiltersDistrict, filtersDistrict)
            )
          )}
        </div>
        <div className="w-[100%] h-[1px] bg-gray-300 mt-2 mb-3"></div>
        <h4 className="py-1 px-4 font-semibold">Secteurs d’activité</h4>
        <div className="w-[100%] h-[1px] bg-gray-300 mt-2 mb-3"></div>
        {Object.keys(filters).map((key) =>
          renderCheckbox(key, filters[key], (e) =>
            handleCheckboxChange(e, setFilters, filters)
          )
        )}
      </div>
      <div className="mb-4">
        <div className="w-[100%] h-[1px] bg-gray-300 mt-2 mb-3"></div>
        <h4 className="py-1 px-4 font-semibold">Nationalité (siège social)</h4>
        <div className="w-[100%] h-[1px] bg-gray-300 mt-2 mb-3"></div>
        {renderCheckbox("francais", nationalite.francais, (e) =>
          handleCheckboxChange(e, setNationalite, nationalite)
        )}
        {renderCheckbox("europeen", nationalite.europeen, (e) =>
          handleCheckboxChange(e, setNationalite, nationalite)
        )}
        {renderCheckbox("extraEuropeen", nationalite.extraEuropeen, (e) =>
          handleCheckboxChange(e, setNationalite, nationalite)
        )}
      </div>

      <div className="mb-4">
        <div className="w-[100%] h-[1px] bg-gray-300 mt-2 mb-3"></div>
        <h4 className="py-1 px-4 font-semibold">Taille</h4>
        <div className="w-[100%] h-[1px] bg-gray-300 mt-2 mb-3"></div>
        {renderCheckbox("1000 à 1999 salariés", taille.taille1, (e) =>
          handleCheckboxChange(e, setTaille, taille)
        )}
        {renderCheckbox("2000 à 4999 salariés", taille.taille2, (e) =>
          handleCheckboxChange(e, setTaille, taille)
        )}
        {renderCheckbox("5000 à 9999 salariés", taille.taille3, (e) =>
          handleCheckboxChange(e, setTaille, taille)
        )}
        {renderCheckbox("10 000 salariés et plus", taille.taille4, (e) =>
          handleCheckboxChange(e, setTaille, taille)
        )}
      </div>

      <div className="mb-4">
        <div className="w-[100%] h-[1px] bg-gray-300 mt-2 mb-3"></div>
        <h4 className="py-1 px-4 font-semibold">Note Izta</h4>
        <div className="w-[100%] h-[1px] bg-gray-300 mt-2 mb-3"></div>
        {Object.keys(filtersStar).map((key, index) => (
          <div key={key} className="px-4 py-2 flex items-center">
            <input
              type="checkbox"
              name={key}
              checked={filtersStar[key]}
              onChange={handleCheckboxChangeStar}
              className="form-checkbox h-4 w-4 accent-[#003761] border-gray-300 rounded ring-[#003761] hover:ring-2 hover:ring-offset-2 cursor-pointer transition ease-in-out 700ms"
            />
            <span className="ml-2 flex">{renderStars(index + 1)}</span>
          </div>
        ))}
        <div className="px-4 py-2 mt-4 flex text-sm text-gray-600">
          <InfoSVGIcon />
          <p className="pl-4">
            Nous évaluons l'engagement des entreprises dans leur mécénat, en
            tenant compte de l'impact social, de la transparence des actions et
            de la durée des engagements, 5 étant le niveau d'engagement le plus
            élevé.
          </p>
        </div>
      </div>

      <div className="mb-4">
        <div className="w-[100%] h-[1px] bg-gray-300 mt-2 mb-3"></div>
        <h4 className="py-1 px-4 font-semibold">Labels</h4>
        <div className="w-[100%] h-[1px] bg-gray-300 mt-2 mb-3"></div>
        {renderCheckbox("rseEngage", labels.rseEngage, (e) =>
          handleCheckboxChange(e, setLabels, labels)
        )}
        {renderCheckbox("ecovadis", labels.ecovadis, (e) =>
          handleCheckboxChange(e, setLabels, labels)
        )}
        {renderCheckbox("bCorp", labels.bCorp, (e) =>
          handleCheckboxChange(e, setLabels, labels)
        )}
        {renderCheckbox("positiveCompany", labels.positiveCompany, (e) =>
          handleCheckboxChange(e, setLabels, labels)
        )}
      </div>

      <div className="mb-4">
        <div className="w-[100%] h-[1px] bg-gray-300 mt-2 mb-3"></div>
        <h4 className="py-1 px-4 font-semibold">Société à mission</h4>
        <div className="w-[100%] h-[1px] bg-gray-300 mt-2 mb-3"></div>
        {renderRadio(
          "societeMission",
          "Oui",
          radioFilters.societeMission === "Oui",
          handleRadioChange
        )}
        {renderRadio(
          "societeMission",
          "Non",
          radioFilters.societeMission === "Non",
          handleRadioChange
        )}
      </div>

      <div className="mb-4">
        <div className="w-[100%] h-[1px] bg-gray-300 mt-2 mb-3"></div>
        <h4 className="py-1 px-4 font-semibold">
          Économie sociale et solidaire
        </h4>
        <div className="w-[100%] h-[1px] bg-gray-300 mt-2 mb-3"></div>
        {renderRadio(
          "economieSolidaire",
          "Oui",
          radioFilters.economieSolidaire === "Oui",
          handleRadioChange
        )}
        {renderRadio(
          "economieSolidaire",
          "Non",
          radioFilters.economieSolidaire === "Non",
          handleRadioChange
        )}
      </div>

      <div className="mb-4">
        <div className="w-[100%] h-[1px] bg-gray-300 mt-2 mb-3"></div>
        <h4 className="py-1 px-4 font-semibold">Politique de mécénat</h4>
        <div className="w-[100%] h-[1px] bg-gray-300 mt-2 mb-3"></div>
        {renderRadio(
          "politiqueMecenat",
          "Oui",
          radioFilters.politiqueMecenat === "Oui",
          handleRadioChange
        )}
        {renderRadio(
          "politiqueMecenat",
          "Non",
          radioFilters.politiqueMecenat === "Non",
          handleRadioChange
        )}
      </div>
      <div className="flex justify-end w-full">
        <SecondaryButton
          text="Reinistialiser les filtres"
          clickFunc={resetFilters}
          margin="mr-3"
        />
        <PrimaryButton
          bgColor="bg-[#003761]"
          text="Appliquer les filtres"
          hoverColor="hover:bg-[#3371a1]"
        />
      </div>
    </div>
  );
}
