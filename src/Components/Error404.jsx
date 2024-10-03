import errorImage from '../../public/404Error.mp4'; // Adjust the path as necessary

const VideoBackground = () => {
  return (
    <video 
      className="absolute top-0 left-0 min-w-full min-h-full w-full h-full object-cover transition-transform duration-1000 ease-in-out transform opacity-0 scale-110 animate-fade-in" 
      autoPlay
      loop
      muted
    >
      <source src={errorImage} type="video/mp4" />
      <p className="text-white text-center">Your browser does not support the video tag. Please consider updating your browser.</p>
    </video>
  );
};

export default VideoBackground;
