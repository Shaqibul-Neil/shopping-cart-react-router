import { PacmanLoader } from 'react-spinners';

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-285px)]">
      <PacmanLoader color="#ffffff" />
    </div>
  );
};

export default LoadingSpinner;
