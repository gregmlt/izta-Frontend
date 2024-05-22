import React, { useState, useEffect } from "react";
import GoogleOAuthButton from "./GoogleButton";
import Link from "next/link";
import CheckedIcon from "./CheckedIcon";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

export default function Login() {
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isCompany, setIsCompany] = useState(false);
  const [entrepriseTrouvee, setEntrepriseTrouvee] = useState(null); // état pour stocker les détails de l'entreprise trouvée
  const [numeroSiret, setNumeroSiret] = useState("");
  const [step, setStep] = useState(1); // état pour gérer les étapes du formulaire
  const [loading, setLoading] = useState(false); // état pour gérer le loader

  // ******* tableau fictif ***********

  const entreprises = [
    {
      siret: "12345678901234",
      nom: "Entreprise A",
      adresse: "1 Rue de Paris, 75001 Paris",
    },
    {
      siret: "23456789012345",
      nom: "Entreprise B",
      adresse: "2 Rue de Lyon, 69000 Lyon",
    },
    {
      siret: "34567890123456",
      nom: "Entreprise C",
      adresse: "3 Rue de Marseille, 13000 Marseille",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(prenom, nom, email, password);
    if (isCompany && step === 1) {
      // Passer à l'étape suivante si c'est une entreprise avec un chargement
      setLoading(true);
      setTimeout(() => {
        // Passer à l'étape suivante après 2 secondes
        setLoading(false);
        setStep(2);
      }, 2000);
    } else if (step === 2) {
      // Logic pour envoyer les données du formulaire
      // envoie de l'email et du mot de passe au back end via un fetch
      // attendre la reponse du back et checker le status code : OK 200 => rediredction vers la page home,
      // si pas de réponse erreur 400 ou 404 mettre un message d'erreur
      console.log("Envoyer les données du formulaire");
      const found = entreprises.find((ent) => ent.siret === numeroSiret);
      if (found) {
        setEntrepriseTrouvee(found);
        setStep(3);
      } else {
        alert("Aucune entreprise trouvée avec ce numéro de SIRET.");
      }
    }
  };

  // Fonction fictive pour rechercher une entreprise par SIRET
  const rechercherEntreprise = async (siret) => {
    // Remplacez ceci par une requête à votre backend pour rechercher l'entreprise par SIRET
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          siret: "12345678901234",
          nom: "Exemple d'entreprise",
          adresse: "123 Rue Exemple, 75000 Paris",
        });
      }, 1000);
    });
  };

  const handleSelectEntreprise = () => {
    setNomEntreprise(entrepriseTrouvee.nom);
    setStep(3); // Passer à l'étape finale après la sélection de l'entreprise
  };

  const handleSearchCancel = () => {
    console.log("Retour à l'étape 2");
    setNumeroSiret("")
    setStep(2); // Suppose this is how you handle cancel
  };

  return (
    <>
      <div className="flex ">
        <div className=" flex justify-center items-center bg-[linear-gradient(to_left_bottom,rgba(206,100,38,0.7),rgba(16,34,93,1)),url('/images/Team-building.jpg')] w-[50%] h-[100vh] bg-right bg-cover ">
          <p className="w-[700px] text-5xl font-medium text-white ">
            Votre engagement commence ici
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-[50%] h-[100vh]">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="/Logo/Logomark.svg"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-[#004E89]">
              Créer votre compte
            </h2>
          </div>

          <div className="w-[55%]">
            {loading ? (
              <div className="flex justify-center items-center h-[100%]">
                <div>
                  <img
                    src="Logo/loading-icon.png"
                    className="w-[100px] animate-spin transition ease-in-out 4ms"
                  />
                </div>
              </div>
            ) : (
              step === 1 && (
                <form className="space-y-6 w-[100%]" onSubmit={handleSubmit}>
                  <div className="flex mt-8 w-[100%]">
                    <div className="mr-12">
                      <label
                        htmlFor="surname"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Prenom
                      </label>
                      <div className="mt-2">
                        <input
                          id="surname"
                          name="surname"
                          type="surname"
                          autoComplete="surname"
                          required
                          value={prenom}
                          onChange={(e) => setPrenom(e.target.value)}
                          className="block w-[120%] rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:color-[#5488b0] sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Nom
                      </label>
                      <div className="mt-2">
                        <input
                          id="name"
                          name="name"
                          type="name"
                          autoComplete="name"
                          required
                          value={nom}
                          onChange={(e) => setNom(e.target.value)}
                          className="block w-[120%] rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:color-[#5488b0] sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="block w-full rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:color-[#5488b0] sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Mot de passe
                      </label>
                    </div>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="block w-full rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  {/* checkbox entrprise true or false  */}

                  <div>
                    <p className="mb-2">
                      Êtes-vous administrateur d'une entreprise ?{" "}
                    </p>
                    <div className="flex w-[30%] justify-between items-center">
                      <input
                        type="checkbox"
                        id="entrepriseOui"
                        name="entreprise"
                        className="form-checkbox h-4 w-4 accent-[#003761] border-gray-300 rounded ring-[#003761] hover:ring-2 hover:ring-offset-2 cursor-pointer transition ease-in-out 700ms"
                        checked={isCompany}
                        onChange={() => setIsCompany(true)}
                      />
                      <label htmlFor="entrepriseOui">Oui</label>
                      <input
                        type="checkbox"
                        id="entrepriseNon"
                        name="entreprise"
                        className="form-checkbox h-4 w-4 accent-[#003761] border-gray-300 rounded ring-[#003761] hover:ring-2 hover:ring-offset-2 cursor-pointer transition ease-in-out 700ms"
                        checked={!isCompany}
                        onChange={() => setIsCompany(false)}
                      />
                      <label htmlFor="entrepriseNon">Non</label>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-[#003761] px-4 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#3371a1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      {isCompany ? "Suivant" : "S'inscrire"}
                    </button>
                  </div>
                </form>
              )
            )}

            {/* ********************* STEP 2 SI ENTREPRISE (NUMÉRO DE SIRET) ******************** */}

            {step === 2 && (
              <form className="space-y-6 w-[100%]" onSubmit={handleSubmit}>
                <div className="mt-10">
                  <div className="flex">
                    <p className="text-xl mb-3">Compte créé avec succès !</p>
                    <CheckedIcon />
                  </div>
                  <p>
                    Félicitations, votre compte utilisateur a bien été créé.
                    Vous pouvez désormais connecter votre entreprise.
                  </p>
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

            {step === 3 && entrepriseTrouvee && (
              <div className="py-40">
                <h2 className="text-2xl font-medium mb-5">
                  Entreprise Trouvée
                </h2>
                <div className="w-[100%] bg-white h-[auto] flex flex-col px-5 py-5 border rounded-lg mb-10">
                  <p>
                    <span className="font-medium text-lg">Nom</span>:{" "}
                    {entrepriseTrouvee.nom}
                  </p>
                  <p>
                    <span className="font-medium text-lg">Adresse</span>:{" "}
                    {entrepriseTrouvee.adresse}
                  </p>
                </div>
                <div className="flex mt-10">
                  <SecondaryButton
                    text="Annuler"
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

            {step === 1 && !loading && (
              <div className="flex items-center mt-7 justify-center">
                <GoogleOAuthButton />
              </div>
            )}
            {step === 1 && !loading && (
              <p className="mt-10 text-center text-sm text-gray-500">
                Vous avez déjà un compte ?{" "}
                <Link
                  href="/login"
                  className="font-semibold leading-6 text-[#003761] hover:text-indigo-500"
                >
                  Se connecter
                </Link>
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
