import PropTypes from 'prop-types';

const ProductTypeFilter = ({ selectedTypes, handleProducttype }) => {
  const productTypes = [
    "Rings", 
    "Earrings", 
    "Chains", 
    "Necklaces", 
    "Toe Rings", 
    "Bangles & Bracelets"
  ];

  const handleTypeClick = (type) => {
    handleProducttype({ target: { value: type } });
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
              onKeyPress={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleTypeClick(type);
                }
              }}
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

// Define prop types for better type safety and documentation
ProductTypeFilter.propTypes = {
  selectedTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleProducttype: PropTypes.func.isRequired,
};

export default ProductTypeFilter;
