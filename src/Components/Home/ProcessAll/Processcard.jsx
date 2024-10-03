// eslint-disable-next-line react/prop-types
const Processcard = ({ icon, title, description }) => {
  return (
    <div className="border-[#2d2c2c] text-[#2d2c2c] w-full lg:h-[175px] md:h-[150px] sm:h-[125px] h-20 md:border-2 border-[1px] border-separate relative grid  items-center">
      <div className="absolute lg:-top-8 lg:right-6 md:right-3 sm:right-5 right-2 md:-top-5 sm:-top-4 -top-3 lg:p-2 md:p-1  p-[2px] rounded-full bg-white">{icon}</div>
      <div className="lg:p-6 md:p-5 sm:p-4 p-2">
        <p className="font-semibold lg:text-lg md:text-base sm:text-base text-[6pt] uppercase lg:pb-4 md:pb-3 sm:pb-2 pb-1">{title}</p>
        <p className="md:leading-5 sm:leading-4 leading-0 lg:text-sm md:text-xs sm:text-[8pt] text-[6pt] lg:pr-6 md:pr-4 sm:pr-3 pr-0">{description}</p>
      </div>
    </div>
  );
};

export default Processcard;
