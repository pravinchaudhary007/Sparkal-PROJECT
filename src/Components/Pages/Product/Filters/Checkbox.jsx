
// eslint-disable-next-line react/prop-types
const Checkbox = ({ id, label, isChecked, onChange }) => {
    return (
      <label className="flex items-center cursor-pointer gap-2" htmlFor={id}>
        <div
          id={id}
          onClick={onChange}
          className={`w-4 h-4 border-[1px] rounded-[4px] border-gray-800 flex items-center justify-center relative`}
          role="checkbox"
          aria-checked={isChecked}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onChange(); 
            }
          }}
          aria-label={`Toggle ${label} Availability`}
        >
          <div
            className={`w-auto h-auto ${
              isChecked ? "bg-[#4d015a]" : "bg-transparent"
            } absolute rounded-[4px] inset-0 scale-75`}
          />
        </div>
        <span className="text-gray-700 md:text-base text-sm gap-1">{label}</span>
      </label>
    );
  };
  
  export default Checkbox;
  