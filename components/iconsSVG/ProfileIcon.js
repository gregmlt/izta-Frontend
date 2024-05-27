import React, { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from 'react-redux';
import PrimaryButton from "../PrimaryButton";
import { logout } from '../../reducers/users'

export default function ProfileIcon() {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = useRef(null);
  const router = useRouter();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.users.value.token);
  console.log(token)

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handlePushToProfile = () => {
    router.push("/profile"); // Assurez-vous que le chemin du profil utilisateur est correct
  };

  const handleLogout = () => {
    // Effacer le token dans le store Redux
    console.log('Déconnexion en cours...');
    dispatch(logout());
    console.log('Token supprimé du store');
    // Rediriger vers la page d'accueil
    router.push("/");
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button
          type="button"
          onClick={toggleDropdown}
          className="bg-[#003761] p-2 rounded-md cursor-pointer hover:bg-[#3371a1] transition ease-in-out 900ms"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="size-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="absolute right-0 w-[200px] mt-2 p-4 origin-top-right bg-white border border-gray-200 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {token && (
              <>
                <div className="pb-2">
                  <PrimaryButton text="Voir mon profil" border="border border-1 border-[#003761]" textColor="text-[#003761]" width="w-full" hoverColor="hover:bg-[#003761] hover:text-white" clickFunc={handlePushToProfile} />
                </div>
                <div className="w-[100%] h-[1px] bg-gray-300 mt-2 mb-3"></div>
                  <div className="py-1 pl-2 text-sm font- bg-[F7F5F1] rounded hover:text-[#a0624b] transition ease-in-out 800ms cursor-pointer" onClick={handleLogout} >
                    Se déconnecter
                  </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
