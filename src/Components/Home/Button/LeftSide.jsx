
import { FaChevronLeft} from 'react-icons/fa';

const LeftSide = () => {
    return (
        <>
        <button className=' bg-white md:p-2 p-1  md:rounded-md rounded-sm shadow-lg '
                aria-label="Previous slide">
            <FaChevronLeft className='md:h-5 md:w-5 sm:h-4 sm:w-4 h-3 w-3' />
        </button>
    </>
  )
}

export default LeftSide