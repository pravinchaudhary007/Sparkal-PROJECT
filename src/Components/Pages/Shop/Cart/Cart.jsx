import { NavLink } from "react-router-dom";

const Cart = () => {
  return (
    <div className="flex select-none items-center justify-center h-auto min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-8">
          Coming Soon
        </h1>
        <NavLink 
          to="/" 
          className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition duration-300"
        >
          Go Home
        </NavLink>
      </div>
    </div>
  );
};

export default Cart;
