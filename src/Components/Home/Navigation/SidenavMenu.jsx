import { NavLink, useNavigate } from "react-router-dom";
import logo from '../../assets/logo.png';
import { FaUserCircle } from "react-icons/fa";
import { IoExitOutline } from "react-icons/io5";
import React from "react";

const SidenavMenu = () => {
  const navigate = useNavigate();
  
  const NavItems = ['product', 'shop', 'sale', 'blog'];

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const handleExit = () => {
    navigate('/');
  };

  return (
    <div className="h-screen select-none p-8 w-auto block md:hidden">

      {/* Logo and Exit */}

      <div className="relative">
        <div className="flex justify-between items-center">
          <NavLink to='/'>
            <img src={logo} alt="Logo Image" className="h-20 w-auto" />
          </NavLink>
          <IoExitOutline onClick={handleExit} className="h-6 w-6 cursor-pointer checked:opacity-50 drop-shadow-lg" />
        </div>
      </div>

      {/* Links Navbar */}

      <ul className='flex flex-col'>
        {NavItems.map((item, index) => (
          <React.Fragment key={index}>
            <li>
              <NavLink 
                to={`/${item}`} 
                className={`${index > 0 ? 'hover:rounded-md hover:bg-[#dbd2b7] active:bg-[#dbd2b7]' : 'rounded-md bg-[#dbd2b7]'} px-4 block p-2`}
              >
                {capitalizeFirstLetter(item)}
              </NavLink>
            </li>
            {index < NavItems.length  && <hr className="h-[2px] bg-gray-300 my-2" />}
          </React.Fragment>
        ))}
      </ul>

      {/* Use icon & Account */}

      <div className="absolute left-8 bottom-8 flex justify-center items-center">
        <FaUserCircle className="h-6 w-6" />
       <NavLink to='/account' > <h2 className="py-1 px-2 text-lg">Account</h2></NavLink>
      </div>
    </div>
  );
};

export default SidenavMenu;
