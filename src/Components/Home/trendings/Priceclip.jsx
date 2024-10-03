
// eslint-disable-next-line react/prop-types
const Priceclip = ({ title, price,pricedesh }) => {


    return (
        <div className="text-center bg-white border-l-4 border-[#4d015a] lg:p-5 md:p-4 sm:p-3 py-3 lg:w-60 md:w-52 sm:w-44 w-28 shadow-md drop-shadow-md ">
            <p className="font-medium lg:text-base md:text-sm sm:text-xs text-[7pt]">{title}</p>
            <p className="lg:text-lg md:text-base sm:text-xs text-[7pt] font-semibold"><span className="line-through text-[#7b7979] pr-3">{pricedesh}</span>{price}</p>
        </div>
    )
}

export default Priceclip