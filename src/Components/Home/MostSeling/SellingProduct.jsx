import HrLine from '../HorizontalLine/HrLine';

const SellingProduct = () => {
  return (<>
    <div className="text-[#2d2c2c]">
      <div className="text-center select-none">
        <p className="font-bold lg:text-5xl md:text-4xl sm:text-3xl text-xl">Most selling product</p>
      </div>
      <div className="flex justify-center mt-0 md:mt-1 lg:mt-2">
        <div className="lg:w-[464px] md:w-[348px] sm:w-[290px] w-48">
          <HrLine bgcolor={'bg-white'} />
        </div>
      </div>

    </div>
  </>)
}

export default SellingProduct