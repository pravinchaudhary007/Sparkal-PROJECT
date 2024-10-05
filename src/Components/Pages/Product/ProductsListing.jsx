import { useEffect, useState } from "react";
import Header from "../../Home/Navigation/Header";
import Navbar from "../../Home/Navigation/Navbar";
import { FaCaretDown } from "react-icons/fa";
import FilterHorizontal from "./FilterHorizontal";
import '../../CSS/product.css';

const Products = () => {
  const maxPrice = 1000;

  // Load selected product types from localStorage or default to empty array
  const [selectedTypes, setSelectedTypes] = useState(() => {
    const storedTypes = JSON.parse(localStorage.getItem('selectedProductTypes'));
    return storedTypes || []; // Default to empty array if no previous selection
  });

  // Load stock availability from localStorage or default to false
  const [inStock, setInStock] = useState(() => localStorage.getItem('inStock') === 'true');
  const [outOfStock, setOutOfStock] = useState(() => localStorage.getItem('outOfStock') === 'true');

  // Load price from localStorage or default to 70
  const [price, setPrice] = useState(() => {
    const savedPrice = localStorage.getItem('selectedPrice');
    return savedPrice ? parseInt(savedPrice) : 70;
  });

  // State for managing selected gender
  const [selectedGender, setSelectedGender] = useState('all'); // Default to 'all'

  // Dropdown open/close state
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // Store selected product types in localStorage when they change
  useEffect(() => {
    localStorage.setItem('selectedProductTypes', JSON.stringify(selectedTypes));
  }, [selectedTypes]);

  // Store inStock and outOfStock states in localStorage when they change
  useEffect(() => {
    localStorage.setItem('inStock', inStock);
    localStorage.setItem('outOfStock', outOfStock);
  }, [inStock, outOfStock]);

  // Store the selected price in localStorage when it changes
  useEffect(() => {
    localStorage.setItem('selectedPrice', price);
  }, [price]);

  // Handle checkbox changes for product types
  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    setSelectedTypes((prevSelected) =>
      prevSelected.includes(value)
        ? prevSelected.filter((type) => type !== value) // Remove if already selected
        : [...prevSelected, value] // Add if not selected
    );
  };

  // Handle price change
  const handlePriceChange = (e) => {
    setPrice(parseInt(e.target.value));
  };

  // Clear all filters and localStorage
  const handleClearFilters = () => {
    // Reset the state to default values
    setSelectedTypes([]);
    setInStock(false);
    setOutOfStock(false);
    setPrice(70);

  
    localStorage.removeItem('selectedProductTypes');
    localStorage.removeItem('inStock');
    localStorage.removeItem('outOfStock');
    localStorage.removeItem('selectedPrice');
  };

  const options = [
    { value: 'all', label: 'All' },
    { value: 'men', label: 'Men' },
    { value: 'women', label: 'Women' },
    { value: 'baby&kids', label: 'Baby & Kids' },
  ];

  const handleOptionSelect = (value) => {
    setSelectedGender(value); // Update selected gender
    setDropdownOpen(false);   // Close dropdown after selection
  };

  return (
    <>
      <header>
        <Header />
        <Navbar />
      </header>

      <main className="px-16 py-8 flex select-none h-[100vh] items-stretch gap-8 p-4">
        <section className="lg:w-[33%] p-4">
          <div className="flex justify-between items-center">
            <div className="font-semibold">Filters</div>
            {/* Clear button to reset all filters */}
            <button onClick={handleClearFilters} className="">Clear</button>
          </div>

          <FilterHorizontal />

          {/* Availability Section */}
          <div>
            <h2 className="font-semibold">Availability</h2>
            <div className="flex flex-col">
              <label className="flex items-center cursor-pointer gap-2">
                <div
                  onClick={() => setInStock((prev) => !prev)}
                  className={`w-4 h-4 border-[1px] border-gray-800 rounded-sm flex items-center justify-center relative`}
                >
                  <div className={`w-auto h-auto ${inStock ? 'bg-[#4d015a]' : 'bg-transparent'} absolute inset-0 m-[2px]`} />
                </div>
                <span className="text-gray-700">In Stock (740)</span>
              </label>
              <label className="flex items-center cursor-pointer gap-2">
                <div
                  onClick={() => setOutOfStock((prev) => !prev)}
                  className={`w-4 h-4 border-[1px] border-gray-800 rounded-sm flex items-center justify-center relative`}
                >
                  <div className={`w-auto h-auto ${outOfStock ? 'bg-[#4d015a]' : 'bg-transparent'} absolute inset-0 m-[2px]`} />
                </div>
                <span className="text-gray-700">Out Of Stock (117)</span>
              </label>
            </div>
          </div>

          <FilterHorizontal />

          {/* Price Range Section */}
          <div>
            <h2 className="font-semibold">Price</h2>
            <div className="w-full">
              <input
                type="range"
                min="70"
                max={maxPrice}
                value={price}
                onChange={handlePriceChange}
                className="w-full shadow-lg py-1 range-input h-2 drop-shadow-md border-gray-800 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #4A006E 0%, #4A006E ${(price - 70) / (maxPrice - 70) * 100}%, #fff ${(price - 70) / (maxPrice - 70) * 100}%, #fff 100%)`,
                }}
              />
              <div className="flex justify-between">
                <span>₹70</span>
                <span>₹{price}</span>
              </div>
            </div>
          </div>

          <FilterHorizontal />

          {/* Product Type Section */}
          <div>
            <h2 className="font-semibold">Product Type</h2>
            <div className="flex flex-col">
              {["Rings", "Earrings", "Chains", "Necklaces", "Toe Rings", "Bangles & Bracelets"].map((type) => (
                <label key={type} className="flex items-center cursor-pointer gap-2">
                  <div
                    onClick={() => handleCheckboxChange({ target: { value: type } })}
                    className={`w-4 h-4 border-[1px] border-gray-800 rounded-sm flex items-center justify-center relative`}
                  >
                    <div className={`w-auto h-auto ${selectedTypes.includes(type) ? 'bg-[#4d015a]' : 'bg-transparent'} absolute inset-0 m-[2px]`} />
                  </div>
                  <span className="text-gray-700">{type}</span>
                </label>
              ))}
            </div>
          </div>

        </section>

        {/* Product Show Section */}
        <section className="lg:w-full p-2">
          <div className="flex justify-between items-center">
            <div className="font-semibold">Products</div>
            <div className="relative text-center">
              {/* Dropdown button showing selected gender */}
              <button
                onClick={() => setDropdownOpen((prev) => !prev)}
                className={`w-full text-center bg-[#4d015a] text-white rounded p-2 focus:outline-none`}
              >
                <div className="flex justify-center items-center gap-2">
                  {/* Display selected gender label */}
                  {options.find(option => option.value === selectedGender).label}
                  <FaCaretDown className={`h-5 w-4 transform transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`} />
                </div>
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 w-32 mt-1 shadow-lg bg-white drop-shadow-md p-1 rounded-sm z-10">
                  {options.map(option => (
                    <div
                      key={option.value}
                      onClick={() => handleOptionSelect(option.value)}
                      className={`p-2 m-1 rounded-sm cursor-pointer ${selectedGender === option.value ? 'bg-[#4d015a] text-white' : 'hover:bg-[#4d015a] hover:text-white'}`}
                    >
                      {option.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Products;
