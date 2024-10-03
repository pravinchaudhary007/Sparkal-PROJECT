import { BsHandbagFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { TbEyeFilled } from "react-icons/tb";

    // eslint-disable-next-line react/prop-types
    const Iconprice = ({title,price}) => {
    return (
        <div className="flex items-center justify-center">
            <div className="flex items-center bg-[#4d015a] shadow-md drop-shadow-md  p-1">
                <ul className="grid justify-center items-center md:gap-2 gap-1  md:p-1 p-[1px]">
                    <li><BsHandbagFill className="lg:h-5 lg:w-5 md:h-4 md:w-4 h-3 w-3 text-white " /></li>
                    <li><FaHeart className="lg:h-5 lg:w-5 md:h-4 md:w-4 h-3 w-3 text-white" /></li>
                    <li><TbEyeFilled className="lg:h-5 lg:w-5 md:h-4 md:w-4 h-3 w-3 text-white" /></li>
                </ul>
            </div>
            <div className="text-center bg-white lg:p-5 md:p-4 sm:p-3 py-3 lg:w-48 md:w-40 sm:w-32 w-20 drop-shadow-md shadow-md ">
                <p className="font-medium  lg:text-base md:text-sm sm:text-xs text-[7pt]">{title}</p>
                <p className="lg:text-lg md:text-base sm:text-xs text-[7pt] font-semibold">{price}</p>
            </div>
        </div>
    );
};

export default Iconprice;
