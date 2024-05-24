import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import PrimaryButton from "./PrimaryButton";
import SearchBar from "./SearchBar";

export default function Navbar({background}) {
  const router = useRouter();
  const handlePushTologin = () => {
    router.push("/login");
  };

  return (
      <div className="h-[80px] w-[85%] fixed flex justify-between py-4 px-6 items-center border rounded border-gray-400 backdrop-blur-md z-10">
        <div className="flex items-center">
      <div className="w-[100px] h-[50px]">
          <img src="/Logo/Logomark.svg" className="w-[100%] h-[100%]" />
        </div>
        <div className="flex ml-20">
          <Link href="#">Qui sommes-nous ?</Link>
          <Link className="pl-10" href="#">Contact</Link>
        </div>

        </div>

        <div className="flex items-center">
            <SearchBar width="w-[300px]" />
            <div className="ml-3">
              <PrimaryButton bgColor="bg-[#003761]" text="Connexion" hoverColor="hover:bg-[#3371a1]" clickFunc={handlePushTologin}/>
            </div>
          </div>
      </div>

  );
}
