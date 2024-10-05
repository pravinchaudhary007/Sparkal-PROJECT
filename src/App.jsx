import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './Index';
import SidenavMenu from './Components/Home/Navigation/SidenavMenu';
import GotoTop from './Components/Home/Gotop/GotoTop';
import Products from './Components/Pages/Product/ProductsListing';
import Shop from './Components/Pages/Shop/Shop';
import Sale from './Components/Pages/Sale/Sale';
import Blog from './Components/Pages/Blog/Blog';
import Error404 from './Components/Error404';
import { useEffect, useState } from 'react';
import NetworkError from './Components/NetworkError';
import Cart from './Components/Pages/Shop/Cart/Cart';
import Like from './Components/Pages/Like/Like';
import Account from './Components/Pages/Account/Account';

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
      <Routes>
      
      {isOffline ? (
          <Route path="/" element={<NetworkError />} />
        ) : (
                  <Route path="/" element={<Index />} />
        )}
          <Route path='/product' element={<Products />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/sale' element={<Sale />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/like' element={<Like/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/account' element={<Account/>}/>
          <Route path='/menu' element={<SidenavMenu />} />
          <Route path='*' element={<Error404/>}/>
      </Routes>
      <GotoTop />
    </BrowserRouter>
  );
};

export default App;
