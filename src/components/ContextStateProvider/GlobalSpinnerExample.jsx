import { useContext } from 'react';
import { GlobalSpinnerContext } from '../../contexts/GlobalSpinnerContext';

const GlobalSpinnerExample = () => {
  const { showSpinner, closeSpinner } = useContext(GlobalSpinnerContext);

  const handleSpinner = () => {
    showSpinner();
    setTimeout(() => closeSpinner(), 5000);
  };

  return (
    <div className="flex justify-center items-center min-w-screen min-h-screen">
      <button
        onClick={handleSpinner}
        className="bg-gray-500 py-4 px-6 text-white rounded"
      >
        Show Spinner
      </button>
    </div>
  );
};

export default GlobalSpinnerExample;
