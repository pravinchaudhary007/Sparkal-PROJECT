const Instaimage = () => {
    const images = [
        {
            id: 1,
            url: 'https://i.pinimg.com/736x/8c/37/52/8c37520d490ad452e08148f1decc139f.jpg',
            detail: 'Dazzling Earrings - Shine bright like a diamond!'
        },
        {
            id: 2,
            url: 'https://img.freepik.com/premium-vector/jewelry-social-media-post-banner-design_144648-529.jpg?w=740',
            detail: 'Stunning Bracelet - A touch of elegance to your wrist!'
        },
        {
            id: 3,
            url: 'https://img.freepik.com/premium-vector/jewelry-social-media-instagram-post-banner-square-flyer-design_144648-587.jpg?w=740',
            detail: 'Elegant Necklace - Perfect for any occasion!'
        },
        {
            id: 4,
            url: 'https://img.freepik.com/premium-vector/jewelry-social-media-post-banner-design_144648-538.jpg?w=740',
            detail: 'Classic Ring - Timeless beauty for every moment.'
        },
        {id: 5,
        url: 'https://img.freepik.com/premium-vector/jewelry-social-media-post-banner-design_144648-538.jpg?w=740',
        detail: 'Classic Ring - Timeless beauty for every moment.'
    },
    ];

    return (
        <>
            {images.map((image) => (
                <div key={image.id} className="bg-[#d9d9d9] relative 
                                                 lg:h-[268px] lg:w-[234px] 
                                                 md:h-[258px] md:w-[250px] 
                                                 sm:h-[238px] sm:w-[196px] 
                                                 h-[104px] w-24">
                    <figure className="relative  md:m-4 sm:m-3 m-1 sm:py-2 sm:px-2 px-1 py-1   bg-white shadow-lg drop-shadow-lg outline-none  h-auto w-auto">
                        <img
                            src={image.url}
                            alt={`Image ${image.id}`}
                            className="h-auto w-auto md:rounded-md rounded-sm object-cover"
                        />
                        <figcaption className="lg:text-sm md:text-xs sm:text-[10pt] text-[4pt]  lg:py-2  md:px-1 px-0 text-center text-[#7b7979] bg-white ">
                            {image.detail}
                        </figcaption>
                    </figure>

                </div>
            ))}

        </>);
};

export default Instaimage;
