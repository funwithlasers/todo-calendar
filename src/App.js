import { useEffect, useContext } from 'react';
import ChoreCreate from './components/ChoreCreate';
import ChoreList from './components/ChoreList';
import ChoresContext from './context/chores';
import DayShow from './components/DayShow';

function App() {
  const { fetchChores } = useContext(ChoresContext);

  useEffect(() => {
    fetchChores();
  }, []);

  return (
   <DayShow />
  );
}

export default App;
