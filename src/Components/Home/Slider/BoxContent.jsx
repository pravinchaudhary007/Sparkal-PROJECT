import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const BoxContent = ({msg,bigtitle,route}) => {
  return (
    <div className='flex select-none flex-col justify-center items-center sm:py-4 py-3 p-1 h-full w-full text-[#3d3c3c]'>
    
                  {/* small massage  */}
    
     <p className='text-center md:text-xl sm:text-lg text-[7pt] lg:mb-4 md:mb-3 sm:mb-2 mb-0'>
        {msg}
      </p>

                  {/* big title  */}

      <h1 className='text-center lg:text-5xl md:text-4xl sm:text-2xl text-base font-bold lg:mb-8 md:mb-7 sm:mb-5 mb-0'>
        {bigtitle} 
      </h1>

                   {/* button  */}
 
      <NavLink to={`/${route}`}><button
        className='border-[1px] border-[#3d3c3c] md:py-2 sm:py-1 md:px-6 sm:px-4 px-2 py-[2px] m-1 rounded-sm md:text-lg sm:text-base text-[5pt]'
        aria-label="Explore new arrivals">
        Explore Now
      </button>
      </NavLink>
    </div>
  );
}

export default BoxContent;
