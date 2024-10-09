import Checkbox from './Checkbox'; // Adjust the import based on your file structure

// eslint-disable-next-line react/prop-types
const StyleFilter = ({ style, handleStyle }) => {
  const styles = ["None", "Office", "Party", "Wedding", "Traditional", "Everyday"];

  const handleStyleChange = (styleType) => {
    handleStyle({ target: { value: styleType } });
  };

  return (
    <div>
      <h2 className="font-semibold">Style</h2>
      <div className="flex text-sm md:text-base gap-1 flex-col">
        {styles.map(type => (
          <div key={type} className="flex items-center cursor-pointer gap-2">
            <Checkbox
              id={type}
              label={type}
              // eslint-disable-next-line react/prop-types
              isChecked={style.includes(type)}
              onChange={() => handleStyleChange(type)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StyleFilter;
