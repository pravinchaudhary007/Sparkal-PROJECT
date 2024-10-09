import Checkbox from "./Checkbox"; 

// eslint-disable-next-line react/prop-types
const AvailabilityFilter = ({ inStock, outOfStock, setInStock, setOutOfStock, inStockCount, outOfStockCount }) => {
    return (
        <div>
            <h2 className="font-semibold">Availability</h2>
            <div className="flex flex-col md:text-base text-sm gap-1">
                {/* In Stock Checkbox */}
                <Checkbox 
                    id="inStock" 
                    label={`In Stock (${inStockCount})`} 
                    isChecked={inStock} 
                    onChange={() => setInStock((prev) => !prev)} 
                />
                
                {/* Out Of Stock Checkbox */}
                <Checkbox 
                    id="outOfStock" 
                    label={`Out Of Stock (${outOfStockCount})`} 
                    isChecked={outOfStock} 
                    onChange={() => setOutOfStock((prev) => !prev)} 
                />
            </div>
        </div>
    );
};

export default AvailabilityFilter;
