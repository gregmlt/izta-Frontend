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

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      const startPage = Math.max(1, currentPage - 4);
      const endPage = Math.min(totalPages, currentPage + 5);
      const hasLeftSpill = startPage > 2;
      const hasRightSpill = endPage < totalPages - 1;
      const spillOffset = maxPagesToShow - (endPage - startPage + 1);

      if (hasLeftSpill && !hasRightSpill) {
        const extraPages = Array.from(
          { length: spillOffset },
          (_, i) => startPage - spillOffset + i
        );
        pageNumbers.push(
          ...extraPages,
          ...Array.from(
            { length: endPage - startPage + 1 },
            (_, i) => startPage + i
          )
        );
      } else if (!hasLeftSpill && hasRightSpill) {
        const extraPages = Array.from(
          { length: spillOffset },
          (_, i) => endPage + i + 1
        );
        pageNumbers.push(
          ...Array.from(
            { length: endPage - startPage + 1 },
            (_, i) => startPage + i
          ),
          ...extraPages
        );
      } else {
        pageNumbers.push(
          ...Array.from(
            { length: endPage - startPage + 1 },
            (_, i) => startPage + i
          )
        );
      }

      if (startPage > 2) {
        pageNumbers.unshift("...");
      }
      if (endPage < totalPages - 1) {
        pageNumbers.push("...");
      }
      if (startPage !== 1) {
        pageNumbers.unshift(1);
      }
      if (endPage !== totalPages) {
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers;
  };

  return (
    <div className="h-[1400px]  flex flex-col ">
      <div
        ref={paginatedItemsRef}
        className="relative h-full overflow-hidden flex-grow "
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
          <button className="w-[70px] ml-3 text-black font-bold rounded focus:outline-none focus:shadow-outline">
            Previous
          </button>
        </div>
        <div className="flex space-x-2">
          {renderPageNumbers().map((page, index) => (
            <button
              key={index}
              onClick={() => {
                if (page !== "...") {
                  handlePageClick(page);
                  scrollToTop();
                }
              }}
              className={`py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                currentPage === page ? "bg-[#E28A69] text-black" : "text-black"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
        <div
          onClick={() => {
            handleNextPage();
            scrollToTop();
          }}
          disabled={currentPage === totalPages}
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
