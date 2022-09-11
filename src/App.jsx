import GlobalSpinnerExample from './components/ContextStateProvider/GlobalSpinnerExample';
import GlobalSpinnerContextProvider from './contexts/GlobalSpinnerContext';

function App() {
  return (
    <GlobalSpinnerContextProvider>
      <GlobalSpinnerExample />
    </GlobalSpinnerContextProvider>
  );
}

export default App;
