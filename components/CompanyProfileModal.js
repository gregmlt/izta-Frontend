import React, { useEffect, useState } from "react";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import EditingIcon from "./EditingIcon";
import { useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CheckBadgeSVGIcon from "./iconsSVG/CheckBadgeSVGIcon";

function CompagnyProfileModal() {
  // Déclarations d'état
  const [isEditing, setIsEditing] = useState(false);
  const [company, setCompany] = useState(null);
  const [initialData, setInitialData] = useState({});
  const [companyName, setCompanyName] = useState("");
  const [description, setDescription] = useState("");
  const [website, setWebsite] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [glassdoor, setGlassdoor] = useState("");
  const [welcometothejungle, setWelcometothejungle] = useState("");
  const [siren, setSiren] = useState(0);
  const [siret, setSiret] = useState(0);
  const [creationDate, setCreationDate] = useState("");
  const [adress, setAdress] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [postalCode, setPostalCode] = useState(0);
  const [employeeNumber, setEmployeeNumber] = useState("");
  const [industry, setIndustry] = useState("");
  const [labels, setLabels] = useState("");
  const [pariteEntreprise, setPariteEntreprise] = useState(0);
  const [pariteDirection, setPariteDirection] = useState(0);
  const [ageMoyen, setAgeMoyen] = useState(0);
  const [ecartSalaire, setEcartSalaire] = useState(0);
  const [turnover, setTurnover] = useState(0);
  const [mecenat, setMecenat] = useState("");
  const [territorialScore, setTerritorialScore] = useState("");
  const [socialScore, setSocialScore] = useState("");
  const [fiscalScore, setFiscalScore] = useState("");
  const [companyLogo, setCompanyLogo] = useState("");
  const [kudos, setKudos] = useState([]);
  const [like, setLike] = useState([]);
  const [employeeOptions, setEmployeeOptions] = useState([]);
  const [selectedLabel, setSelectedLabel] = useState("");
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const labelOptions = ["RSE Engagé", "Ecovadis", "B-corp", "Positive-company"];
  const isVerified = useSelector((state) => state.users.value.verification);

  const handleEmployeeNumberChange = (e) => {
    setEmployeeNumber(e.target.value);
  };

  const handleLabelChange = (e) => {
    setSelectedLabel(e.target.value);
  };

  const handleEditClick = (e) => {
    if (e !== "password") setIsEditing(true);
  };

  const token = useSelector((state) => state.users.value.token);

  ///////// Recuperation des données de l'entreprise ////////

  useEffect(() => {
    fetch(`http://localhost:3000/companies/infos/${token}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.result && data.data.length > 0) {
          const companyData = data.data[0];
          setCompany(companyData);
          setInitialData(companyData); // Initialisez les données initiales ici
          setCompanyName(companyData.companyName);
          setDescription(companyData.description);
          setWebsite(companyData.website);
          setLinkedin(companyData.linkedin);
          setGlassdoor(companyData.glassdoor);
          setWelcometothejungle(companyData.welcometothejungle);
          setSiren(companyData.siren);
          setSiret(companyData.siret);
          setAdress(companyData.adress);
          setCity(companyData.city);
          setDistrict(companyData.region);
          setCreationDate(companyData.creationDate);
          setPostalCode(companyData.postalCode);
          setEmployeeNumber(companyData.employeeNumber);
          setTerritorialScore(companyData.territorialScore);
          setSocialScore(companyData.socialScore);
          setFiscalScore(companyData.fiscalScore);
          setCompanyLogo(companyData.companyLogo);
          setKudos(companyData.kudos);
          setLike(companyData.like);

          const options = [
            "1 000 à 1 999 salariés",
            "2 000 à 4 999 salariés",
            "5 000 à 9 999 salariés",
            "10 000 salariés ou plus",
          ];
          setEmployeeOptions(options);
        }
      })
      .catch((error) => console.error("Error fetching company data:", error));
  }, [token]);

  ///////// fetch method PUT pour modifier les données de l'entreprise ////////

  const handleSaveChanges = () => {
    if (!company) {
      console.error("Company data is not loaded");
      return;
    }

    if (!hasDataChanged()) {
      setConfirmationMessage("Aucun champ n'a été modifié.");
      setShowConfirmation(true);
      setTimeout(() => {
        setShowConfirmation(false);
      }, 5000); // 5 secondes
      return;
    }

    const updatedData = {
      companyName,
      description,
      website,
      linkedin,
      glassdoor,
      welcometothejungle,
      siren,
      siret,
      creationDate,
      adress,
      city,
      postalCode,
      employeeNumber,
      industry,
      labels,
      pariteEntreprise,
      pariteDirection,
      ageMoyen,
      ecartSalaire,
      turnover,
      mecenat,
      territorialScore,
      socialScore,
      fiscalScore,
      companyLogo,
      kudos,
      like,
    };
    fetch(`http://localhost:3000/companies/infos/${company._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          setIsEditing(false);
          setConfirmationMessage(
            "Les informations ont été modifiées avec succès."
          );
          setShowConfirmation(true);
          // Masquer le message après quelques secondes
          setTimeout(() => {
            setShowConfirmation(false);
          }, 5000); // 5 secondes
        } else {
          console.error("Error updating company data:", data);
        }
      })
      .catch((error) => console.error("Error updating company data:", error));
  };

  const [dateOfCreation, setDateOfCreation] = useState(null);

  const handleDateChange = (date) => {
    setDateOfCreation(date);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const hasDataChanged = () => {
    if (!initialData) return false;
    return (
      companyName !== initialData.companyName ||
      description !== initialData.description ||
      website !== initialData.website ||
      linkedin !== initialData.linkedin ||
      glassdoor !== initialData.glassdoor ||
      welcometothejungle !== initialData.welcometothejungle ||
      siren !== initialData.siren ||
      siret !== initialData.siret ||
      creationDate !== initialData.creationDate ||
      adress !== initialData.adress ||
      city !== initialData.city ||
      postalCode !== initialData.postalCode ||
      employeeNumber !== initialData.employeeNumber ||
      industry !== initialData.industry ||
      labels !== initialData.labels ||
      pariteEntreprise !== initialData.pariteEntreprise ||
      pariteDirection !== initialData.pariteDirection ||
      ageMoyen !== initialData.ageMoyen ||
      ecartSalaire !== initialData.ecartSalaire ||
      turnover !== initialData.turnover ||
      mecenat !== initialData.mecenat ||
      territorialScore !== initialData.territorialScore ||
      socialScore !== initialData.socialScore ||
      fiscalScore !== initialData.fiscalScore ||
      companyLogo !== initialData.companyLogo ||
      JSON.stringify(kudos) !== JSON.stringify(initialData.kudos) ||
      JSON.stringify(like) !== JSON.stringify(initialData.like)
    );
  };

  let button;

  console.log(isVerified);

  if (isVerified) {
    if (!isEditing) {
      button = (
        <button
          className="flex items-center bg-gray-100 py-3 px-6 rounded rounded-md border border-gray-100 hover:border-[#003761]"
          onClick={handleEditClick}
        >
          <p>Modifier les informations</p>
          <EditingIcon margin="ml-3" />
        </button>
      );
    } else if (isEditing) {
      button = (
        <div className="flex justify-end">
          <div>
            <SecondaryButton
              text="Annuler"
              hoverColor="hover:bg-[#B0C8DA]"
              margin="mr-4"
              clickFunc={handleCancelClick}
            />
          </div>
          <div>
            <PrimaryButton
              bgColor="bg-[#003761]"
              text="Enregistrer les modifications"
              hoverColor="hover:bg-[#3371a1]"
              clickFunc={handleSaveChanges}
            />
          </div>
        </div>
      );
    }
  } else if (!isVerified) {
    button = (
      <div className="flex items-center mb-4 border py-4 px-4">
        <div className="mr-3 ">
          <CheckBadgeSVGIcon color="grey" />
        </div>
        <p>
          En attente de vérification de votre compte . Une fois vérifié, vous
          pourrez modifier les informations de l'entreprise.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-white rounded-md">
      <div className="flex flex-col w-[100%] h-[auto] ">
        <div className="self-end mb-4">{button}</div>
        <p className="text-3xl font-medium">Informations entreprise</p>
        <p className="mt-4 w-[85%] ">
          Ceci est un paragraphe exemple qui contient deux lignes.
          <br />
          Il s'ajuste pour rester centré et responsive.
        </p>
      </div>

      {/* champs nom et description entreprise */}
      <div className="mt-10 bg-white rounded w-[80%]">
        <div className="mb-4 w-full">
          <label className="block font-md">Nom de l'entreprise</label>
          <input
            type="text"
            id="companyName"
            value={companyName}
            className={`mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
              !isEditing ? "bg-gray-200" : ""
            }`}
            onChange={(e) => setCompanyName(e.target.value)}
            disabled={!isEditing}
          />
        </div>
        <div className="w-full mt-10">
          <label className="block">Description</label>
          <textarea
            id="description"
            value={description}
            className={`mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
              !isEditing ? "bg-gray-200" : ""
            }`}
            rows="4"
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Donnez une brève introduction de votre entreprise, 
y compris sa mission et ses valeurs."
            disabled={!isEditing}
          />
        </div>
      </div>

      {/* champs liens externes */}
      <div className="mt-10 w-[40%]">
        <h3 className="text-xl font-bold mb-4 ">Liens externes</h3>
        <div className="mb-4 flex flex-col">
          <input
            type="text"
            value={website}
            className={` rounded-sm border border-slate-300 px-3 py-2 ${
              !isEditing ? "bg-gray-200" : ""
            }`}
            onChange={(e) => setWebsite(e.target.value)}
            disabled={!isEditing}
          />
          <label className="text-gray-600 text-sm mt-1">Site web</label>
        </div>
        <div className="mb-4 flex flex-col">
          <input
            type="text"
            value={linkedin}
            className={` rounded-sm border border-slate-300 px-3 py-2 ${
              !isEditing ? "bg-gray-200" : ""
            }`}
            onChange={(e) => setLinkedin(e.target.value)}
            disabled={!isEditing}
          />
          <label className="text-gray-600 text-sm mt-1">LinkedIn</label>
        </div>
        <div className="mb-4 flex flex-col">
          <input
            type="text"
            value={glassdoor}
            className={` rounded-sm border border-slate-300 px-3 py-2 ${
              !isEditing ? "bg-gray-200" : ""
            }`}
            onChange={(e) => setGlassdoor(e.target.value)}
            disabled={!isEditing}
          />
          <label className="text-gray-600 text-sm mt-1">Glassdoor</label>
        </div>
        <div className="mb-4 flex flex-col">
          <input
            type="text"
            value={welcometothejungle}
            className={` rounded-sm border border-slate-300 px-3 py-2 ${
              !isEditing ? "bg-gray-200" : ""
            }`}
            onChange={(e) => setWelcometothejungle(e.target.value)}
            disabled={!isEditing}
          />
          <label className="text-gray-600 text-sm mt-1">
            Welcome to the Jungle
          </label>
        </div>
      </div>
      <div className="divide-x-[80%]" />
      <div className="w-[100%] h-[1px] bg-gray-300 mt-14"></div>

      {/* champs informations administratives */}
      <div>
        <p className="text-2xl font-medium mt-7 mb-9">
          Informations administratives
        </p>
      </div>
      <div className="flex flex-col justify-center">
        <div className=" rounded w-full ">
          {/* Row 1 */}
          <div className="flex flex-wrap mb-4">
            <div className="w-[40%]">
              <label htmlFor="siretNumber" className="block">
                Numéro de SIRET
              </label>
              <input
                type="text"
                id="siretNumber"
                value={siret}
                className={` mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
                  !isEditing ? "bg-gray-200" : " "
                }`}
                onChange={(e) => setSiret(e.target.value)}
                disabled={!isEditing}
              />
            </div>
            <div className="w-[40%]">
              <div className="w-full flex flex-col ml-5">
                <label>Date de création:</label>
                <DatePicker
                  selected={dateOfCreation}
                  onChange={handleDateChange}
                  dateFormat="dd/MM/yyyy"
                  className={` mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
                    !isEditing ? "bg-gray-200" : "cursor-pointer"
                  }`}
                  placeholderText="Sélectionnez votre date de création"
                  maxDate={new Date()}
                  disabled={!isEditing}
                />
              </div>
            </div>
          </div>

          {/* Full width input */}
          <div className="mb-4">
            <label htmlFor="address" className="block ">
              Adresse
            </label>
            <input
              type="text"
              id="address"
              value={adress}
              className={` mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
                !isEditing ? "bg-gray-200" : ""
              }`}
              onChange={(e) => setAdress(e.target.value)}
              disabled={!isEditing}
            />
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap -mx-2 mb-4">
            <div className="w-full md:w-1/3 px-2">
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700"
              >
                Ville
              </label>
              <input
                type="text"
                id="city"
                value={city}
                className={` mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
                  !isEditing ? "bg-gray-200" : ""
                }`}
                onChange={(e) => setCity(e.target.value)}
                disabled={!isEditing}
              />
            </div>
            <div className="w-full md:w-1/3 px-2">
              <label
                htmlFor="region"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Région
              </label>
              <select
                id="region"
                className={`mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 cursor-pointer ${
                  !isEditing ? "bg-gray-200" : ""
                }`}
                disabled={!isEditing}
              >
                <option value="">Sélectionner</option>
                <option value="AuvergneRhôneAlpes">Auvergne-Rhône-Alpes</option>
                <option value="BourgogneFrancheComte">
                  Bourgogne-Franche-Comté
                </option>
                <option value="Bretagne">Bretagne</option>
                <option value="CentreValDeLoire">Centre-Val de Loire</option>
                <option value="Corse">Corse</option>
                <option value="GrandEst">Grand Est</option>
                <option value="HautsDeFrance">Hauts-de-France</option>
                <option value="IleDeFrance">Île-de-France</option>
                <option value="Normandie">Normandie</option>
                <option value="NouvelleAquitaine">Nouvelle-Aquitaine</option>
                <option value="Occitanie">Occitanie</option>
                <option value="PaysDeLaLoire">Pays de la Loire</option>
                <option value="ProvenceAlpesCoteDAzur">
                  Provence-Alpes-Côte d'Azur
                </option>
              </select>
            </div>
            <div className="w-full md:w-1/3 px-2">
              <label
                htmlFor="postalCode"
                className="block text-sm font-medium text-gray-700"
              >
                Code postal
              </label>
              <input
                type="text"
                id="postalCode"
                value={postalCode}
                className={` mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
                  !isEditing ? "bg-gray-200" : ""
                }`}
                onChange={(e) => setPostalCode(e.target.value)}
                disabled={!isEditing}
              />
            </div>
          </div>

          {/* Row 3 */}
          <div className="flex flex-wrap -mx-2 mb-4">
            <div className="w-full md:w-1/3 px-2">
              <label
                htmlFor="employeeCount"
                className="block text-sm font-medium text-gray-700"
              >
                Nombres d'employés
              </label>
              <select
                id="employeeCount"
                value={employeeNumber}
                onChange={handleEmployeeNumberChange}
                className={` mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
                  !isEditing ? "bg-gray-200" : "cursor-pointer"
                }`}
                disabled={!isEditing}
              >
                {employeeOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-full md:w-1/3 px-2">
              <label
                htmlFor="industry"
                className="block text-sm font-medium text-gray-700"
              >
                Industrie
              </label>
              <select
                id="industry"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className={` mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
                  !isEditing ? "bg-gray-200" : "cursor-pointer"
                }`}
                disabled={!isEditing}
              >
                <option value="">Sélectionner</option>
                <option value="Agriculture">Agriculture</option>
                <option value="Automobile">Automobile</option>
                <option value="Construction">Construction</option>
                <option value="Education">Éducation</option>
                <option value="Energy">Énergie</option>
                <option value="Finance">Finance</option>
                <option value="Healthcare">Santé</option>
                <option value="Hospitality">Hôtellerie</option>
                <option value="InformationTechnology">
                  Technologies de l'information
                </option>
                <option value="Manufacturing">Fabrication</option>
                <option value="Media">Médias</option>
                <option value="RealEstate">Immobilier</option>
                <option value="Retail">Commerce de détail</option>
                <option value="Telecommunications">Télécommunications</option>
                <option value="Transportation">Transport</option>
              </select>
            </div>
            <div className="w-full md:w-1/3 px-2">
              <label
                htmlFor="labels"
                className="block text-sm font-medium text-gray-700"
              >
                Labels
              </label>
              <select
                id="labels"
                value={selectedLabel}
                onChange={handleLabelChange}
                className={` mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
                  !isEditing ? "bg-gray-200" : "cursor-pointer"
                }`}
                disabled={!isEditing}
              >
                <option value="">Sélectionner</option>
                {labelOptions.map((label, index) => (
                  <option key={index} value={label}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] h-[1px] bg-gray-300 mt-14"></div>
      <div>
        <p className="text-2xl font-medium mt-7 mb-9">
          Informations complémentaires
        </p>
      </div>

      {/* champs informations complémentaires */}
      <div className="flex flex-col items-center justify-center">
        <div className="bg-white w-full ">
          {/* Group 1: Parité entreprise */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Parité entreprise ( en % )
            </label>
            <div className="flex w-[60%]">
              <div className="w-full px-2 flex items-center">
                <svg
                  fill="none"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-3"
                >
                  <g
                    stroke="#292d32"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                  >
                    <path d="m10.25 21.5c4.2802 0 7.75-3.4698 7.75-7.75 0-4.28021-3.4698-7.75-7.75-7.75-4.28021 0-7.75 3.46979-7.75 7.75 0 4.2802 3.46979 7.75 7.75 7.75z" />
                    <path d="m21.5 2.5-5.5 5.5" />
                    <path d="m15 2.5h6.5v6.5" />
                  </g>
                </svg>
                <input
                  type="text"
                  className={` mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
                    !isEditing ? "bg-gray-200" : ""
                  }`}
                  placeholder="Nombre d'hommes"
                />
              </div>
              <div className="w-full px-2 flex items-center">
                <svg
                  fill="none"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-3"
                >
                  <g
                    stroke="#292d32"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                  >
                    <path d="m12 16c3.866 0 7-3.134 7-7 0-3.86599-3.134-7-7-7-3.86599 0-7 3.13401-7 7 0 3.866 3.13401 7 7 7z" />
                    <path d="m12 16v6" />
                    <path d="m15 19h-6" />
                  </g>
                </svg>
                <input
                  type="text"
                  className={` mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
                    !isEditing ? "bg-gray-200" : ""
                  }`}
                  placeholder="Nombre de femmes"
                />
              </div>
            </div>
          </div>

          {/* Group 2: Parité au sein de la direction */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Parité au sein de la direction ( en % )
            </label>
            <div className="flex w-[60%]">
              <div className="w-full px-2 flex items-center">
                <svg
                  fill="none"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-3"
                >
                  <g
                    stroke="#292d32"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                  >
                    <path d="m10.25 21.5c4.2802 0 7.75-3.4698 7.75-7.75 0-4.28021-3.4698-7.75-7.75-7.75-4.28021 0-7.75 3.46979-7.75 7.75 0 4.2802 3.46979 7.75 7.75 7.75z" />
                    <path d="m21.5 2.5-5.5 5.5" />
                    <path d="m15 2.5h6.5v6.5" />
                  </g>
                </svg>
                <input
                  type="text"
                  className={` mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
                    !isEditing ? "bg-gray-200" : ""
                  }`}
                  placeholder="Nombre d'hommes"
                />
              </div>
              <div className="w-full px-2 flex items-center">
                <svg
                  fill="none"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-3"
                >
                  <g
                    stroke="#292d32"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                  >
                    <path d="m12 16c3.866 0 7-3.134 7-7 0-3.86599-3.134-7-7-7-3.86599 0-7 3.13401-7 7 0 3.866 3.13401 7 7 7z" />
                    <path d="m12 16v6" />
                    <path d="m15 19h-6" />
                  </g>
                </svg>
                <input
                  type="text"
                  className={` mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
                    !isEditing ? "bg-gray-200" : ""
                  }`}
                  placeholder="Nombre de femmes"
                />
              </div>
            </div>
          </div>

          {/* Group 3: Age moyen et Ecart de salaire maximum */}
          <div className="flex flex-col w-full mt-10">
            <div className="flex">
              <div className="w-[35%] pr-3">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Age moyen
                </label>
                <select
                  value={ageMoyen}
                  onChange={(e) => setAgeMoyen(e.target.value)}
                  className={` mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
                    !isEditing ? "bg-gray-200" : "cursor-pointer"
                  }`}
                  disabled={!isEditing}
                >
                  <option value="">Sélectionner</option>
                  <option value="18-24">18-24</option>
                  <option value="25-34">25-34</option>
                  <option value="35-44">35-44</option>
                  <option value="45-54">45-54</option>
                  <option value="55-64">55-64</option>
                </select>
              </div>
              <div className=" w-[35%]">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ecart de salaire maximum
                </label>
                <select
                  value={ecartSalaire}
                  onChange={(e) => setEcartSalaire(e.target.value)}
                  className={`mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
                    !isEditing ? "bg-gray-200" : "cursor-pointer"
                  }`}
                  disabled={!isEditing}
                >
                  <option value="">Sélectionner</option>
                  <option value="0-25000">0-25 000 €</option>
                  <option value="25001-50000">25 001 50 000 €</option>
                  <option value="50001-75000">50 001-75 000 €</option>
                  <option value="75001-100000">75 001-100 000 €</option>
                  <option value="100001+">100 001 ou plus €</option>
                </select>
              </div>
            </div>

            {/* Group 4: Turnover et Mécénat */}
            <div className="flex mt-4">
              <div className="w-[35%] pr-3 ">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Turnover
                </label>
                <select
                  value={turnover}
                  onChange={(e) => setTurnover(e.target.value)}
                  className={`mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
                    !isEditing ? "bg-gray-200" : "cursor-pointer"
                  }`}
                  disabled={!isEditing}
                >
                  <option value="">Sélectionner</option>
                  <option value="oui">Oui</option>
                  <option value="non">Non</option>
                </select>
              </div>
              <div className="w-[35%]">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mécénat
                </label>
                <select
                  value={mecenat}
                  onChange={(e) => setMecenat(e.target.value)}
                  className={`mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
                    !isEditing ? "bg-gray-200" : "cursor-pointer"
                  }`}
                  disabled={!isEditing}
                >
                  <option value="">Sélectionner</option>
                  <option value="oui">Oui</option>
                  <option value="non">Non</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showConfirmation && (
        <div
          className={`mt-4 ${
            confirmationMessage === "Aucun champ n'a été modifié."
              ? "text-red-600"
              : "text-green-600"
          }`}
        >
          {confirmationMessage}
        </div>
      )}
    </div>
  );
}

export default CompagnyProfileModal;
