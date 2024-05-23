import React, { useState } from "react";
import GoogleOAuthButton from "./GoogleButton";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addTokenToStore } from "@/reducers/users";
import { useRouter } from "next/router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [autorized, setAutorized] = useState(true);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/users/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          dispatch(addTokenToStore(data));
          router.push("/profile");
          setAutorized(true);
        } else {
          setAutorized(false);
        }
      });

    // envoie de l'email et du mot de passe au back end via un fetch
    // attendre la reponse du back et checker le status code : OK 200 => rediredction vers la page home qui est égal à /,
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
              Se connecter
            </h2>
          </div>

          <div className="w-[55%]">
            <form className="space-y-6 w-[100%]" onSubmit={handleSubmit}>
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
                {!autorized && (
                  <p className="block font-medium text-xs text-red-500 pt-[5px]">
                    * Votre email ou mot de passe sont incorrects
                  </p>
                )}
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Mot de passe
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-[#003761] hover:text-[#ce7e60]"
                    >
                      Mot de passe oublié?
                    </a>
                  </div>
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
                {!autorized && (
                  <p className="block font-medium text-xs text-red-500 pt-[5px]">
                    * Votre email ou mot de passe sont incorrects
                  </p>
                )}
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-[#003761] px-4 py-3 text-sm font-semibold text-white leading-6 shadow-sm hover:bg-[#3371a1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={handleSubmit}
                >
                  Se connecter
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
              Vous n’avez pas de compte ?{" "}
              <Link
                href="./register"
                className="font-semibold leading-6 text-[#003761] hover:text-[#ce7e60]"
              >
                Créer un compte
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
