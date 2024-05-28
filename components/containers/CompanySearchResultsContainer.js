import React from "react";
import ContactContainer from "./ContactContainer";
import CompanySearchResultsModal from "../CompanySearchResultsModal";
import PaginatedBlocks from "../PaginatedBlocks";
import FiltersBlock from "../FiltersBlock";
import Navbar from "../Navbar";
import { useEffect } from "react";
import { useSocket } from "../../pages/SocketProvider";

const blocks = [
  <CompanySearchResultsModal />,
  <CompanySearchResultsModal />,
  <CompanySearchResultsModal />,
  <CompanySearchResultsModal />,
  <CompanySearchResultsModal />,
  <CompanySearchResultsModal />,
  <CompanySearchResultsModal />,
  <CompanySearchResultsModal />,
  <CompanySearchResultsModal />,
  <CompanySearchResultsModal />,
  <CompanySearchResultsModal />,
  <CompanySearchResultsModal />,
  <CompanySearchResultsModal />,
  <CompanySearchResultsModal />,
  <CompanySearchResultsModal />,
  <CompanySearchResultsModal />,
];

function CompanySearchResultsContainer() {
  const socket = useSocket();
  useEffect(() => {
    socket &&
      socket.on("searchResults", (data) => {
        console.log(data);
      });

    return () => {
      socket && socket.off("searchResults");
    };
  }, [socket]);

  return (
    <div>
      <div className=" w-full h-[600px] bg-[linear-gradient(to_left_bottom,rgba(206,100,38,0.7),rgba(16,34,93,1))]">
        <Navbar />
        <div className="w-full flex justify-center pt-8">
          <FiltersBlock />
        </div>
      </div>
      <div className="px-[130px]">
        <div className="flex justify-between items-center my-10">
          <div className="flex w-[6%] justify-between">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
              />
            </svg>
          </div>
          <div className="w-[25%] flex flex-col items-end">
            <p className="font-semibold">Nombre d’entreprises trouvées</p>
            <div className="flex justify-end items-center">
              <p className="mr-2 text-sm">Classement des résultats</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                />
              </svg>
            </div>
          </div>
        </div>
        <PaginatedBlocks items={blocks} />

        {/* <CompanySearchResultsModal />
        <CompanySearchResultsModal />
        <CompanySearchResultsModal />
        <CompanySearchResultsModal /> */}
      </div>
      <ContactContainer />
    </div>
  );
}

export default CompanySearchResultsContainer;
