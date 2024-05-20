import React, { useState } from "react";
import GoogleOAuthButton from "./GoogleButton";
import Link from "next/link";

export default function Login() {
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(prenom, nom, email, password);
    // envoie de l'email et du mot de passe au back end via un fetch
    // attendre la reponse du back et checker le status code : OK 200 => rediredction vers la page home,
    // si pas de réponse erreur 400 ou 404 mettre un message d'erreur
  };

  return (
    <>
      <div className="flex ">
        <div className=" flex justify-center items-center bg-[linear-gradient(to_left_bottom,rgba(206,100,38,0.7),rgba(16,34,93,1)),url('/images/Team-building.jpg')] w-[50%] h-[100vh] bg-right bg-cover ">
          <p className="w-[700px] text-5xl font-medium text-white ">
            Connectez-vous aux entreprises qui mènent des engagements sociaux et
            environnementaux
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
            <form className="space-y-6 w-[100%]" onSubmit={handleSubmit}>
              <div className="flex mt-8 justify-between">
                <div>
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
                      className="block w-[200px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:color-[#5488b0] sm:text-sm sm:leading-6"
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
                      className="block w-[200px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:color-[#5488b0] sm:text-sm sm:leading-6"
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
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:color-[#5488b0] sm:text-sm sm:leading-6"
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
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-[#003761] px-4 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#3371a1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  S'inscrire
                </button>
              </div>

              <div className="flex flex-col ">
                <div className="flex justify-evenly items-center">
                  <div className="w-[40%] h-[1px] bg-[#b0c8da]"></div>
                  <p>ou</p>
                  <div className="w-[40%] h-[1px] bg-[#b0c8da]"></div>
                </div>
              </div>
            </form>
            <div className="flex items-center mt-7 justify-center">
              <GoogleOAuthButton />
            </div>
            <p className="mt-10 text-center text-sm text-gray-500">
              Vous avez déjà un compte ?{" "}
              <Link
                href="/login"
                className="font-semibold leading-6 text-[#003761] hover:text-indigo-500"
              >
                Se connecter
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
