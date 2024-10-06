import PropTypes from 'prop-types';

const SortByFilter = ({ sorted, handleSortedBy }) => {
  const sortOptions = [
    "Best Selling", 
    "Alphabetically, a-z", 
    "Price, low to high", 
    "Price, high to low", 
    "Date, old to new", 
    "Date, new to old"
  ];

  const handleSortClick = (option) => {
    handleSortedBy({ target: { value: option } });
  };

  return (
    <div>
      <h2 className="font-semibold">Sorted by</h2>
      <div className="flex flex-col">
        {sortOptions.map(option => (
          <label key={option} className="flex items-center cursor-pointer gap-2">
            <button
              onClick={() => handleSortClick(option)}
              className={`w-4 h-4 border-[1px] border-gray-800 rounded-sm flex items-center justify-center relative`}
              role="checkbox"
              aria-checked={sorted.includes(option)}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault(); // Prevent default action
                  handleSortClick(option);
                }
              }}
              aria-label={`Sort by ${option}`}
            >
              <div className={`w-auto h-auto ${sorted.includes(option) ? 'bg-[#4d015a]' : 'bg-transparent'} absolute inset-0 m-[2px]`} />
            </button>
            <span className="text-gray-700">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

// Define prop types for better type safety and documentation
SortByFilter.propTypes = {
  sorted: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleSortedBy: PropTypes.func.isRequired,
};

export default SortByFilter;
