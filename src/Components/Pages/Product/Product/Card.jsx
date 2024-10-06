import { useProducts } from './ProductProvider.jsx'; // Importing the ProductProvider context
import LikeButton from './LikedButton.jsx'
// eslint-disable-next-line react/prop-types
const Card = ({ product }) => {
    const { toggleLike, likes } = useProducts(); // Using the context to get likes and toggleLike function

    // eslint-disable-next-line react/prop-types
    const { id, image, title, price, rating } = product;
    const isLiked = likes[id] || false; // Check if the product is liked

    return (
        <article key={id} className="h-auto w-auto border rounded-lg shadow-md p-4">
            <figure className="relative">
                <div className="lg:h-auto lg:w-auto">
                    <img src={image} alt={title} className="w-auto h-auto rounded-md" />
                    <LikeButton isLiked={isLiked}  onClick={() => toggleLike(id)} /> {/* Use toggleLike from context */}
                </div>
                <figcaption className="text-center mt-2">
                    <h2 className="text-lg font-semibold">{title}</h2>
                    <p className="text-xl font-bold text-gray-900">${price}</p>
                    <p className="mt-1 text-yellow-500">
                        {"★".repeat(Math.round(rating))} ({rating}) {/* Rating display */}
                    </p>
                </figcaption>
            </figure>
        </article>
    );
};

export default Card;
