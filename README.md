# vitejs-vite-gktkzr

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/vitejs-vite-gktkzr)

# improve performance and avoid unnecessary re-renders with Context API

- memoized context provider values using useMemo hook

```jsx
  const values = useMemo(() => {
    return {
     //values
    };
  }, [dep]);

  return (
    <Provider value={values}>
      {children}
    </Provider>
  );

```

- Wrap JSX inside of the useMemo hook

```jsx
import { useContext, useMemo } from 'react';

const Component = () => {
  return useMemo(
    () => (
      // jsx
    ),
    []
  );
};

export default Component;

```

- Extract JSX into its own component wrapped with memo
- Split the Context and use two separate context providers

```jsx
// helpers
import { createContext, useContext } from 'react';

export const contextFactory = () => {
  const context = createContext();

  const useCtx = () => {
    const ctx = useContext(context);
    if (!ctx) {
      throw new Error('useContext must be used inside a provider with a value');
    }
    return ctx;
  };

  return [useCtx, context];
};

// context.jsx

const [useGlobalSpinnerContext, GlobalSpinnerContext] = contextFactory();
const [useGlobalSpinnerActionsContext, GlobalSpinnerActionsContext] =
  contextFactory();

export { useGlobalSpinnerActionsContext, useGlobalSpinnerContext };

const GlobalSpinnerContextProvider = ({ children }) => {

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

```
