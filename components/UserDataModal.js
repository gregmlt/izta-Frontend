import React, { useState, useEffect } from "react";
import EditingIcon from "./EditingIcon";
import DropDownDiploma from "./DropDownDiploma";
import CheckboxWithLabel from "./CheckBoxWithLabel";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import { useSelector } from "react-redux";

export default function UserDataModal({}) {
  const [isEditing, setIsEditing] = useState(false);
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [filters, setFilters] = useState({
    DNB: false,
    CAP: false,
    BEP: false,
    Baccalauréat: false,
    "BAC +2": false,
    "BAC +3": false,
    "BAC +5": false,
    "BAC +8": false,
  });

  const [checkboxes, setCheckboxes] = useState({
    renseigne: false,
    ecoute: false,
    recherche: false,
  });

  const token = useSelector((state) => state.users.value.token);

  useEffect(() => {
    fetch(`http://localhost:3000/users/infos/${token}`, {
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        setPrenom(data.data.firstname);
        setNom(data.data.lastname);
        setEmail(data.data.email);
        setAddress(data.data.adress);
        setCity(data.data.city);
        setBirthdate(data.data.birthdate);
        setZipcode(data.data.postalCode);
        setFilters(data.data.diplome);
        setCheckboxes(data.data.situation);
      });
  }, [token]);

  const handleEditClick = (e) => {
    if (e !== "password") setIsEditing(true);
  };

  const handleSaveClick = () => {
    const data = {
      firstname: prenom,
      lastname: nom,
      email: email,
      birthDate: birthdate,
      adress: address,
      city: city,
      postalCode: zipcode,
      diplome: filters,
      situation: checkboxes,
    };

    fetch(`http://localhost:3000/users/infos/${token}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((data) => {
      if (data.status === 200) {
        alert("Modifications enregistrées");
      } else {
        alert("Une erreur est survenue");
      }
    });
    setIsEditing(false);
    console.log("Saved data:", data);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.checked,
    });
  };

  const handleCheckboxChange = (e) => {
    setCheckboxes({
      ...checkboxes,
      [e.target.name]: e.target.checked,
    });
  };

  return (
    <div>
      <div className="flex flex-col w-[100%] h-[auto] ">
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
              onChange={(e) => setNom(e.target.value)}
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
        <DropDownDiploma
          filters={filters}
          onFilterChange={handleFilterChange}
        />
      </div>

      <div className="mb-10">
        <p className="mb-3 mt-10 font-medium">Votre situation</p>
        <CheckboxWithLabel
          text="Je me renseigne"
          checked={checkboxes.renseigne}
          onCheckboxChange={(e) =>
            handleCheckboxChange({
              ...e,
              target: { ...e.target, name: "renseigne" },
            })
          }
        />
        <CheckboxWithLabel
          text="Je suis à l’écoute"
          checked={checkboxes.ecoute}
          onCheckboxChange={(e) =>
            handleCheckboxChange({
              ...e,
              target: { ...e.target, name: "ecoute" },
            })
          }
        />
        <CheckboxWithLabel
          text="Je suis en recherche active"
          checked={checkboxes.recherche}
          onCheckboxChange={(e) =>
            handleCheckboxChange({
              ...e,
              target: { ...e.target, name: "recherche" },
            })
          }
        />
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
          clickFunc={handleSaveClick}
        />
      </div>
    </div>
  );
}

{
}
