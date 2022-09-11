import { useCallback, useState } from 'react';

export function useToggle(defaultState = false) {
  const [state, setState] = useState(defaultState);

  const open = useCallback(() => setState(true), []);
  const close = useCallback(() => setState(false), []);
  const toggle = useCallback(() => setState((state) => !state), []);

  console.log(state);

  return {
    open,
    close,
    toggle,
    state,
  };
}
