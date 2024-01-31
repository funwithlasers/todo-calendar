import { useEffect, useContext } from 'react';
import ChoresContext from './context/chores';
import WeekPage from './pages/WeekPage';
import ModalPage from './pages/ModalPage';
import { Route } from 'wouter';

function App() {
  const { fetchChores } = useContext(ChoresContext);

  useEffect(() => {
    fetchChores();
  }, []);

  return (
    <>
      <Route path='/'>
        <WeekPage />
      </Route>
      <Route path='/modal'>
        <ModalPage />
      </Route>
    </>
  );
}

export default App;
