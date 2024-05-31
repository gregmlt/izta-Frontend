import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StarsSVGIcons from "./iconsSVG/StarsSVGIcons";
import HeartSVGIcons from "./iconsSVG/HeartSVGIcons";
import MedalSVGIcons from "./iconsSVG/MedalSVGIcons";
import KudosButton from "./KudosButton";
import InfoSVGIcon from "./iconsSVG/InfoSVGIcon";
import { useDispatch, useSelector } from "react-redux";
import { addKudo, addLikedCompany, removeLikedCompany } from "@/reducers/users";

const testimonials = [
  {
    name: "EcoSolutions Ltd",
    text: "Nous avons réduit nos émissions de CO2 de 30% en un an. Une collaboration précieuse et inspirante!",
  },
  {
    name: "BioPlanet Industries",
    text: "Leur technologie avancée a optimisé notre processus de recyclage, augmentant notre efficacité et notre impact écologique positif.",
  },
  {
    name: "Coalition pour un Avenir Vert",
    text: "Grâce à leur soutien, nos initiatives de conservation ont atteint de nouveaux sommets. Leur technologie est essentielle à nos efforts.",
  },
];

function CompanyInfoModal({ companyName, taille, companyId, starsCount }) {
  const [isLiked, setIsLiked] = useState(true);
  const [hasKudo, setHasKudo] = useState(false);
  const [showPopover, setShowPopover] = useState(false);
  const [showPopupHeart, setShowPopupHeart] = useState(false);
  const [kudosPopup, setKudosPopup]  = useState(false)
  const [kudoSent, setKudosent] = useState(false)
  const { token, kudos, likedCompanies } = useSelector(
    (state) => state.users.value
  );
  const dispatch = useDispatch()

useEffect(() => {
  if(likedCompanies.includes(companyId)) {
    setIsLiked(true)
  } else {
    setIsLiked(false)
  }
}, [companyId, token])


const handleInputHeartClick = () => {
  
};

  
  const handleLikeToggle = async() => {
    if(!token) {

      setShowPopupHeart(true);
    
      // Définir un timeout pour fermer le pop-up après 1,5 secondes
      setTimeout(() => {
        setShowPopupHeart(false);
      }, 2500);
    }
    const url = `http://localhost:3000/users/like/${token}/${companyId}`;
    const response = await fetch(url, { method: "POST" });
    const data = await response.json();
    console.log(data)
    if(data.result && token) {
      if (isLiked) {
        dispatch(removeLikedCompany(companyId));
      } else {
        dispatch(addLikedCompany(companyId));
      }
      setIsLiked(!isLiked);
    } else {
      console.error("Error liking/disliking company:", data.message);
    }
  };
  
  const handleKudoToggle = async() => {
    if(!token) {
      setKudosPopup(true);

      setTimeout(() => {
        setKudosPopup(false);
      }, 2500);
    } else {
      setKudosent(true);

      setTimeout(() => {
        setKudosent(false);
      }, 2500);
    }
    
    if(!kudos.includes(companyId)) {
      dispatch(addKudo(companyId))
    }
    fetch(`http://localhost:3000/companies/get/company/${companyId}`)
    .then(response => response.json())
    .then((data) => {
      fetch(`http://localhost:3000/companies/post/kudos/${data.company.siret}/${token}`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          siret: data.company.siret,
          token: token
        }),
      })
     .then(response => response.json())
     .then((data) => {
      console.log(data)
     })
    })

    fetch(`http://localhost:3000/companies/get/company/${companyId}`)
    .then(response => response.json())
    .then((data) => {
      fetch(`http://localhost:3000/users/post/kudos/${data.company.siret}/${token}`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          siret: data.company.siret,
          token: token
        }),
      })
     .then(response => response.json())
     .then((data) => {
      console.log(data)
     })
    })
    // if(!kudos.includes(data.company._id)) {
    //   dispatch(addKudo(data.company._id))
    //   const response2 = await fetch(`http://localhost:3000/users/post/kudos/${data.company.siret}/${token}`)
    //   const data2 = await response2.json();
    //   console.log(data2)
    // } 
  };

  const capitalizeFirstLetter = (str) => {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  const truncateText = (text, maxLength) => {
    if (typeof text !== "string") return "";
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + "...";
  };

  const renderStars = (count) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          fill={i < count ? "#CE7E60" : "none"}
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke={i < count ? "#c26d5c" : "#cbd5e0"}
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
          />
        </svg>
      );
    }
    return stars;
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
    <div className="h-auto w-[80%] mx-auto my-[70px] flex flex-col">
      <div className=" p-5 rounded-lg border  w-[100%] min-h-[480px] flex flex-col my-5 bg-white">
        <div className="w-full flex h-[330px] object-cover rounded-md bg-[linear-gradient(to_right_top,rgba(206,100,38,0.2),rgba(16,34,93,0.8)),url('/images/campain-asso.jpg')] bg-cover">
          <div className="flex items-start w-full p-5">
            <div className="ml-auto z-10 cursor-pointer" onClick={handleLikeToggle}>
              <HeartSVGIcons stroke="stroke-white:" fill={(isLiked && token) ? "red": "transparent"}/>
            {showPopupHeart && (
        <div className="popup fade-in">
          <p>Vous devez vous connectez pour liker</p>
        </div>
      )}
            </div>
            <div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between px-5">
            <h1 className="text-7xl text-[#003761] font-semibold pt-5">
              {companyName}
            </h1>
            <div className="flex mt-5">{renderStars(starsCount)}</div>
          </div>
        </div>
      </div>
      <div className="p-3 flex flex-col w-[100%]">
        <div className="h-[50%] flex justify-between items-center">
          <div className="mt-[-60px]"></div>
        </div>
      </div>

        <div className="grid grid-cols-3 gap-6 auto-rows-min h-auto">
          <div className="col-start-1 col-end-3 row-start-1 row-end-auto h-auto w-full py-4 px-5 bg-white rounded-md border flex flex-col">
            <div className="flex items-center border-b w-full pb-4">
              <img src="/Logo/Logo.svg" className="w-[25px]" />
              <h3 className="font-semibold text-[#003761] text-[20px]">
                Présentation de l'entreprise
              </h3>
            </div>
            <p className="text-balance pt-7">
              Deuxième entreprise mondiale des métiers des concessions et de la
              construction, employant 275 000 salariés à travers le monde.Vinci,
              anciennement Société générale d'entreprises (SGE), est la deuxième
              entreprise mondiale des métiers des concessions et de la
              construction, employant 275 000 salariés à travers le monde.
            </p>
          </div>
          <div className="col-start-1 col-end-3 row-start-2 row-end-auto h-auto w-full py-4 px-5 bg-white rounded-md border flex flex-col">
            <div className="flex items-center border-b w-full pb-4">
              <img src="/Logo/Logo.svg" className="w-[25px]" />
              <h3 className="font-semibold text-[#003761] text-[20px]">
                Leur vision
              </h3>
            </div>
            <p className="text-balance pt-7">
              Chez Free, nous croyons fermement que chaque entreprise a la
              responsabilité de protéger notre planète. Notre vision écologique
              est de devenir un leader mondial dans la création de technologies
              qui non seulement respectent l'environnement mais aussi restaurent
              les écosystèmes. Nous intégrons la durabilité dans toutes nos
              opérations, de la conception de produits à la gestion des
              ressources, en passant par nos processus de fabrication. Notre
              objectif est de créer un impact positif mesurable sur
              l'environnement, en développant des solutions qui réduisent les
              émissions de gaz à effet de serre, préservent les ressources
              naturelles et favorisent la biodiversité.
            </p>
          </div>
          <div className="col-start-1 col-end-3 row-start-3 row-end-auto h-auto w-full py-4 px-8 bg-white rounded-md border flex flex-col">
            <div className="flex items-center border-b w-full pb-4">
              <img src="/Logo/Logo.svg" className="w-[25px]" />
              <h3 className="font-semibold text-[#003761] text-[20px]">
                Performances et Indicateurs Écologiques
              </h3>
            </div>
            <p className="text-balance pt-7">
              <p className="text-md font-semibold pb-3">Rapports RSE</p>
              <p>
                Des extraits ou liens vers les rapports de Responsabilité
                Sociétale des Entreprises (RSE) les plus récents, avec des
                points saillants sur les performances environnementales.
              </p>

              <p className="underline underline-offset-4 pt-5 pb-4">
                Indicateurs Clés :
              </p>

              <ul className="list-disc list-inside">
                <li className="mb-2">
                  Réduction des émissions de CO2 : Chiffres précis et objectifs
                  futurs.
                </li>
                <li className="mb-2">
                  Consommation d'énergie renouvelable : Pourcentage actuel et
                  objectifs de croissance.
                </li>

                <li className="mb-2">
                  Gestion des déchets : Statistiques sur le recyclage et les
                  initiatives de zéro déchet.
                </li>
              </ul>
            </p>
          </div>
          <div className="col-start-1 col-end-5 row-start-5 row-end-auto h-auto w-full py-4 px-8 bg-white rounded-md border flex flex-col">
            <div className="flex items-center border-b w-full pb-4">
              <img src="/Logo/Logo.svg" className="w-[25px]" />
              <h3 className="font-semibold text-[#003761] text-[20px]">
                Initiatives et Projets Écologiques
              </h3>
            </div>
            <p className="text-balance pt-7">
              <p className="text-md font-semibold pb-3">Projets en Cours</p>
              <ul className="list-disc list-inside">
                <li className="mb-2">
                  <span className="font-medium">Green Energy Initiative</span> :
                  L'initiative Green Energy vise à développer et à déployer des
                  systèmes d'énergie renouvelable dans les zones rurales.
                  L'objectif est de fournir une source d'énergie durable et
                  abordable tout en réduisant la dépendance aux combustibles
                  fossiles.
                </li>
              </ul>
            </p>
            <p className="text-md font-semibold pb-3 pt-7">Projets Terminés</p>
            <ul className="list-disc list-inside">
              <li className="mb-2">
                <span className="font-medium">Water Conservation Program</span>{" "}
                : Ce programme, achevé en 2020, s'est concentré sur la réduction
                de la consommation d'eau dans nos processus de fabrication. En
                mettant en œuvre des technologies de recyclage de l'eau et des
                pratiques de conservation, nous avons réduit notre utilisation
                d'eau de 40%. Les bénéfices pour l'environnement comprennent une
                diminution significative de notre prélèvement sur les ressources
                en eau locales et une réduction des coûts opérationnels.
              </li>
            </ul>
          </div>
          <div className="col-start-3 col-end-4 row-start-1 row-end-auto flex">
            <div className="h-auto w-full py-4 px-5 bg-white rounded-md border flex flex-col">
              <div className="flex items-center border-b w-full pb-4">
                <img src="/Logo/Logo.svg" className="w-[25px]" />
                <h3 className="font-semibold text-[#003761] text-[20px] text-wrap">
                  L’entreprise
                </h3>
              </div>
              <p className="text-sm pt-7 mb-3">
                <span className="font-semibold">Secteur:</span> Industrie
                énergétique et de la construction
              </p>
              <p className="text-sm mb-3">
                <span className="font-semibold">Taille:</span> {taille}
              </p>
            </div>
          </div>
          <div className="col-start-3 col-end-4 row-start-2 row-end-auto flex">
            <div className="h-auto w-full py-4 px-5 bg-white rounded-md border flex flex-col">
              <div className="flex items-center border-b w-full pb-4">
                <img src="/Logo/Logo.svg" className="w-[25px]" />
                <h3 className="font-semibold text-[#003761] text-[20px] text-wrap">
                  Certifications & Labels
                </h3>
              </div>
              <p className="text-sm pt-7 mb-3">
                Liste des certifications obtenues (ISO, Ecovadis, etc.) et des
                labels de durabilité reconnus.
              </p>
            </div>
          </div>
          <div className="col-start-3 col-end-4 row-start-3 row-end-auto flex">
            <div className="h-auto w-full py-4 px-5 bg-white rounded-md border flex flex-col">
              <div className="flex items-center border-b w-full pb-4">
                <img src="/Logo/Logo.svg" className="w-[25px]" />
                <h3 className="font-semibold text-[#003761] text-[20px] text-wrap">
                  Témoignages partenaires
                </h3>
              </div>
              <div className="py-9">
                <Slider {...sliderSettings}>
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="p-4">
                      <p className="text-md mb-2">"{testimonial.text}"</p>
                      <p className="text-sm text-right">- {testimonial.name}</p>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[80%] mx-auto my-[70px] flex flex-col">
      
        <div className="flex justify-end relative cursor-pointer">
          <div
            className="mr-4 relative"
            onMouseEnter={() => setShowPopover(true)}
            onMouseLeave={() => setShowPopover(false)}
          >
            <InfoSVGIcon />
            {showPopover && (
              <div className="absolute top-7 right-[calc(100%+10px)] w-64 p-3 text-sm text-black bg-[#B0C8DA] rounded-lg shadow-lg z-3">
                <p className="font-semibold text-md mb-2">
                  C'est quoi les Kudos ?
                </p>
                <p className="mb-1">
                  Les Kudos sont un moyen simple et efficace de montrer votre
                  appréciation pour les entreprises engagées dans la transition
                  écologique.
                </p>
                <p>
                  Chaque Kudo compte et aide à créer un impact positif ! Montrez
                  votre soutien dès maintenant !
                </p>
              </div>
            )}
          </div>
          <div onClick={handleKudoToggle} className="relative">
          <KudosButton hoverColor="hover:bg-[#3371a1]" />
          {kudosPopup && (
        <div className="popup2 fade-in2 absolute">
          <p>Vous devez vous connectez pour envoyer un Kudo</p>
        </div>
      )}
      {kudoSent && (
        <div className="popup2 fade-in2 absolute">
          <p>Bravo votre Kudo a été envoyé</p>
        </div>
      )}
          </div>
          <div>
          </div>
        </div>
      </div>
</>
  );
}

export default CompanyInfoModal;
