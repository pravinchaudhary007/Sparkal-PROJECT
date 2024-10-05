import chain from '../../assets/chain.png';
import watch from '../../assets/watch.png'
import watch_2 from '../../assets/watch2.png'
import Accessories from '../../assets/Accessories.png'
import Accessories2 from '../../assets/Accessories2.png'
import { NavLink } from 'react-router-dom';


const Jewellery = () => {

  const jewelarys = [
    {
      id: 0,
      type: "watch",           
      image: chain,
      path:"chain"
    },
    {
      id: 1,
      type: "watch",
      image: watch,  
      path :"ring"
    },
    {
      id: 2,
      type: "Accessories",
      image: watch_2,
       path :"ring"
    },
    {
      id: 3,
      type: "watch",
      image: Accessories,  
      path : 'ring'
    },
    {
      id: 4,
      type: "Accessories",
      image: Accessories2,
      path :"accessory"
    }
  ];

  return (
    <div className="flex justify-center md:px-12 md:py-32 sm:px-10 sm:py-24 px-1 py-10  select-none text-[#2d2c2c] bg-jeweline bg-top bg-no-repeat bg-cover  items-center ">

      <ul className='grid grid-cols-3 md:gap-3 sm:gap-2 lg:m-10 md:m-8 sm:m-4 m-1 gap-1'>
     
        {jewelarys.map((jewelary) => {
          const { id, type, image,path } = jewelary;
          return (<li key={id} className={`relative ${ id == 0  ? 'row-span-2' :''} overflow-hidden flex justify-center items-center bg-[#7c6680] w-auto h-auto`}>
            <div className={`flexjustify-center  items-center h-full `}>
              <img
                src={image}
                alt={`${type} logo image`}
                className={`${ id == 0 ? 'absolute lg:-top-10 md:-top-8 sm:-top-6 -top-4 left-1/2 transform -translate-x-1/2 p-0':''} drop-shadow-xl h-auto lg:p-10 md:p-8 sm:p-6 p-4 w-auto object-contain`}
              /> 
              </div>

            {/* four button  */}

            <div className='absolute bottom-0 left-0'>
              <NavLink to={`/${path}`}><button className='bg-[#dbd2b7] lg:text-lg md:text-base sm:text-sm text-[7pt]  md:py-3 md:px-12 sm:py-2 sm:px-8 px-3 py-[2px]'>{jewelary.type}</button></NavLink>
            </div>
          </li>
          )
        })}
      </ul>

    </div>
  );
}

export default Jewellery;
