import { memo, useContext } from 'react';
import { GlobalSpinnerContext } from '../../contexts/GlobalSpinnerContext';

const GlobalSpinnerExampleContent = memo(
  (props) => {
    console.log('GlobalSpinnerExample');
    return (
      <div className="flex justify-center items-center min-w-screen min-h-screen">
        <button
          onClick={props.handleSpinner}
          className="bg-gray-500 py-3 px-6 text-white rounded"
        >
          Show Spinner
        </button>
      </div>
    );
  },
  (prevProp, nextProp) => true
);

const GlobalSpinnerExample = () => {
  const { showSpinner, closeSpinner } = useContext(GlobalSpinnerContext);

  const handleSpinner = () => {
    showSpinner();
    setTimeout(() => closeSpinner(), 5000);
  };

  return <GlobalSpinnerExampleContent handleSpinner={handleSpinner} />;
};

export default GlobalSpinnerExample;
