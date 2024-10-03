

const NetworkError = () => {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-center text-gray-800 mt-4">
        Network Error
      </h1>
      <p className="text-lg text-center text-gray-600 mt-2">
        Oops! It seems you are currently offline.
      </p>
      <p className="text-md text-center text-gray-600 mt-2">
        Please check your internet connection and try again.
      </p>
      
    </div>
  );
};

export default NetworkError;
