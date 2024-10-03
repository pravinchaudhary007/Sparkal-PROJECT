import { useState } from 'react';
import Woman from '../../assets/Woman.png';
import BoxContent from './BoxContent';
import LeftSide from '../Button/LeftSide';
import RightSide from '../Button/RightSide';

const SliderBar = () => {
  const items = [
    {
      id: 1,
      image: '',
      path: '/diomend',
      msg: 'Lorem Ipsum',
      title: 'New Arrival Collection',
    },
    {
      id: 2,
      image: '',
      path: '/chain',
      msg: 'Explore our stylish',
      title: 'Elegant Chains',
    },
    {
      id: 3,
      image: '',
      path: '/watch',
      msg: 'Timeless watches',
      title: 'Luxury Watches',
    },
    {
      id: 4,
      image: '',
      path: '/ring',
      msg: 'Find the perfect',
      title: 'Stunning Rings',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  // eslint-disable-next-line no-unused-vars
  const { image , msg, title, path } = items[currentIndex];

  return (
    <div className='relative w-full lg:h-[520px] md:h-[450px] sm:h-[400px] h-44 select-none overflow-hidden bg-line bg-cover bg-center bg-no-repeat'>

      {/* Left Side Arrow */}

      <div className='absolute md:left-6 sm:left-4 left-3 top-1/2 transform -translate-y-1/2 z-20' onClick={handlePrev}>
        <LeftSide />
      </div>

      <div className='absolute inset-0 bg-[#dbd2b7] transform rotate-[-5deg] origin-top-left -left-14'>

        {/* Woman wow reaction image */}

        <div className='absolute lg:-bottom-[72px] lg:left-24 md:-bottom-[62px] md:left-14 
                transform rotate-[5deg]  origin-bottom-left sm:-bottom-[48px] sm:left-20 -bottom-[22px] left-[73px]'>
          <img src={Woman} alt="Woman wow reaction image" className='w-full lg:h-[520px] md:h-[460px] sm:h-[350px] h-40 object-cover' />
        </div>

        {/* Slider content box */}

        <div className='lg:h-96 lg:w-96 md:h-80 md:w-80 sm:h-60 sm:w-60 h-28 w-28 bg-white md:p-3 sm:p-2 p-1 lg:right-52 lg:-bottom-12 md:right-36 md:-bottom-8 
                rotate-[5deg] sm:right-32 sm:-bottom-8 right-16 -bottom-4 transform absolute shadow-lg '>
          <div className='md:border-2 border-[1px]  border-black h-full w-full '>
            <BoxContent msg={msg} bigtitle={title} route={path} />
          </div>
        </div>
      </div>

      {/* Right Side Arrow */}

      <div className='absolute md:right-6 sm:right-4 right-3 top-1/2 transform -translate-y-1/2 z-20' onClick={handleNext}>
        <RightSide />
      </div>
    </div>
  );
};

export default SliderBar;
