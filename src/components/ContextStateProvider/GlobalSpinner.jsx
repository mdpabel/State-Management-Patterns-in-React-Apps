import clsx from 'clsx';
import { useGlobalSpinnerContext } from '../../contexts/GlobalSpinnerContext';

const GlobalSpinner = () => {
  const { isSpinnerVisible } = useGlobalSpinnerContext();

  return (
    <>
      {console.log('GlobalSpinner')}
      <div className="relative">
        <div
          className={clsx(
            'justify-center items-center min-w-screen min-h-screen bg-gray-900 bg-opacity-40 fixed top-0 bottom-0 left-0 right-0',
            isSpinnerVisible ? 'flex' : 'hidden'
          )}
        >
          <div className="flex justify-center items-center bg-white w-36 h-36 rounded-xl">
            <svg
              className="animate-spin h-12 w-12 text-indigo-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0
3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default GlobalSpinner;
