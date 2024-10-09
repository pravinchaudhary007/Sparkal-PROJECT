import AvailabilityFilter from "../Filters/AvailabilityFilter";
import FilterHorizontal from "../Filters/FilterHorizontal";
import PriceFilter from "../Filters/PriceFilter";
import ProductTypeFilter from "../Filters/ProductTypeFilter";
import SortedFilter from "../Filters/StoredFilter";
import StyleFilter from "../Filters/StyleFilter";
import { useFilterContext } from "../FilterContext/FilterContext";

const Filtertoggle = () => {
  const {
    sorted, setSorted, style, setStyle, selectedTypes, setSelectedTypes,
    inStock, setInStock, outOfStock, setOutOfStock, price, setPrice, maxPrice,
    handleClearFilters,outOfStockCount,inStockCount
  } = useFilterContext();


  // Handling changes for each filter
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
    <section className="w-full sm:p-0 p-4 sm:mt-0 mt-8">
      {/* Filters Header */}
      <div className="flex lg:text-lg md:text-base justify-between items-center">
        <div className="font-semibold">Filters</div>
        <button onClick={handleClearFilters} className="">Clear</button>
      </div>

      {/* Filter Divider */}
      <FilterHorizontal className='h-[1px]' />

      {/* Availability Filter */}
      <AvailabilityFilter
       inStockCount={inStockCount}
       outOfStockCount={outOfStockCount}
        inStock={inStock}
        outOfStock={outOfStock}
        setInStock={setInStock}
        setOutOfStock={setOutOfStock}
      />

      {/* Filter Divider */}
      <FilterHorizontal className='h-[1px]' />

      {/* Price Filter */}
      <PriceFilter
        price={price}
        handlePriceChange={(e) => setPrice(parseInt(e.target.value))} // Assuming setPrice is available
        maxPrice={maxPrice}
      />

      {/* Filter Divider */}
      <FilterHorizontal className='h-[1px]' />

      {/* Product Type Filter */}
      <ProductTypeFilter
        selectedTypes={selectedTypes}
        handleProductTypeChange={handleProductTypeChange}
      />

      {/* Filter Divider */}
      <FilterHorizontal />

      {/* Style Filter */}
      <StyleFilter
        style={style}
        handleStyle={handleStyleChange}
      />

      {/* Filter Divider */}
      <FilterHorizontal className='h-[1px]' />

      {/* Sorted Filter */}
      <SortedFilter
        sorted={sorted}
        handleSortedBy={handleSortedBy}
      />
    </section>
  );
};

export default Filtertoggle;
