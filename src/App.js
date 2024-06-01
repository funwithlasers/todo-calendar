import { useEffect, useContext } from 'react';
import ChoresContext from './context/chores';
import WeekPage from './pages/WeekPage';
import { Route } from 'wouter';

function App() {
  const { fetchChores } = useContext(ChoresContext);

  useEffect(() => {
    fetchChores(1);
  }, []);

  return (
    <>  
      <Route path='/'>
        <WeekPage />
      </Route>
    </>
  );
}

export default App;
