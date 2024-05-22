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
      <div className={`h-[80px] w-[85%] grid grid-cols-12 gap-4 py-4 px-6 items-center border rounded border-gray-400 fixed backdrop-blur-md z-10 ${background}`}>
        <div className="w-[100px] h-[50px] col-start-1 col-end-2">
          <img src="/Logo/Logomark.svg" className="w-[100%] h-[100%]" />
        </div>
        <div className="col-start-2 col-end-6 pl-10">
          <Link href="#">Qui sommes-nous ?</Link>
          <Link className="pl-10" href="#">Contact</Link>
        </div>

        <div className="flex items-center col-start-8 col-end-13">
            <SearchBar width="w-[310px]" />
            <div className="ml-3">
              <PrimaryButton bgColor="bg-[#003761]" text="Connexion" hoverColor="hover:bg-[#3371a1]" clickFunc={handlePushTologin}/>
            </div>
          </div>
      </div>

  );
}
