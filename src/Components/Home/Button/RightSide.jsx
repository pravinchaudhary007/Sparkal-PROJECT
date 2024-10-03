
import {  FaChevronRight } from 'react-icons/fa';

const RightSide = () => {
  return (
    <>
      <button className=' bg-white md:p-2 p-1  md:rounded-md rounded-sm shadow-lg '
              aria-label="Next slide">
         <FaChevronRight className='md:h-5 md:w-5 sm:h-4 sm:w-4 h-3 w-3'/>
      </button>
    </>
  )
}

export default RightSide