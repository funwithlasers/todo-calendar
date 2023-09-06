import { useEffect, useContext } from 'react';
import ChoresContext from './context/chores';
import MonthShow from './components/MonthShow';

function App() {
  const { fetchChores } = useContext(ChoresContext);

  useEffect(() => {
    fetchChores();
  }, []);

  return (
   <MonthShow />
  );
}

export default App;
