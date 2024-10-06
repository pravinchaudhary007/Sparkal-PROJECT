import PropTypes from 'prop-types';

const ProductTypeFilter = ({ selectedTypes, handleProductTypeChange }) => {
  const productTypes = [
    "Rings", 
    "Earrings", 
    "Chains", 
    "Necklaces", 
    "Toe Rings", 
    "Bangles & Bracelets"
  ];

  const handleTypeClick = (type) => {
    handleProductTypeChange({ target: { value: type } });
  };

  return (
    <div>
      <h2 className="font-semibold">Product Type</h2>
      <div className="flex flex-col">
        {productTypes.map(type => (
          <label key={type} className="flex items-center cursor-pointer gap-2">
            <button
              onClick={() => handleTypeClick(type)}
              className={`w-4 h-4 border-[1px] border-gray-800 rounded-sm flex items-center justify-center relative`}
              role="checkbox"
              aria-checked={selectedTypes.includes(type)}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault(); // Prevent default action
                  handleTypeClick(type);
                }
              }}
              aria-label={`Select ${type}`}
            >
              <div className={`w-auto h-auto ${selectedTypes.includes(type) ? 'bg-[#4d015a]' : 'bg-transparent'} absolute inset-0 m-[2px]`} />
            </button>
            <span className="text-gray-700">{type}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

ProductTypeFilter.propTypes = {
  selectedTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleProductTypeChange: PropTypes.func.isRequired,
};

export default ProductTypeFilter;
