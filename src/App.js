import { useEffect, useContext } from 'react';
import ChoresContext from './context/chores';
import WeekPage from './pages/WeekPage';

function App() {
  const { fetchChores } = useContext(ChoresContext);

  useEffect(() => {
    fetchChores();
  }, []);

  return (
   <WeekPage />
  );
}

export default App;
