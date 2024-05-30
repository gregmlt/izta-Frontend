import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import CheckedIcon from "@/components/CheckedIcon";

export default function index() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const sendGoogleCodeUrl = ""; // ton url vers ton api(backend) qui va recuperer le code est recuperer les data pour la DB

  const [loading, setLoading] = useState(false); // état pour gérer le loader
  const [isCompany, setIsCompany] = useState(false);
  const [nomEntreprise, setNomEntreprise] = useState("");
  const [entrepriseTrouvee, setEntrepriseTrouvee] = useState(null); // état pour stocker les détails de l'entreprise trouvée
  const [numeroSiret, setNumeroSiret] = useState("");
  const [step, setStep] = useState(1); // état pour gérer les étapes du formulaire

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

  // ******** recherche entreprise ********

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isCompany) {
      setLoading(true);
      setTimeout(() => {
        // Passer à l'étape suivante après 2 secondes
        setLoading(false);
        setStep(5);
      }, 2000); // étape 5 création de  compte avec succès
    }
    if (isCompany && step === 1) {
      // Passer à l'étape suivante si c'est une entreprise avec un chargement
      setStep(2);
    } else if (step === 2) {
      // Logic pour envoyer les données du formulaire
      // envoie de l'email et du mot de passe au back end via un fetch
      // attendre la reponse du back et checker le status code : OK 200 => rediredction vers la page home,
      // si pas de réponse erreur 400 ou 404 mettre un message d'erreur
      const found = entreprises.find((ent) => ent.siret === numeroSiret);
      if (found) {
        setEntrepriseTrouvee(found);
        setStep(3);
      } else {
        alert("Aucune entreprise trouvée avec ce numéro de SIRET.");
      }
    }
  };

  const handleSelectEntreprise = () => {
    setNomEntreprise(entrepriseTrouvee.nom);
    setStep(4); // Passer à l'étape finale après la sélection de l'entreprise
  };

  const handleSearchCancel = () => {
    console.log("Retour à l'étape 2");
    setNumeroSiret("");
    setStep(2); // Suppose this is how you handle cancel
  };

  // ************ Liens vers les pages Profile & Homepage ************

  const handleOpenMyProfile = () => {
    router.push("/profile");
  };

  const handleOpenHomePage = () => {
    router.push("./");
  };

  useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code: code }),
    };
    localStorage.setItem("isConnected", true);
    fetch(sendGoogleCodeUrl, requestOptions).then((response) => {
      if (response.status === 200) {
      }
    });
  }, [code]);

  return (
    <>
      <div className="flex ">
        <div className=" flex justify-center items-center bg-[linear-gradient(to_left_bottom,rgba(206,100,38,0.7),rgba(16,34,93,1)),url('/images/Team-building.jpg')] w-[50%] h-[100vh] bg-right bg-cover ">
          <p className="w-[700px] text-5xl font-medium text-white ">
            Votre engagement commence ici
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-[50%] h-[100vh]">
          <div className="mb-20">
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
              <div className="flex justify-center items-center h-[100%] mt-5 mb-[50%]">
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
                  {/* checkbox entreprise true or false  */}

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
                      {isCompany ? "Suivant" : "Valider mon inscription"}
                    </button>
                  </div>
                </form>
              )
            )}

            {/* ********************* STEP 5 SI PAS D'ENTREPRISE ******************** */}

            {step === 5 && !isCompany && (
              <div className="mt-10">
                <div className="flex">
                  <p className="text-2xl mb-3 font-semibold">
                    Votre compte a été créé avec succès !
                  </p>
                  <CheckedIcon />
                </div>
                <p>
                  Vous êtes maintenant prêt à tirer le meilleur parti de nos
                  services.
                  <p className="font-semibold text-lg text-[#003761] mt-4">
                    Que souhaitez-vous faire ensuite ?
                  </p>
                  <ul className="mt-3 list-disc">
                    <li>
                      Visiter votre profil pour personnaliser vos préférences et
                      compléter votre profil.
                    </li>
                    <li>
                      Explorer la page d'accueil pour découvrir ce que nous
                      offrons.
                    </li>
                  </ul>
                </p>
                <div className="flex mt-10">
                  <PrimaryButton
                    bgColor="bg-[#003761]"
                    text="Accéder à mon profil"
                    hoverColor="hover:bg-[#3371a1]"
                    clickFunc={handleOpenMyProfile}
                  />
                  <SecondaryButton
                    text="Aller à la page d'accueil"
                    hoverColor="hover:bg-[#B0C8DA]"
                    margin="ml-4"
                    clickFunc={handleOpenHomePage}
                  />
                </div>
              </div>
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

            {step === 4 && (
              <div className="py-16">
                <h2 className="text-2xl font-medium">Vérification en cours</h2>
                <p>
                  {" "}
                  Merci de vous être inscrit chez Izta ! Nous sommes en train de
                  vérifier les informations soumises pour votre entreprise. Ce
                  processus est essentiel pour garantir la sécurité et la
                  fiabilité de notre plateforme pour tous les utilisateurs.
                </p>
                <div className="w-[100%] bg-white h-[auto] flex flex-col px-5 py-5 border rounded-lg mb-10">
                  <p className="text-lg font-semibold pb-3 text-[#003761]">
                    Que se passe-t-il ensuite ?
                  </p>
                  <p>
                    <span className="font-semibold">
                      Vous recevrez un email de confirmation
                    </span>{" "}
                    dès que la vérification de votre entreprise sera validée.
                    Cette étape peut prendre quelques minutes. Nous vous
                    remercions pour votre patience et votre compréhension.
                  </p>
                </div>
                <p>
                  En attendant, vous avez un accès complet à votre profil
                  utilisateur où vous pouvez commencer à explorer nos services
                  et préparer votre entreprise pour son lancement sur Izta.
                </p>
                <div className="flex mt-10">
                  <PrimaryButton
                    bgColor="bg-[#003761]"
                    text="Accéder à mon profil"
                    hoverColor="hover:bg-[#3371a1]"
                    clickFunc={handleOpenMyProfile}
                  />
                  <SecondaryButton
                    text="Aller à la page d'accueil"
                    hoverColor="hover:bg-[#B0C8DA]"
                    margin="ml-4"
                    clickFunc={handleSearchCancel}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
