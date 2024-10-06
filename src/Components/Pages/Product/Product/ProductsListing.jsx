import { useMemo, useState } from "react";
import { useFilterContext } from "../FilterContext";
import Header from "../../../Home/Navigation/Header";
import Navbar from "../../../Home/Navigation/Navbar";
import { FaCaretDown } from "react-icons/fa";
import FilterHorizontal from "../Filter/FilterHorizontal";
import AvailabilityFilter from "../Filter/AvailabilityFilter";
import PriceFilter from "../Filter/PriceFilter";
import ProductTypeFilter from "../Filter/ProductTypeFilter";
import StyleFilter from "../Filter/StyleFilter";
import SortedFilter from "../Filter/StoredFilter"; 
import Card from "./Card";
import useProducts from "./UseProducts";

const Productlisting = () => {
  const {
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
    handleClearFilters
  } = useFilterContext();

  const { products } = useProducts(); 

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

  // Memoized filtered products based on selected filters
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const isInStock = inStock && product.price > 0;
      const isOutOfStock = outOfStock && product.price <= 0;
      const isPriceInRange = product.price <= price && product.price <= maxPrice;
      const isStyleMatch = style.length === 0 || style.includes(product.style);
      const isTypeMatch = selectedTypes.length === 0 || selectedTypes.includes(product.category);
      const isGenderMatch = selectedGender === 'all' || product.gender === selectedGender; 

      return (
        (inStock ? isInStock : true) &&
        (outOfStock ? isOutOfStock : true) &&
        isPriceInRange &&
        isStyleMatch &&
        isTypeMatch &&
        isGenderMatch 
      );
    });
  }, [products, inStock, outOfStock, price, maxPrice, style, selectedTypes, selectedGender]); 


  const handleProductTypeChange = (e) => {
    const type = e.target.value;
    setSelectedTypes(prevSelected => {
      if (prevSelected.includes(type)) {
        return prevSelected.filter(item => item !== type);
      } else {
        return [...prevSelected, type];
      }
    });
  };

  const handleSortedBy = (e) => {
    const option = e.target.value;
    setSorted(prevSorted => {
      if (prevSorted.includes(option)) {
        return prevSorted.filter(item => item !== option); // Remove option if already selected
      } else {
        return [...prevSorted, option]; // Add option if not already selected
      }
    });
  };

  const handleStyleChange = (e) => {
    const selectedStyle = e.target.value;
    setStyle((prevStyles) => {
      if (prevStyles.includes(selectedStyle)) {
        return prevStyles.filter((style) => style !== selectedStyle); // Deselect style
      } else {
        return [...prevStyles, selectedStyle]; // Select new style
      }
    });
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
            handleProductTypeChange={handleProductTypeChange}
          />
          <FilterHorizontal />
          <StyleFilter
            style={style}
            handleStyle={handleStyleChange}
          />
          <FilterHorizontal />
          <SortedFilter
            sorted={sorted}
            handleSortedBy={handleSortedBy}
          />
        </section>

        <section className="lg:w-full p-2">
          <div className="flex justify-between items-center">
            <div className="font-semibold">Products</div>
            <div className="relative text-center">
              <button
                onClick={() => setDropdownOpen((prev) => !prev)}
                className="w-full text-center bg-[#4d015a] text-white rounded focus:outline-none"
              >
                <div className="flex justify-center px-2 py-1 items-center gap-2">
                  {options.find(option => option.value === selectedGender)?.label}
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

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-4">
            {filteredProducts.map(product => (
              <Card key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Productlisting;
