
import PropTypes from "prop-types";

const Checkbox = ({ id, label, checked, onChange }) => {
    return (
        <label className="flex items-center cursor-pointer gap-2" htmlFor={id}>
            <div
                id={id}
                onClick={onChange}
                className={`w-4 h-4 border-[1px] border-gray-800 rounded-sm flex items-center justify-center relative`}
                role="checkbox"
                aria-checked={checked}
                tabIndex={0}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        onChange();
                    }
                }}
                aria-label={`Toggle ${label} Availability`}
            >
                <div className={`w-auto h-auto ${checked ? 'bg-[#4d015a]' : 'bg-transparent'} absolute inset-0 m-[2px]`} />
            </div>
            <span className="text-gray-700">{label}</span>
        </label>
    );
};

Checkbox.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
};

const AvailabilityFilter = ({ inStock, outOfStock, setInStock, setOutOfStock }) => {
    return (
        <div>
            <h2 className="font-semibold">Availability</h2>
            <div className="flex flex-col">
                {/* In Stock Checkbox */}
                <Checkbox 
                    id="inStock" 
                    label="In Stock" 
                    checked={inStock} 
                    onChange={() => setInStock((prev) => !prev)} 
                />
                
                {/* Out Of Stock Checkbox */}
                <Checkbox 
                    id="outOfStock" 
                    label="Out Of Stock" 
                    checked={outOfStock} 
                    onChange={() => setOutOfStock((prev) => !prev)} 
                />
            </div>
        </div>
    );
};

AvailabilityFilter.propTypes = {
    inStock: PropTypes.bool.isRequired,
    outOfStock: PropTypes.bool.isRequired,
    setInStock: PropTypes.func.isRequired,
    setOutOfStock: PropTypes.func.isRequired,
};

export default AvailabilityFilter;
