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
 