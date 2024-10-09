import { useMemo, useState } from "react";
import ring from '../../../assets/watch2.png';
import watch from '../../../assets/watch.png';
import Accessories2 from '../../../assets/Accessories2.png';
import Accessories from  '../../../assets/Accessories.png';

// Removed unused 'chain' image import

const useProducts = () => {
  // Default products list using useMemo to prevent recreation on each render
  const defaultProducts = useMemo(() => [
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
  ], []);

  // Use state for managing products
  const [products, setProducts] = useState(defaultProducts);

  return { products, setProducts };
};

export default useProducts;
