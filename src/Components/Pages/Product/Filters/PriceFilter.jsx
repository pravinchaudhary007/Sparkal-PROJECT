
import '../../../CSS/product.css';

// eslint-disable-next-line react/prop-types
const PriceFilter = ({ price, handlePriceChange, maxPrice }) => {
 
  const minPrice = 1000;

  return (
    <div>
      <h2 className="font-semibold">Price</h2>
      <div className="w-full">
        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          value={price}
          onChange={handlePriceChange}
          className="w-full shadow-lg py-1 range-input h-1 drop-shadow-md border-gray-800 rounded-lg appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, #4A006E 0%, #4A006E ${(price - minPrice) / (maxPrice - minPrice) * 100}%, #fff ${(price - minPrice) / (maxPrice - minPrice) * 100}%, gray 100%)`,
          }}
          aria-label="Price range"
        />
        <div className=" md:text-base text-sm flex gap-1 text-gray-700 justify-between">
          <span>₹{minPrice} (Min)</span>
          <span>(Max) ₹{price}</span>
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;
