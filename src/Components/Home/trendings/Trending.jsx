import { useState, useEffect } from 'react';
import LeftSide from '../Button/LeftSide';
import RightSide from '../Button/RightSide';
import Iconprice from './Iconprice';
import Priceclip from './Priceclip';
import HrLine from '../HorizontalLine/HrLine';

// eslint-disable-next-line react/prop-types
const Trending = ({ trending, topviwe }) => {
    const detail1 = {
        title: "Mercury Tee",
        price: "$68.00",
    };

    const detailprice = [
        {
            id: 1,
            box: {
                title: "La Bohēme Rose Gold",
                pricedesh: "$68.00",
                price: "$40.00",
            }
        },
        {
            id: 2,
            box: {
                title: "Ridlay High Waist",
                price: "$36.00",
            }
        },
    ];

    const [isSmallOrMediumScreen, setIsSmallOrMediumScreen] = useState(window.innerWidth <= 1024);
    const [visibleItemIndex, setVisibleItemIndex] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            const smallOrMediumScreen = window.innerWidth <= 1024;
            setIsSmallOrMediumScreen(smallOrMediumScreen);
            if (smallOrMediumScreen) {
                setVisibleItemIndex(0);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='relative grid select-none w-full lg:h-[1150px] md:h-[768px] sm:h-[600px] h-96 lg:mt-12 md:mt-14 sm:mt-10 mt-6 text-[#2d2c2c] overflow-hidden'>

            {/* LEFT SIDE ARRO  */}

            <div className='absolute lg:left-8 md:left-6 sm:left-4 left-2 lg:bottom-[450px] md:bottom-72 sm:bottom-64 bottom-32 transform -translate-y-1/2 z-20'>
                <LeftSide />
            </div>

            <div className='absolute bg-[#dbd2b7] transform rotate-[-5deg] origin-bottom-right inset-0 lg:-right-[100px] md:-right-[70px] sm:-right-16 -right-10  lg:-top-1'>
                <div className='relative w-full flex flex-col justify-center items-center lg:mt-20 md:mt-16 sm:mt-14 mt-12 rotate-[5deg]'>

                    {/* BIG TITLE  */}

                    <p className="text-center lg:text-4xl md:text-3xl sm:text-2xl text-xl font-bold uppercase">{trending}</p>

                    {/* ------------------------ JHORIZONTAL LINE ------------------------  */}

                   <div className="lg:w-48 md:w-32 sm:w-28 w-28 lg:mt-4 md:mt-3 mt-1">
                      <HrLine bgcolor={'bg-[#dbd2b7]'}/>
                   </div>

                    {/* SMALL DESCRIPTION  */}

                    <p className=' md:mt-6 sm:mt-4 mt-2 text-center lg:text-lg md:text-base sm:text-sm text-xs'>{topviwe}</p>

                    <div className='relative w-auto lg:my-20 md:m-6 sm:m-4 my-2 flex items-center'>
                        <div className='w-full relative flex justify-center items-center'>

                            {/* TREE CONTAINER  */}

                            <ul className='flex lg:m-24 md:my-16 sm:m-8 my-6 justify-evenly w-auto lg:gap-10 md:gap-8 sm:gap-6 gap-2'>

                                {/* FIRST CONTAINER  */}

                                <li className='
                                lg:p-8 md:p-6 sm:p-4 p-2 
                                lg:h-[500px] md:h-72 sm:h-48 h-40
                                lg:w-80 md:w-72 sm:w-48 w-[120px]
                                bg-white relative'>
                                    <div>
                                        {/* ***________image or details products______________*** */}
                                    </div>
                                    <div className='absolute left-1/2 transform -translate-x-1/2 md:-bottom-12 -bottom-8'>
                                        <Iconprice title={detail1.title} price={detail1.price} />
                                    </div>
                                </li>

                                {/* NEXT CONTAINER  */}

                                {isSmallOrMediumScreen ? (
                                    <li
                                        key={detailprice[visibleItemIndex].id}
                                        className='
                                            lg:p-8 md:p-6 sm:p-4 p-2 
                                            lg:h-[500px] md:h-72 sm:h-48 h-40
                                            lg:w-80 md:w-72 sm:w-48 w-[120px]
                                            bg-white relative'
                                    >
                                        <div>
                                            {/* ***________image or details products______________*** */}
                                        </div>
                                        <div className='absolute left-1/2 transform -translate-x-1/2 md:-bottom-12 -bottom-8'>
                                            <Priceclip
                                                title={detailprice[visibleItemIndex].box.title}
                                                price={detailprice[visibleItemIndex].box.price}
                                                pricedesh={detailprice[visibleItemIndex].box.pricedesh}
                                            />
                                        </div>
                                    </li>
                                ) : (
                                    detailprice.map((data) => (
                                        <li
                                            key={data.id}
                                            className='
                                            lg:p-8 md:p-6 sm:p-4 p-2 
                                            lg:h-[500px] md:h-72 sm:h-48 h-40
                                            lg:w-80 md:w-72 sm:w-48 w-[120px]
                                            bg-white relative'
                                        >
                                            <div>
                                                {/* ***________image or details products______________*** */}
                                            </div>
                                            <div className='absolute left-1/2 transform -translate-x-1/2 md:-bottom-12 -bottom-16'>
                                                <Priceclip
                                                    title={data.box.title}
                                                    price={data.box.price}
                                                    pricedesh={data.box.pricedesh}
                                                />
                                            </div>
                                        </li>
                                    ))
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* RIGHT SIDE ARRO  */}

            <div className='absolute lg:right-8 md:right-6 sm:right-4 right-2 lg:bottom-[450px] md:bottom-72 sm:bottom-64 bottom-32  transform -translate-y-1/2 z-20'>
                <RightSide />
            </div>

        </div>
    );
};

export default Trending;
