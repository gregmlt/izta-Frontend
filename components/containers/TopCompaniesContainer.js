import React, { useEffect, useState } from "react";
import TopCompanieModal from "../TopCompaniesModal";
import ButtonWithUnderline from "../ButtonWithUnderline";
import PrimaryButton from "../PrimaryButton";
import { useSocket } from "../../pages/SocketProvider";
import Router from "next/router";

function TopCompaniesContainer() {
  const [activeSet, setActiveSet] = useState(1);
  const socket = useSocket();
  const [topRatedCompanies, setTopRatedCompanies] = useState([]);
  const [error, setError] = useState(null);
 

  const dataSet1 = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Modal 1 - Set 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor pretium libero nec faucibus.",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1603201667141-5a2d4c673378?q=80&w=1796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Modal 2 - Set 1",
      description:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1471039497385-b6d6ba609f9c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Modal 3 - Set 1",
      description:
        "Nulla facilisi. Cras aliquet ex ac purus fermentum, sit amet sollicitudin nibh gravida.",
    },
  ];

  // const dataSet2 = [
  //   {
  //     imageSrc:
  //       "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     title: "Modal 1 - Set 2",
  //     description:
  //       "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
  //   },
  //   {
  //     imageSrc:
  //       "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     title: "Modal 2 - Set 2",
  //     description:
  //       "Aliquam erat volutpat. Phasellus at lacus nec nisi gravida euismod.",
  //   },
  //   {
  //     imageSrc:
  //       "https://images.unsplash.com/photo-1657664042448-c955b411d9d0?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     title: "Modal 3 - Set 2",
  //     description:
  //       "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  //   },
  // ];

  // useEffect( async () => {
  //   const topRatedCompanies = await fetch("http://localhost:3000/top-rating");
  //   setData(companies)

  // }, [])

  const fetchTopRatedCompanies = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/companies/top-rating"
      );
      const data = await response.json();

      if (data.result) {
        setTopRatedCompanies(data.data);
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError("Erreur lors de la récupération des entreprises");
    }
  };

  useEffect(() => {
    fetchTopRatedCompanies();
  }, []);

  const defaultImage = 
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  

  

  const renderModals = (data) => {
    return data
      .slice(0, 3)
      .map((item, index) => (
        <TopCompanieModal
          key={item["_id"]}
          imageSrc={item.companyLogo || defaultImage}
          title={item.companyName}
          description={item.description}
          companyId={item["_id"]}
        />
      ));
  };

 


  const handleDiscover = () => {
    socket.emit("searchDiscover");
    Router.push("/results");
  };

  return (
    <div className="text-balance py-[70px] w-full">
      <h1 className="w-full flex justify-center text-4xl md:text-4xl leading-6 font-bold text-[#003761] py-6 ">
        Découvrez les meilleures entreprises
      </h1>
      <div className="flex flex-col items-center">
        <div className="mb-4 flex flex-col md:flex-row">
          {/* <ButtonWithUnderline
            onClick={() => setActiveSet(1)}
            text="Entreprises de ma région"
            underlineColor="bg-[#003761]"
            type="button"
            className="mb-2 md:mb-0 md:mr-4" // Ajout de marge droite en mode desktop
          /> */}
          {/* <ButtonWithUnderline
            onClick={() => setActiveSet(2)}
            text="Entreprises notées par IZTA"
            underlineColor="bg-[#003761]"
            type="button"
            className="mb-2 md:mb-0 md:ml-4" // Ajout de marge gauche en mode desktop
          /> */}
        </div>
        <div className="flex w-[70%] justify-between items-center ">
          {renderModals(topRatedCompanies)}
        </div>
      </div>
      <div className="flex justify-center my-10">
        <PrimaryButton
          text="Découvrir d'autres entreprises"
          bgColor="bg-[#003761]"
          hoverColor="hover:bg-[#5488b0]"
          clickFunc={handleDiscover}
        />
      </div>
    </div>
  );
}

export default TopCompaniesContainer;
