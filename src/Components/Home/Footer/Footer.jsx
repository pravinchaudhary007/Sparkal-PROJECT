import Visa from '../../assets/visa.png';
import American from '../../assets/american.png';
import Paypal from '../../assets/paypal.png';
import Mastercard from '../../assets/mastercard.png';
import Discover from '../../assets/discover.png';
import { NavLink } from 'react-router-dom';
import { TfiEmail } from "react-icons/tfi";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { useRef, useState } from 'react';

const Footer = () => {
    const [email, setEmail] = useState('');
    const emailInput = useRef(null);

    const handleClickCall = () => {
        window.location.href = `tel:+918320595327`;
    };

    const handleSubscribe = (e) => {
        e.preventDefault();
        console.log("Subscribed with email:", email);
        setEmail('');
    };
    const inputFocus = () => {
        if (emailInput.current) {
            emailInput.current.focus();
        };
    };

    const images = [
        { id: 1, src: Visa, alt: "Visa logo" },
        { id: 2, src: American, alt: "American Express logo" },
        { id: 3, src: Paypal, alt: "PayPal logo" },
        { id: 4, src: Mastercard, alt: "MasterCard logo" },
        { id: 5, src: Discover, alt: "Discover logo" }
    ];

    return (
        <div className="bg-center backdrop-grayscale  select-none bg-no-repeat bg-cover bg-jeweline lg:pb-28 md:pb-24 sm:pb-16 pb-12 lg:pt-10 md:pt-8 sm:pt-4 pt-3 lg:p-8 md:p-5 sm:p-3 p-3">
          <ul className="grid md:grid-cols-4 grid-cols-1  md:bg-opacity-0 sm:bg-opacity-30 md:backdrop-blur-none sm:backdrop-blur-md md:py-0 sm:py-4 sm:grid-cols-2 or md:gap-0 sm:gap-5 gap-3 justify-center sm:justify-between lg:mx-8 lg:my-8 md:mx-6 md:my-6 md:pl-0 sm:pl-12 sm:mx-4 sm:my-4 mx-3 my-3 items-start">

{/* Logos */}
<li className="sm:order-1 order-1 sm:grid md:grid-cols-2 sm:grid-cols-2 flex justify-between sm:justify-center lg:gap-2 md:gap-2 sm:gap-1 gap-[2px] sm:mt-0 mt-1 items-center">
    {images.map(image => (
        <div key={image.id}>
            <img src={image.src} alt={image.alt} className="w-auto lg:h-12 md:h-8 sm:h-6 h-6 lg:px-6 md:px-5  sm:px-3 px-0 bg-white bg-opacity-50" />
        </div>
    ))}
</li>

{/* Information */}
<li className='text-left md:order-2 sm:order-3 order-2'>
    <h2 className='font-semibold lg:text-xl md:text-lg  sm:text-[12pt] text-[9pt] md:pb-4 pb-3'>Information</h2>
    <ul className='lg:text-base md:text-[9pt]  sm:text-[8pt] text-[7pt]'>
        <NavLink to='/'><li>About us</li></NavLink>
        <NavLink to='/'><li>Contact us</li></NavLink>
        <NavLink to='/'><li>Terms & Conditions</li></NavLink>
        <NavLink to='/'><li>Returns & Exchanges</li></NavLink>
        <NavLink to='/'><li>Privacy Policy</li></NavLink>
        <NavLink to='/'><li>FAQS</li></NavLink>
    </ul>
</li>

{/* Lorem ipsum */}
<li className='text-left md:order-3 sm:order-2 order-3'>
    <h2 className='font-semibold lg:text-xl md:text-lg sm:text-[12pt] text-[9pt] md:pb-4 pb-3'>Lorem ipsum</h2>
    <ul className='lg:text-base md:text-[9pt] sm:text-[8pt] text-[7pt]'>
        <NavLink to='/'>
            <li className='flex lg:max-w-60 lg:w-60 md:w-44 sm:w-40 w-32 justify-start items-start lg:gap-2 md:gap-3 sm:gap-2 gap-2'>
                <span><TfiEmail className='lg:mt-[6px] md:mt-[5px] sm:mt-[3pt] mt-[2pt] lg:h-4 lg:w-5 md:h-3 md:w-3 sm:w-2 sm:h-2' /></span>
                184 Main Rd E, St Albans VIC 3021, Australia
            </li>
        </NavLink>
        <NavLink to='/location'>
            <li className='flex justify-start items-center lg:gap-2 md:gap-2 sm:gap-2 gap-2'>
                <span><CiLocationOn className='lg:h-6 lg:w-5 md:h-5 md:w-4 sm:h-auto sm:w-auto h-3 w-[10px] ' /></span>
                Lorem ipsum
            </li>
        </NavLink>
        <li onClick={handleClickCall} className='md:mt-2 sm:mt-1 mt-[2px] flex justify-start items-center gap-2'>
            <span><IoCallOutline className='lg:h-5 lg:w-5 md:h-3 md:w-4' /></span>
            +91 <span className='text-blue-500'>83205 95327 </span>
        </li>
    </ul>
</li>

{/* Newsletter Signup */}
<li className='text-left md:order-4 sm:order-4 order-4 '>
    <h2 className='font-semibold lg:text-xl md:text-lg sm:text-[12pt] text-[9pt] md:pb-4 pb-3'>Newsletter Signup</h2>
    <ul className='lg:max-w-72 lg:w-72 md:w-56 sm:w-48 w-full lg:text-base md:text-[9pt] sm:text-[8pt] text-[7pt]'>
        <li>Subscribe to our newsletter and get 10% off your first purchase</li>
    </ul>

    {/* Email input */}
    <form onSubmit={handleSubscribe} className='lg:mt-7 md:mt-5 sm:mt-3 mt-2 flex justify-start  items-center gap-0'>
        <div className='relative   w-full h-auto text-center bg-[#d9d9d9] flex items-center'>
            <label className='sr-only' htmlFor="email">Enter Email Address</label>
            <input
                id="email"
                type="email"
                value={email}
                maxLength={32}
                ref={emailInput}
                required
                onMouseOver={inputFocus}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter Email Address...'
                className='bg-transparent flex-grow md:pl-3 sm:pl-2 text-white pl-2 lowercase 
                 w-auto sm:w-44 md:w-[160px] 
                focus-visible:outline-none  focus-visible:bg-transparent
                 md:p-2 sm:p-1 p-3 lg:text-base md:text-[8pt] sm:text-[8pt] text-[8pt] 
                 h-auto'
            />
            <button
                type="submit"
                aria-label="Subscribe to Newsletter"
                className='lg:text-base md:text-[8pt] sm:text-[8pt] text-[8pt] 
                font-medium px-2 p-1
                bg-[#d9d9d9] transition 
                focus:outline-none  h-auto'
            >
                Subscribe
            </button>
        </div>
    </form>
</li>
</ul>

        </div>
    );
}

export default Footer;
