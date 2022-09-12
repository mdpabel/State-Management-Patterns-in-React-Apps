import { useGlobalSpinnerActionsContext } from '../../contexts/GlobalSpinnerContext';

const GlobalSpinnerExample = () => {
  const { showSpinner, closeSpinner } = useGlobalSpinnerActionsContext();

  const handleSpinner = () => {
    showSpinner();
    setTimeout(() => closeSpinner(), 5000);
  };

  return (
    <>
      {console.log('GlobalSpinnerExample')}
      <div className="flex justify-center items-center min-w-screen min-h-screen">
        <button
          onClick={handleSpinner}
          className="bg-gray-500 py-3 px-6 text-white rounded"
        >
          Show Spinner
        </button>
      </div>
    </>
  );
};

export default GlobalSpinnerExample;
