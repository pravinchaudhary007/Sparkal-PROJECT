// Import necessary modules and context
import { useFilterContext } from "../FilterContext"
import AvailabilityFilter from "../Filter/AvailabilityFilter";
import FilterHorizontal from "../Filter/FilterHorizontal";
import PriceFilter from "../Filter/PriceFilter";
import ProductTypeFilter from "../Filter/ProductTypeFilter";
import StyleFilter from "../Filter/StyleFilter";
import SortedFilter from "../Filter/SortedFilter";

const RenderFilters = () => {
  // Get filter context values
  const {
    inStock,
    outOfStock,
    setInStock,
    setOutOfStock,
    price,
    setPrice,
    maxPrice,
    selectedTypes,
    setSelectedTypes,
    style,
    setstyle,
    Sorted,
    setSorted,
  } = useFilterContext(); // Destructure all necessary states and functions

  const handlePriceChange = (e) => {
    setPrice(parseInt(e.target.value));
  };

  const handleProductType = (event) => {
    const value = event.target.value;
    setSelectedTypes((prevProductType) =>
      prevProductType.includes(value)
        ? prevProductType.filter((type) => type !== value)
        : [...prevProductType, value]
    );
  };

  const handleStyleChange = (event) => {
    const value = event.target.value;
    setstyle((prevStyle) =>
      prevStyle.includes(value)
        ? prevStyle.filter((type) => type !== value)
        : [...prevStyle, value]
    );
  };

  const handleSortedBy = (event) => {
    const value = event.target.value;
    setSorted((prevSorted) =>
      prevSorted.includes(value)
        ? prevSorted.filter((type) => type !== value)
        : [...prevSorted, value]
    );
  };

  return (
    <>
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
        handlePriceChange={handlePriceChange} 
        maxPrice={maxPrice} 
      />
      <FilterHorizontal />
      <ProductTypeFilter 
        selectedTypes={selectedTypes} 
        handleProducttype={handleProductType}  
      />
      <FilterHorizontal />
      <StyleFilter 
        style={style} 
        handlestyle={handleStyleChange}  
      />
      <FilterHorizontal />
      <SortedFilter 
        Sorted={Sorted} 
        handlesortedBy={handleSortedBy} 
      />
      <FilterHorizontal />
    </>
  );
};

export default RenderFilters;
