import GlobalSpinner from '../components/ContextStateProvider/GlobalSpinner';
import { useMemo } from 'react';
import { useToggle } from '../hooks/useToggle';
import { contextFactory } from '../helpers/contextFactory';

const [useGlobalSpinnerContext, GlobalSpinnerContext] = contextFactory();
const [useGlobalSpinnerActionsContext, GlobalSpinnerActionsContext] =
  contextFactory();

export { useGlobalSpinnerActionsContext, useGlobalSpinnerContext };

const GlobalSpinnerContextProvider = ({ children }) => {
  const {
    open: showSpinner,
    close: closeSpinner,
    toggle: toggleSpinner,
    state: isSpinnerVisible,
  } = useToggle(false);

  const values = useMemo(() => {
    return { isSpinnerVisible };
  }, [isSpinnerVisible]);

  const actions = useMemo(() => {
    return {
      showSpinner,
      closeSpinner,
      toggleSpinner,
    };
  }, []);

  return (
    <GlobalSpinnerContext.Provider value={values}>
      <GlobalSpinnerActionsContext.Provider value={actions}>
        {children}
        <GlobalSpinner />
      </GlobalSpinnerActionsContext.Provider>
    </GlobalSpinnerContext.Provider>
  );
};

export default GlobalSpinnerContextProvider;
