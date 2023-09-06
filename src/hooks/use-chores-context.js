import { useContext } from 'react';
import ChoresContext from '../context/chores';

function useChoresContext() {
  return useContext(ChoresContext);
}

export default useChoresContext;
