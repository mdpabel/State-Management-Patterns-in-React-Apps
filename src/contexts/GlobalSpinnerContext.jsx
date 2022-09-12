import GlobalSpinner from '../components/ContextStateProvider/GlobalSpinner';
import { createContext, useMemo } from 'react';
import { useToggle } from '../hooks/useToggle';

export const GlobalSpinnerContext = createContext(undefined);

const GlobalSpinnerContextProvider = ({ children }) => {
  const {
    open: showSpinner,
    close: closeSpinner,
    toggle: toggleSpinner,
    state: isSpinnerVisible,
  } = useToggle(false);

  const values = useMemo(() => {
    return {
      isSpinnerVisible,
      showSpinner,
      closeSpinner,
      toggleSpinner,
    };
  }, [isSpinnerVisible]);

  return (
    <GlobalSpinnerContext.Provider value={values}>
      {children}
      <GlobalSpinner />
    </GlobalSpinnerContext.Provider>
  );
};

export default GlobalSpinnerContextProvider;
