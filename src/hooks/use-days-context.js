import { useContext } from 'react';
import DaysContext from '../context/days';

function useDaysContext() {
  return useContext(DaysContext);
}

export default useDaysContext;
