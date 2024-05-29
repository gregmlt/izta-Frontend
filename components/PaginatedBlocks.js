import React, { useState, useRef } from "react";
import { useTransition, animated } from "@react-spring/web";
import ChevronRightSVGIcons from "./iconsSVG/ChevronRightSVGIcons";
import ChevronLeftSVGIcons from "./iconsSVG/ChevronLeftSVGIcons";

const PaginatedBlocks = ({ items }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // Calculer les index des éléments actuels
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items && items.slice(indexOfFirstItem, indexOfLastItem);

  // Calculer le nombre de pages
  const totalPages = items && Math.ceil(items.length / itemsPerPage);
  const paginatedItemsRef = useRef(null);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const transitions = useTransition(currentPage, {
    from: { opacity: 0, transform: "translateX(100%)" },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: { opacity: 0, transform: "translateX(-100%)" },
    config: { duration: 0 },
  });

  const scrollToTop = () => {
    paginatedItemsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="h-[1400px] flex flex-col ">
      <div
        ref={paginatedItemsRef}
        className="relative h-full overflow-hidden flex-grow"
      >
        {transitions((style, item) => (
          <animated.div
            key={item}
            style={style}
            className="absolute top-0 left-0 w-full h-full"
          >
            <div className="flex w-full h-full">
              {items
                .slice((item - 1) * itemsPerPage, item * itemsPerPage)
                .map((item, index) => (
                  <div key={index} className="p-4 ">
                    {item}
                    {item}
                  </div>
                ))}
            </div>
          </animated.div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-4">
        <div
          onClick={() => {
            handlePreviousPage();
            scrollToTop();
          }}
          disabled={currentPage === 1}
          className="flex items-center"
        >
          <ChevronLeftSVGIcons />
          <button className="w-[70px] ml-3 text-black font-bold  rounded focus:outline-none focus:shadow-outline">
            Previous
          </button>
        </div>
        <div className="flex space-x-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => {
                handlePageClick(i + 1);
                scrollToTop();
              }}
              className={`py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                currentPage === i + 1 ? "bg-[#E28A69] text-black" : "text-black"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
        <div
          onClick={() => {
            handleNextPage();
            scrollToTop();
          }}
          disabled={currentPage === 1}
          className="flex items-end"
        >
          <button className="w-[70px] text-black font-bold  rounded focus:outline-none focus:shadow-outline">
            Next
          </button>
          <ChevronRightSVGIcons />
        </div>
      </div>
    </div>
  );
};

export default PaginatedBlocks;
