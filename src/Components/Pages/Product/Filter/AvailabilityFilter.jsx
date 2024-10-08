import Checkbox from "./Checkbox"; 

// eslint-disable-next-line react/prop-types
const AvailabilityFilter = ({ inStock, outOfStock, setInStock, setOutOfStock }) => {
    return (
        <div>
            <h2 className="font-semibold">Availability</h2>
            <div className="flex flex-col md:text-base text-sm gap-1">
                <Checkbox 
                    id="inStock" 
                    label={`In Stock (${length})`} 
                    isChecked={inStock} 
                    onChange={() => setInStock((prev) => !prev)} 
                />
                
                {/* Out Of Stock Checkbox */}
                <Checkbox 
                    id="outOfStock" 
                    label={`Out Of Stock (${length})`} 
                    isChecked={outOfStock} 
                    onChange={() => setOutOfStock((prev) => !prev)} 
                />
            </div>
        </div>
    );
};

export default AvailabilityFilter;
