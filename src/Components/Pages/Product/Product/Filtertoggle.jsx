import AvailabilityFilter from "../Filter/AvailabilityFilter"
import FilterHorizontal from "../Filter/FilterHorizontal"
import PriceFilter from "../Filter/PriceFilter"
import ProductTypeFilter from "../Filter/ProductTypeFilter"
import SortedFilter from "../Filter/StoredFilter"
import StyleFilter from "../Filter/StyleFilter"
import { useFilterContext } from "../FilterContext"


const Filtertoggle = () => {

    const {
        sorted, setSorted, style, setStyle, selectedTypes, setSelectedTypes,
        inStock, setInStock, outOfStock, setOutOfStock, price, setPrice, maxPrice,
         handleClearFilters
      } = useFilterContext();
    

  
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
    <section className=" w-full sm:p-0 p-4 sm:mt-0 mt-8">
    <div className="flex lg:text-lg   md:text-base justify-between items-center">
      <div className="font-semibold ">Filters</div>
      <button onClick={handleClearFilters} className="">Clear</button>
    </div>
    <FilterHorizontal  className='h-[1px]'/>
    <AvailabilityFilter
      inStock={inStock}
      outOfStock={outOfStock}
      setInStock={setInStock}
      setOutOfStock={setOutOfStock}
    />
    <FilterHorizontal  className='h-[1px]'/>
    <PriceFilter
      price={price}
      handlePriceChange={(e) => setPrice(parseInt(e.target.value))} // Assuming setPrice is available
      maxPrice={maxPrice}
    />
    <FilterHorizontal  className='h-[1px]'/>
    <ProductTypeFilter
      selectedTypes={selectedTypes}
      handleProductTypeChange={handleProductTypeChange}
    />
    <FilterHorizontal />
    <StyleFilter
      style={style}
      handleStyle={handleStyleChange}
    />
    <FilterHorizontal  className='h-[1px]'/>
    <SortedFilter
      sorted={sorted}
      handleSortedBy={handleSortedBy}
    />
          
  </section>
  )
}

export default Filtertoggle