// eslint-disable-next-line react/prop-types
const AvailabilityFilter = ({ inStock, outOfStock, setInStock, setOutOfStock }) => {
  return (
    <div>
      <h2 className="font-semibold">Availability</h2>
      <div className="flex flex-col">
        {/* In Stock Checkbox */}
        <label className="flex items-center cursor-pointer gap-2" htmlFor="inStock">
          <div
            id="inStock"
            onClick={() => setInStock((prev) => !prev)}
            className={`w-4 h-4 border-[1px] border-gray-800 rounded-sm flex items-center justify-center relative`}
            role="checkbox"
            aria-checked={inStock}
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault(); // Prevent default action for space key
                setInStock((prev) => !prev);
              }
            }}
            aria-label="Toggle In Stock Availability"
          >
            <div className={`w-auto h-auto ${inStock ? 'bg-[#4d015a]' : 'bg-transparent'} absolute inset-0 m-[2px]`} />
          </div>
          <span className="text-gray-700">In Stock</span>
        </label>

        {/* Out Of Stock Checkbox */}
        <label className="flex items-center cursor-pointer gap-2" htmlFor="outOfStock">
          <div
            id="outOfStock"
            onClick={() => setOutOfStock((prev) => !prev)}
            className={`w-4 h-4 border-[1px] border-gray-800 rounded-sm flex items-center justify-center relative`}
            role="checkbox"
            aria-checked={outOfStock}
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault(); 
                setOutOfStock((prev) => !prev);
              }
            }}
            aria-label="Toggle Out Of Stock Availability"
          >
            <div className={`w-auto h-auto ${outOfStock ? 'bg-[#4d015a]' : 'bg-transparent'} absolute inset-0 m-[2px]`} />
          </div>
          <span className="text-gray-700">Out Of Stock</span>
        </label>
      </div>
    </div>
  );
};

export default AvailabilityFilter;
