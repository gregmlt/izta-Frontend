import React, { useState, useEffect } from "react";
import CheckedIcon from "./CheckedIcon";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import { addTokenToStore } from "@/reducers/users";
import { useDispatch, useSelector } from "react-redux";
import { putCompanyToUser } from "@/reducers/companies";

export default function FindACompany() {
  const [entrepriseTrouvee, setEntrepriseTrouvee] = useState(true);
  const [entrepriseName, setEntrepriseName] = useState("");
  const [entrepriseAddresse, setEntrepriseAddresse] = useState("");
  const [numeroSiret, setNumeroSiret] = useState("");
  const [step, setStep] = useState(1); // état pour gérer les étapes du formulaire
  const [loading, setLoading] = useState(false); // état pour gérer le loader

  const token = useSelector((state) => state.users.value.token);
  const dispatch = useDispatch();

  const rechercherEntreprise = (siret) => {
    fetch(`http://localhost:3000/companies/get/${siret}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          console.log(data);
          setStep(2);
          setEntrepriseTrouvee(true);
          setEntrepriseName(data.company.companyName);
          setEntrepriseAddresse(
            `${data.company.adress} ${data.company.postalCode} ${data.company.city}`
          );
        } else if (data.company === "company doesn't exist") {
          setEntrepriseTrouvee(false);
          alert("Aucune entreprise trouvée avec ce numéro de SIRET.");
        } else {
          setEntrepriseTrouvee(false);
          alert("Une erreur est survenue");
        }
      });
  };

  const handleSelectEntreprise = () => {
    fetch(`http://localhost:3000/users/post/${numeroSiret}/${token}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          setStep(3); // Passer à l'étape finale après la sélection de l'entreprise
          dispatch(putCompanyToUser());
        } else if (data.message === "User already owns this company") {
          alert("Vous êtes déjà propriétaire de cette entreprise");
        } else if (data.message === "User doesn't exist") {
          alert("Il y a eu un problème lors de la création de votre compte");
        } else {
          alert("Un problème est survenu");
        }
      });
  };

  const handleSearchCancel = () => {
    console.log("Retour à l'étape 1");
    setNumeroSiret("");
    setStep(1); // Suppose this is how you handle cancel
  };

  return (
    <div className="w-[100%]">
      {/* ********************* STEP 1 (NUMÉRO DE SIRET) ******************** */}

      {step === 1 && (
        <form
          className="space-y-6 w-[100%]"
          onSubmit={(e) => {
            e.preventDefault();
            rechercherEntreprise(numeroSiret);
          }}
        >
          <div className="mt-10">
            <div className="flex">
              <p className="text-xl mb-3">Recherchez votre entreprise</p>
            </div>
          </div>
          <div className="mt-4">
            <label
              htmlFor="nomEntreprise"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Numéro de Siret
            </label>
            <div className="mt-2">
              <input
                id="nomEntreprise"
                name="nomEntreprise"
                type="text"
                autoComplete="organization"
                required
                value={numeroSiret}
                onChange={(e) => setNumeroSiret(e.target.value)}
                className="block w-full rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:color-[#5488b0] sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#003761] px-4 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#3371a1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {numeroSiret ? "Rechercher" : "Suivant"}
            </button>
          </div>
        </form>
      )}

      {/* ********************* STEP 2 Entreprise found ******************** */}

      {step === 2 && entrepriseTrouvee && (
        <div className="py-40">
          <h2 className="text-2xl font-medium mb-5">Entreprise Trouvée</h2>
          <div className="w-[100%] bg-white h-[auto] flex flex-col px-5 py-5 border rounded-lg mb-10">
            <p>
              <span className="font-medium text-lg">Nom</span>: {entrepriseName}
            </p>
            <p>
              <span className="font-medium text-lg">Adresse</span>:{" "}
              {entrepriseAddresse}
            </p>
          </div>
          <div className="flex mt-10">
            <SecondaryButton
              text="Retour"
              hoverColor="hover:bg-[#B0C8DA]"
              margin="mr-4"
              clickFunc={handleSearchCancel}
            />
            <PrimaryButton
              bgColor="bg-[#003761]"
              text="Valider cette entreprise"
              hoverColor="hover:bg-[#3371a1]"
              clickFunc={handleSelectEntreprise}
            />
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="py-16">
          <h2 className="text-2xl font-medium">Vérification en cours</h2>
          <p>
            {" "}
            Nous sommes en train de vérifier les informations soumises pour
            votre entreprise. Ce processus est essentiel pour garantir la
            sécurité et la fiabilité de notre plateforme pour tous les
            utilisateurs.
          </p>
          <div className="w-[100%] bg-white h-[auto] flex flex-col px-5 py-5 border rounded-lg mb-10">
            <p className="text-lg font-semibold pb-3 text-[#003761]">
              Que se passe-t-il ensuite ?
            </p>
            <p>
              <span className="font-semibold">
                Vous recevrez un email de confirmation
              </span>{" "}
              dès que la vérification de votre entreprise sera validée. Cette
              étape peut prendre quelques minutes. Nous vous remercions pour
              votre patience et votre compréhension.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
