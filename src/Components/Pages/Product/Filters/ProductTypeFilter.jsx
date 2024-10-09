import Checkbox from './Checkbox'; // Adjust the import according to your file structure

// eslint-disable-next-line react/prop-types
const ProductTypeFilter = ({ selectedTypes, handleProductTypeChange }) => {
  const productTypes = [
    "Rings",
    "Earrings",
    "Chains",
    "Necklaces",
    "Toe Rings",
    "Bangles & Bracelets"
  ];

  const handleTypeChange = (type) => {
    handleProductTypeChange({ target: { value: type } });
  };

  return (
    <div>
      <h2 className="font-semibold">Product Type</h2>
      <div className="flex md:text-base text-sm gap-1 flex-col">
        {productTypes.map((type) => (
          <div key={type} className="flex items-center cursor-pointer gap-2">
            <Checkbox
              id={type}
              label={type}
              // eslint-disable-next-line react/prop-types
              isChecked={selectedTypes.includes(type)}
              onChange={() => handleTypeChange(type)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductTypeFilter;
