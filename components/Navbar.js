import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import PrimaryButton from "./PrimaryButton";
import SearchBar from "./SearchBar";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../reducers/users";
import ProfileIcon from "./iconsSVG/ProfileIcon";

export default function Navbar({ background }) {
  const router = useRouter();
  const dispatch = useDispatch();

  const token = useSelector((state) => state.users.value.token);

  const handlePushToLogin = () => {
    router.push("/login");
  };

  const handlePushToAboutUs = () => {
    router.push("/aboutus");
  };

  const handleLogout = () => {
    // Effacer le token dans le store Redux
    dispatch(logout());
    // Rediriger vers la page d'accueil
    router.push("./");
  };

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    const yOffset = -115; // décalage de 100 pixels
    const yPosition =
      contactSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
  };

  return (
    <div className="h-[80px] w-[85%] fixed flex justify-between py-4 px-6 items-center border rounded border-gray-400 backdrop-blur-md z-20">
      <div className="flex items-center">
        <div className="w-[100px] h-[50px]">
          <Link href="./">
            <img src="/Logo/Logomark.svg" className="w-[100%] h-[100%]" />
          </Link>
        </div>
        <div className="flex ml-20">
          <p className="cursor-pointer" onClick={handlePushToAboutUs}>
            Qui sommes-nous ?
          </p>
          <a className="pl-10" href="#contact" onClick={handleScrollToContact}>
            Contact
          </a>
        </div>
      </div>

      <div className="flex items-center">
        <div className="ml-3 flex items-center">
          {token && (
            <>
              <div className="flex items-center">
                <ProfileIcon />
              </div>
            </>
          )}
          {!token && (
            <PrimaryButton
              bgColor="bg-[#003761]"
              text="Connexion"
              hoverColor="hover:bg-[#3371a1]"
              clickFunc={handlePushToLogin}
            />
          )}
        </div>
      </div>
    </div>
  );
}
