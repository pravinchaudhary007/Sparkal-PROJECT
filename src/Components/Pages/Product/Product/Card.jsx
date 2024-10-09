import { useProducts } from '../ProductContext/ProductProvider.jsx';
import LikeButton from './LikedButton.jsx'
// eslint-disable-next-line react/prop-types
const Card = ({ product }) => {
    const { toggleLike, likes } = useProducts();

    // eslint-disable-next-line react/prop-types
    const { id, image, title, price, rating } = product;
    const isLiked = likes[id] || false;

    return (
        <article key={id} className="h-fit w-auto border rounded-lg shadow-none outline-none border-none pb-4">
            <figure className="relative">
                <div className="lg:h-[250px]  bg-white lg:w-auto">
                    <img src={image} alt={title} className="w-auto h-auto p-6 rounded-md" />
                    <LikeButton isLiked={isLiked} onClick={() => toggleLike(id)} />
                </div>
                <figcaption className="text-center bg-transparent mt-2">
                    <h2 className="lg:text-base md:text-sm  font-medium">{title}</h2>
                    <p className="lg:text-lg md:text-base font-medium text-gray-900">
                        &#8377;{price.toLocaleString('en-IN')}
                        <strike className='lg:text-base md:text-sm font-light ml-2'>
                            &#8377;{(price + 5000).toLocaleString('en-IN')}
                        </strike>
                    </p>

                    <p className="mt-1 lg:text-base md:text-sm">
                        {Array.from({ length: 5 }).map((_, index) => {
                            const roundedRating = Math.floor(rating);
                            const isHalfStar = rating - index >= 0.5 && rating - index < 1; // Checks for half star condition

                            return (
                                <span
                                    key={index}
                                    className={`inline-block ${index < roundedRating ? 'text-yellow-500' : isHalfStar && index === roundedRating ? 'text-yellow-500 half-star' : 'text-yellow-200'
                                        }`}
                                >
                                    ★
                                </span>
                            );
                        })}
                        ({rating})
                    </p>


                </figcaption>
            </figure>
        </article>
    );
};

export default Card;
