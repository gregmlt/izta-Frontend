import React from "react";
import ContactModal from "../ContactModal";

function ContactContainer() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center h-screen w-full bg-white">
      <div className="flex justify-center items-end bg-[linear-gradient(to_left_bottom,rgba(206,100,38,0.7),rgba(16,34,93,1)),url('/images/Team.jpg')] w-full lg:w-2/3 h-1/2 lg:h-full bg-left bg-cover px-6 lg:pl-28">
        <blockquote className="w-full lg:w-3/4 py-10 lg:py-20 text-lg lg:text-xl leading-7 text-white mb-5">
          <div className="w-14 mb-4">
            <img src="./images/quote.svg" alt="quote" />
          </div>
          Nous croyons fermement que chaque entreprise peut être un catalyseur de changement. En soutenant des projets locaux, nous bâtissons ensemble un avenir plus solidaire et durable.
          <div className="flex flex-col mt-4">
            <cite className="font-light mt-3 lg:mt-7">Mélanie Vecchio</cite>
            <cite className="font-extralight text-sm">CEO of Izta</cite>
          </div>
        </blockquote>
      </div>
      <div className="w-full lg:w-1/2 mx-6 lg:mx-20 flex flex-col text-lg lg:text-3xl pr-6 lg:pr-28">
        <p className="text-3xl lg:text-5xl font-bold text-[#003761] mb-4">Nous Contacter</p>
        <p className="text-lg lg:text-2xl font-medium">
          Une question, un commentaire, ou envie d'en savoir plus sur nos produits et services ?
        </p>
        <ContactModal />
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
