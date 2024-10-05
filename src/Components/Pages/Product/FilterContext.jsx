
import { createContext, useContext, useState, useEffect } from 'react';

const FilterContext = createContext();

// eslint-disable-next-line react/prop-types
export const FilterProvider = ({ children }) => {
  const maxPrice = 1000;

  const [Sorted, setSorted] = useState(() => JSON.parse(localStorage.getItem('StoredSorted')) || []);
  const [style, setstyle] = useState(() => JSON.parse(localStorage.getItem('storedStyle')) || []);
  const [selectedTypes, setSelectedTypes] = useState(() => JSON.parse(localStorage.getItem('selectedProductTypes')) || []);
  const [inStock, setInStock] = useState(() => localStorage.getItem('inStock') === 'true');
  const [outOfStock, setOutOfStock] = useState(() => localStorage.getItem('outOfStock') === 'true');
  const [price, setPrice] = useState(() => {
    const savedPrice = localStorage.getItem('selectedPrice');
    return savedPrice ? parseInt(savedPrice) : 70;
  });
  const [selectedGender, setSelectedGender] = useState('all');

  useEffect(() => {
    localStorage.setItem('inStock', inStock);
    localStorage.setItem('outOfStock', outOfStock);
    localStorage.setItem('selectedPrice', price);
    localStorage.setItem('selectedProductTypes', JSON.stringify(selectedTypes));
    localStorage.setItem('storedStyle', JSON.stringify(style));
    localStorage.setItem('StoredSorted', JSON.stringify(Sorted));
  }, [inStock, outOfStock, price, selectedTypes, style, Sorted]);

  const handleClearFilters = () => {
    setSelectedTypes([]);
    setInStock(false);
    setOutOfStock(false);
    setPrice(70);
    setstyle([]);
    setSorted([]);

    localStorage.clear();
  };

  return (
    <FilterContext.Provider value={{
      Sorted,
      setSorted,
      style,
      setstyle,
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
