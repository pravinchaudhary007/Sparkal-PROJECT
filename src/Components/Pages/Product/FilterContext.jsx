import { createContext, useContext, useState, useEffect } from 'react';
import ring from '../../assets/watch2.png';
import watch from '../../assets/watch.png';
import Accessories2 from '../../assets/Accessories2.png';
import Accessories from  '../../assets/Accessories.png'


// Create the filter context
const FilterContext = createContext();

// Utility function for getting data from localStorage
const getFromLocalStorage = (key, defaultValue) => {
  const savedValue = localStorage.getItem(key);
  try {
    return savedValue ? JSON.parse(savedValue) : defaultValue;
  } catch (error) {
    console.error(`Error parsing ${key} from localStorage`, error);
    return defaultValue;
  }
};

// Utility function for setting data to localStorage
const setToLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error saving ${key} to localStorage`, error);
  }
};

// Default product list for the demo
const defaultProducts = [
  { id: 1, image: ring, title: "Product 1", price: 29.99, rating: 4.5, category: 'jewelry', style: 'modern', gender: 'women', stock: 'in stock' },
  { id: 2, image: watch, title: "Product 2", price: 19.99, rating: 4.0, category: 'jewelry', style: 'classic', gender: 'men', stock: 'out of stock' },
  { id: 3, image: Accessories, title: "Product 3", price: 39.99, rating: 3.5, category: 'jewelry', style: 'vintage', gender: 'women', stock: 'in stock' },
  { id: 4, image: watch, title: "Product 4", price: 49.99, rating: 4.8, category: 'jewelry', style: 'modern', gender: 'men', stock: 'in stock' },
  { id: 5, image: ring, title: "Product 5", price: 59.99, rating: 5.0, category: 'jewelry', style: 'classic', gender: 'women', stock: 'out of stock' },
  { id: 6, image: Accessories, title: "Product 6", price: 15.99, rating: 3.0, category: 'accessories', style: 'modern', gender: 'baby&kids', stock: 'in stock' },
  { id: 7, image: watch, title: "Product 7", price: 12.99, rating: 2.8, category: 'accessories', style: 'vintage', gender: 'men', stock: 'out of stock' },
  { id: 8, image: Accessories2, title: "Product 8", price: 79.99, rating: 4.7, category: 'jewelry', style: 'modern', gender: 'women', stock: 'in stock' },
  { id: 9, image: Accessories, title: "Product 9", price: 9.99, rating: 2.0, category: 'accessories', style: 'classic', gender: 'men', stock: 'out of stock' },
  { id: 10, image: Accessories2, title: "Product 10", price: 25.99, rating: 3.8, category: 'jewelry', style: 'vintage', gender: 'baby&kids', stock: 'in stock' }
];

// eslint-disable-next-line react/prop-types
export const FilterProvider = ({ children }) => {
  const maxPrice = 100000;

  // State management for products and filters
  const [products, setProducts] = useState(getFromLocalStorage('products', defaultProducts));
  const [sorted, setSorted] = useState(getFromLocalStorage('StoredSorted', []));
  const [style, setStyle] = useState(getFromLocalStorage('storedStyle', []));
  const [selectedTypes, setSelectedTypes] = useState(getFromLocalStorage('selectedProductTypes', []));
  const [inStock, setInStock] = useState(getFromLocalStorage('inStock', true));
  const [outOfStock, setOutOfStock] = useState(getFromLocalStorage('outOfStock', false));
  const [price, setPrice] = useState(getFromLocalStorage('selectedPrice', 1000));
  const [selectedGender, setSelectedGender] = useState('all');

  // Sync state with localStorage when any filters or products change
  useEffect(() => {
    setToLocalStorage('products', products);
    setToLocalStorage('StoredSorted', sorted);
    setToLocalStorage('storedStyle', style);
    setToLocalStorage('selectedProductTypes', selectedTypes);
    setToLocalStorage('inStock', inStock);
    setToLocalStorage('outOfStock', outOfStock);
    setToLocalStorage('selectedPrice', price);
  }, [products, sorted, style, selectedTypes, inStock, outOfStock, price]);

  // Clear all filters to default state
  const handleClearFilters = () => {
    setSelectedTypes([]);
    setInStock(true);
    setOutOfStock(false);
    setPrice(1000);
    setStyle([]);
    setSorted([]);
    setSelectedGender('all');  // Reset gender filter as well
  };

  // Provide filter state and control functions to children
  return (
    <FilterContext.Provider value={{
      sorted, setSorted, style, setStyle, selectedTypes, setSelectedTypes,
      inStock, setInStock, outOfStock, setOutOfStock, price, setPrice, maxPrice,
      products, setProducts, selectedGender, setSelectedGender, handleClearFilters
    }}>
      {children}
    </FilterContext.Provider>
  );
};

// Custom hook for using filter context
export const useFilterContext = () => useContext(FilterContext);
