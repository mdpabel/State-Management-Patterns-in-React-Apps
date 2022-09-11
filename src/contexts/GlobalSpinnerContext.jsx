import { createContext } from 'react';
import GlobalSpinner from '../components/context/GlobalSpinner';
import { useToggle } from '../hooks/useToggle';

export const GlobalSpinnerContext = createContext();

export const GlobalSpinnerContextProvider = ({ children }) => {
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
