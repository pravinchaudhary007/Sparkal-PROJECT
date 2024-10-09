import { useProducts } from "../ProductContext/ProductProvider.jsx";
import Card from "./Card.jsx";
import Header from "../../../Home/Navigation/Header.jsx";
import Navbar from "../../../Home/Navigation/Navbar.jsx";
import { NavLink } from "react-router-dom";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import SidenavMenu from "../../../Home/Navigation/SidenavMenu.jsx";
import { Box, Drawer } from "@mui/material";
import { useState } from "react";

const WatchlistProducts = () => {
  const { likedProducts } = useProducts();
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu((prevMenu) => !prevMenu);
  };

  const DrawerList = (
    <Box sx={{ width: "250px" }} role="presentation">
      <SidenavMenu />
    </Box>
  );

  if (likedProducts.length === 0) {
    return (
      <>
        <Header />
        <Navbar />
        <div className="sm:hidden block font-semibold">
          <span className="flex gap-3">
            <HiOutlineMenuAlt2
              onClick={toggleMenu}
              className="h-6 w-6"
              aria-label="Toggle menu"
            />
            <p>Products</p>
          </span>
        </div>
        <div className="min-h-screen flex justify-center items-center">
          <p className="font-bold text-4xl">
            No liked products found.
            <NavLink to={"/product"} className="text-orange-500">
              {" "}
              Add now{" "}
            </NavLink>
          </p>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="md:block hidden">
      <Navbar />
      </div>
      <section className="grid justify-center items-center">
        <div className="lg:mx-8 lg:px-8 md:mx-7 md:px-6 sm:mx-4 sm:px-4 mx-4 px-4 font-semibold flex items-center gap-3  md:py-6 py-4">
          <span className="flex gap-3">
            <HiOutlineMenuAlt2
              onClick={toggleMenu}
              className="sm:h-6  sm:w-6 h-5 w=5 md:hidden"
              aria-label="Toggle menu"
            />
            <p className="font-semibold md:text-xl sm:text-base  text-sm">Watchlist</p>
          </span>
        </div>
        <div className="md:p-4 sm:p-0 p-2 bg-transparent min-h-screen">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {likedProducts.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </div>
        </div>
        <Drawer anchor={"right"} open={menu} onClose={toggleMenu}>
          {DrawerList}
        </Drawer>
      </section>
    </>
  );
};

export default WatchlistProducts;
