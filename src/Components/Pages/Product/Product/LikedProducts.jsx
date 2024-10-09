import { useProducts } from '../ProductContext/ProductProvider.jsx';
import Card from './Card.jsx';
import Header from '../../../Home/Navigation/Header.jsx';
import Navbar from '../../../Home/Navigation/Navbar.jsx';
import { NavLink } from 'react-router-dom';

const LikedProducts = () => {
    const { likedProducts } = useProducts();

    if (likedProducts.length === 0) {
        return <> <Header /> <Navbar /> <div className='min-h-screen flex justify-center items-center'> <p className=' font-bold text-4xl '>No liked products found.
        <NavLink to={'/product'} className='text-orange-500'> Add now </NavLink>
        </p></div> </>
    }

    return (
        <>
            <Header />
            <Navbar />

            <section className="m-8 min-h-screen">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                    {likedProducts.map(product => (
                        <Card key={product.id} product={product} />
                    ))}
                </div>
            </section>
        </>);
};

export default LikedProducts;
