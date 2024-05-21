import React, { useState } from 'react';
import { useTransition, animated } from '@react-spring/web';

const PaginatedBlocks = ({ items }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
  
    // Calculer les index des éléments actuels
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
  
    // Calculer le nombre de pages
    const totalPages = Math.ceil(items.length / itemsPerPage);
  
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
      from: { opacity: 0, transform: 'translateX(100%)' },
      enter: { opacity: 1, transform: 'translateX(0%)' },
      leave: { opacity: 0, transform: 'translateX(-100%)' },
      config: { duration: 300 }
    });
  
    return (
      <div className="p-4 h-[1400px] flex flex-col">
      <div className="relative h-full overflow-hidden flex-grow">
        {transitions((style, item) => (
          <animated.div
            key={item}
            style={style}
            className="absolute top-0 left-0 w-full h-full"
          >
          
            <div className="flex flex-col w-full h-full">
              {items
                .slice((item - 1) * itemsPerPage, item * itemsPerPage)
                .map((item, index) => (
                  <div key={index} className="p-2">
                    {item}
                  </div>
                ))}
            </div>
          </animated.div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Previous
        </button>
        <div className="flex space-x-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => handlePageClick(i + 1)}
              className={`py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                currentPage === i + 1 ? 'bg-blue-700 text-white' : 'bg-[#E28A69] hover:bg-blue-700 text-white'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Next
        </button>
      </div>
    </div>
    );
};

export default PaginatedBlocks;
