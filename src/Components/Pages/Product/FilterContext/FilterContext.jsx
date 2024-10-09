import { createContext, useContext, useState, useEffect } from 'react';
import ring from '../../../assets/watch2.png';
import watch from '../../../assets/watch.png';
import Accessories2 from '../../../assets/Accessories2.png';
import Accessories from '../../../assets/Accessories.png';

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
  { id: 1, image: Accessories, title: "Gold Ring", price: 29999, rating: 4.5, category: 'jewelry', style: 'modern', gender: 'women', stock: 'in stock' },
    { id: 2, image: watch, title: "Silver Earrings", price: 21999, rating: 4.0, category: 'jewelry', style: 'classic', gender: 'men', stock: 'out of stock' },
    { id: 3, image: Accessories2, title: "Diamond Necklace", price: 59999, rating: 4.8, category: 'jewelry', style: 'vintage', gender: 'women', stock: 'in stock' },
    { id: 4, image: watch, title: "Silver Bracelet", price: 39999, rating: 5.0, category: 'jewelry', style: 'modern', gender: 'men', stock: 'in stock' },
    { id: 5, image: ring, title: "Toe Ring", price: 24999, rating: 3.5, category: 'jewelry', style: 'classic', gender: 'women', stock: 'out of stock' },
    { id: 6, image: Accessories, title: "Gold Chain", price: 45999, rating: 4.2, category: 'jewelry', style: 'modern', gender: 'women', stock: 'in stock' },
    { id: 7, image: watch, title: "Silver Bangle", price: 32999, rating: 4.7, category: 'jewelry', style: 'vintage', gender: 'men', stock: 'out of stock' },
    { id: 8, image: ring, title: "Pendant", price: 37999, rating: 4.6, category: 'jewelry', style: 'modern', gender: 'women', stock: 'in stock' },
    { id: 9, image: Accessories2, title: "Beaded Anklet", price: 22999, rating: 3.8, category: 'jewelry', style: 'classic', gender: 'baby&kids', stock: 'in stock' },
    { id: 10, image: Accessories2, title: "Gold Anklet", price: 54999, rating: 5.0, category: 'jewelry', style: 'modern', gender: 'women', stock: 'in stock' },
    { id: 11, image: watch, title: "Wedding Ring", price: 99999, rating: 5.0, category: 'jewelry', style: 'classic', gender: 'men', stock: 'in stock' },
    { id: 12, image: Accessories2, title: "Gemstone Necklace", price: 84999, rating: 4.9, category: 'jewelry', style: 'vintage', gender: 'women', stock: 'out of stock' },
    { id: 13, image: Accessories, title: "Silver Chain", price: 29999, rating: 4.3, category: 'jewelry', style: 'modern', gender: 'women', stock: 'in stock' },
    { id: 14, image: ring, title: "Gold Earrings", price: 69999, rating: 4.9, category: 'jewelry', style: 'classic', gender: 'women', stock: 'in stock' },
    { id: 15, image: watch, title: "Platinum Ring", price: 120000, rating: 5.0, category: 'jewelry', style: 'modern', gender: 'men', stock: 'in stock' },
    { id: 16, image: Accessories2, title: "Diamond Bracelet", price: 110000, rating: 4.9, category: 'jewelry', style: 'classic', gender: 'women', stock: 'out of stock' },
    { id: 17, image: Accessories, title: "Charm Necklace", price: 62999, rating: 4.5, category: 'jewelry', style: 'vintage', gender: 'women', stock: 'in stock' },
    { id: 18, image: Accessories, title: "Beaded Bracelet", price: 21999, rating: 3.9, category: 'jewelry', style: 'modern', gender: 'baby&kids', stock: 'in stock' },
    { id: 19, image: Accessories, title: "Pearl Earrings", price: 79999, rating: 4.8, category: 'jewelry', style: 'classic', gender: 'women', stock: 'out of stock' },
    { id: 20, image: Accessories2, title: "Silver Anklet", price: 42999, rating: 4.0, category: 'jewelry', style: 'modern', gender: 'women', stock: 'in stock' }
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

  
  const inStockCount = products.filter(product => product.stock === "in stock").length;
  const outOfStockCount = products.filter(product => product.stock === "out of stock").length;

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
      products, setProducts, selectedGender, setSelectedGender, handleClearFilters ,inStockCount,outOfStockCount
    }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);  // Fixed by adding 'return'
};
