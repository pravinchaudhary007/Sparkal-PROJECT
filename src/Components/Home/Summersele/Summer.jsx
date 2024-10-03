
const Summer = () => {



    return (
        <div className='select-none w-full text-[#2d2c2c] bg-opacity-50 grayscale overflow-visible bg-bottom bg-summer bg-cover bg-no-repeat
                        lg:h-[872px] lg:p-28
                        md:h-[687px] md:p-20
                        sm:h-[520px] sm:p-14
                           h-[348px] py-12 p-2'>
            
                {/* Text Section up to 70% & summer sele */}

                   <section className="text-center relative lg:pt-20 md:pt-20 sm:pt-16 pt-4">
                       <div className="relative z-50">
                           <p className="uppercase font-extrabold tracking-wider 
                                         lg:text-6xl md:text-5xl sm:text-3xl text-xl"> up to 70% </p>
                           <p className="uppercase font-semibold
                                         lg:ml-32 md:ml-28 sm:ml-12 ml-10
                                         lg:mt-5 md:mt-3 sm:mt-1 mt-0
                                         lg:text-3xl  md:text-2xl sm:text-lg  text-[8pt] 
                                         "> Summer Sale </p>
                       </div>
   
                       <div className="bg-[#d9d9d9] absolute top-0 right-0 z-10
                                       
                                       lg:h-[520px] lg:w-[400px] 
                                       md:h-[420px] md:w-[320px]
                                       sm:h-[350px] sm:w-[260px]
                                          h-[220px]    w-36">
                          
                          {/* Summer sale products shown here */}
                       
                       </div>
                   </section>


                   <section className="relative">
                     <div className="bg-[#d9d9d9] absolute left-0  z-10
                                     lg:m-4 md:m-3 sm:m-2 m-1
                                     lg:top-32 md:top-20 sm:top-16 top-10
                                     lg:h-[520px] lg:w-[400px] 
                                     md:h-[420px] md:w-[300px]
                                     sm:h-[320px] sm:w-[260px]
                                     h-[220px] w-[150px]">

                          {/* Summer sale products shown here */}

                     </div>

                    {/* Lookbook text */}

                    <div className="absolute z-10
                                    lg:top-96 md:top-72 sm:top-56 top-40
                                    lg:left-[360px] md:left-[266px] sm:left-[240px] left-[128px]">
                      <p className="uppercase font-extrabold
                                   lg:text-6xl
                                   md:text-5xl
                                   sm:text-3xl
                                   text-xl">
                        LookBook 2024-25
                      </p>
                      <p className="uppercase font-semibold
                                   lg:text-3xl lg:mt-5
                                   md:text-2xl md:mt-3
                                   sm:text-lg sm:mt-1
                                   text-[8pt] mt-0">
                        make love this look
                      </p>
                    </div>
                </section>

        </div>
    );
}

export default Summer;
