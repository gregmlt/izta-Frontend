import React, { useState } from "react";
import PrimaryButton from "./PrimaryButton";
import { useSelector } from "react-redux";
import Eye from "../components/iconsSVG/Eye";
import EyeSlash from "../components/iconsSVG/EyeSlash";

export default function ChangePassword() {
  const token = useSelector((state) => state.users.value.token);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // 'error' or 'success'

  const toggleCurrentPasswordVisibility = () => {
    setShowCurrentPassword(!showCurrentPassword);
  };

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSavePassword = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setMessage("Les nouveaux mots de passe ne correspondent pas.");
      setMessageType("error");
      return;
    }

    const data = {
      currentPassword,
      newPassword,
    };

    fetch(`http://localhost:3000/users/password-change/${token}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.result) {
          setMessage("Mot de passe changé avec succès");
          setMessageType("success");
        } else {
          setMessage(`Erreur: ${result.message}`);
          setMessageType("error");
        }
      })
      .catch((error) => {
        setMessage("Erreur lors du changement de mot de passe.");
        setMessageType("error");
      });
  };

  return (
    <>
      <div className="flex flex-col w-full h-[auto] bg-white py-8 mb-8">
        <p className="text-4xl font-semibold">Modifier mon mot de passe</p>
      </div>
      <div className="w-[55%]">
        <form className="space-y-6 w-full" onSubmit={handleSavePassword}>
          <div>
            <label
              htmlFor="current-password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Mot de passe actuel
            </label>
            <div className="mt-2 relative">
              <input
                id="current-password"
                name="current-password"
                type={showCurrentPassword ? "text" : "password"}
                autoComplete="current-password"
                required
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="block w-full rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:color-[#5488b0] sm:text-sm sm:leading-6"
              />
              <button
                type="button"
                onClick={toggleCurrentPasswordVisibility}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
              >
                {showCurrentPassword ? <Eye /> : <EyeSlash />}
              </button>
            </div>
          </div>
          <div>
            <label
              htmlFor="new-password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Nouveau mot de passe
            </label>
            <div className="mt-2 relative">
              <input
                id="new-password"
                name="new-password"
                type={showNewPassword ? "text" : "password"}
                autoComplete="new-password"
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="block w-full rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:color-[#5488b0] sm:text-sm sm:leading-6"
              />
              <button
                type="button"
                onClick={toggleNewPasswordVisibility}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
              >
                {showNewPassword ? <Eye /> : <EyeSlash />}
              </button>
            </div>
          </div>
          <div>
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Répéter le nouveau mot de passe
            </label>
            <div className="mt-2 relative">
              <input
                id="confirm-password"
                name="confirm-password"
                type={showConfirmPassword ? "text" : "password"}
                autoComplete="new-password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="block w-full rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:color-[#5488b0] sm:text-sm sm:leading-6"
              />
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
              >
                {showConfirmPassword ? <Eye /> : <EyeSlash />}
              </button>
            </div>
          </div>
          <div className="flex justify-end">
            <PrimaryButton
              text="Enregistrer les modifications"
              bgColor="bg-[#003761]"
              hoverColor="hover:bg-[#3371a1]"
            />
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
    </>
  );
}

