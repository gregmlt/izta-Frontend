import React, { createContext, useContext, useState } from 'react';

// Créer le contexte
const SearchResultsContext = createContext();

// Fournir le contexte
export const SearchResultsProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <SearchResultsContext.Provider value={{ searchResults, setSearchResults }}>
      {children}
    </SearchResultsContext.Provider>
  );
};

// Hook pour utiliser le contexte
export const useSearchResults = () => useContext(SearchResultsContext);
