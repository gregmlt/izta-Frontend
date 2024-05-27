import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import PrimaryButton from "./PrimaryButton";
import SearchBar from "./SearchBar";
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../reducers/users';
import ProfileIcon from "./iconsSVG/ProfileIcon";


export default function Navbar({ background }) {
  const router = useRouter();
  const dispatch = useDispatch();
  
  const token = useSelector((state) => state.users.value.token);
  
  
  console.log(token)

  const handlePushToLogin = () => {
    router.push("/login");
  };
  // Debug: Log the token value
  useEffect(() => {
    console.log("Current token:", token);
  }, [token]);

  useEffect(() => {
    const localStorageToken = localStorage.getItem('token');
    if (!localStorageToken) {
      dispatch(logout());
    }
  }, [dispatch]);

  const handleLogout = () => {
    console.log('Déconnexion en cours...');
    localStorage.removeItem('token');
    console.log('Token supprimé de localStorage');
    dispatch(logout());
    console.log('Action de déconnexion dispatchée');
    router.push("./");
  };


  return (

    <div className="h-[80px] w-[85%] fixed flex justify-between py-4 px-6 items-center border rounded border-gray-400 backdrop-blur-md z-11">
      <div className="flex items-center">
        <div className="w-[100px] h-[50px]">
        <Link href="./">
            <img src="/Logo/Logomark.svg" className="w-[100%] h-[100%]" />
          </Link>
        </div>
        <div className="flex ml-20">
          <Link href="#">Qui sommes-nous ?</Link>
          <Link className="pl-10" href="#">Contact</Link>
        </div>
      </div>

      <div className="flex items-center">
        <SearchBar width="w-[300px]" />
        <div className="ml-3 flex items-center">
        {!token && (
            <>
              <div className="flex items-center">
                <ProfileIcon />
              </div>
              <div className="ml-3">
                <PrimaryButton bgColor="bg-[#003761]" text="Se déconnecter" hoverColor="hover:bg-[#3371a1]" clickFunc={handleLogout} />
              </div>
            </>
          )}
          {token && (
            <PrimaryButton bgColor="bg-[#003761]" text="Connexion" hoverColor="hover:bg-[#3371a1]" clickFunc={handlePushToLogin} />
          )}
        </div>
      </div>
    </div>


  );
}