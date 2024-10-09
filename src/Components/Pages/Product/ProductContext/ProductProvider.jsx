/* eslint-disable react/prop-types */
import { createContext, useState, useEffect, useMemo, useContext } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({ children, initialProducts = [] }) => {
    const getInitialLikes = () => {
        try {
            const savedLikes = localStorage.getItem("likes");
            return savedLikes ? JSON.parse(savedLikes) : {};
        } catch (error) {
            console.error("Error retrieving likes from localStorage:", error);
            return {};
        }
    };

    const getInitialProducts = () => {
        try {
            const savedProducts = localStorage.getItem("products");
            return savedProducts ? JSON.parse(savedProducts) : initialProducts;
        } catch (error) {
            console.error("Error retrieving products from localStorage:", error);
            return initialProducts;
        }
    };

    const [likes, setLikes] = useState(getInitialLikes());
    const [products, setProducts] = useState(getInitialProducts());
    const [filteredProducts, setFilteredProducts] = useState(products);

    // Sync likes with localStorage
    useEffect(() => {
        localStorage.setItem("likes", JSON.stringify(likes));
    }, [likes]);

    // Sync products with localStorage and update filteredProducts
    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(products));
        setFilteredProducts(products);
    }, [products]);

    const toggleLike = (id) => {
        setLikes((prevLikes) => {
            const updatedLikes = { ...prevLikes, [id]: !prevLikes[id] }; // Toggle like status
            localStorage.setItem("likes", JSON.stringify(updatedLikes)); // Save updated likes to localStorage
            return updatedLikes;
        });
    };

    const filterProducts = (criteria) => {
        if (!criteria) {
            setFilteredProducts(products); // Reset to all products if no criteria
            return;
        }
        const filtered = products.filter((product) =>
            product.title.toLowerCase().includes(criteria.toLowerCase())
        );
        setFilteredProducts(filtered);
    };

    const likedProducts = useMemo(() => {
        return products.filter((product) => likes[product.id]);
    }, [products, likes]);

    return (
        <ProductContext.Provider value={{ 
            setProducts, 
            filteredProducts, 
            toggleLike, 
            likes, 
            filterProducts, 
            likedProducts 
        }}>
            {children}
        </ProductContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useProducts = () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error('useProducts must be used within a ProductProvider');
    }
    return context;
};
