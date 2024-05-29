import React, { useEffect, useState } from "react";
import CompagniesMiniCard from "./CompagniesMiniCard";
import { useSelector } from "react-redux";

export default function CompaniesLikedContainer() {
  const [companiesLikedList, setCompaniesLikedList] = useState([]);
  const token = useSelector((state) => state.users.value.token);

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await fetch(
        `http://localhost:3000/users/infos/${token}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        const userData = response.json();
        setCompaniesLikedList(userData.data.likedCompanies);
      } else {
        console.error("Erreur des données utilisateur");
      }

      if (token) {
        fetchUserData();
      }
    };
  }, [token]);

  return (
    <>
      <div className="flex flex-col w-full h-[auto] bg-white py-4 px-3 ">
        <p className="text-3xl font-medium">Mes entreprises likées</p>
        {companiesLikedList.length > 0 ? (
          <>
            <p className="mt-4 w-[85%] mb-10">
              Voici les entreprises que vous avez ajoutées à vos favoris.
            </p>
            {companiesLikedList.map((company, index) => (
              <CompagniesMiniCard
                key={index}
                companyName={company.companyName}
                companyId={company._id}
              />
            ))}
          </>
        ) : (
          <p>Vous n'avez pas d'entreprises likées</p>
        )}
      </div>
    </>
  );
}
