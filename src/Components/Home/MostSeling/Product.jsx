

// eslint-disable-next-line react/prop-types
const Product = ({ heading,image, description, date }) => {

  return (
    <div className="md:m-3 sm:m-2 m-2 drop-shadow-xl w-full shadow-xl flex flex-col items-center justify-center">
      
      <div className="h-auto w-full bg-[#d9d9d9] md:p-3 p-2 md:pb-0  pb-0 md:pt-4 pt-3">
        <div className="h-full flex justify-center items-center drop-shadow-xl w-auto md:border-2 border-[1px] border-b-0 md:border-b-0 border-white">
          <img src={image} alt={`${heading} image`} className="h-auto w-auto lg:p-4 md:p-6 sm:p-4 p-3  sm:h-[220px]  md:h-[300px] lg:h-[230px]  object-cover" />
        </div>
      </div>

      <div className="bg-white md:p-3 p-2 md:pt-0 pt-0 w-auto flex-grow">
       
        <div className="w-auto lg:p-x-5 lg:py-5 lg:pl-6 
                               md:p-x-4 md:py-4 md:pl-5
                               sm:p-x-3 sm:py-3 sm:pl-4
                               p-x-2 py-1 pl-3                         
                               lg:leading-8 md:leading-7 sm:leading-5 leading-3 border-[1px] border-t-0 md:border-2  md:border-t-0 border-[#4d015a]">
          <p className="text-[#7b7979] lg:text-xs md:text-[7pt] sm:text-[6pt] text-[5pt]">By admin on {date}</p>
          <p className="lg:text-[13pt] md:text-[10pt] text-[8pt]  font-semibold lg:w-auto">{heading}</p>
          <p className="lg:text-[9pt] md:text-[8pt] sm:text-[7pt] text-[5pt] md:tracking-wider tracking-wide lg:pr-4 md:pr-3 sm:pr-2 pr-2 lg:leading-5 md:leading-4 leading-[10px] mt-2">{description}</p>
      </div>
    
      </div>
    </div>
  );
};

export default Product;
