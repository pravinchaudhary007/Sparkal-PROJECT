/* eslint-disable react/prop-types */
import Likes from "./Like"; 
import UnLikes from "./UnLikes"; 

const LikeButton = ({ isLiked, onClick }) => (
    <button 
        onClick={onClick} 
        className="absolute lg:top-4 lg:right-4 md:top-2 md:right-2 lg:h-8 lg:w-8 md:h-6 md:w-6 top-1 right-5  h-4 w-4 rounded-full bg-[#f4f4f4] p-1"
        aria-label={isLiked ? "Unlike" : "Like"} 
    >
        {isLiked ? <Likes /> : <UnLikes />}
    </button>
);

export default LikeButton ;
