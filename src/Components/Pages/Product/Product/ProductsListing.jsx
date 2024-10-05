import { useFilterContext } from "../FilterContext"
import Header from "../../../Home/Navigation/Header";
import Navbar from "../../../Home/Navigation/Navbar";
import { FaCaretDown } from "react-icons/fa";
import FilterHorizontal from "../Filter/FilterHorizontal";
import AvailabilityFilter from "../Filter/AvailabilityFilter";
import PriceFilter from "../Filter/PriceFilter";
import ProductTypeFilter from "../Filter/ProductTypeFilter";
import StyleFilter from "../Filter/StyleFilter";
import SortedFilter from "../Filter/StoredFilter";
import { useState } from "react";

const Products = () => {

  const {
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
    handleClearFilters
  } = useFilterContext();

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const options = [
    { value: 'all', label: 'All' },
    { value: 'men', label: 'Men' },
    { value: 'women', label: 'Women' },
    { value: 'baby&kids', label: 'Baby & Kids' },
  ];

  const handleOptionSelect = (value) => {
    setSelectedGender(value);
    setDropdownOpen(false);
  };

  return (
    <>
      <header>
        <Header />
        <Navbar />
      </header>

      <main className="px-16 py-8 flex select-none h-auto items-stretch gap-8 p-4">

        <section className="lg:w-[33%] p-4">
          <div className="flex justify-between items-center">
            <div className="font-semibold">Filters</div>
            <button onClick={handleClearFilters} className="">Clear</button>
          </div>
          <FilterHorizontal />
          <AvailabilityFilter 
            inStock={inStock} 
            outOfStock={outOfStock} 
            setInStock={setInStock} 
            setOutOfStock={setOutOfStock} 
          />
          <FilterHorizontal />
          <PriceFilter 
            price={price} 
            handlePriceChange={(e) => setPrice(parseInt(e.target.value))} 
            maxPrice={maxPrice} 
          />
          <FilterHorizontal />
          <ProductTypeFilter 
            selectedTypes={selectedTypes} 
            handleProducttype={(e) => {
              const value = e.target.value;
              setSelectedTypes((prev) => 
                prev.includes(value) ? prev.filter((type) => type !== value) : [...prev, value]
              );
            }}  
          />
          <FilterHorizontal />
          <StyleFilter 
            style={style} 
            handlestyle={(e) => {
              const value = e.target.value;
              setstyle((prev) => 
                prev.includes(value) ? prev.filter((type) => type !== value) : [...prev, value]
              );
            }}  
          />
          <FilterHorizontal />
          <SortedFilter 
            Sorted={Sorted} 
            handlesortedBy={(e) => {
              const value = e.target.value;
              setSorted((prev) =>
                prev.includes(value) ? prev.filter((type) => type !== value) : [...prev, value]
              );
            }} 
          />
          <FilterHorizontal />
        </section>

     
        <section className="lg:w-full p-2">
          <div className="flex justify-between items-center">

             {/* product title and dropdown  */}

            <div className="font-semibold">Products</div>
            <div className="relative text-center">
              <button
                onClick={() => setDropdownOpen((prev) => !prev)}
                className={`w-full text-center bg-[#4d015a] text-white rounded focus:outline-none`}
              >
                <div className="flex justify-center px-2 py-1 items-center gap-2">
                  {options.find(option => option.value === selectedGender).label}
                  <FaCaretDown className={`h-4 w-4 transform transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`} />
                </div>
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 w-32 shadow-lg bg-white drop-shadow-md p-1 rounded-sm z-10">
                  {options.map(option => (
                    <div
                      key={option.value}
                      onClick={() => handleOptionSelect(option.value)}
                      className={`m-1 rounded-sm cursor-pointer ${selectedGender === option.value ? 'bg-[#4d015a] text-white' : 'hover:bg-[#4d015a] hover:text-white'}`}
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
