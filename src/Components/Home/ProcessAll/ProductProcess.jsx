import { FaTruckFast } from "react-icons/fa6";
import { MdOutlineSettings } from "react-icons/md";
import { FiBox } from "react-icons/fi";
import { FaHandHoldingDollar } from "react-icons/fa6";
import Processcard from "./Processcard";

const ProductProcess = () => {
  const items = [
    {
      id: 1,
      icon: <FaTruckFast className="lg:h-12 lg:w-12 md:h-8 md:w-8 sm:h-8 sm:w-8 h-5 w-5 transform scale-75"/>,
      title: "Free Shipping",
      description: "Free shipping on all US order or order above $80"
    },
    {
      id: 2,
      icon: <MdOutlineSettings className="lg:h-12 lg:w-12  md:h-8 md:w-8 sm:h-8 sm:w-8 h-5 w-5 transform scale-75"/>,
      title: "free delivery",
      description: "Contact us 24 hours a day, 7 days a week"
    },
    {
      id: 3,
      icon: <FiBox className="lg:h-12 lg:w-12 md:h-8 md:w-8 sm:h-8 sm:w-8 h-5 w-5 transform scale-75"/>,
      title: "30 days return",
      description: "Simply return it within 30 days for an exchange."
    },
    {
      id: 4,
      icon: <FaHandHoldingDollar className="lg:h-10 lg:w-10 md:h-8 md:w-8 sm:h-8 sm:w-8 h-5 w-5 transform scale-75"/>,
      title: "80% payment secure",
      description: "We ensure secure payment with PEV"
    }
  ];

  return (
    <div className="bg-blueline w-auto bg-no-repeat bg-center bg-cover lg:p-12 md:p-8 sm:p-4 p-3">
      <div className="lg:p-10 md:p-8 sm:p-6 p-4 grid md:grid-cols-4 grid-cols-2 justify-center md:gap-3 sm:gap-5 gap-3  items-center bg-white drop-shadow-lg shadow-lg">
      {items.map(item => (
        <Processcard
          key={item.id}
          icon={item.icon}
          title={item.title}
          description={item.description}
        />
      ))}
      </div>
    </div>
  );
}

export default ProductProcess;
