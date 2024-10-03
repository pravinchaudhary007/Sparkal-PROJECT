import Instaimage from "./Instaimage";
import HrLine from "../HorizontalLine/HrLine";

const Followusinsta = () => {
    return (
        <div className="select-none">
            <div className="text-center lg:mt-12 md:mt-10 sm:mt-8 mt-4">
                <p className="font-bold lg:text-5xl md:text-3xl sm:text-2xl text-lg uppercase">@ Follow us on Instagram</p>
            </div>

            {/* ------------------  horizontal line ----------------------   */}
            <div className="flex justify-center items-center">
                <div className="lg:w-[710px] md:w-[444px] sm:w-[356px] w-[268px] lg:mt-2 md:mt-1 mt-0">
                    <HrLine bgcolor={'bg-white'} />
                </div>
            </div>


            {/* Images container */}
            <div className="lg:py-24 md:py-20 sm:py-16 py-8
                            lg:px-20 md:px-14 sm:px-8 px-4
                            grid grid-cols-3 lg:grid-cols-4 lg:gap-3 md:gap-5 gap-2 justify-items-center">
                <Instaimage />
            </div>
        </div>
    );
}

export default Followusinsta;
