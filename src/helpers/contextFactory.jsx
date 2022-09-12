import { createContext } from 'react';

export const contextFactory = () => {
  context = createContext();

  const useCtx = () => {};

  return { useCtx, context };
};
