// hooks/useProducts.js

import { useEffect, useMemo, useState } from "react";
import ring from '../../../assets/watch2.png'; // Update the path according to your project structure

const useProducts = () => {
  const defaultProducts = useMemo(() => [
    { id: 1, image: ring, title: "Product 1", price: 29.99, rating: 4.5, category: 'jewelry', style: 'modern', gender: 'women' },
    { id: 2, image: ring, title: "Product 2", price: 19.99, rating: 4.0, category: 'jewelry', style: 'classic', gender: 'men' },
    { id: 3, image: ring, title: "Product 3", price: 39.99, rating: 3.5, category: 'jewelry', style: 'vintage', gender: 'women' },
    { id: 4, image: ring, title: "Product 4", price: 49.99, rating: 4.8, category: 'jewelry', style: 'modern', gender: 'men' },
    { id: 5, image: ring, title: "Product 5", price: 59.99, rating: 5.0, category: 'jewelry', style: 'classic', gender: 'women' },
    { id: 6, image: ring, title: "Product 6", price: 15.99, rating: 3.0, category: 'accessories', style: 'modern', gender: 'baby&kids' },
    { id: 7, image: ring, title: "Product 7", price: 12.99, rating: 2.8, category: 'accessories', style: 'vintage', gender: 'men' },
    { id: 8, image: ring, title: "Product 8", price: 79.99, rating: 4.7, category: 'jewelry', style: 'modern', gender: 'women' },
    { id: 9, image: ring, title: "Product 9", price: 9.99, rating: 2.0, category: 'accessories', style: 'classic', gender: 'men' },
    { id: 10, image: ring, title: "Product 10", price: 25.99, rating: 3.8, category: 'jewelry', style: 'vintage', gender: 'baby&kids' }
  ], []);

  // Function to get stored products from local storage or fallback to default products
  const getStoredProducts = () => {
    const savedProducts = localStorage.getItem("products");
    if (savedProducts) {
      try {
        const parsedProducts = JSON.parse(savedProducts);
        if (Array.isArray(parsedProducts) && parsedProducts.length > 0) {
          return parsedProducts; // Return parsed products if it's a valid array and not empty
        }
      } catch (error) {
        console.error("Error parsing stored products:", error);
      }
    }
    return defaultProducts; // Return default if nothing is stored or parsing fails
  };

  const [products, setProducts] = useState(getStoredProducts());

  // Effect to initialize local storage if it's empty
  useEffect(() => {
    const savedProducts = localStorage.getItem("products");
    if (!savedProducts) {
      localStorage.setItem("products", JSON.stringify(defaultProducts));
      setProducts(defaultProducts); // Set products to default as well
    }
  }, [defaultProducts]);

  // Effect to update local storage whenever products change
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  return { products, setProducts };
};

export default useProducts;
