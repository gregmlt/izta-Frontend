import React, { useState, useEffect } from "react";
import ArrowLeftSVGIcons from "./iconsSVG/ArrowLeftSVGIcons";
import ClapSVGIcons from "./iconsSVG/ClapSVGIcons";
import LinkedinSVGIcons from "./iconsSVG/LinkedinSVGIcons";
import { useSelector } from "react-redux";

function KudosListModal({ close }) {
  const token = useSelector((state) => state.users.value.token);
  const [jsx, setJsx] = useState(null);

  function capitalizeFirstLetter(string) {
    if (!string) return ""; // Handle empty or null strings
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const handleKudos = () => {
    fetch(`http://localhost:3000/users/get/kudos/${token}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          setJsx(
            data.kudos.map((kudo) => {
              return (
                <div className="p-5 flex justify-between border-b-2 mb-2">
                  <p className="text-[20px] font-semibold">{`${capitalizeFirstLetter(
                    kudo.lastname
                  )} ${capitalizeFirstLetter(kudo.firstname)}`}</p>
                  <div>
                    <LinkedinSVGIcons color="#004E89" />
                  </div>
                </div>
              );
            })
          );
        }
      });
  };

  useEffect(() => {
    handleKudos();
  }, []);

  return (
    <div>
      <p className="text-3xl font-medium mb-5">Mes kudos reçus</p>
      <div className="shadow-lg">
        <div
          onClick={close}
          className="flex justify-between items-center border-b-2 p-5 mb-[100px]"
        >
          <ArrowLeftSVGIcons />
          <div className="flex justify-between">
            <ClapSVGIcons />
            <p className="ml-3 text-[#004E89]">Mes kudos reçus</p>
          </div>
        </div>
        {jsx}
      </div>
    </div>
  );
}

export default KudosListModal;
