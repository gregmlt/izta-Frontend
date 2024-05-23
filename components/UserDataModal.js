import React, { useState, useRef } from "react";
import EditingIcon from "./EditingIcon";
import DropDownDiploma from "./DropDownDiploma";
import CheckboxWithLabel from "./CheckBoxWithLabel";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

export default function UserDataModal({}) {
  const [isEditing, setIsEditing] = useState(false);
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [zipcode, setZipcode] = useState("");

  const handleEditClick = (e) => {
    if (e !== "password") setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Logic to save the formData, e.g., API call
    setIsEditing(false);
    console.log("Saved data:", formData);
  };

  const handleCancelClick = () => {
    // Logic to handle cancel action
    setIsEditing(false); // Suppose this is how you handle cancel
  };

  

  return (
    <>
      <div className="flex flex-col w-[100%] h-[auto] bg-white ">
        <div className="self-end">
          <EditingIcon func={handleEditClick} />
        </div>
        <p className="text-3xl font-medium">Mon profil</p>
        <p className="mt-4 w-[85%] ">
          Les détails que vous fournissez sur cette page seront accessibles au
          public. Assurez-vous de ne partager que les informations que vous êtes
          à l'aise de rendre publiques.
        </p>
      </div>

      {/* Input firstname */}

      <div className="mt-10 w-[85%]">
        <div className="flex">
          <div className="flex flex-col w-[100%] mr-5">
            <label htmlFor="prenom">Prénom</label>
            <input
              className="rounded-md border-0 px-4 py-3 mt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 "
              type="text"
              id="firstname"
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
              disabled={!isEditing}
            />
          </div>

          {/* Input Name */}

          <div className="flex flex-col w-[100%]">
            <label htmlFor="name">Nom</label>
            <input
              className="rounded-md border-0 px-4 py-3 mt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 "
              type="text"
              id="name"
              value={nom}
              onChange={(e) => setNom(e.target.value )}
              disabled={!isEditing}
            />
          </div>
        </div>
      </div>

      {/* Input Email */}

      <div className="mt-10 w-[85%]">
        <div className="flex">
          <div className="flex flex-col w-[100%] mr-5">
            <label htmlFor="prenom">Email</label>
            <input
              className="rounded-md border-0 px-4 py-3 mt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 "
              type="text"
              id="firstname"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={!isEditing}
            />
          </div>

          {/* Input Password */}

          <div className="flex flex-col w-[100%]">
            <label htmlFor="name">Mot de passe</label>
            <input
              className="rounded-md border-0 px-4 py-3 mt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 "
              type="text"
              id="name"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled
            />
            <div className="text-sm self-end mt-3">
              <a
                href="#"
                className="font-semibold text-[#003761] hover:text-[#ce7e60]"
              >
                Mot de passe oublié?
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Input Adress*/}

      <div className="flex w-[85%] mt-10">
        <div className="flex flex-col w-[100%]">
          <label htmlFor="prenom">Adresse</label>
          <input
            className="rounded-md border-0 px-4 py-3 mt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 "
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            disabled={!isEditing}
          />
        </div>
      </div>

      {/* Input range / city & district & zip code  */}

      <div className="flex w-[85%] mt-10 justify-between">
        {/* Input city */}

        <div className="flex flex-col w-[32%] ">
          <label htmlFor="city">Ville</label>
          <input
            className="rounded-md border-0 px-4 py-3 mt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 "
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            disabled={!isEditing}
          />
        </div>

        {/* Input district */}

        <div className="flex flex-col w-[32%]">
          <label htmlFor="district">Région</label>
          <input
            className="rounded-md border-0 px-4 py-3 mt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 "
            type="text"
            id="district"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            disabled={!isEditing}
          />
        </div>

        {/* Input Zipcode */}

        <div className="flex flex-col w-[32%]">
          <label htmlFor="zipcode">Code postal</label>
          <input
            className="rounded-md border-0 px-4 py-3 mt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 "
            type="text"
            id="zipcode"
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
            disabled={!isEditing}
          />
        </div>
      </div>
      <div className="w-[100%] h-[1px] bg-gray-300 mt-14"></div>

      <div>
        <p className="text-2xl font-medium mt-7 mb-9">
          Informations complémentaires
        </p>
      </div>

      <div>
        <p className="mb-3 font-medium">Diplôme</p>
        <DropDownDiploma />
      </div>

      <div className="mb-10">
        <p className="mb-3 mt-10 font-medium">Votre situation</p>
        <CheckboxWithLabel text="Je me renseigne" />
        <CheckboxWithLabel text="Je suis à l’écoute" />
        <CheckboxWithLabel text="Je suis en recherche active" />
      </div>
      <div className="flex justify-end">
        <SecondaryButton
          text="Annuler"
          hoverColor="hover:bg-[#B0C8DA]"
          margin="mr-4"
          onClick={handleCancelClick}
        />
        <PrimaryButton
          text="Enregistrer les modifications"
          bgColor="bg-[#003761]"
          hoverColor="hover:bg-[#3371a1]"
          onClick={handleSaveClick}
        />
      </div>
    </>
  );
}

{
}
