import React, { useState } from "react";
import PrimaryButton from "../PrimaryButton";

function ContactContainer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check form validity
    const form = e.target;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // If the form is valid, proceed with form submission
    try {
      const response = await fetch("http://localhost:3000/form/form-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message, phone }),
      });
      const data = await response.json();
      if (data.success) {
        alert("Message envoyé avec succès");
      } else {
        alert("Erreur lors de l'envoi du message");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Erreur lors de l'envoi du message");
    }
  };

  return (
    <div
      id="contact"
      className="flex justify-center items-center h-auto h-[800px] w-full bg-white"
    >
      <div className="flex justify-center items-end bg-[linear-gradient(to_left_bottom,rgba(206,100,38,0.7),rgba(16,34,93,1)),url('/images/Team.jpg')] w-full h-[100%] bg-left bg-cover pl-20">
        <blockquote className="w-full text-lg text-white mb-20 mr-10 pl-[120px]">
          <div className="w-14 mb-4">
            <img src="./images/quote.svg" alt="quote" />
          </div>
          Nous croyons fermement que chaque entreprise peut être un catalyseur
          de changement. En soutenant des projets locaux, nous bâtissons
          ensemble un avenir plus solidaire et durable.
          <div className="flex flex-col mt-4">
            <cite className="font-light mt-3">Mélanie Vecchio</cite>
            <cite className="font-extralight text-sm">CEO of Izta</cite>
          </div>
        </blockquote>
      </div>
      <div className="w-full p-20 flex flex-col text-lg pr-6 pr-[120px]">
        <p className="text-5xl font-bold text-[#003761] mb-4">Nous Contacter</p>
        <p className="text-2xl font-medium">
          Une question, un commentaire, ou envie d'en savoir plus sur nos
          produits et services ?
        </p>
        <div className="w-[100%] bg-white rounded-md mt-10">
          <p className="text-lg font-medium mb-10">
            Notre équipe est prête à vous répondre et à vous assister.
          </p>
          <form onSubmit={handleSubmit} className="h-full ">
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
                id="message"
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
              En soumettant ce formulaire, vous acceptez que vos informations
              soient utilisées pour répondre à votre demande. Vos données
              resteront confidentielles conformément à notre{" "}
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
      </div>
    </div>
  );
}

export default ContactContainer;

// import React from "react";
// import ContactModal from "../ContactModal";

// function ContactContainer() {
//   return (
//     <div className="flex justify-center items-center h-[100vh] w-full bg-white">

//         <div className=" flex justify-center items-end bg-[linear-gradient(to_left_bottom,rgba(206,100,38,0.7),rgba(16,34,93,1)),url('/images/Team.jpg')] w-[65%] h-[100%] bg-left bg-cover pl-[120px]">
//             <blockquote className="w-[75%] py-20 text-xl leading-7 text-white mb-5">
//               <div className="w-14">
//               <img src="./images/quote.svg"/>
//               </div>
//            Nous croyons fermement que chaque entreprise peut être un catalyseur de changement. En soutenant des projets locaux, nous bâtissons ensemble un avenir plus solidaire et durable.
//             <div className="flex flex-col">
//             <cite className="font-light mt-7">Mélanie Vecchio</cite>
//             <cite className="font-extralight text-sm">CEO Founder of Izta</cite>
//             </div>
//             </blockquote>
//         </div>
//         <div className="w-[50%] mx-20 flex flex-col text-3xl pr-[120px]">
//           <p className="text-5xl font-bold text-[#003761] mb-4">Nous Contacter</p>
//           <p className="text-2xl font-medium">
//           Une question, un commentaire, ou envie d'en savoir plus sur nos produits et services ?
//           </p>

//           <ContactModal />
//         </div>

//       </div>

//   );
// }

// export default ContactContainer;
