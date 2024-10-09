import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './Index';
import GotoTop from './Components/Home/Gotop/GotoTop';
import Shop from './Components/Pages/Shop/Shop';
import Sale from './Components/Pages/Sale/Sale';
import Blog from './Components/Pages/Blog/Blog';
import { useEffect, useState } from 'react';
import Cart from './Components/Pages/Shop/Cart/Cart';
import WatchlistProducts from './Components/Pages/Product/Product/WatchlistProducts';
import Account from './Components/Pages/Account/Account';
import Products from "./Components/Pages/Product/Product/ProductsListing";
import SidenavMenu from './Components/Home/Navigation/SidenavMenu';
import Filtertoggle from './Components/Pages/Product/Product/Filtertoggle';
import NetworkError from './error/NetworkError';
import Error404 from './error/Error404';
import ScrollToTop from './Components/Home/Gotop/ScrollToTop'; 

const App = () => {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  useEffect(() => {
    const updateOnlineStatus = () => {
      setIsOffline(!navigator.onLine);
    };

    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);

    return () => {
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus);
    };
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      {isOffline ? (
        <NetworkError />
      ) : (
        <>
          <main className="scrollbar-responsive">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/menu" element={<SidenavMenu />} />
              <Route path="/product" element={<Products />} />
              <Route path="/filter" element={<Filtertoggle />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/sale" element={<Sale />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/like" element={<WatchlistProducts />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/account" element={<Account />} />
              <Route path="/*" element={<Error404 />} />
            </Routes>
          </main>
          <GotoTop />
        </>
      )}
    </BrowserRouter>
  );
};

export default App;
