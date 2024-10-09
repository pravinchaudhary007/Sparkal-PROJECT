import { useState } from "react";
import { useFilterContext } from "../FilterContext/FilterContext";
import Header from "../../../Home/Navigation/Header";
import Navbar from "../../../Home/Navigation/Navbar";
import { FaCaretDown } from "react-icons/fa";
import Card from "./Card";
import useProducts from "../ProductContext/UseProducts";
import Footer from "../../../Home/Footer/Footer";
import Copyright from "../../../Home/Footer/Copyright";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import Filtertoggle from "./Filtertoggle";
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import SidenavMenu from "../../../Home/Navigation/SidenavMenu";

const Productlisting = () => {
  const { selectedGender, setSelectedGender, inStock, outOfStock ,price} = useFilterContext();
  const [menu, setMenu] = useState(false);
  const [filterDrawer, setFilterDrawer] = useState(false); // Drawer state for filter menu
  const { products } = useProducts(); // Fetch all products
  const [isDropdownOpen, setDropdownOpen] = useState(false); // State for gender dropdown

  const genderOptions = [
    { value: 'all', label: 'All' },
    { value: 'men', label: 'Men' },
    { value: 'women', label: 'Women' },
    { value: 'baby&kids', label: 'Baby & Kids' },
  ];

  // Handle gender selection from dropdown
  const handleOptionSelect = (value) => {
    setSelectedGender(value);
    setDropdownOpen(false);
  };

  // Toggle state for the main menu (on mobile view)
  const toggleMenu = () => {
    setMenu((prevMenu) => !prevMenu);
  };

  // Toggle filter drawer (on mobile view)
  const toggleFilterDrawer = () => {
    setFilterDrawer((prev) => !prev);
  };

  const filteredProducts = products.filter((product) => {
    // Apply gender filter
    const genderFilter = selectedGender === "all" || product.gender === selectedGender;
  
    // Apply in-stock/out-of-stock filter (if selected)
    const stockFilter = (inStock && product.stock === "in stock") || 
                        (outOfStock && product.stock === "out of stock") || 
                        (!inStock && !outOfStock); // If neither is selected, all products are allowed.
  
    const priceFilter = !price ? product.price <= price : product.price >= price ; 

  

    return genderFilter && stockFilter && priceFilter;
  });
  
  
 
  const DrawerList = (
    <Box sx={{ width: '250px' }} role="presentation">
      <SidenavMenu />
    </Box>
  );

  return (
    <>
      <header>
        <Header />
        <div className="sm:block hidden">
          <Navbar />
        </div>
      </header>

      <main className="lg:px-14 md:px-8 sm:py-8 py-4 bg-[#f4f4f4] flex select-none h-auto items-stretch lg:gap-8 md:gap-4 p-4 sm:pt-4 pt-0 ">
        <div className="lg:w-[33%] sm:block hidden md:w-[44%] sm:w-[50%] w-full p-4 md:pt-3 sm:pt-3 pt-1 relative">
          <Filtertoggle className="absolute" />
        </div>

        <section className="lg:w-full md:w-full sm:w-full w-full select-none sm:p-2 px-0 ">
          <div className="flex lg:text-lg md:text-base sm:py-0 py-2 justify-between items-center">
            <div className="font-semibold">
              <span className="sm:hidden flex gap-3">
                <HiOutlineMenuAlt2 onClick={toggleMenu} className="h-6 w-6" aria-label="Toggle menu" />
                Products
              </span>
            </div>
            <div className="relative flex justify-center items-center gap-3 text-center">
              {/* Gender dropdown */}
              <button
                onClick={() => setDropdownOpen((prev) => !prev)}
                className="w-full text-center bg-[#4d015a] text-white rounded focus:outline-none"
              >
                <div className="flex justify-center px-2 select-auto py-0 items-center gap-2">
                  {genderOptions.find(option => option.value === selectedGender)?.label}
                  <FaCaretDown className={`h-4 w-4 transform transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`} />
                </div>
              </button>

              {isDropdownOpen && (
                <div className="absolute select-auto sm:right-0 right-10 sm:text-base text-sm top-8 sm:w-32 w-28 shadow-lg bg-white drop-shadow-md p-1 rounded-sm z-10">
                  {genderOptions.map(option => (
                    <div
                      key={option.value}
                      onClick={() => handleOptionSelect(option.value)}
                      className={`m-1 p-0 rounded-sm cursor-pointer ${selectedGender === option.value ? 'bg-[#4d015a] text-white' : 'hover:bg-[#4d015a] hover:text-white'}`}
                    >
                      {option.label}
                    </div>
                  ))}
                </div>
              )}
              <div
                onClick={toggleFilterDrawer}
                className="font-medium text-sm border-[#4d015a] border-[2px] text-[#4d015a] px-2 rounded-[3px] sm:hidden block cursor-pointer"
              >
                Filter
              </div>
            </div>
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-2 lg:h-[1090px] md:h-[1024px] sm:h-[820px] h-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 sm:gap-4 gap-2 sm:mt-4 mt-2 overflow-y-scroll scroll-smooth scrollbar-hidden">
            {filteredProducts.length === 0 ? (
              <div className="col-span-full text-center text-gray-500">No products available for the selected filters.</div>
            ) : (
              filteredProducts.map((product) => (
                <Card key={product.id} product={product} />
              ))
            )}
          </div>

          {/* Filter Drawer (on mobile) */}
          <Drawer anchor="left" open={filterDrawer} onClose={toggleFilterDrawer}>
            <Box sx={{ width: 250 }}>
              <Filtertoggle />
            </Box>
          </Drawer>

          {/* Main Menu Drawer (on mobile) */}
          <Drawer anchor="right" open={menu} onClose={toggleMenu}>
            {DrawerList}
          </Drawer>
        </section>
      </main>

      <footer>
        <Footer />
        <Copyright />
      </footer>
    </>
  );
};

export default Productlisting;
