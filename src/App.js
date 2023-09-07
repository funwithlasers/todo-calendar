import { useEffect, useContext } from 'react';
import ChoresContext from './context/chores';
import WeekShow from './components/WeekShow';

function App() {
  const { fetchChores } = useContext(ChoresContext);

  useEffect(() => {
    fetchChores();
  }, []);

  return (
   <WeekShow />
  );
}

export default App;
