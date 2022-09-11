import GlobalSpinner from '../components/ContextStateProvider/GlobalSpinner';
import { createContext } from 'react';
import { useToggle } from '../hooks/useToggle';

export const GlobalSpinnerContext = createContext(undefined);

const GlobalSpinnerContextProvider = ({ children }) => {
  const {
    open: showSpinner,
    close: closeSpinner,
    toggle: toggleSpinner,
    state: isSpinnerVisible,
  } = useToggle(false);

  return (
    <GlobalSpinnerContext.Provider
      value={{ showSpinner, closeSpinner, toggleSpinner, isSpinnerVisible }}
    >
      {children}
      <GlobalSpinner />
    </GlobalSpinnerContext.Provider>
  );
};

export default GlobalSpinnerContextProvider;
