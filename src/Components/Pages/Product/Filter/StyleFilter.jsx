import PropTypes from 'prop-types';

const StyleFilter = ({ style, handlestyle }) => {
  const styles = ["None", "Office", "Party", "Wedding", "Traditional", "Everyday"];

  const handleStyleClick = (styleType) => {
    handlestyle({ target: { value: styleType } });
  };

  return (
    <div>
      <h2 className="font-semibold">Style</h2>
      <div className="flex flex-col">
        {styles.map(type => (
          <label key={type} className="flex items-center cursor-pointer gap-2">
            <button
              onClick={() => handleStyleClick(type)}
              className={`w-4 h-4 border-[1px] border-gray-800 rounded-sm flex items-center justify-center relative`}
              role="checkbox"
              aria-checked={style.includes(type)}
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleStyleClick(type);
                }
              }}
            >
              <div className={`w-auto h-auto ${style.includes(type) ? 'bg-[#4d015a]' : 'bg-transparent'} absolute inset-0 m-[2px]`} />
            </button>
            <span className="text-gray-700">{type}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

// Define prop types for better type safety and documentation
StyleFilter.propTypes = {
  style: PropTypes.arrayOf(PropTypes.string).isRequired,
  handlestyle: PropTypes.func.isRequired,
};

export default StyleFilter;
