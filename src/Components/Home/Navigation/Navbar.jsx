import logo from '../../assets/logo.png';
import { IoIosSearch } from "react-icons/io";
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { FaRegHeart, FaUserCircle } from "react-icons/fa";
import { PiShoppingCartThin } from "react-icons/pi";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { useEffect, useMemo, useRef, useState } from 'react';
import likeicon from '../../assets/heart.png';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import SidenavMenu from './SidenavMenu';

const Navbar = () => {
    const searchRef = useRef(null);
    const [menu, setMenu] = useState(false);
    const [like, setLike] = useState(false);
    const [search, setSearch] = useState('');
    const [searchBarVisible, setSearchBarVisible] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const NavItems = useMemo(() => ['Product', 'Shop', 'Sale', 'Blog'], []);
    const [activeLink, setActiveLink] = useState(null);
    const [hoverLink, sethoverLink] = useState(null);

    useEffect(() => {
        const currentPath = location.pathname;
        const index = NavItems.findIndex(item => `/${item.toLowerCase()}` === currentPath);
        setActiveLink(currentPath === '/' ? null : index !== -1 ? index : null);
    }, [location.pathname, NavItems]);

    useEffect(() => {
        if (activeLink !== null) {
            localStorage.setItem('ActiveLink', activeLink);
        } else {
            localStorage.removeItem('ActiveLink');
        }
    }, [activeLink]);

    const handleLinkClick = (linkIndex) => {
        setActiveLink(linkIndex);
        navigate(`/${NavItems[linkIndex].toLowerCase()}`);
        setMenu(false); // Close the menu when a link is clicked
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (search.trim() === '') return;
        console.log('Product searched for:', search);
        setSearch('');
        setSearchBarVisible(false);
    };

    const toggleLike = () => {
        setLike(prevLike => !prevLike);
    };

    const toggleMenu = () => {
        setMenu(prevMenu => !prevMenu);
    };

    const toggleSearch = () => {
        setSearchBarVisible(prev => {
            if (!prev && searchRef.current) {
                setTimeout(() => {
                    searchRef.current.focus();
                }, 1000);
            }
            return !prev;
        });
    };

    const searchFocus = () => {
        if (searchRef.current) {
            searchRef.current.focus();
        }
    };

    const DrawerList = (
        <Box sx={{ width: '250px' }} role="presentation">
            <SidenavMenu />
        </Box>
    );



    return (
        <header className='flex justify-between items-center lg:px-16 md:px-12 sm:px-8 sm:py-1 p-3 h-auto w-auto select-none shadow-xl'>
            <nav>
                <ul className='flex items-center'>
                    {/* Logo */}
                    <li className='md:block hidden'>
                        <NavLink to='/'>
                            <img src={logo} alt="Sparkle by Patel logo" className='h-14' />
                        </NavLink>
                    </li>

                    {/* Menu Icon */}
                    <li onClick={toggleMenu} className='block md:hidden cursor-pointer'>
                        <HiOutlineMenuAlt2 className='h-6 w-6' aria-label="Toggle menu" />
                    </li>
                </ul>
            </nav>

            <div className='flex justify-center items-center sm:gap-6 gap-4 float-end'>
                {/* Navbar Links */}
                <nav className='md:flex hidden text-sm items-center lg:gap-6 md:gap-4'>
                    {NavItems.map((item, index) => (
                        <li
                            key={item}
                            className='relative list-none'
                            onMouseEnter={() => sethoverLink(index)}
                            onMouseLeave={() => sethoverLink(null)}
                        >
                            <NavLink
                                to={`/${item.toLowerCase()}`}
                                className='block py-1 border-b-2 cursor-pointer transition-colors duration-300'
                                onClick={() => handleLinkClick(index)}
                            >
                                {item}
                            </NavLink>
                            <span
                                 className={`absolute left-0 bottom-0 cursor-default h-0.5 w-full 
                                    ${activeLink === index 
                                      ? 'bg-black scale-x-100 opacity-100 duration-0' 
                                      : hoverLink === index 
                                      ? 'bg-black scale-x-100 opacity-100 duration-300 ease-in-out' 
                                      : 'bg-gray-200 scale-x-0 opacity-0 transition-all duration-500 ease-in-out'}`}
                            ></span>
                        </li>
                    ))}
                </nav>

                {/* Search Bar */}
                <form onSubmit={handleSearch} className={`${searchBarVisible ? 'flex w-auto' : 'sm:flex hidden w-auto'} bg-[#f2e8e9] md:rounded-[4px] sm:rounded-[3px] rounded-sm justify-center items-center`}>
                    <input
                        type="text"
                        value={search}
                        ref={searchRef}
                        onMouseOver={searchFocus}
                        onChange={(e) => setSearch(e.target.value)}
                        autoComplete='off'
                        className='bg-[#f2e8e9] caret-[#f2e8e9] md:text-base sm:text-sm text-xs placeholder:font-light w-auto lg:w-72 px-3 md:py-1 py-0 outline-0'
                        placeholder="Search Products..."
                    />
                    <button type='submit'>
                        <IoIosSearch className="h-6 w-6 bg-white p-1 m-1 rounded-md hover:scale-105" />
                    </button>
                </form>

                {/* Icons for user, cart, like */}
                <ul className='flex items-center justify-around md:gap-5 sm:gap-4 gap-3'>
                    <li onClick={toggleSearch} className={`${searchBarVisible ? 'hidden' : 'block'} sm:hidden`}>
                        <IoIosSearch className="h-5 w-5 hover:scale-110" />
                    </li>
                    <li onClick={toggleLike}>
                        <NavLink to={'/like'}>
                            {like ? (
                                <div className='w-5'><img src={likeicon} alt="Like icon" className='h-5 w-5 hover:scale-110' /></div>
                            ) : (
                                <FaRegHeart className='h-5 w-5 hover:scale-110' />
                            )}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/cart'}>
                            <PiShoppingCartThin className='h-5 w-5 hover:scale-110' />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/account'}>
                            <FaUserCircle className='h-5 w-5 hover:scale-110' />
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* Drawer Component */}
            <Drawer anchor="right" open={menu} onClose={toggleMenu}>
                {DrawerList}
            </Drawer>
        </header>
    );
};

export default Navbar;
