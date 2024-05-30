import React, { useState } from "react";
import { useRouter } from "next/router";

export default function ResetPassword() {
  const router = useRouter();

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // 'error' or 'success'

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword === confirmPassword) {
      fetch(
        `http://localhost:3000/passwords/password-change/${router.query.token}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ newPassword }),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.result) {
            console.log(data);
            setMessage("Mot de passe réinitialisé");
            setMessageType("success");
          } else {
            setMessage("Les mots de passe ne correspondent pas");
            setMessageType("error");
          }
        });
    }
  };

  return (
    <div className="flex justify-center items-center h-[100vh] bg-[url('/Logo/backgground.png')] bg-cover bg-center bg-no-repeat">
      <div className="w-[400px] mb-16">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="/Logo/Logomark.svg"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight mb-16 text-[#004E89]">
            Création d'un nouveau mot de passe
          </h2>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="new-password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Nouveau mot de passe :
            </label>
            <div className="mt-2">
              <input
                type="password"
                id="new-password"
                name="new-password"
                placeholder="Entrez un nouveau mot de passe"
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="block w-full rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Confirmer le nouveau mot de passe :
            </label>
            <div className="mt-2">
              <input
                type="password"
                id="confirm-password"
                name="confirm-password"
                placeholder="Confirmez le nouveau mot de passe"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="block w-full rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#003761] px-4 py-3 text-sm font-semibold text-white leading-6 shadow-sm hover:bg-[#3371a1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Réinitialiser le Mot de Passe
            </button>
          </div>
          {message && (
            <div
              className={`mt-4 text-center text-sm ${
                messageType === "error" ? "text-red-500" : "text-green-500"
              }`}
            >
              {message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
