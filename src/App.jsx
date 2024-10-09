import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './Index';
import GotoTop from './Components/Home/Gotop/GotoTop';
import Shop from './Components/Pages/Shop/Shop';
import Sale from './Components/Pages/Sale/Sale';
import Blog from './Components/Pages/Blog/Blog';
import Error404 from './Components/error/Error404';
import { useEffect, useState } from 'react';
import NetworkError from './Components/error/NetworkError'
import Cart from './Components/Pages/Shop/Cart/Cart';
import Like from './Components/Pages/Product/Product/LikedProducts';
import Account from './Components/Pages/Account/Account';
import Products from "./Components/Pages/Product/Product/ProductsListing"
import SidenavMenu from './Components/Home/Navigation/SidenavMenu';
import Filtertoggle from './Components/Pages/Product/Product/Filtertoggle';

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
      <main className='scrollbar-responsive'>
        <Routes>
          <Route path="/" element={isOffline ? <NetworkError /> : <Index />} />
          <Route path='/menu' element={<SidenavMenu/>}/>
          <Route path='/product' element={<Products />} />
          <Route path='filter' element={<Filtertoggle/>}/>
          <Route path='/shop' element={<Shop />} />
          <Route path='/sale' element={<Sale />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/like' element={<Like />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/account' element={<Account />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </main>
      <GotoTop />
    </BrowserRouter>
  );
};

export default App;
