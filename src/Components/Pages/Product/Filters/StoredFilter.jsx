import Checkbox from './Checkbox'; // Adjust the import based on your file structure

// eslint-disable-next-line react/prop-types
const SortedFilter = ({ sorted, handleSortedBy }) => {
  const sortOptions = [
    "Best Selling", 
    "Alphabetically, a-z", 
    "Price, low to high", 
    "Price, high to low", 
    "Date, old to new", 
    "Date, new to old"
  ];

  const handleSortChange = (option) => {
    handleSortedBy({ target: { value: option } });
  };

  return (
    <div>
      <h2 className="font-semibold">Sorted by</h2>
      <div className="flex md:text-base text-sm gap-1 flex-col">
        {sortOptions.map(option => (
          <div key={option} className="flex items-center cursor-pointer gap-2">
            <Checkbox
              id={option}
              label={option}
              // eslint-disable-next-line react/prop-types
              isChecked={sorted.includes(option)}
              onChange={() => handleSortChange(option)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SortedFilter;
