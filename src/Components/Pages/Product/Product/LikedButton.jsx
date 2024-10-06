/* eslint-disable react/prop-types */
import Likes from "./Like"; 
import UnLikes from "./UnLikes"; 

const LikeButton = ({ isLiked, onClick }) => (
    <button 
        onClick={onClick} 
        className="absolute top-0 right-0 h-8 w-8 rounded-full bg-gray-100 p-1"
        aria-label={isLiked ? "Unlike" : "Like"} 
    >
        {isLiked ? <Likes /> : <UnLikes />}
    </button>
);

export default LikeButton ;
