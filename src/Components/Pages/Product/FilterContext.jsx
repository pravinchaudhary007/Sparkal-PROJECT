import { createContext, useContext, useState, useEffect } from 'react';

const FilterContext = createContext();

// eslint-disable-next-line react/prop-types
export const FilterProvider = ({ children }) => {
  const maxPrice = 1000;

  const [sorted, setSorted] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('StoredSorted')) || [];
    } catch (error) {
      console.error("Error parsing StoredSorted from localStorage", error);
      return [];
    }
  });

  const [style, setStyle] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('storedStyle')) || [];
    } catch (error) {
      console.error("Error parsing storedStyle from localStorage", error);
      return [];
    }
  });

  const [selectedTypes, setSelectedTypes] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('selectedProductTypes')) || [];
    } catch (error) {
      console.error("Error parsing selectedProductTypes from localStorage", error);
      return [];
    }
  });

  const [inStock, setInStock] = useState(() => {
    const savedInStock = localStorage.getItem('inStock');
    return savedInStock === 'true'; // Explicitly convert to boolean
  });
  
  const [outOfStock, setOutOfStock] = useState(() => {
    const savedOutOfStock = localStorage.getItem('outOfStock');
    return savedOutOfStock === 'true'; // Explicitly convert to boolean
  });

  const [price, setPrice] = useState(() => {
    const savedPrice = localStorage.getItem('selectedPrice');
    return savedPrice ? parseInt(savedPrice, 10) : 70; // Explicit radix parameter
  });

  const [selectedGender, setSelectedGender] = useState('all');

  useEffect(() => {
    localStorage.setItem('inStock', inStock);
    localStorage.setItem('outOfStock', outOfStock);
    localStorage.setItem('selectedPrice', price);
    localStorage.setItem('selectedProductTypes', JSON.stringify(selectedTypes));
    localStorage.setItem('storedStyle', JSON.stringify(style));
    localStorage.setItem('StoredSorted', JSON.stringify(sorted));
  }, [inStock, outOfStock, price, selectedTypes, style, sorted]);

  const handleClearFilters = () => {
    setSelectedTypes([]);
    setInStock(false);
    setOutOfStock(false);
    setPrice(70);
    setStyle([]);
    setSorted([]);

    localStorage.removeItem('StoredSorted');
    localStorage.removeItem('storedStyle');
    localStorage.removeItem('selectedProductTypes');
    localStorage.removeItem('selectedPrice');
    localStorage.removeItem('inStock');
    localStorage.removeItem('outOfStock');
  };

  return (
    <FilterContext.Provider value={{
      sorted,
      setSorted,
      style,
      setStyle,
      selectedTypes,
      setSelectedTypes,
      inStock,
      setInStock,
      outOfStock,
      setOutOfStock,
      price,
      setPrice,
      maxPrice,
      selectedGender,
      setSelectedGender,
      handleClearFilters,
    }}>
      {children}
    </FilterContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useFilterContext = () => useContext(FilterContext);
