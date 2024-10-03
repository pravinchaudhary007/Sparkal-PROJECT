import { NavLink } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="flex select-none items-center justify-center  min-h-screen bg-gold p-4 text-black">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">404</h1>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl">Page Error</p>
        <p className="mt-2 mb-5 text-base sm:text-lg md:text-xl">Oops! The page you are looking for does not exist.</p>
        <NavLink 
          to="/" 
          className="mt-4 px-4 sm:px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition duration-300"
        >
          Go Home
        </NavLink>
      </div>
    </div>
  );
};

export default NotFoundPage;
