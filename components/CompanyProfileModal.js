import React, { useEffect, useState } from "react";
import PrimaryButton from "./PrimaryButton";
import EditingIcon from "./EditingIcon";
import { useSelector } from "react-redux";

function CompagnyProfileModal() {
  const [isEditing, setIsEditing] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [siret, setSiret] = useState(0);
  const [creationDate, setCreationDate] = useState("");
  const [adress, setAdress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [employeeNumber, setEmployeeNumber] = useState();
  const [employeeOptions, setEmployeeOptions] = useState([]);
  const [selectedLabel, setSelectedLabel] = useState("");
  const labelOptions = ["RSE Engagé", "Ecovadis", "B-corp", "Positive-company"];

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

  useEffect(() => {
    fetch(`http://localhost:3000/companies/infos/${token}`)
      .then((response) => response.json())
      .then((data) => {
        setCompanyName(data.data.companyName);
        setSiret(data.data.siret);
        setCreationDate(data.data.creationDate);
        setPostalCode(data.data.creationDate);
        if (data.data.employeeNumber) {
          setFilters(data.data.employeeNumber);
        }
        const options = [
          "1 000 à 1 999 salariés",
          "2 000 à 4 999 salariés",
          "5 000 à 9 999 salariés",
          "10 000 salariés ou plus",
        ];
        setEmployeeOptions(options);
      });
  }, [token]);

  return (
    <div className="flex flex-col min-h-screen bg-white rounded-md">
      <div className="flex flex-col w-[100%] h-[auto] ">
        <div className="self-end">
          <EditingIcon func={handleEditClick} />
        </div>
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
            className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            onChange={(e) => setCompanyName(e.target.value)}
            disabled={!isEditing}
          />
        </div>
        <div className="w-full mt-10">
          <label className="block">Description</label>
          <textarea
            id="description"
            className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            rows="4"
            placeholder="Donnez une brève introduction de votre entreprise, 
y compris sa mission et ses valeurs."
          />
        </div>
      </div>

      {/* champs liens externes */}
      <div className="mt-10 w-[40%]">
        <h3 className="text-xl font-bold mb-4 ">Liens externes</h3>
        <div className="mb-4 flex flex-col">
          <input
            type="text"
            className="rounded-sm border border-slate-300 px-3 py-2"
          />
          <label className="text-gray-600 text-sm mt-1">Site web</label>
        </div>
        <div className="mb-4 flex flex-col">
          <input
            type="text"
            className="rounded-sm border border-slate-300 px-3 py-2"
          />
          <label className="text-gray-600 text-sm mt-1">LinkedIn</label>
        </div>
        <div className="mb-4 flex flex-col">
          <input
            type="text"
            className="rounded-sm border border-slate-300 px-3 py-2"
          />
          <label className="text-gray-600 text-sm mt-1">Glassdoor</label>
        </div>
        <div className="mb-4 flex flex-col">
          <input
            type="text"
            className="rounded-sm border border-slate-300 px-3 py-2"
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
                id={siret}
                className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                onChange={(e) => setSiret(e.target.value)}
                disabled={!isEditing}
              />
            </div>
            <div className="w-[40%]">
              <label htmlFor="creationDate" className="block ">
                Date de création
              </label>
              <input
                type="text"
                id="creationDate"
                value={creationDate}
                className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                onChange={(e) => setCreationDate(e.target.value)}
                disabled={!isEditing}
              />
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
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
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
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                onChange={(e) => setCity(e.target.value)}
                disabled={!isEditing}
              />
            </div>
            <div className="w-full md:w-1/3 px-2">
              <label
                htmlFor="region"
                className="block text-sm font-medium text-gray-700"
              >
                Région
              </label>
              <select
                id="region"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Sélectionner</option>
                {/* Ajouter d'autres options ici */}
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
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
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
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
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
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Sélectionner</option>
                {/* Ajouter d'autres options ici */}
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
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
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

      <div>
        <p className="text-2xl font-medium mt-7 mb-9">
          Informations administratives
        </p>
      </div>

      {/* champs informations complémentaires */}
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="bg-white p-6 w-full max-w-2xl">
          <h3 className="text-xl font-bold mb-6">
            Informations complémentaires
          </h3>

          {/* Group 1: Parité entreprise */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Parité entreprise
            </label>
            <div className="flex flex-wrap -mx-2 mb-2">
              <div className="w-full md:w-1/2 px-2 flex items-center">
                <svg
                  fill="none"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
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
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Nombre d'hommes"
                />
              </div>
              <div className="w-full md:w-1/2 px-2 flex items-center">
                <svg
                  fill="none"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
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
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Nombre de femmes"
                />
              </div>
            </div>
          </div>

          {/* Group 2: Parité au sein de la direction */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Parité au sein de la direction
            </label>
            <div className="flex flex-wrap -mx-2 mb-2">
              <div className="w-full md:w-1/2 px-2 flex items-center">
                <svg
                  fill="none"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
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
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Nombre d'hommes"
                />
              </div>
              <div className="w-full md:w-1/2 px-2 flex items-center">
                <svg
                  fill="none"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
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
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Nombre de femmes"
                />
              </div>
            </div>
          </div>

          {/* Group 3: Age moyen et Ecart de salaire maximum */}
          <div className="flex flex-wrap -mx-2 mb-4">
            <div className="w-full md:w-1/2 px-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Age moyen
              </label>
              <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
                <option value="">Sélectionner</option>
                {/* Ajouter d'autres options ici */}
              </select>
            </div>
            <div className="w-full md:w-1/2 px-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ecart de salaire maximum
              </label>
              <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
                <option value="">Sélectionner</option>
                {/* Ajouter d'autres options ici */}
              </select>
            </div>
          </div>

          {/* Group 4: Turnover et Mécénat */}
          <div className="flex flex-wrap -mx-2 mb-4">
            <div className="w-full md:w-1/2 px-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Turnover
              </label>
              <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
                <option value="">Sélectionner</option>
                {/* Ajouter d'autres options ici */}
              </select>
            </div>
            <div className="w-full md:w-1/2 px-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mécénat
              </label>
              <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
                <option value="">Sélectionner</option>
                {/* Ajouter d'autres options ici */}
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <div className="mr-3">
          <PrimaryButton
            text="Annuler"
            bgColor="bg-gray-400"
            hoverColor="hover:bg-[#3371a1]"
          />
        </div>
        <div>
          <PrimaryButton
            bgColor="bg-[#003761]"
            text="Enregistrer les modifications"
            hoverColor="hover:bg-[#3371a1]"
          />
        </div>
      </div>
    </div>
  );
}
export default CompagnyProfileModal;
