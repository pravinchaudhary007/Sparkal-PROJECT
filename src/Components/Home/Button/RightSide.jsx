import { FaChevronRight } from 'react-icons/fa';
import { useState } from 'react';

const LeftSide = () => {
  const [isGrabbing, setIsGrabbing] = useState(false);

  return (
    <button
      onMouseDown={() => setIsGrabbing(true)}
      onMouseUp={() => setIsGrabbing(false)}
      onMouseLeave={() => setIsGrabbing(false)}
      className={`${
        isGrabbing ? 'cursor-grabbing' : 'cursor-grab'
      } bg-gradient-to-r to-white from-[#dbd2b7] transition-transform transform md:p-2 p-1 md:rounded-md rounded-sm shadow-lg`}
      aria-label="Previous slide"
    >
      <FaChevronRight className="md:h-5 md:w-5 sm:h-4 sm:w-4 h-3 w-3" />
    </button>
  );
};

export default LeftSide;
