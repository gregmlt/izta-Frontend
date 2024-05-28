import React, { useState } from "react";
import PrimaryButton from "./PrimaryButton";

function ContactModal() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState(""); // Ajoutez l'état pour le numéro de téléphone
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!consent) {
  //     setError("Vous devez accepter les termes et conditions pour continuer.");
  //     return;
  //   }
  //   console.log({ name, email, message, phone });
  //   setError("");
  // };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!consent) {
      setError("Vous devez accepter les termes et conditions pour continuer.");
      return;
    }
    try {
      const response = await fetch("http://localhost:3000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, message, phone })
      });
      const data = await response.json();
      if (data.success) {
        alert("Email envoyé avec succès");
      } else {
        setError("Erreur lors de l'envoi de l'email");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Erreur lors de l'envoi de l'email");
    }
  };


  return (
    <div className="w-[100%] bg-white rounded-md mt-10 ">
      <p className="text-lg font-medium mb-10">
        Notre équipe est prête à vous répondre et à vous assister.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 mt-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 after:content-['*'] after:ml-0.5 after:text-[#ce7e60]"
          >
            Nom
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Votre nom"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Téléphone
          </label>
          <input
            type="tel"
            id="phone"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Votre numéro de téléphone"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 after:content-['*'] after:ml-0.5 after:text-[#ce7e60]"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Votre email"
            required
          />
        </div>
        <div className="mb-1">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 after:content-['*'] after:ml-0.5 after:text-[#ce7e60]"
          >
            Votre message
          </label>
          <textarea
            id="Message"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="votre message"
            required
          ></textarea>
        </div>
        <p className="text-xs text-[#ce7e60]">* champs obligatoire</p>

        <p className="text-xs mt-4">
          En soumettant ce formulaire, vous acceptez que vos informations soient
          utilisées pour répondre à votre demande. Vos données resteront
          confidentielles conformément à notre{" "}
          <a href="#" className="text-indigo-600 hover:text-indigo-900">
            politique de confidentialité
          </a>
        </p>
        <div className="flex justify-end mt-5">
          <PrimaryButton
            text="Envoyer mon message"
            bgColor="bg-[#003761]"
            hoverColor="hover:bg-[#5488b0]"
            typeBtn="submit"
            width="w-full" 
          />
        </div>
      </form>
    </div>
  );
}

export default ContactModal;
