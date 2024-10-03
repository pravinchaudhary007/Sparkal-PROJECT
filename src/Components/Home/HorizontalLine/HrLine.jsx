import { FaSquareFull } from 'react-icons/fa';

// eslint-disable-next-line react/prop-types
const HrLine = ({bgcolor}) => {
    return (
        <>
            <div className='relative flex items-center '>
                <hr className='w-full h-[2px]  bg-[#2d2c2c] mx-auto' />
                <FaSquareFull className={`absolute left-1/2 transform -translate-x-1/2 top-full md:mt-[-10px] mt-[-8px] md:p-2 p-1 ${bgcolor} md:h-5 h-4 md:w-5 w-3 text-[#2d2c2c]`} />
            </div>
        </>
    )
}

export default HrLine